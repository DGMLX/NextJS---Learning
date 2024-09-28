'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {name:"Login",href:"/login"},
    {name:"Register",href:"/register"},
    {name:"Forgot Password",href:"/forgot-password"}
]


export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>){ 
    const [valorInput,setValorInput] = useState('');
    const pathname = usePathname();
    return (
    <>
        <div>
            {
                navLinks.map(link=>{
                    const isActive = pathname.startsWith(link.href)
                    return(
                        <Link href={link.href} key={link.name} className={`my-5 mr-5 ${isActive ? 'font-bold text-blue-900' : 'text-blue-500'}`}>{link.name}</Link>
                    )
                })
            }
        </div>
        {children}
    </>
  );
}
