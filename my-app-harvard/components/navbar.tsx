import { UserButton } from "@clerk/nextjs";
import MobileSibar from "./mobile-sidebar";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSibar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}

export default Navbar;
