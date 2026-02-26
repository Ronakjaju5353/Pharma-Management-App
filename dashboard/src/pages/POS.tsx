import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Minus,
  CreditCard,
  Banknote,
  Smartphone,
  User,
  Calculator,
  Percent,
  ShoppingBag,
  X,
  Pill,
  ClipboardList,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { readyWearProducts as medicines, fabricProducts as prescriptions, customers as patients } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

interface CartItem {
  id: string;
  name: string;
  genericName: string;
  batchNumber: string;
  price: number;
  gstRate: number;
  quantity: number;
  unit: string;
  schedule: string;
}

export default function POS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<typeof patients[0] | null>(null);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product: typeof medicines[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        genericName: product.genericName,
        batchNumber: product.batchNumber,
        price: product.sellingPrice,
        gstRate: product.gstRate,
        quantity: 1,
        unit: product.unit,
        schedule: product.schedule,
      }]);
    }
  };

  const dispenseRx = (rx: typeof prescriptions[0]) => {
    rx.medicines.forEach((med) => {
      const medicine = medicines.find(m => m.name === med.name);
      if (medicine) {
        addToCart(medicine);
      }
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) return item;
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const taxable = subtotal - discountAmount;
  // Per-item GST calculation
  const gst = cart.reduce((sum, item) => {
    const itemTotal = item.price * item.quantity;
    const itemDiscount = (itemTotal / subtotal) * discountAmount || 0;
    return sum + ((itemTotal - itemDiscount) * item.gstRate / 100);
  }, 0);
  const total = taxable + gst;

  const filteredMedicines = medicines.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPrescriptions = prescriptions.filter((rx) =>
    rx.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rx.rxNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rx.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScheduleBadge = (schedule: string) => {
    if (schedule === 'H' || schedule === 'H1') {
      return <Badge className="bg-blue-100 text-blue-700 text-[10px] px-1">Rx</Badge>;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-140px)] flex gap-4"
    >
      {/* Products Section */}
      <div className="flex-1 flex flex-col">
        {/* Search */}
        <div className="mb-4 flex gap-3">
          <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-emerald-100">
            <Search className="h-5 w-5 text-emerald-400" />
            <input
              type="text"
              placeholder="Search medicines by name, generic name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button
            variant="outline"
            className="border-emerald-200 hover:bg-emerald-50"
            onClick={() => setSelectedCustomer(patients[0])}
          >
            <User className="h-4 w-4 mr-2" />
            {selectedCustomer ? selectedCustomer.name : 'Select Patient'}
          </Button>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="medicines" className="flex-1 flex flex-col">
          <TabsList className="bg-emerald-50 p-1">
            <TabsTrigger value="medicines" className="data-[state=active]:bg-white">
              <Pill className="h-4 w-4 mr-1" />
              Medicines
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="data-[state=active]:bg-white">
              <ClipboardList className="h-4 w-4 mr-1" />
              Prescriptions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medicines" className="flex-1 mt-4">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredMedicines.map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-3">
                      <div className="h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-2 relative">
                        <Pill className="h-7 w-7 text-emerald-400" />
                        {getScheduleBadge(product.schedule) && (
                          <div className="absolute top-1 right-1">
                            {getScheduleBadge(product.schedule)}
                          </div>
                        )}
                      </div>
                      <p className="font-medium text-sm text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500 truncate">{product.genericName}</p>
                      <p className="text-xs text-gray-400">{product.manufacturer} | {product.batchNumber}</p>
                      <p className="text-[10px] text-gray-400">Exp: {new Date(product.expiryDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-emerald-600">{formatCurrency(product.sellingPrice)}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            product.stock > product.minStock
                              ? 'border-green-200 text-green-600'
                              : product.stock === 0
                              ? 'border-red-200 text-red-600'
                              : 'border-amber-200 text-amber-600'
                          }`}
                        >
                          {product.stock} {product.unit}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="prescriptions" className="flex-1 mt-4">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredPrescriptions.filter(rx => rx.status !== 'Dispensed').map((rx) => (
                  <Card key={rx.id} className="border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-bold text-emerald-600 text-sm">{rx.rxNumber}</p>
                          <p className="text-xs text-gray-500">{rx.date}</p>
                        </div>
                        <Badge className={rx.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}>
                          {rx.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold text-sm">{rx.patientName}</p>
                          <p className="text-xs text-gray-500">{rx.patientGender}, {rx.patientAge} yrs</p>
                        </div>
                        <p className="text-xs text-gray-500">{rx.doctorName}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 mb-3 space-y-1">
                        {rx.medicines.map((med, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">{idx + 1}</span>
                            <span className="text-gray-700">{med.name}</span>
                            <span className="text-gray-400">— {med.dosage}, {med.duration}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        onClick={() => dispenseRx(rx)}
                      >
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        {rx.status === 'Partial' ? 'Add Remaining to Bill' : 'Add to Bill'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>

      {/* Cart Section */}
      <Card className="w-96 flex flex-col border-emerald-100">
        <CardHeader className="pb-3 border-b border-emerald-100">
          <CardTitle className="flex items-center justify-between">
            <span>Current Bill</span>
            <Badge className="bg-emerald-500">{cart.length} items</Badge>
          </CardTitle>
          {selectedCustomer && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-500">Patient: <strong>{selectedCustomer.name}</strong></span>
              {selectedCustomer.allergies.length > 0 && (
                <Badge className="bg-red-100 text-red-700 text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Allergies
                </Badge>
              )}
            </div>
          )}
        </CardHeader>

        <ScrollArea className="flex-1 p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <ShoppingBag className="h-12 w-12 mb-2" />
              <p>No items in bill</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-xl"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-400">
                      {item.batchNumber} | GST {item.gstRate}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 text-red-500 hover:bg-red-50"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Bill Summary */}
        <div className="p-4 border-t border-emerald-100 space-y-3">
          {/* Discount */}
          <div className="flex items-center gap-2">
            <Percent className="h-4 w-4 text-gray-400" />
            <input
              type="number"
              placeholder="Discount %"
              value={discount || ''}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-sm border-none outline-none"
            />
          </div>

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({discount}%)</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">GST (Mixed rates)</span>
              <span>{formatCurrency(gst)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-emerald-100">
              <span>Total</span>
              <span className="text-emerald-600">{formatCurrency(total)}</span>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <Button className="bg-green-500 hover:bg-green-600">
              <Banknote className="h-4 w-4 mr-1" />
              Cash
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Smartphone className="h-4 w-4 mr-1" />
              UPI
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <CreditCard className="h-4 w-4 mr-1" />
              Card
            </Button>
          </div>

          <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
            <Calculator className="h-4 w-4 mr-2" />
            Generate Bill
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
