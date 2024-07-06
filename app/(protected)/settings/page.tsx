"use client";

import { logout } from "@/actions/logout";

const SettingsPage = () => {
    const onClick = () => {
        logout().then(() => (window.location.href = "/auth/login"));
    };
    return (
        <div className="bg-white p-10 rounded-xl">
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </div>
    );
};

export default SettingsPage;
