import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  FileText,
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Printer,
  Pill,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fabricProducts as prescriptions } from '@/data/dummyData';

export default function Fabric() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statusOptions = ['all', 'Pending', 'Partial', 'Dispensed'];

  const filteredPrescriptions = prescriptions.filter((rx) => {
    const matchesSearch =
      rx.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rx.rxNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rx.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || rx.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const totalRx = prescriptions.length;
  const pendingRx = prescriptions.filter(rx => rx.status === 'Pending').length;
  const dispensedRx = prescriptions.filter(rx => rx.status === 'Dispensed').length;
  const partialRx = prescriptions.filter(rx => rx.status === 'Partial').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending': return <Badge className="bg-amber-100 text-amber-700">⏳ Pending</Badge>;
      case 'Dispensed': return <Badge className="bg-green-100 text-green-700">✅ Dispensed</Badge>;
      case 'Partial': return <Badge className="bg-blue-100 text-blue-700">🔄 Partial</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

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
              <ClipboardList className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Prescriptions</p>
              <p className="text-2xl font-bold">{totalRx}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-amber-600">{pendingRx}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Dispensed</p>
              <p className="text-2xl font-bold text-green-600">{dispensedRx}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Partially Dispensed</p>
              <p className="text-2xl font-bold text-blue-600">{partialRx}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100 w-64">
            <Search className="h-4 w-4 text-emerald-400" />
            <input
              type="text"
              placeholder="Search patient, Rx#, doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-emerald-100 overflow-x-auto">
            {statusOptions.map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className={selectedStatus === status ? 'bg-teal-500' : ''}
              >
                {status === 'all' ? 'All' : status}
              </Button>
            ))}
          </div>
        </div>

        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
          <Plus className="h-4 w-4 mr-2" />
          New Prescription
        </Button>
      </div>

      {/* Prescription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrescriptions.map((rx) => (
          <Card key={rx.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-dashed border-emerald-200">
                <div>
                  <p className="font-bold text-emerald-600">{rx.rxNumber}</p>
                  <p className="text-xs text-gray-500">{rx.date}</p>
                </div>
                {getStatusBadge(rx.status)}
              </div>

              {/* Patient & Doctor */}
              <div className="flex justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{rx.patientName}</p>
                  <p className="text-xs text-gray-500">
                    {rx.patientGender}, {rx.patientAge} yrs
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Doctor</p>
                  <p className="text-sm font-semibold">{rx.doctorName}</p>
                </div>
              </div>

              {/* Medicines List */}
              <div className="bg-gray-50 rounded-xl p-3 mb-3 space-y-2">
                {rx.medicines.map((med, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold ${
                      (med as { dispensed?: boolean }).dispensed === true
                        ? 'bg-green-100 text-green-600'
                        : (med as { dispensed?: boolean }).dispensed === false
                        ? 'bg-red-100 text-red-600'
                        : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {(med as { dispensed?: boolean }).dispensed === true ? '✓' :
                       (med as { dispensed?: boolean }).dispensed === false ? '!' :
                       idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`font-medium ${(med as { dispensed?: boolean }).dispensed === false ? 'text-red-500 line-through' : 'text-gray-900'}`}>
                        {med.name}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">
                        — {med.dosage}, {med.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes */}
              {rx.notes && (
                <p className="text-xs text-gray-500 italic mb-3">
                  📝 {rx.notes}
                </p>
              )}

              {/* Linked Bill */}
              {rx.linkedBillId && (
                <p className="text-xs text-gray-500 mb-3">
                  🧾 Bill: {rx.linkedBillId}
                </p>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                {rx.status !== 'Dispensed' && (
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                    <Pill className="h-3 w-3 mr-1" />
                    {rx.status === 'Partial' ? 'Complete' : 'Dispense'}
                  </Button>
                )}
                <Button size="icon" variant="outline" className="h-8 w-8 border-emerald-200 hover:bg-emerald-50">
                  <Printer className="h-4 w-4 text-emerald-600" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
