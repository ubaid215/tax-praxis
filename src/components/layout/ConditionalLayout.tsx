'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current path is admin or login
  const isAdminRoute = pathname?.startsWith('/admin');
  const isLoginRoute = pathname === '/login';
  
  // Don't show Navbar/Footer on admin or login pages
  const hideLayout = isAdminRoute || isLoginRoute;

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}