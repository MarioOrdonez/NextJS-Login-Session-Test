'use client'

import { useSession } from "next-auth/react";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarBrand, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { usePathname } from 'next/navigation'
import { logout } from "@/actions";
import { LogoSo } from "./LogoSo";
import { useState } from "react";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navbarItems = [{
        itemTitle: 'Home',
        itemPath: '/dashboard'
        },{
        itemTitle: 'User info',
        itemPath: '/dashboard/user'
        }]

    const pathName = usePathname();
    const {data: session} = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = session?.user.role === 1;
    console.log({session});
    
    
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                <LogoSo 
                    width={36}
                    height={36}
                />
                <p className=" ml-1 font-bold text-inherit text-[#006fee]">Sales Operations</p>
                </NavbarBrand>
        </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {
                navbarItems.map( item => {
                    if (item.itemTitle == 'User info' && !isAdmin){
                        return
                    }else{
                        return (
                        <NavbarItem key={item.itemTitle} isActive = {item.itemPath === pathName}>
                            <Link href={item.itemPath} aria-current="page">
                            {item.itemTitle}
                            </Link>
                        </NavbarItem>
                        )
                    }
                })
            }
            </NavbarContent>

            <NavbarContent justify="end">
                {
                    !isAuthenticated && (
                        <NavbarItem className="lg:flex">
                            <Link href="/auth/login">Login</Link>
                        </NavbarItem>
                    )
                }
                {
                    isAuthenticated && (
                        <NavbarItem>
                            <Button as={Link} color="primary" onClick={ async() => logout()} variant="flat">
                                Logout
                            </Button>
                        </NavbarItem>
                    )
                }
                
            </NavbarContent>

            <NavbarMenu>
                {
                    navbarItems.map( item => (
                    <NavbarItem key={item.itemTitle} isActive = {item.itemPath === pathName}>
                        <Link href={item.itemPath} aria-current="page">
                        {item.itemTitle}
                        </Link>
                    </NavbarItem>
                    ))
                }
            </NavbarMenu>
        </Navbar>
    );
}