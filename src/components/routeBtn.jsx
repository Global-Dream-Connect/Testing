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
        <Button className={cn(className)} onClick={routeTo}>{children}</Button>
    )
}