import Link from "next/link";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChildren?: boolean;
    href: string;
}

const LoginButton = ({
    children,
    href,
    mode = "redirect",
    asChildren,
}: LoginButtonProps) => {
    if (mode === "modal") {
        return <span>Todo: Implement modal</span>;
    }

    return (
        <Link href={href} className="cursor-pointer">
            {children}
        </Link>
    );
};

export default LoginButton;
