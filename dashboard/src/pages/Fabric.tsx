import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Scissors,
  Package,
  Ruler,
  Eye,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { prescriptionProducts } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

export default function Fabric() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const prescriptionTypes = ['all', ...new Set(prescriptionProducts.map((f) => f.type))];

  const filteredFabrics = prescriptionProducts.filter((prescription) => {
    const matchesSearch =
      prescription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || prescription.type === selectedType;
    return matchesSearch && matchesType;
  });

  const totalMeters = prescriptionProducts.reduce((sum, f) => sum + f.totalMeters, 0);
  const availableMeters = prescriptionProducts.reduce((sum, f) => sum + (f.totalMeters - f.soldMeters), 0);
  const totalValue = prescriptionProducts.reduce((sum, f) => sum + (f.costPerMeter * (f.totalMeters - f.soldMeters)), 0);

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
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Prescriptions</p>
              <p className="text-2xl font-bold">{prescriptionProducts.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Ruler className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold">{totalMeters}m</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Dispensed</p>
              <p className="text-2xl font-bold">{availableMeters}m</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-rose-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">₹</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">This Month</p>
              <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
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
              placeholder="Search prescription..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-emerald-100 overflow-x-auto">
            {prescriptionTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? 'bg-teal-500' : ''}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <Button className="bg-gradient-to-r from-teal-500 to-purple-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Fabric
        </Button>
      </div>

      {/* Fabric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredFabrics.map((prescription) => {
          const availableStock = prescription.totalMeters - prescription.soldMeters;
          const stockPercentage = (availableStock / prescription.totalMeters) * 100;

          return (
            <Card key={prescription.id} className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Fabric Visual */}
                <div className="h-32 bg-gradient-to-br from-teal-100 via-emerald-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">🧵</div>
                  </div>
                  <Badge
                    className="absolute top-2 right-2"
                    style={{ backgroundColor: prescription.color.toLowerCase() === 'white' ? '#f3f4f6' : prescription.color.toLowerCase(), color: prescription.color.toLowerCase() === 'white' ? '#374151' : 'white' }}
                  >
                    {prescription.color}
                  </Badge>
                </div>

                {/* Details */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{prescription.name}</h3>
                    <p className="text-sm text-gray-500">{prescription.sku} • {prescription.width}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Price/item</p>
                      <p className="font-bold text-teal-600">{formatCurrency(prescription.pricePerMeter)}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-200 text-purple-600">
                      {prescription.type}
                    </Badge>
                  </div>

                  {/* Stock Progress */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stock</span>
                      <span className="font-medium">{availableStock}m / {prescription.totalMeters}m</span>
                    </div>
                    <Progress
                      value={stockPercentage}
                      className="h-2"
                    />
                    <p className="text-xs text-gray-500">{prescription.soldMeters}m sold</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-emerald-100">
                    <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
                      <Edit2 className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
