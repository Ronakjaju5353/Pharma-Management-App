import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Phone,
  Mail,
  Gift,
  CreditCard,
  TrendingUp,
  Users,
  Star,
  Edit2,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { patients } from '@/data/dummyData';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const totalPatients = patients.length;
  const totalLoyaltyPoints = patients.reduce((sum, c) => sum + c.loyaltyPoints, 0);
  const totalCredit = patients.reduce((sum, c) => sum + c.creditBalance, 0);
  const totalRevenue = patients.reduce((sum, c) => sum + c.totalPurchases, 0);

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
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Patients</p>
              <p className="text-2xl font-bold">{totalPatients}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Gift className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Points</p>
              <p className="text-2xl font-bold">{totalLoyaltyPoints.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Credit Outstanding</p>
              <p className="text-2xl font-bold text-amber-600">{formatCurrency(totalCredit)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</p>
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
            placeholder="Search by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>

        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Patient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-14 w-14 border-2 border-emerald-200">
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-lg">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Phone className="h-3 w-3" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Mail className="h-3 w-3" />
                    {patient.email}
                  </div>
                </div>
                <Badge
                  className={
                    patient.totalPurchases >= 100000
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white'
                      : patient.totalPurchases >= 50000
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white'
                  }
                >
                  <Star className="h-3 w-3 mr-1" />
                  {patient.totalPurchases >= 100000 ? 'Regular' : patient.totalPurchases >= 50000 ? 'Walk-in' : 'New'}
                </Badge>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-emerald-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Total Purchases</p>
                  <p className="font-bold text-emerald-600">{formatCurrency(patient.totalPurchases)}</p>
                </div>
                <div className="bg-fuchsia-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Prescriptions</p>
                  <p className="font-bold text-teal-600">{patient.loyaltyPoints}</p>
                </div>
              </div>

              {/* Credit */}
              {patient.creditBalance > 0 && (
                <div className="bg-amber-50 rounded-xl p-3 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-amber-600" />
                    <span className="text-sm text-amber-700">Credit Balance</span>
                  </div>
                  <span className="font-bold text-amber-600">{formatCurrency(patient.creditBalance)}</span>
                </div>
              )}

              {/* Last Visit */}
              <p className="text-xs text-gray-500 mb-4">
                Last visit: {formatDate(patient.lastVisit)}
              </p>

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
                <Button size="icon" variant="outline" className="h-8 w-8 border-green-200 hover:bg-green-50">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
