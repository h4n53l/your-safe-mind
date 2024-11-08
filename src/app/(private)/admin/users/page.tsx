import PageTitle from "@/components/page-title";
import { IUser } from "@/interfaces";
import { Alert } from "antd";
import React, { Suspense } from "react";
import UsersTable from "./_components/users-table";
import FilterUsers from "./_components/filter-users";
import { getAllUsers } from "@/server-actions/users";
import ServerComponentsSpinner from "@/components/server-components-spinner";

interface UsersPageProps {
  searchParams: {
    name: string;
    email: string;
    isApproved: boolean;
  };
}

async function UsersPage({ searchParams }: UsersPageProps) {
  const { success, data } = await getAllUsers(searchParams);
  if (!success) {
    return (
      <Alert
      message="Failed to fetch users , please try again later"
      showIcon
      />
    );
  }
  
  const users: IUser[] = data;
  
  return (
    <div className="p-5 flex flex-col gap-5">
      <PageTitle title="Users" />
      <FilterUsers />
      <UsersTable users={users} />
    </div>
  );
}

export default function Page(props: any) {
  return (
    <Suspense fallback={<ServerComponentsSpinner />}>
      <UsersPage {...props} />
    </Suspense>
  );
}
