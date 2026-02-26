import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  FileText,
  Pill,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: ShoppingCart, label: 'Medicine Billing', path: '/billing' },
  { icon: Package, label: 'Medicines', path: '/medicines' },
  { icon: FileText, label: 'Prescriptions', path: '/prescriptions' },
  { icon: Users, label: 'Patients', path: '/patients' },
  { icon: Truck, label: 'Distributors', path: '/distributors' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
          width: isOpen ? 280 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          'fixed left-0 top-0 h-full z-30 flex flex-col shadow-xl overflow-hidden bg-white border-r border-emerald-100',
          'md:relative md:translate-x-0',
          !isOpen && 'md:w-0 md:border-0'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg gradient-text">
                MedCare Pharmacy
              </h1>
              <p className="text-xs text-emerald-600/70">Pharmacy Management</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hidden md:flex hover:bg-emerald-100"
          >
            <ChevronLeft className="h-4 w-4 text-emerald-600" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          {/* Navigation */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <Separator className="my-5 bg-emerald-100" />

          {/* Quick Stats */}
          <div className="px-1">
            <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Today's Summary
            </h3>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Prescriptions</span>
                <span className="font-semibold text-emerald-700">48</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Sales</span>
                <span className="font-semibold text-teal-600">₹62,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Low Stock</span>
                <span className="font-semibold text-red-500">7</span>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              AS
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                Dr. Amit Sharma
              </p>
              <p className="text-xs text-emerald-600/70 truncate">
                Owner / Admin
              </p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Collapsed toggle button */}
      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="fixed left-4 top-4 z-20 hidden md:flex bg-white shadow-lg hover:shadow-xl border border-emerald-200 hover:bg-emerald-50"
        >
          <ChevronRight className="h-4 w-4 text-emerald-600" />
        </Button>
      )}
    </>
  );
}
