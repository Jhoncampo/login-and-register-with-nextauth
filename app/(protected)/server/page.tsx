import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

const ServerPage = async () => {
    const user = await currentUser();

    return (
        <div className="max-w-[600px] mx-auto w-full">
            <UserInfo user={user} label="💻 Server component" />
        </div>
    );
};

export default ServerPage;
