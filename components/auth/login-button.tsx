"use client";
import {useRouter} from "next/navigation"

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChildren?: boolean;
}


const LoginButton = ({
  children,
  mode = "redirect",
  asChildren,
}: LoginButtonProps) => {
    const router = useRouter()
  const onClick = () => {
    router.push("/auth/login")
  };

  if (mode === "modal") {
    return (
        <span>Todo: Implement modal</span>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
