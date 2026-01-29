import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingWhatsApp from "../FloatingWhatsApp";
import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <FloatingWhatsApp />
            <Footer />
        </div>
    );
};

export default MainLayout;
