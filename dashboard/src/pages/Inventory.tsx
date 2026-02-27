import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Download,
  Upload,
  Edit2,
  Trash2,
  Package,
  TrendingUp,
  AlertTriangle,
  Eye,
  Clock,
  Shield,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { readyWearProducts as medicines } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(medicines.map((p) => p.category))];

  const filteredProducts = medicines.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalStock = medicines.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = medicines.reduce((sum, p) => sum + (p.costPrice * p.stock), 0);
  const lowStockItems = medicines.filter((p) => p.stock <= p.minStock).length;

  const now = new Date();
  const threeMonths = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
  const expiredItems = medicines.filter((p) => new Date(p.expiryDate) < now).length;
  const nearExpiryItems = medicines.filter((p) => {
    const exp = new Date(p.expiryDate);
    return exp >= now && exp <= threeMonths;
  }).length;

  const getExpiryBadge = (expiryDate: string) => {
    const exp = new Date(expiryDate);
    const sixMonths = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

    if (exp < now) {
      return <Badge className="bg-red-100 text-red-700">Expired</Badge>;
    } else if (exp <= threeMonths) {
      return <Badge className="bg-red-100 text-red-700">Exp Soon</Badge>;
    } else if (exp <= sixMonths) {
      return <Badge className="bg-amber-100 text-amber-700">Exp &lt;6m</Badge>;
    }
    return <span className="text-gray-600 text-sm">{exp.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>;
  };

  const getScheduleBadge = (schedule: string) => {
    switch (schedule) {
      case 'H': return <Badge className="bg-blue-100 text-blue-700 text-xs">Sch H</Badge>;
      case 'H1': return <Badge className="bg-purple-100 text-purple-700 text-xs">Sch H1</Badge>;
      case 'X': return <Badge className="bg-red-100 text-red-700 text-xs">Sch X</Badge>;
      default: return <Badge className="bg-green-100 text-green-700 text-xs">OTC</Badge>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Medicines</p>
              <p className="text-2xl font-bold">{medicines.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Stock Value</p>
              <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">In Stock</p>
              <p className="text-2xl font-bold text-green-600">{totalStock} units</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Low Stock</p>
              <p className="text-2xl font-bold text-amber-600">{lowStockItems}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Near Expiry</p>
              <p className="text-2xl font-bold text-red-600">{nearExpiryItems + expiredItems}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100 w-full sm:w-72">
            <Search className="h-4 w-4 text-emerald-400" />
            <input
              type="text"
              placeholder="Search name, generic, batch, mfg..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-emerald-100 overflow-x-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-emerald-500' : ''}
              >
                {cat === 'all' ? 'All' : cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-emerald-200">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" className="border-emerald-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Medicine
          </Button>
        </div>
      </div>

      {/* Medicines Table */}
      <Card className="border-emerald-100">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left p-3 sm:p-4 font-medium text-gray-600">Medicine</th>
                  <th className="text-left p-3 sm:p-4 font-medium text-gray-600 hidden lg:table-cell">Batch</th>
                  <th className="text-left p-3 sm:p-4 font-medium text-gray-600 hidden md:table-cell">Expiry</th>
                  <th className="text-left p-3 sm:p-4 font-medium text-gray-600 hidden xl:table-cell">Category</th>
                  <th className="text-center p-3 sm:p-4 font-medium text-gray-600 hidden xl:table-cell">Schedule</th>
                  <th className="text-right p-3 sm:p-4 font-medium text-gray-600 hidden lg:table-cell">MRP</th>
                  <th className="text-right p-3 sm:p-4 font-medium text-gray-600">Price</th>
                  <th className="text-center p-3 sm:p-4 font-medium text-gray-600">Stock</th>
                  <th className="text-center p-3 sm:p-4 font-medium text-gray-600 hidden sm:table-cell">Status</th>
                  <th className="text-center p-3 sm:p-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-emerald-50/50 transition-colors">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center shrink-0 hidden sm:flex">
                          <Package className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.genericName}</p>
                          <p className="text-xs text-gray-400 md:hidden">{product.batchNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 hidden lg:table-cell">
                      <span className="font-mono text-sm text-gray-600">{product.batchNumber}</span>
                    </td>
                    <td className="p-3 sm:p-4 hidden md:table-cell">
                      {getExpiryBadge(product.expiryDate)}
                    </td>
                    <td className="p-3 sm:p-4 hidden xl:table-cell">
                      <Badge variant="outline" className="border-emerald-200 text-emerald-600">
                        {product.category}
                      </Badge>
                    </td>
                    <td className="p-3 sm:p-4 text-center hidden xl:table-cell">
                      {getScheduleBadge(product.schedule)}
                    </td>
                    <td className="p-3 sm:p-4 text-right text-gray-500 line-through text-sm hidden lg:table-cell">
                      {formatCurrency(product.mrp)}
                    </td>
                    <td className="p-3 sm:p-4 text-right font-medium text-emerald-600">
                      {formatCurrency(product.sellingPrice)}
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <span className={`font-medium ${product.stock <= product.minStock ? 'text-red-600' : 'text-gray-900'}`}>
                        {product.stock}
                      </span>
                      <span className="text-gray-400 text-xs"> {product.unit}</span>
                    </td>
                    <td className="p-3 sm:p-4 text-center hidden sm:table-cell">
                      <Badge
                        className={
                          product.stock === 0
                            ? 'bg-red-100 text-red-700'
                            : product.stock <= product.minStock
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-green-100 text-green-700'
                        }
                      >
                        {product.stock === 0 ? 'Out of Stock' : product.stock <= product.minStock ? 'Low Stock' : 'In Stock'}
                      </Badge>
                    </td>
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center justify-center gap-1">
                        <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-emerald-50">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-emerald-50">
                          <Edit2 className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-red-50">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
