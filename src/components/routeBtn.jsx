'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export default function RouteBtn({className,children,link}){
    const router = useRouter()

    function routeTo(){
        router.push(link)
    }
    return(
        // <Button className={cn(className)} onClick={routeTo}>{children}</Button>
        <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSf3Ww0n5V7VMLoO8Ty3X5w8g5r8oh_FDHyBklk54mWaPzvQDQ/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("w-fit h-fit py-2",className)}
    >
      {children}
    </a>
    )
}