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
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { readyWearProducts, fabricProducts, customers } from '@/data/dummyData';
import { formatCurrency } from '@/lib/utils';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'product' | 'fabric';
  meters?: number;
}

export default function POS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product: typeof readyWearProducts[0]) => {
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
        price: product.sellingPrice,
        quantity: 1,
        type: 'product',
      }]);
    }
  };

  const addPrescriptionToCart = (fabric: typeof fabricProducts[0]) => {
    const existing = cart.find((item) => item.id === fabric.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === fabric.id
          ? { ...item, meters: (item.meters || 1) + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: fabric.id,
        name: fabric.name,
        price: fabric.pricePerMeter,
        quantity: 1,
        meters: 1,
        type: 'fabric',
      }]);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map((item) => {
      if (item.id === id) {
        if (item.type === 'fabric') {
          const newMeters = (item.meters || 1) + delta;
          if (newMeters <= 0) return item;
          return { ...item, meters: newMeters };
        } else {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return item;
          return { ...item, quantity: newQty };
        }
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => {
    if (item.type === 'fabric') {
      return sum + (item.price * (item.meters || 1));
    }
    return sum + (item.price * item.quantity);
  }, 0);

  const discountAmount = (subtotal * discount) / 100;
  const taxable = subtotal - discountAmount;
  const gst = taxable * 0.12;
  const total = taxable + gst;

  const filteredProducts = readyWearProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPrescriptions = fabricProducts.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              placeholder="Search medicines by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button
            variant="outline"
            className="border-emerald-200 hover:bg-emerald-50"
            onClick={() => setSelectedCustomer(customers[0])}
          >
            <User className="h-4 w-4 mr-2" />
            {selectedCustomer ? selectedCustomer.name : 'Select Customer'}
          </Button>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="products" className="flex-1 flex flex-col">
          <TabsList className="bg-emerald-50 p-1">
            <TabsTrigger value="products" className="data-[state=active]:bg-white">
              Medicines
            </TabsTrigger>
            <TabsTrigger value="fabric" className="data-[state=active]:bg-white">
              Prescription
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="flex-1 mt-4">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-3">
                      <div className="h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-2">
                        <ShoppingBag className="h-8 w-8 text-emerald-400" />
                      </div>
                      <p className="font-medium text-sm text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sku}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-emerald-600">{formatCurrency(product.sellingPrice)}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            product.stock > product.minStock
                              ? 'border-green-200 text-green-600'
                              : 'border-red-200 text-red-600'
                          }`}
                        >
                          {product.stock}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="fabric" className="flex-1 mt-4">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPrescriptions.map((fabric) => (
                  <Card
                    key={fabric.id}
                    className="cursor-pointer border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all"
                    onClick={() => addPrescriptionToCart(fabric)}
                  >
                    <CardContent className="p-3">
                      <div className="h-20 bg-gradient-to-br from-teal-100 to-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <div className="text-2xl">🧵</div>
                      </div>
                      <p className="font-medium text-sm text-gray-900 truncate">{fabric.name}</p>
                      <p className="text-xs text-gray-500">{fabric.type} • {fabric.width}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-teal-600">{formatCurrency(fabric.pricePerMeter)}/m</span>
                        <Badge variant="outline" className="text-xs border-purple-200 text-purple-600">
                          {fabric.totalMeters - fabric.soldMeters}m
                        </Badge>
                      </div>
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
        </CardHeader>

        <ScrollArea className="flex-1 p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <ShoppingBag className="h-12 w-12 mb-2" />
              <p>No items in cart</p>
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
                    <p className="text-xs text-gray-500">
                      {formatCurrency(item.price)} {item.type === 'fabric' ? '/m' : ''}
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
                      {item.type === 'fabric' ? `${item.meters}m` : item.quantity}
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
              <span className="text-gray-500">GST (12%)</span>
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
