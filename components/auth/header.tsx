import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
    title?: string;
}

const Header = ({ label, title = "🔏 Auth" }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", poppins.className)}>
                {title}
            </h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    );
};

export default Header;
