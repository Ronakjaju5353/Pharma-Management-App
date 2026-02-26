import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Phone,
  MapPin,
  Truck,
  TrendingUp,
  AlertCircle,
  IndianRupee,
  Edit2,
  Eye,
  FileText,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { suppliers as distributors } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

export default function Distributors() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistributors = distributors.filter((distributor) =>
    distributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    distributor.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalDistributors = distributors.length;
  const totalDues = distributors.reduce((sum, s) => sum + s.pendingDues, 0);
  const totalPurchases = distributors.reduce((sum, s) => sum + s.totalPurchases, 0);
  const distributorsWithDues = distributors.filter(s => s.pendingDues > 0).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Distributors</p>
              <p className="text-2xl font-bold">{totalDistributors}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Purchases</p>
              <p className="text-2xl font-bold">{formatCurrency(totalPurchases)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center">
              <IndianRupee className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Dues</p>
              <p className="text-2xl font-bold text-red-600">{formatCurrency(totalDues)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">With Dues</p>
              <p className="text-2xl font-bold text-amber-600">{distributorsWithDues}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100 w-80">
          <Search className="h-4 w-4 text-emerald-400" />
          <input
            type="text"
            placeholder="Search by name or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>

        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Distributor
        </Button>
      </div>

      {/* Distributor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDistributors.map((distributor) => (
          <Card key={distributor.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-14 w-14 border-2 border-emerald-200">
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-lg">
                    {distributor.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{distributor.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {distributor.city}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Phone className="h-3 w-3" />
                    {distributor.phone}
                  </div>
                </div>
              </div>

              {/* Contact & License */}
              <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Contact Person</span>
                  <span className="font-medium">{distributor.contact}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Drug License</span>
                  <span className="font-mono text-xs">{distributor.dlNumber}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">GST No.</span>
                  <span className="font-mono text-xs">{distributor.gstin}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Credit Period</span>
                  <span className="font-medium">{distributor.creditPeriod} days</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-emerald-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Total Purchases</p>
                  <p className="font-bold text-emerald-600">{formatCurrency(distributor.totalPurchases)}</p>
                </div>
                <div className={`rounded-xl p-3 text-center ${distributor.pendingDues > 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                  <p className="text-xs text-gray-500">Pending Dues</p>
                  <p className={`font-bold ${distributor.pendingDues > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {distributor.pendingDues > 0 ? formatCurrency(distributor.pendingDues) : 'Nil'}
                  </p>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Supplies</p>
                <div className="flex flex-wrap gap-1">
                  {distributor.brands.map((brand) => (
                    <Badge key={brand} variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-center mb-4">
                <Badge
                  className={distributor.pendingDues === 0 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}
                >
                  {distributor.pendingDues === 0 ? 'All Clear' : 'Payment Pending'}
                </Badge>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
                  <Edit2 className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 border-blue-200 hover:bg-blue-50">
                  <FileText className="h-4 w-4 text-blue-600" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
