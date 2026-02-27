import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingBag,
  Download,
  Calendar,
  Filter,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  weeklySales,
  monthlySales,
  categorySales,
  topProducts,
  paymentMethods,
  gstSummary,
} from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

export default function Reports() {
  const totalMonthlySales = monthlySales.reduce((sum, m) => sum + m.sales, 0);
  const avgMonthlySales = totalMonthlySales / monthlySales.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-sm text-gray-500">Track your business performance</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="border-emerald-200">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" className="border-emerald-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Report Tabs */}
      <Tabs defaultValue="sales" className="space-y-6">
        <TabsList className="bg-emerald-50 p-1">
          <TabsTrigger value="sales" className="data-[state=active]:bg-white">
            Sales Reports
          </TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-white">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="gst" className="data-[state=active]:bg-white">
            GST Reports
          </TabsTrigger>
        </TabsList>

        {/* Sales Reports */}
        <TabsContent value="sales" className="space-y-6">
          {/* Monthly Trend */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Monthly Sales Trend</span>
                <Badge variant="outline" className="border-green-200 text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.5%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlySales}>
                  <defs>
                    <linearGradient id="monthlySalesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                  <Tooltip formatter={(value) => [formatCurrency(value as number), 'Sales']} />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#059669"
                    strokeWidth={2}
                    fill="url(#monthlySalesGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-emerald-100">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total (6 months)</p>
                  <p className="text-xl font-bold text-emerald-600">{formatCurrency(totalMonthlySales)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Monthly Average</p>
                  <p className="text-xl font-bold text-teal-600">{formatCurrency(avgMonthlySales)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Best Month</p>
                  <p className="text-xl font-bold text-purple-600">Oct ({formatCurrency(580000)})</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly & Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Sales */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle>Weekly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklySales}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                    <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                    <Tooltip formatter={(value) => [formatCurrency(value as number), 'Sales']} />
                    <Bar dataKey="sales" fill="#059669" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={categorySales}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="amount"
                    >
                      {categorySales.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value as number), 'Sales']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {categorySales.map((cat) => (
                    <div key={cat.name} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: cat.color }} />
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      <span className="text-sm font-medium">{cat.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products & Payment Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Products */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProducts.map((product, index) => (
                    <div
                      key={product.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.sales} units</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-emerald-600">{formatCurrency(product.amount)}</p>
                        <div className="flex items-center gap-1">
                          {product.trend >= 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                          )}
                          <span className={`text-xs ${product.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.trend}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle>Payment Method Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={paymentMethods} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                    <XAxis type="number" stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                    <YAxis type="category" dataKey="name" stroke="#9ca3af" fontSize={12} width={50} />
                    <Tooltip formatter={(value) => [formatCurrency(value as number), 'Collection']} />
                    <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                      {paymentMethods.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {paymentMethods.map((pm) => (
                    <div key={pm.name} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm">{pm.name}</span>
                      <span className="font-medium">{formatCurrency(pm.amount)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Inventory Reports */}
        <TabsContent value="inventory" className="space-y-6">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle>Inventory Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-fuchsia-50 rounded-xl p-6 text-center">
                  <ShoppingBag className="h-10 w-10 mx-auto mb-3 text-emerald-500" />
                  <p className="text-sm text-gray-500">Total Products</p>
                  <p className="text-3xl font-bold text-emerald-600">20</p>
                  <p className="text-xs text-gray-500 mt-1">12 Ready Wear + 8 Fabrics</p>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-xl p-6 text-center">
                  <IndianRupee className="h-10 w-10 mx-auto mb-3 text-teal-500" />
                  <p className="text-sm text-gray-500">Stock Value</p>
                  <p className="text-3xl font-bold text-teal-600">{formatCurrency(485000)}</p>
                  <p className="text-xs text-gray-500 mt-1">At cost price</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center">
                  <TrendingDown className="h-10 w-10 mx-auto mb-3 text-amber-500" />
                  <p className="text-sm text-gray-500">Low Stock Items</p>
                  <p className="text-3xl font-bold text-amber-600">5</p>
                  <p className="text-xs text-gray-500 mt-1">Need reorder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* GST Reports */}
        <TabsContent value="gst" className="space-y-6">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle>GST Summary - Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">Taxable Amount</p>
                  <p className="text-2xl font-bold text-emerald-600">{formatCurrency(gstSummary.totalTaxable)}</p>
                </div>
                <div className="bg-fuchsia-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">CGST (6%)</p>
                  <p className="text-2xl font-bold text-teal-600">{formatCurrency(gstSummary.cgst)}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">SGST (6%)</p>
                  <p className="text-2xl font-bold text-purple-600">{formatCurrency(gstSummary.sgst)}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">Total Tax</p>
                  <p className="text-2xl font-bold text-amber-600">{formatCurrency(gstSummary.totalTax)}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">Total with Tax</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(gstSummary.totalWithTax)}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-medium mb-3">Tax Rate Breakdown</h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-white rounded-lg">
                    <span className="text-sm">Ready Wear (5% GST)</span>
                    <span className="font-medium">{formatCurrency(38500)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg">
                    <span className="text-sm">Injections (12% GST)</span>
                    <span className="font-medium">{formatCurrency(5005)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg">
                    <span className="text-sm">Fabric (5% GST)</span>
                    <span className="font-medium">{formatCurrency(2176)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
