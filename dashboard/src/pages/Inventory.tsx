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
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { readyWearProducts } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(readyWearProducts.map((p) => p.category))];

  const filteredProducts = readyWearProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.batchNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalStock = readyWearProducts.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = readyWearProducts.reduce((sum, p) => sum + (p.costPrice * p.stock), 0);
  const lowStockItems = readyWearProducts.filter((p) => p.stock <= p.minStock).length;

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
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Medicines</p>
              <p className="text-2xl font-bold">{readyWearProducts.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Stock</p>
              <p className="text-2xl font-bold">{totalStock} units</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">₹</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Stock Value</p>
              <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
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
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100 w-64">
            <Search className="h-4 w-4 text-emerald-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-emerald-100">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-emerald-500' : ''}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
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

      {/* Products Table */}
      <Card className="border-emerald-100">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-600">Product</th>
                  <th className="text-left p-4 font-medium text-gray-600">Batch No</th>
                  <th className="text-left p-4 font-medium text-gray-600">Category</th>
                  <th className="text-right p-4 font-medium text-gray-600">MRP</th>
                  <th className="text-right p-4 font-medium text-gray-600">Selling Price</th>
                  <th className="text-center p-4 font-medium text-gray-600">Stock</th>
                  <th className="text-center p-4 font-medium text-gray-600">Status</th>
                  <th className="text-center p-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-emerald-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.brand} • {product.color}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{product.batchNo}</td>
                    <td className="p-4">
                      <Badge variant="outline" className="border-emerald-200 text-emerald-600">
                        {product.category}
                      </Badge>
                    </td>
                    <td className="p-4 text-right text-gray-500 line-through">
                      {formatCurrency(product.mrp)}
                    </td>
                    <td className="p-4 text-right font-medium text-emerald-600">
                      {formatCurrency(product.sellingPrice)}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`font-medium ${product.stock <= product.minStock ? 'text-red-600' : 'text-gray-900'}`}>
                        {product.stock}
                      </span>
                      <span className="text-gray-400 text-xs"> / {product.minStock}</span>
                    </td>
                    <td className="p-4 text-center">
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
                    <td className="p-4">
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
