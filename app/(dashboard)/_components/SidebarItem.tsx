// "use client";

// import { cn } from "@/lib/utils";
// import { LucideIcon } from "lucide-react";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { usePathname , useRouter } from "next/navigation";


// interface SidebarItemProps {
//     icon: LucideIcon;
//     label: string;
//     href: string;
// };
// export const SidebarItem = ({
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     icon: Icon, label, href
// }: SidebarItemProps) => {
//     const pathname = usePathname();
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const router = usePathname();
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const isActive = (pathname ==="/" && href==="/") ||
//     pathname === href ||
//     pathname?.startsWith(`${href}/`);
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const onClick = () => {
//         router.push(href);
        
//     }
//     return(
// <button 
// onClick={onClick}
// type="button"
// className={cn(
//     "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
//     isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
// )}
// >
//     <div className="flex items-center gap-x-2 py-4">
//         {/* <Icon></Icon> */}
//         <Icon
//         size={22}
//         className={cn(
//             "text-slate-500",
//             isActive && "text-sky-700"
//         )}
//         />
//         {label}

//     </div>
//     <div
//     className={cn(
//         "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
//         isActive && "opacity-100"

//     )}
//     />
// </button>
//     )
// }
"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon: Icon,
    label,
    href
}: SidebarItemProps) => {
    const pathname = usePathname(); // Current pathname
    const router = useRouter(); // Router object for navigation

    const isActive = (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href); // Navigate to the href
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {label}
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                    isActive && "opacity-100"
                )}
            />
        </button>
    );
};
