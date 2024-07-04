import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <div className="space-y-6">
                <h1
                    className={cn(
                        "text-6xl font-semibold text-white drop-shadow-md",
                        poppins.className
                    )}
                >
                    🔏 Auth
                </h1>
                <p className="text-white text-lg">
                    A simple authentication service
                </p>
                <div className="w-full flex items-center justify-center">
                    <LoginButton href="/auth/login">
                        <Button className="" size="lg" variant="secondary">
                            Sing in
                        </Button>
                    </LoginButton>{" "}
                </div>
            </div>
        </main>
    );
}
