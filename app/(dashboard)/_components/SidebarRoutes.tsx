"use client";

import {BarChart, Compass, Layout, List} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const guestRoutes = [
    {
        icon: Layout,
        label:"Dashboard",
        href:"/",

    },
    {
        icon: Compass,
        label:"Browse",
        href:"/search",

    },

];
const teacherRoutes =[
    {
        icon: List,
        label:"Courses",
        href:"/teacher/courses",

    },
    {
        icon: BarChart,
        label:"Analytics",
        href:"/teacher/analytics",

    },
]
export const SidebarRoutes = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher");
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                // eslint-disable-next-line react/jsx-key
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}
