// Matchwell Retail Management System - Dummy Data for Demo Dashboard

// Ready Wear Products
export const readyWearProducts = [
  { id: 'rw1', sku: 'SAR001', name: 'Banarasi Silk Saree', category: 'Saree', brand: 'Matchwell', color: 'Red', size: 'Free Size', mrp: 4500, sellingPrice: 3999, costPrice: 2800, stock: 12, minStock: 5, gstRate: 5 },
  { id: 'rw2', sku: 'SAR002', name: 'Cotton Printed Saree', category: 'Saree', brand: 'Matchwell', color: 'Blue', size: 'Free Size', mrp: 1200, sellingPrice: 999, costPrice: 650, stock: 25, minStock: 10, gstRate: 5 },
  { id: 'rw3', sku: 'SAR003', name: 'Georgette Party Saree', category: 'Saree', brand: 'Elegance', color: 'Pink', size: 'Free Size', mrp: 2800, sellingPrice: 2499, costPrice: 1800, stock: 8, minStock: 5, gstRate: 5 },
  { id: 'rw4', sku: 'SUT001', name: 'Chanderi Suit Set', category: 'Suit', brand: 'Matchwell', color: 'Green', size: 'M', mrp: 3200, sellingPrice: 2799, costPrice: 2000, stock: 15, minStock: 5, gstRate: 5 },
  { id: 'rw5', sku: 'SUT002', name: 'Cotton Anarkali Suit', category: 'Suit', brand: 'Elegance', color: 'Yellow', size: 'L', mrp: 2500, sellingPrice: 2199, costPrice: 1500, stock: 20, minStock: 8, gstRate: 5 },
  { id: 'rw6', sku: 'KUR001', name: 'Rayon Printed Kurti', category: 'Kurti', brand: 'Trendy', color: 'Multi', size: 'M', mrp: 800, sellingPrice: 649, costPrice: 400, stock: 45, minStock: 15, gstRate: 5 },
  { id: 'rw7', sku: 'KUR002', name: 'Cotton Straight Kurti', category: 'Kurti', brand: 'Matchwell', color: 'White', size: 'L', mrp: 650, sellingPrice: 549, costPrice: 350, stock: 38, minStock: 12, gstRate: 5 },
  { id: 'rw8', sku: 'LEH001', name: 'Bridal Lehenga Set', category: 'Lehenga', brand: 'Royal', color: 'Maroon', size: 'M', mrp: 25000, sellingPrice: 22999, costPrice: 18000, stock: 3, minStock: 2, gstRate: 12 },
  { id: 'rw9', sku: 'LEH002', name: 'Party Wear Lehenga', category: 'Lehenga', brand: 'Elegance', color: 'Navy', size: 'S', mrp: 8500, sellingPrice: 7499, costPrice: 5500, stock: 6, minStock: 3, gstRate: 12 },
  { id: 'rw10', sku: 'PAL001', name: 'Cotton Palazzo', category: 'Palazzo', brand: 'Trendy', color: 'Black', size: 'L', mrp: 550, sellingPrice: 449, costPrice: 280, stock: 30, minStock: 10, gstRate: 5 },
  { id: 'rw11', sku: 'DUP001', name: 'Chiffon Dupatta', category: 'Dupatta', brand: 'Matchwell', color: 'Peach', size: 'Free Size', mrp: 450, sellingPrice: 399, costPrice: 250, stock: 40, minStock: 15, gstRate: 5 },
  { id: 'rw12', sku: 'BLS001', name: 'Designer Blouse', category: 'Blouse', brand: 'Elegance', color: 'Gold', size: 'M', mrp: 1200, sellingPrice: 999, costPrice: 650, stock: 18, minStock: 8, gstRate: 5 },
];

// Fabric Products (per meter)
export const fabricProducts = [
  { id: 'fb1', sku: 'COT001', name: 'Pure Cotton Fabric', type: 'Cotton', width: '44 inch', pricePerMeter: 180, costPerMeter: 120, totalMeters: 250, soldMeters: 85, gstRate: 5, color: 'White' },
  { id: 'fb2', sku: 'COT002', name: 'Cotton Cambric', type: 'Cotton', width: '44 inch', pricePerMeter: 220, costPerMeter: 150, totalMeters: 180, soldMeters: 62, gstRate: 5, color: 'Blue' },
  { id: 'fb3', sku: 'SLK001', name: 'Pure Silk Fabric', type: 'Silk', width: '45 inch', pricePerMeter: 850, costPerMeter: 600, totalMeters: 80, soldMeters: 35, gstRate: 5, color: 'Red' },
  { id: 'fb4', sku: 'GEO001', name: 'Georgette Fabric', type: 'Georgette', width: '44 inch', pricePerMeter: 280, costPerMeter: 180, totalMeters: 150, soldMeters: 48, gstRate: 5, color: 'Pink' },
  { id: 'fb5', sku: 'CHF001', name: 'Chiffon Fabric', type: 'Chiffon', width: '44 inch', pricePerMeter: 320, costPerMeter: 200, totalMeters: 120, soldMeters: 42, gstRate: 5, color: 'Peach' },
  { id: 'fb6', sku: 'CRP001', name: 'Crepe Fabric', type: 'Crepe', width: '44 inch', pricePerMeter: 350, costPerMeter: 230, totalMeters: 100, soldMeters: 28, gstRate: 5, color: 'Navy' },
  { id: 'fb7', sku: 'NET001', name: 'Net Fabric', type: 'Net', width: '52 inch', pricePerMeter: 250, costPerMeter: 160, totalMeters: 90, soldMeters: 22, gstRate: 5, color: 'Gold' },
  { id: 'fb8', sku: 'VEL001', name: 'Velvet Fabric', type: 'Velvet', width: '44 inch', pricePerMeter: 650, costPerMeter: 450, totalMeters: 60, soldMeters: 18, gstRate: 5, color: 'Maroon' },
];

// Customers
export const customers = [
  { id: 'c1', name: 'Priya Sharma', phone: '+91 98765 43210', email: 'priya@email.com', loyaltyPoints: 450, creditBalance: 0, totalPurchases: 28500, lastVisit: new Date('2024-12-20') },
  { id: 'c2', name: 'Sunita Agarwal', phone: '+91 87654 32109', email: 'sunita@email.com', loyaltyPoints: 820, creditBalance: 2500, totalPurchases: 65000, lastVisit: new Date('2024-12-22') },
  { id: 'c3', name: 'Meena Patel', phone: '+91 99887 76655', email: 'meena@email.com', loyaltyPoints: 320, creditBalance: 0, totalPurchases: 18500, lastVisit: new Date('2024-12-18') },
  { id: 'c4', name: 'Kavita Jain', phone: '+91 94256 78901', email: 'kavita@email.com', loyaltyPoints: 1200, creditBalance: 5000, totalPurchases: 125000, lastVisit: new Date('2024-12-21') },
  { id: 'c5', name: 'Rekha Gupta', phone: '+91 96543 21098', email: 'rekha@email.com', loyaltyPoints: 560, creditBalance: 0, totalPurchases: 42000, lastVisit: new Date('2024-12-15') },
  { id: 'c6', name: 'Anita Verma', phone: '+91 91234 56789', email: 'anita@email.com', loyaltyPoints: 280, creditBalance: 1500, totalPurchases: 22000, lastVisit: new Date('2024-12-19') },
];

// Suppliers
export const suppliers = [
  { id: 's1', name: 'Surat Textile Mills', contact: 'Ramesh Patel', phone: '+91 98250 12345', gstin: '24AABCS1234A1Z5', city: 'Surat', pendingDues: 45000, totalPurchases: 850000 },
  { id: 's2', name: 'Jaipur Fabrics Pvt Ltd', contact: 'Mahesh Sharma', phone: '+91 98290 67890', gstin: '08AABCJ5678B2Z3', city: 'Jaipur', pendingDues: 0, totalPurchases: 320000 },
  { id: 's3', name: 'Kolkata Silk House', contact: 'Anil Das', phone: '+91 98300 11111', gstin: '19AABCK9012C3Z1', city: 'Kolkata', pendingDues: 28000, totalPurchases: 420000 },
  { id: 's4', name: 'Delhi Fashion Hub', contact: 'Rajiv Kapoor', phone: '+91 98100 22222', gstin: '07AABCD3456D4Z9', city: 'Delhi', pendingDues: 15000, totalPurchases: 280000 },
  { id: 's5', name: 'Mumbai Trends', contact: 'Vijay Mehta', phone: '+91 98200 33333', gstin: '27AABCM7890E5Z7', city: 'Mumbai', pendingDues: 0, totalPurchases: 560000 },
];

// Recent Sales/Invoices
export const recentSales = [
  { id: 'inv1', invoiceNo: 'MW/24-25/001234', customer: 'Priya Sharma', items: 3, amount: 4599, paymentMode: 'UPI', date: new Date(), time: '6:45 PM' },
  { id: 'inv2', invoiceNo: 'MW/24-25/001233', customer: 'Walk-in', items: 1, amount: 2499, paymentMode: 'Cash', date: new Date(), time: '6:22 PM' },
  { id: 'inv3', invoiceNo: 'MW/24-25/001232', customer: 'Kavita Jain', items: 5, amount: 8750, paymentMode: 'Card', date: new Date(), time: '5:48 PM' },
  { id: 'inv4', invoiceNo: 'MW/24-25/001231', customer: 'Walk-in', items: 2, amount: 1298, paymentMode: 'UPI', date: new Date(), time: '5:15 PM' },
  { id: 'inv5', invoiceNo: 'MW/24-25/001230', customer: 'Sunita Agarwal', items: 4, amount: 6899, paymentMode: 'Credit', date: new Date(), time: '4:32 PM' },
  { id: 'inv6', invoiceNo: 'MW/24-25/001229', customer: 'Meena Patel', items: 2, amount: 3548, paymentMode: 'Cash', date: new Date(), time: '3:55 PM' },
  { id: 'inv7', invoiceNo: 'MW/24-25/001228', customer: 'Walk-in', items: 1, amount: 649, paymentMode: 'UPI', date: new Date(), time: '3:20 PM' },
  { id: 'inv8', invoiceNo: 'MW/24-25/001227', customer: 'Rekha Gupta', items: 3, amount: 5247, paymentMode: 'Card', date: new Date(), time: '2:45 PM' },
];

// Dashboard Stats
export const dashboardStats = {
  todaySales: 45680,
  yesterdaySales: 38500,
  monthSales: 485000,
  lastMonthSales: 420000,
  todayBills: 23,
  todayCustomers: 18,
  avgBillValue: 1986,
  cashCollection: 18500,
  upiCollection: 15680,
  cardCollection: 8500,
  creditGiven: 3000,
  totalProducts: readyWearProducts.length + fabricProducts.length,
  lowStockItems: 5,
  outOfStock: 2,
};

// Category Sales Distribution
export const categorySales = [
  { name: 'Saree', value: 35, amount: 169880, color: '#ec4899' },
  { name: 'Suit', value: 25, amount: 121200, color: '#f472b6' },
  { name: 'Kurti', value: 20, amount: 97000, color: '#fb7185' },
  { name: 'Lehenga', value: 12, amount: 58200, color: '#a855f7' },
  { name: 'Others', value: 8, amount: 38720, color: '#c084fc' },
];

// Hourly Sales Trend
export const hourlySales = [
  { hour: '10 AM', sales: 2500 },
  { hour: '11 AM', sales: 4200 },
  { hour: '12 PM', sales: 5800 },
  { hour: '1 PM', sales: 3500 },
  { hour: '2 PM', sales: 4100 },
  { hour: '3 PM', sales: 5500 },
  { hour: '4 PM', sales: 6800 },
  { hour: '5 PM', sales: 7200 },
  { hour: '6 PM', sales: 6080 },
];

// Weekly Sales
export const weeklySales = [
  { day: 'Mon', sales: 32000, bills: 18 },
  { day: 'Tue', sales: 28500, bills: 15 },
  { day: 'Wed', sales: 35000, bills: 20 },
  { day: 'Thu', sales: 42000, bills: 24 },
  { day: 'Fri', sales: 48000, bills: 28 },
  { day: 'Sat', sales: 65000, bills: 38 },
  { day: 'Sun', sales: 72000, bills: 42 },
];

// Monthly Sales
export const monthlySales = [
  { month: 'Jul', sales: 380000 },
  { month: 'Aug', sales: 420000 },
  { month: 'Sep', sales: 395000 },
  { month: 'Oct', sales: 580000 },
  { month: 'Nov', sales: 520000 },
  { month: 'Dec', sales: 485000 },
];

// Top Selling Products
export const topProducts = [
  { name: 'Rayon Printed Kurti', sales: 45, amount: 29205, trend: 12 },
  { name: 'Cotton Printed Saree', sales: 32, amount: 31968, trend: 8 },
  { name: 'Banarasi Silk Saree', sales: 18, amount: 71982, trend: 15 },
  { name: 'Chanderi Suit Set', sales: 22, amount: 61578, trend: -3 },
  { name: 'Cotton Straight Kurti', sales: 38, amount: 20862, trend: 5 },
];

// Low Stock Alerts
export const lowStockAlerts = [
  { name: 'Bridal Lehenga Set', currentStock: 3, minStock: 2, category: 'Lehenga', urgency: 'high' },
  { name: 'Georgette Party Saree', currentStock: 8, minStock: 5, category: 'Saree', urgency: 'medium' },
  { name: 'Party Wear Lehenga', currentStock: 6, minStock: 3, category: 'Lehenga', urgency: 'medium' },
  { name: 'Pure Silk Fabric', currentStock: 45, minStock: 50, category: 'Fabric', urgency: 'low' },
  { name: 'Velvet Fabric', currentStock: 42, minStock: 40, category: 'Fabric', urgency: 'low' },
];

// Payment Method Distribution
export const paymentMethods = [
  { name: 'Cash', value: 40, amount: 18500, color: '#22c55e' },
  { name: 'UPI', value: 35, amount: 15680, color: '#8b5cf6' },
  { name: 'Card', value: 18, amount: 8500, color: '#3b82f6' },
  { name: 'Credit', value: 7, amount: 3000, color: '#f59e0b' },
];

// GST Summary
export const gstSummary = {
  totalTaxable: 43505,
  cgst: 1088,
  sgst: 1088,
  totalTax: 2176,
  totalWithTax: 45681,
};
