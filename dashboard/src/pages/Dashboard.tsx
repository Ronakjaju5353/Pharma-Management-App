import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingBag,
  Users,
  CreditCard,
  Package,
  AlertTriangle,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import {
  dashboardStats,
  recentSales,
  categorySales,
  hourlySales,
  topProducts,
  lowStockAlerts,
  paymentMethods,
} from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  const salesGrowth = ((dashboardStats.todaySales - dashboardStats.yesterdaySales) / dashboardStats.yesterdaySales * 100).toFixed(1);
  const monthGrowth = ((dashboardStats.monthSales - dashboardStats.lastMonthSales) / dashboardStats.lastMonthSales * 100).toFixed(1);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Today's Sales</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(dashboardStats.todaySales)}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Number(salesGrowth) >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm ${Number(salesGrowth) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {salesGrowth}% vs yesterday
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <IndianRupee className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Prescriptions Filled</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardStats.todayBills}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Avg: {formatCurrency(dashboardStats.avgBillValue)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Patients Today</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardStats.todayCustomers}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {dashboardStats.todayBills - dashboardStats.todayCustomers} repeat visits
                  </p>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(dashboardStats.monthSales)}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">{monthGrowth}% growth</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hourly Sales Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-600" />
                Today's Sales Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={hourlySales}>
                  <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                  <Tooltip
                    formatter={(value) => [formatCurrency(value as number), 'Sales']}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #fce7f3' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#059669"
                    strokeWidth={2}
                    fill="url(#salesGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Distribution */}
        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle>Category Sales</CardTitle>
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
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {categorySales.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categorySales.slice(0, 4).map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-xs text-gray-600">{cat.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Payment Methods & Recent Prescriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle>Payment Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={paymentMethods} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis type="number" stroke="#9ca3af" fontSize={12} tickFormatter={(v) => `₹${v/1000}k`} />
                  <YAxis type="category" dataKey="name" stroke="#9ca3af" fontSize={12} width={50} />
                  <Tooltip formatter={(value) => [formatCurrency(value as number), 'Amount']} />
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
                    <span className="text-xs text-gray-600">{pm.name}</span>
                    <span className="text-xs font-medium">{pm.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Prescriptions */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Prescriptions</span>
                <Badge variant="outline" className="border-emerald-200 text-emerald-600">
                  Today
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentSales.slice(0, 5).map((sale) => (
                  <div
                    key={sale.id}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50/50 to-fuchsia-50/50 rounded-xl hover:from-emerald-50 hover:to-fuchsia-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {sale.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{sale.customer}</p>
                        <p className="text-xs text-gray-500">{sale.invoiceNo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{formatCurrency(sale.amount)}</p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            sale.paymentMode === 'Cash'
                              ? 'border-green-200 text-green-600'
                              : sale.paymentMode === 'UPI'
                              ? 'border-purple-200 text-purple-600'
                              : sale.paymentMode === 'Card'
                              ? 'border-blue-200 text-blue-600'
                              : 'border-amber-200 text-amber-600'
                          }`}
                        >
                          {sale.paymentMode}
                        </Badge>
                        <span className="text-xs text-gray-400">{sale.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Products & Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpRight className="h-5 w-5 text-emerald-600" />
                Top Selling Medicines
              </CardTitle>
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
                        <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} units sold</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{formatCurrency(product.amount)}</p>
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
        </motion.div>

        {/* Low Stock Alerts */}
        <motion.div variants={itemVariants}>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Low Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockAlerts.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between p-3 rounded-xl ${
                      item.urgency === 'high'
                        ? 'bg-red-50 border border-red-100'
                        : item.urgency === 'medium'
                        ? 'bg-amber-50 border border-amber-100'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Package
                        className={`h-5 w-5 ${
                          item.urgency === 'high'
                            ? 'text-red-500'
                            : item.urgency === 'medium'
                            ? 'text-amber-500'
                            : 'text-gray-500'
                        }`}
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {item.currentStock} / {item.minStock}
                      </p>
                      <Badge
                        className={`text-xs ${
                          item.urgency === 'high'
                            ? 'bg-red-100 text-red-700'
                            : item.urgency === 'medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {item.urgency === 'high' ? 'Critical' : item.urgency === 'medium' ? 'Low' : 'Reorder'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
