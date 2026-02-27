import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Phone,
  Mail,
  CreditCard,
  TrendingUp,
  Users,
  Star,
  Edit2,
  Eye,
  MessageSquare,
  AlertTriangle,
  Heart,
  FileText,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { customers as patients } from '@/data/dummyData';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const totalPatients = patients.length;
  const activePatients = patients.filter(p => {
    const daysSince = Math.floor((Date.now() - new Date(p.lastVisit).getTime()) / (1000 * 60 * 60 * 24));
    return daysSince <= 30;
  }).length;
  const totalCredit = patients.reduce((sum, c) => sum + c.creditBalance, 0);
  const totalRevenue = patients.reduce((sum, c) => sum + c.totalPurchases, 0);

  const getPatientBadge = (patient: typeof patients[0]) => {
    if (patient.patientType === 'Regular') {
      return (
        <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white">
          <Star className="h-3 w-3 mr-1" />
          Regular
        </Badge>
      );
    } else if (patient.patientType === 'Walk-in') {
      return (
        <Badge className="bg-gradient-to-r from-gray-400 to-gray-500 text-white">
          Walk-in
        </Badge>
      );
    }
    return (
      <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white">
        New
      </Badge>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active (30 days)</p>
              <p className="text-2xl font-bold text-teal-600">{activePatients}</p>
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
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100 w-full sm:w-80">
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
                  <div className="text-xs text-gray-500">
                    {patient.age} yrs | {patient.gender} | {patient.bloodGroup}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Phone className="h-3 w-3" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Mail className="h-3 w-3" />
                    {patient.email}
                  </div>
                </div>
                {getPatientBadge(patient)}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-emerald-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Total Purchases</p>
                  <p className="font-bold text-emerald-600">{formatCurrency(patient.totalPurchases)}</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500">Prescriptions</p>
                  <p className="font-bold text-teal-600">{patient.prescriptionCount}</p>
                </div>
              </div>

              {/* Allergies */}
              {patient.allergies && patient.allergies.length > 0 ? (
                <div className="bg-red-50 rounded-xl p-2 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                  <span className="text-xs text-red-700">
                    Allergies: <strong>{patient.allergies.join(', ')}</strong>
                  </span>
                </div>
              ) : (
                <div className="bg-green-50 rounded-xl p-2 mb-2 flex items-center gap-2">
                  <span className="text-xs text-green-700">✅ No known allergies</span>
                </div>
              )}

              {/* Chronic Conditions */}
              {patient.chronicConditions && patient.chronicConditions.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-2 mb-2 flex items-center gap-2">
                  <Heart className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-amber-700">
                    {patient.chronicConditions.join(', ')}
                  </span>
                </div>
              )}

              {/* Credit & Last Visit */}
              {patient.creditBalance > 0 && (
                <div className="bg-amber-50 rounded-xl p-2 mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-3.5 w-3.5 text-amber-600" />
                    <span className="text-xs text-amber-700">Credit Balance</span>
                  </div>
                  <span className="font-bold text-xs text-amber-600">{formatCurrency(patient.creditBalance)}</span>
                </div>
              )}

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
