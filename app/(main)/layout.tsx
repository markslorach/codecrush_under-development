import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

// Components
import SideNav from "./components/SideNav";
import MobileNav from "./components/MobileNav";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  
  return (
    <main className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="h-screen hidden md:flex flex-col border-r border-white/10 py-6">
        <SideNav />
      </div>
      <div className="px-5 py-8 md:p-10 md:overflow-y-auto h-screen flex-col 2xl:px-48">
        {children}
      </div>
      <MobileNav />
    </main>
  );
};

export default MainLayout;
