"use client";

import { useState, useEffect, ComponentType, SVGProps } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  Calendar, 
  LayoutDashboard, 
  Users, 
  Clock, 
  Settings, 
  LogOut,
  Menu,
  X,
  LucideIcon
} from "lucide-react";

interface User {
  name: string;
  email: string;
  role: string;
}

// Define proper type for Lucide icons
type IconType = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

interface MenuItem {
  icon: IconType;
  label: string;
  href: string;
  adminOnly?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Calendar, label: "Bookings", href: "/dashboard/bookings" },
  { icon: Clock, label: "Availability", href: "/dashboard/availability" },
  { icon: Users, label: "Users", href: "/dashboard/users", adminOnly: true },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

interface SidebarContentProps {
  user: User | null;
  pathname: string;
  onNavigate: (href: string) => void;
  onLogout: () => void;
}

function SidebarContent({ user, pathname, onNavigate, onLogout }: SidebarContentProps) {
  const filteredMenuItems = menuItems.filter(
    item => !item.adminOnly || user?.role === "ADMIN"
  );

  return (
    <>
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tax Praxis
        </h1>
        <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 mx-4 mt-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p className="text-xs text-gray-600">{user.email}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-white rounded-full text-xs font-medium text-blue-600">
            {user.role}
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <button
              key={item.href}
              onClick={() => onNavigate(item.href)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                  : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </>
  );
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Wrap state update in setTimeout to avoid synchronous state updates in effects
    const timer = setTimeout(() => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        router.push("/login");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
        <SidebarContent 
          user={user}
          pathname={pathname}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={`
          lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SidebarContent 
          user={user}
          pathname={pathname}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      </aside>
    </>
  );
}