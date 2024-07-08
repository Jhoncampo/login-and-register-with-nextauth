"use client";
import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current.user";

const ClientPage = () => {
    const user = useCurrentUser();
    return (
        <div className="max-w-[600px] mx-auto w-full">
            <UserInfo user={user} label="📱 Client component" />
        </div>
    );
};

export default ClientPage;
