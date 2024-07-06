import { auth } from "@/auth";
import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

const ServerPage = async () => {
    const user = await currentUser();
    return (
        <div className="max-w-[600px] mx-auto w-full">
            {/* <p>Name: {JSON.stringify(user?.name)}</p>
            <p>Email: {JSON.stringify(user?.email)}</p>
            <p>Image: {JSON.stringify(user?.image)}</p>
            <p>Id: {JSON.stringify(user?.id)}</p>
            <p>Role: {JSON.stringify(user?.role)}</p> */}
            {/* <p>Expires: {JSON.stringify(session?.expires)}</p> */}
            <UserInfo user={user} label="💻 Server component"/>
        </div>
    );
};

export default ServerPage;
