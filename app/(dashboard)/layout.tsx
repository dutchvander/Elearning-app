import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
    children // Correction de l'orthographe
}: {
    children: React.ReactNode; // Correction de l'orthographe
}) => {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar/>
            </div>
            {/* Sidebar visible uniquement sur les écrans md et plus */}
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            {/* Contenu principal avec un décalage si la sidebar est visible */}
            <main className="md:pl-56 pt-[80px] h-full">{children}</main>

        </div>
    );
};

export default DashboardLayout;
