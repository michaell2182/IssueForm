"use client";
import {
  ChevronRight,
  File,
  LayoutDashboard,
  LineChart,
  Settings,
} from "lucide-react";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { Button } from "./button";

type Props = {};

export default function navlinks({}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute top-7 right-[-20px]">
        <Button
          onClick={toggleCollapsed}
          variant="secondary"
          className="rounded-full p-2"
        >
          <ChevronRight />
        </Button>
      </div>
      <Sidebar
        isCollapsed={collapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Tickets",
            href: "/tickets",
            icon: File,
            variant: "default",
          },
          {
            title: "Reports",
            href: "/reports",
            icon: LineChart,
            variant: "default",
          },

          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "default",
          },
        ]}
      />
    </div>
  );
}
