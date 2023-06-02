"use client";
// makes this a client component
// but as we are passing children as props
// doesn't make the children side components

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(
        () => [
            {
                icon: HiHome,
                label: "Home",
                active: pathname !== "/search",
                href: "/",
            },
            {
                label: "Search",
                active: pathname === "/search",
                href: "/search",
            },
        ],
        [pathname]
    );

    return <div>{children}</div>;
};

export default Sidebar;
