import { cn } from "@/lib/utils";

export default function Logo({className}){
    return(
        <div className={cn('w-12 aspect-square bg-brand-blue rounded-md outline-2 outline-white grid place-items-center text-white',className)}>
            <span className="text-2xl font-medium font-primary">G</span>

        </div>
    )
}