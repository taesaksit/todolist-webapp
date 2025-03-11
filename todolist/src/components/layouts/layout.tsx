import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./navbar";
export const Layout = () => {
    return (
        <div className="flex flex-col w-full h-[100vh]">
            <NavbarComponent  />
            <main className="flex w-full h-full px-3">
                <Outlet />
            </main>
        </div>
    )
}