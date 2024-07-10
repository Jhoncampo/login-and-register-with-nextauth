import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "@/components/auth/login-form";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
    href: string;
}

const LoginButton = ({
    children,
    href,
    mode = "redirect",
    asChild,
}: LoginButtonProps) => {
    if (mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                    <LoginForm />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Link href={href} className="cursor-pointer">
            {children}
        </Link>
    );
};

export default LoginButton;
