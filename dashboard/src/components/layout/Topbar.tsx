import { Bell, Search, Menu, Calendar, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getTodayFormatted, getGreeting } from '@/lib/utils';

interface TopbarProps {
  onMenuClick: () => void;
  title: string;
}

export function Topbar({ onMenuClick, title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-emerald-100 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left - Menu & Title */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden hover:bg-emerald-50"
          >
            <Menu className="h-5 w-5 text-emerald-600" />
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold gradient-text">{title}</h1>
            <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {getTodayFormatted()}
            </p>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl px-4 py-2 w-64 border border-emerald-100">
            <Search className="h-4 w-4 text-emerald-400" />
            <input
              type="text"
              placeholder="Search medicines, patients..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder-emerald-300"
            />
          </div>

          {/* Greeting */}
          <div className="hidden lg:flex items-center gap-2 text-right">
            <Pill className="h-4 w-4 text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-gray-700">{getGreeting()}, Dr. Amit</p>
              <p className="text-xs gradient-text font-semibold">Welcome to MedCare!</p>
            </div>
          </div>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-emerald-50"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs border-0">
              5
            </Badge>
          </Button>

          {/* Store indicator */}
          <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 rounded-full border border-green-200">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
            <span className="text-xs font-medium text-green-700">Open</span>
          </div>
        </div>
      </div>
    </header>
  );
}
