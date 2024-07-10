import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="min-h-full py-10 flex flex-col gap-10 bg-cover items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <Navbar />
            {children}
        </div>
    );
};

export default ProtectedLayout;
