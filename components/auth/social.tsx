"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

const Social = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    };
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                className="w-full"
                variant="outline"
                onClick={() => onClick("google")}
                size="lg"
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                className="w-full"
                variant="outline"
                onClick={() => onClick("github")}
                size="lg"
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default Social;
