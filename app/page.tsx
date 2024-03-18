"use client";
import React, { useEffect, useState } from "react";
import Navlinks from "@/components/ui/navlinks";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function App() {
  const [issues, setIssues] = useState<any[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await prisma.issue.findMany();
        setIssues(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
  }, []);
  // Define columns for the data table
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "TITLE",
    },
    {
      accessorKey: "description",
      header: "DESCRIPTION",
    },
    {
      accessorKey: "email",
      header: "EMAIL",
    },
    {
      accessorKey: "status",
      header: "STATUS",
    },
    {
      accessorKey: "category",
      header: "CATEGORY",
    },
    {
      accessorKey: "department",
      header: "DEPARTMENT",
    },
    {
      accessorKey: "createdAt",
      header: "CREATED",
    },
  ];

  return (
    <div className="min-h-screen w-full flex">
      <Navlinks />
      <div className="p-10">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-gray-500">Here&apos;s a list of your tasks!</p>
      </div>
      <div className="w-full">
        <DataTable columns={columns} data={issues} />
      </div>
    </div>
  );
}

export default App;
