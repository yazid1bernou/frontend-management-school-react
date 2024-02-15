
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {axiosClient} from "../../api/axios.js";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(50),

})

export default function StudentLogin () {
    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues : {
        email : 'yazid1bernou@gmail.com',
        password : '19880710'
      }
      
    })

    // 2. Define a submit handler.
    const  onSubmit = async (values)  => {     // Arrow function 
         const csrf =  await axiosClient.get('/sanctum/csrf-cookie')
          console.log(csrf)
  }

    return <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl> 
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={'password'} placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
    </>
}