import { Outlet } from "react-router-dom";

export default function Layout () {
    return <>
        <header>
              header of App
        </header>

        <main>
         <Outlet />
        </main>

        <footer>
              footer of App
        </footer>
    
    
    
    </>
  
}