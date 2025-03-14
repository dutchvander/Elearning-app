import { Logo } from "./Logo"
import { SidebarRoutes } from "./SidebarRoutes"

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo></Logo>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes></SidebarRoutes>
            </div>
        </div>
    )
}