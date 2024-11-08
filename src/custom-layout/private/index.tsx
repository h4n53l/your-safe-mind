import { Alert, Button, message } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { Menu } from "lucide-react";
import Spinner from "@/components/spinner";
import { IUsersStore, usersGlobalStore } from "@/store/users-store";
import { getUserDataFromMongoDB } from "@/server-actions/users";
import MenuItems from "./menu-items";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = React.useState<boolean>(false);
  const { setCurrentUserData, currentUserData }: IUsersStore =
    usersGlobalStore() as any;
  const getUserData = async () => {
    try {
      setLoading(true);
      const response: any = await getUserDataFromMongoDB();
      if (response.success) {
        setCurrentUserData(response.data);
        if (!response.data.isApproved) {
          setError(
            "Your account is not approved yet. Please contact the admin."
          );
        }
      } else {
        message.error(response.message);
        setError(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center py-5 px-10 bg-primary">
        <Link className="text-white text-2xl font-bold" href="/admin/dashboard">
          Your Safe Mind
        </Link>
        <div className="flex gap-5 items-center">
          <span className="text-white text-sm uppercase">
            {currentUserData?.name}
          </span>
          <Button ghost size="small" onClick={() => setShowMenuItems(true)}>
            <Menu size={16} className="text-white" />
          </Button>
        </div>
      </div>
      {error ? (
        <div className="p-5">
          <Alert showIcon message={error} type="error" />
        </div>
      ) : (
        <div className="p-5">{children}</div>
      )}

      {showMenuItems && (
        <MenuItems
          showMenuItems={showMenuItems}
          setShowMenuItems={setShowMenuItems}
        />
      )}
    </div>
  );
}

export default PrivateLayout;
