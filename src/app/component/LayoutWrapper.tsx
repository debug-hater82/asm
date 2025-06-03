"use client"; // 🚀 Đánh dấu đây là Client Component

import { usePathname } from "next/navigation";
import Menu from "../component/menu";
import Footer from "../component/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Menu />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
