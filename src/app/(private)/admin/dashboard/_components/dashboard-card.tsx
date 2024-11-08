import React from "react";

interface DashboardCardProps {
  title: string;
  value: number | string;
  description: string;
}

function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <div className="p-5 border border-primary border-solid bg-gray-100 rounded-sm">
      <h1 className="text-sm font-bold">{title}</h1>
      <p className="text-6xl font-bold mt-5 text-center">{value}</p>
      <p className="text-sm mt-5">{description}</p>
    </div>
  );
}

export default DashboardCard;