import { cn } from "@/app/lib/utils";

export default function Button({
    children,
    ...props
}: {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {


    return (
        <button {...props}
            className={cn()}>
            {children}
        </button>
    )
}