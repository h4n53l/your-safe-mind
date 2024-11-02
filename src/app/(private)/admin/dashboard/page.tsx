import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function DashboardPage() {

    const user = await currentUser()

    return (
        <div className="p-5 flex-col">
            <h1>DashboardPage</h1>
            <UserButton />
        </div>
    );
}

export default DashboardPage;