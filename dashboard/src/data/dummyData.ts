// MedCare Pharmacy Management System - Dummy Data

// Medicines (was readyWearProducts)
export const readyWearProducts = [
  { id: 'med1', sku: 'MED001', name: 'Crocin 500mg', genericName: 'Paracetamol', category: 'Tablets', brand: 'GSK', manufacturer: 'GSK', color: 'Tablets', size: '10 tablets/strip', mrp: 32, sellingPrice: 30, costPrice: 22, stock: 85, minStock: 20, gstRate: 12, batchNumber: 'CR2401', expiryDate: '2027-03-15', schedule: 'OTC', unit: 'strips', reorderLevel: 20, rackLocation: 'Rack A-1' },
  { id: 'med2', sku: 'MED002', name: 'Azee 500mg', genericName: 'Azithromycin', category: 'Tablets', brand: 'Cipla', manufacturer: 'Cipla', color: 'Tablets', size: '3 tablets/strip', mrp: 98, sellingPrice: 92, costPrice: 65, stock: 42, minStock: 15, gstRate: 12, batchNumber: 'AZ2405', expiryDate: '2026-08-20', schedule: 'H', unit: 'strips', reorderLevel: 15, rackLocation: 'Rack A-2' },
  { id: 'med3', sku: 'MED003', name: 'Mox 500mg', genericName: 'Amoxicillin', category: 'Capsules', brand: 'Cipla', manufacturer: 'Cipla', color: 'Capsules', size: '10 capsules/strip', mrp: 85, sellingPrice: 80, costPrice: 55, stock: 58, minStock: 20, gstRate: 12, batchNumber: 'MX2403', expiryDate: '2026-11-10', schedule: 'H', unit: 'strips', reorderLevel: 20, rackLocation: 'Rack A-3' },
  { id: 'med4', sku: 'MED004', name: 'Pan 40', genericName: 'Pantoprazole 40mg', category: 'Tablets', brand: 'Alkem', manufacturer: 'Alkem Labs', color: 'Tablets', size: '15 tablets/strip', mrp: 65, sellingPrice: 60, costPrice: 38, stock: 72, minStock: 25, gstRate: 12, batchNumber: 'PN2402', expiryDate: '2027-06-30', schedule: 'H', unit: 'strips', reorderLevel: 25, rackLocation: 'Rack B-1' },
  { id: 'med5', sku: 'MED005', name: 'Cetzine 10mg', genericName: 'Cetirizine', category: 'Tablets', brand: 'Unichem', manufacturer: 'Unichem Labs', color: 'Tablets', size: '10 tablets/strip', mrp: 45, sellingPrice: 42, costPrice: 28, stock: 3, minStock: 15, gstRate: 12, batchNumber: 'CT2312', expiryDate: '2026-03-28', schedule: 'OTC', unit: 'strips', reorderLevel: 15, rackLocation: 'Rack B-2' },
  { id: 'med6', sku: 'MED006', name: 'Glycomet 500', genericName: 'Metformin 500mg', category: 'Tablets', brand: 'USV', manufacturer: 'USV Pvt Ltd', color: 'Tablets', size: '20 tablets/strip', mrp: 52, sellingPrice: 48, costPrice: 32, stock: 95, minStock: 30, gstRate: 12, batchNumber: 'GM2404', expiryDate: '2027-09-15', schedule: 'H', unit: 'strips', reorderLevel: 30, rackLocation: 'Rack B-3' },
  { id: 'med7', sku: 'MED007', name: 'Amlong 5mg', genericName: 'Amlodipine', category: 'Tablets', brand: 'Micro Labs', manufacturer: 'Micro Labs', color: 'Tablets', size: '15 tablets/strip', mrp: 38, sellingPrice: 35, costPrice: 22, stock: 68, minStock: 20, gstRate: 12, batchNumber: 'AM2405', expiryDate: '2027-12-20', schedule: 'H', unit: 'strips', reorderLevel: 20, rackLocation: 'Rack C-1' },
  { id: 'med8', sku: 'MED008', name: 'Benadryl Syrup', genericName: 'Diphenhydramine', category: 'Syrups', brand: 'J&J', manufacturer: 'Johnson & Johnson', color: 'Syrups', size: '100ml bottle', mrp: 125, sellingPrice: 120, costPrice: 82, stock: 35, minStock: 10, gstRate: 12, batchNumber: 'BN2403', expiryDate: '2026-12-15', schedule: 'OTC', unit: 'bottles', reorderLevel: 10, rackLocation: 'Rack D-1' },
  { id: 'med9', sku: 'MED009', name: 'Betadine Ointment', genericName: 'Povidone-Iodine', category: 'Ointments', brand: 'Win-Medicare', manufacturer: 'Win-Medicare', color: 'Ointments', size: '20g tube', mrp: 78, sellingPrice: 75, costPrice: 50, stock: 4, minStock: 10, gstRate: 18, batchNumber: 'BD2401', expiryDate: '2027-09-30', schedule: 'OTC', unit: 'tubes', reorderLevel: 10, rackLocation: 'Rack D-2' },
  { id: 'med10', sku: 'MED010', name: 'Lantus Solostar', genericName: 'Insulin Glargine', category: 'Injections', brand: 'Sanofi', manufacturer: 'Sanofi India', color: 'Injections', size: '3ml pen', mrp: 1450, sellingPrice: 1400, costPrice: 1100, stock: 3, minStock: 5, gstRate: 5, batchNumber: 'LT2405', expiryDate: '2026-11-30', schedule: 'H', unit: 'vials', reorderLevel: 5, rackLocation: 'Fridge-1' },
  { id: 'med11', sku: 'MED011', name: 'Asthalin Inhaler', genericName: 'Salbutamol', category: 'Inhalers', brand: 'Cipla', manufacturer: 'Cipla', color: 'Inhalers', size: '200 doses', mrp: 165, sellingPrice: 158, costPrice: 110, stock: 1, minStock: 5, gstRate: 12, batchNumber: 'AS2404', expiryDate: '2027-01-15', schedule: 'H', unit: 'pieces', reorderLevel: 5, rackLocation: 'Rack E-1' },
  { id: 'med12', sku: 'MED012', name: 'D-Rise Drops', genericName: 'Vitamin D3 60000 IU', category: 'Drops', brand: 'USV', manufacturer: 'USV Pvt Ltd', color: 'Drops', size: '15ml bottle', mrp: 210, sellingPrice: 200, costPrice: 140, stock: 22, minStock: 8, gstRate: 12, batchNumber: 'DR2406', expiryDate: '2027-06-15', schedule: 'OTC', unit: 'bottles', reorderLevel: 8, rackLocation: 'Rack E-2' },
  { id: 'med13', sku: 'MED013', name: 'Shelcal 500', genericName: 'Calcium + Vitamin D3', category: 'Tablets', brand: 'Torrent', manufacturer: 'Torrent Pharma', color: 'Tablets', size: '15 tablets/strip', mrp: 155, sellingPrice: 148, costPrice: 100, stock: 48, minStock: 15, gstRate: 12, batchNumber: 'SH2405', expiryDate: '2027-08-20', schedule: 'OTC', unit: 'strips', reorderLevel: 15, rackLocation: 'Rack C-2' },
  { id: 'med14', sku: 'MED014', name: 'Dolo 650', genericName: 'Paracetamol 650mg', category: 'Tablets', brand: 'Micro Labs', manufacturer: 'Micro Labs', color: 'Tablets', size: '15 tablets/strip', mrp: 28, sellingPrice: 26, costPrice: 16, stock: 5, minStock: 25, gstRate: 12, batchNumber: 'DL2406', expiryDate: '2027-04-10', schedule: 'OTC', unit: 'strips', reorderLevel: 25, rackLocation: 'Rack A-1' },
  { id: 'med15', sku: 'MED015', name: 'Augmentin 625', genericName: 'Amoxicillin + Clavulanate', category: 'Tablets', brand: 'GSK', manufacturer: 'GSK', color: 'Tablets', size: '10 tablets/strip', mrp: 245, sellingPrice: 235, costPrice: 170, stock: 28, minStock: 10, gstRate: 12, batchNumber: 'AG2405', expiryDate: '2026-10-25', schedule: 'H', unit: 'strips', reorderLevel: 10, rackLocation: 'Rack A-4' },
  { id: 'med16', sku: 'MED016', name: 'Montek LC', genericName: 'Montelukast + Levocetirizine', category: 'Tablets', brand: 'Sun Pharma', manufacturer: 'Sun Pharma', color: 'Tablets', size: '10 tablets/strip', mrp: 175, sellingPrice: 168, costPrice: 120, stock: 38, minStock: 12, gstRate: 12, batchNumber: 'ML2404', expiryDate: '2027-02-28', schedule: 'H', unit: 'strips', reorderLevel: 12, rackLocation: 'Rack B-4' },
  { id: 'med17', sku: 'MED017', name: 'Volini Gel', genericName: 'Diclofenac Gel', category: 'Ointments', brand: 'Sun Pharma', manufacturer: 'Sun Pharma', color: 'Ointments', size: '30g tube', mrp: 120, sellingPrice: 115, costPrice: 78, stock: 25, minStock: 8, gstRate: 18, batchNumber: 'VL2406', expiryDate: '2027-11-15', schedule: 'OTC', unit: 'tubes', reorderLevel: 8, rackLocation: 'Rack D-3' },
  { id: 'med18', sku: 'MED018', name: 'Ondem 4mg', genericName: 'Ondansetron', category: 'Tablets', brand: 'Alkem', manufacturer: 'Alkem Labs', color: 'Tablets', size: '10 tablets/strip', mrp: 48, sellingPrice: 45, costPrice: 30, stock: 55, minStock: 15, gstRate: 12, batchNumber: 'ON2405', expiryDate: '2027-05-20', schedule: 'H', unit: 'strips', reorderLevel: 15, rackLocation: 'Rack C-3' },
  { id: 'med19', sku: 'MED019', name: 'Thyronorm 50mcg', genericName: 'Levothyroxine', category: 'Tablets', brand: 'Abbott', manufacturer: 'Abbott India', color: 'Tablets', size: '100 tablets/bottle', mrp: 110, sellingPrice: 105, costPrice: 72, stock: 40, minStock: 10, gstRate: 12, batchNumber: 'TN2406', expiryDate: '2027-07-30', schedule: 'H', unit: 'bottles', reorderLevel: 10, rackLocation: 'Rack C-4' },
  { id: 'med20', sku: 'MED020', name: 'Electral ORS', genericName: 'Oral Rehydration Salts', category: 'Others', brand: 'FDC', manufacturer: 'FDC Ltd', color: 'Others', size: '21.8g sachet', mrp: 22, sellingPrice: 20, costPrice: 14, stock: 120, minStock: 30, gstRate: 5, batchNumber: 'EL2406', expiryDate: '2027-12-31', schedule: 'OTC', unit: 'sachets', reorderLevel: 30, rackLocation: 'Rack F-1' },
];

// Prescriptions (was fabricProducts)
export const fabricProducts = [
  {
    id: 'rx1', sku: 'RX-2026-0048', name: 'Ramesh Gupta', type: 'Pending',
    rxNumber: 'RX-2026-0048', patientName: 'Ramesh Gupta', patientAge: 45, patientGender: 'Male',
    doctorName: 'Dr. Priya Mehta', doctorRegNo: 'MH-12345', date: '2026-02-25',
    medicines: [
      { name: 'Crocin 500mg', dosage: '1-0-1', duration: '5 days', quantity: '1 strip' },
      { name: 'Azee 500mg', dosage: '1-0-0', duration: '3 days', quantity: '3 tablets' },
      { name: 'Pan 40', dosage: '1-0-0', duration: '10 days', quantity: '1 strip' },
    ],
    status: 'Pending', linkedBillId: null, notes: 'Take after food',
    // Keep fabric-compatible fields for backward compatibility
    width: '3 medicines', pricePerMeter: 195, costPerMeter: 130, totalMeters: 3, soldMeters: 0, gstRate: 12, color: 'Pending',
  },
  {
    id: 'rx2', sku: 'RX-2026-0045', name: 'Sunita Devi', type: 'Dispensed',
    rxNumber: 'RX-2026-0045', patientName: 'Sunita Devi', patientAge: 38, patientGender: 'Female',
    doctorName: 'Dr. Anand Kulkarni', doctorRegNo: 'MH-67890', date: '2026-02-24',
    medicines: [
      { name: 'Thyronorm 50mcg', dosage: '1-0-0', duration: '30 days', quantity: '1 bottle' },
      { name: 'Shelcal 500', dosage: '0-0-1', duration: '30 days', quantity: '2 strips' },
    ],
    status: 'Dispensed', linkedBillId: 'INV-2026-001230', notes: 'Thyronorm empty stomach',
    width: '2 medicines', pricePerMeter: 253, costPerMeter: 172, totalMeters: 2, soldMeters: 2, gstRate: 12, color: 'Dispensed',
  },
  {
    id: 'rx3', sku: 'RX-2026-0042', name: 'Arjun Patel', type: 'Partial',
    rxNumber: 'RX-2026-0042', patientName: 'Arjun Patel', patientAge: 62, patientGender: 'Male',
    doctorName: 'Dr. Sharma', doctorRegNo: 'MH-11223', date: '2026-02-23',
    medicines: [
      { name: 'Glycomet 500', dosage: '1-0-1', duration: '30 days', quantity: '2 strips', dispensed: true },
      { name: 'Amlong 5mg', dosage: '0-0-1', duration: '30 days', quantity: '1 strip', dispensed: true },
      { name: 'Telmisartan 40mg', dosage: '1-0-0', duration: '30 days', quantity: '1 strip', dispensed: false },
    ],
    status: 'Partial', linkedBillId: 'INV-2026-001225', notes: 'Telmisartan out of stock',
    width: '3 medicines', pricePerMeter: 125, costPerMeter: 80, totalMeters: 3, soldMeters: 2, gstRate: 12, color: 'Partial',
  },
  {
    id: 'rx4', sku: 'RX-2026-0040', name: 'Priya Sharma', type: 'Dispensed',
    rxNumber: 'RX-2026-0040', patientName: 'Priya Sharma', patientAge: 28, patientGender: 'Female',
    doctorName: 'Dr. Priya Mehta', doctorRegNo: 'MH-12345', date: '2026-02-22',
    medicines: [
      { name: 'Montek LC', dosage: '0-0-1', duration: '7 days', quantity: '1 strip' },
      { name: 'Benadryl Syrup', dosage: '5ml-5ml-5ml', duration: '5 days', quantity: '1 bottle' },
    ],
    status: 'Dispensed', linkedBillId: 'INV-2026-001220', notes: '',
    width: '2 medicines', pricePerMeter: 288, costPerMeter: 202, totalMeters: 2, soldMeters: 2, gstRate: 12, color: 'Dispensed',
  },
  {
    id: 'rx5', sku: 'RX-2026-0038', name: 'Mohan Yadav', type: 'Pending',
    rxNumber: 'RX-2026-0038', patientName: 'Mohan Yadav', patientAge: 55, patientGender: 'Male',
    doctorName: 'Dr. Kapoor', doctorRegNo: 'MH-44556', date: '2026-02-26',
    medicines: [
      { name: 'Amlong 5mg', dosage: '1-0-0', duration: '30 days', quantity: '2 strips' },
      { name: 'Glycomet 500', dosage: '1-0-1', duration: '30 days', quantity: '4 strips' },
      { name: 'Shelcal 500', dosage: '0-0-1', duration: '30 days', quantity: '2 strips' },
      { name: 'Ondem 4mg', dosage: 'SOS', duration: 'As needed', quantity: '1 strip' },
    ],
    status: 'Pending', linkedBillId: null, notes: 'Patient has heart condition, avoid aspirin',
    width: '4 medicines', pricePerMeter: 283, costPerMeter: 194, totalMeters: 4, soldMeters: 0, gstRate: 12, color: 'Pending',
  },
  {
    id: 'rx6', sku: 'RX-2026-0035', name: 'Kavita Joshi', type: 'Dispensed',
    rxNumber: 'RX-2026-0035', patientName: 'Kavita Joshi', patientAge: 42, patientGender: 'Female',
    doctorName: 'Dr. Anand Kulkarni', doctorRegNo: 'MH-67890', date: '2026-02-20',
    medicines: [
      { name: 'Asthalin Inhaler', dosage: '2 puffs-0-2 puffs', duration: '30 days', quantity: '1 piece' },
      { name: 'Montek LC', dosage: '0-0-1', duration: '14 days', quantity: '2 strips' },
    ],
    status: 'Dispensed', linkedBillId: 'INV-2026-001210', notes: 'Asthma follow-up',
    width: '2 medicines', pricePerMeter: 494, costPerMeter: 350, totalMeters: 2, soldMeters: 2, gstRate: 12, color: 'Dispensed',
  },
  {
    id: 'rx7', sku: 'RX-2026-0033', name: 'Rajesh Kumar', type: 'Pending',
    rxNumber: 'RX-2026-0033', patientName: 'Rajesh Kumar', patientAge: 35, patientGender: 'Male',
    doctorName: 'Dr. Priya Mehta', doctorRegNo: 'MH-12345', date: '2026-02-26',
    medicines: [
      { name: 'Augmentin 625', dosage: '1-0-1', duration: '7 days', quantity: '2 strips' },
      { name: 'Pan 40', dosage: '1-0-0', duration: '7 days', quantity: '1 strip' },
    ],
    status: 'Pending', linkedBillId: null, notes: 'Throat infection',
    width: '2 medicines', pricePerMeter: 555, costPerMeter: 405, totalMeters: 2, soldMeters: 0, gstRate: 12, color: 'Pending',
  },
  {
    id: 'rx8', sku: 'RX-2026-0030', name: 'Anjali Verma', type: 'Partial',
    rxNumber: 'RX-2026-0030', patientName: 'Anjali Verma', patientAge: 50, patientGender: 'Female',
    doctorName: 'Dr. Sharma', doctorRegNo: 'MH-11223', date: '2026-02-21',
    medicines: [
      { name: 'Volini Gel', dosage: 'Apply twice daily', duration: '14 days', quantity: '2 tubes', dispensed: true },
      { name: 'Shelcal 500', dosage: '0-0-1', duration: '30 days', quantity: '2 strips', dispensed: true },
      { name: 'D-Rise Drops', dosage: '1 sachet weekly', duration: '8 weeks', quantity: '8 sachets', dispensed: false },
    ],
    status: 'Partial', linkedBillId: 'INV-2026-001205', notes: 'Arthritis, ibuprofen allergy',
    width: '3 medicines', pricePerMeter: 630, costPerMeter: 418, totalMeters: 3, soldMeters: 2, gstRate: 12, color: 'Partial',
  },
];

// Patients (was customers)
export const customers = [
  { id: 'p1', name: 'Ramesh Gupta', phone: '+91 98765 43210', email: 'ramesh.g@email.com', loyaltyPoints: 8, creditBalance: 500, totalPurchases: 12450, lastVisit: new Date('2026-02-25'), age: 45, gender: 'Male', bloodGroup: 'B+', allergies: ['Penicillin'], chronicConditions: ['Diabetes (Type 2)'], prescriptionCount: 8, patientType: 'Regular', doctor: 'Dr. Priya Mehta' },
  { id: 'p2', name: 'Sunita Devi', phone: '+91 87654 32109', email: 'sunita.d@email.com', loyaltyPoints: 12, creditBalance: 0, totalPurchases: 8200, lastVisit: new Date('2026-02-24'), age: 38, gender: 'Female', bloodGroup: 'A+', allergies: [], chronicConditions: ['Thyroid'], prescriptionCount: 12, patientType: 'Regular', doctor: 'Dr. Anand Kulkarni' },
  { id: 'p3', name: 'Arjun Patel', phone: '+91 76543 21098', email: 'arjun.p@email.com', loyaltyPoints: 24, creditBalance: 1200, totalPurchases: 45800, lastVisit: new Date('2026-02-23'), age: 62, gender: 'Male', bloodGroup: 'O+', allergies: ['Sulfa drugs', 'Aspirin'], chronicConditions: ['Hypertension', 'Diabetes'], prescriptionCount: 24, patientType: 'Regular', doctor: 'Dr. Sharma' },
  { id: 'p4', name: 'Priya Sharma', phone: '+91 99887 76655', email: 'priya.s@email.com', loyaltyPoints: 3, creditBalance: 0, totalPurchases: 2800, lastVisit: new Date('2026-02-22'), age: 28, gender: 'Female', bloodGroup: 'AB+', allergies: [], chronicConditions: [], prescriptionCount: 3, patientType: 'Walk-in', doctor: 'Dr. Priya Mehta' },
  { id: 'p5', name: 'Mohan Yadav', phone: '+91 94256 78901', email: 'mohan.y@email.com', loyaltyPoints: 18, creditBalance: 2500, totalPurchases: 32500, lastVisit: new Date('2026-02-26'), age: 55, gender: 'Male', bloodGroup: 'A-', allergies: ['Aspirin'], chronicConditions: ['Heart Disease', 'Hypertension'], prescriptionCount: 18, patientType: 'Regular', doctor: 'Dr. Kapoor' },
  { id: 'p6', name: 'Kavita Joshi', phone: '+91 96543 21098', email: 'kavita.j@email.com', loyaltyPoints: 10, creditBalance: 0, totalPurchases: 15600, lastVisit: new Date('2026-02-20'), age: 42, gender: 'Female', bloodGroup: 'B-', allergies: [], chronicConditions: ['Asthma'], prescriptionCount: 10, patientType: 'Regular', doctor: 'Dr. Anand Kulkarni' },
  { id: 'p7', name: 'Rajesh Kumar', phone: '+91 91234 56789', email: 'rajesh.k@email.com', loyaltyPoints: 1, creditBalance: 0, totalPurchases: 750, lastVisit: new Date('2026-02-26'), age: 35, gender: 'Male', bloodGroup: 'O+', allergies: [], chronicConditions: [], prescriptionCount: 1, patientType: 'New', doctor: 'Dr. Priya Mehta' },
  { id: 'p8', name: 'Anjali Verma', phone: '+91 88765 43210', email: 'anjali.v@email.com', loyaltyPoints: 15, creditBalance: 800, totalPurchases: 28400, lastVisit: new Date('2026-02-21'), age: 50, gender: 'Female', bloodGroup: 'A+', allergies: ['Ibuprofen'], chronicConditions: ['Arthritis'], prescriptionCount: 15, patientType: 'Regular', doctor: 'Dr. Sharma' },
];

// Distributors (was suppliers)
export const suppliers = [
  { id: 'd1', name: 'MedLine Pharma Distributors', contact: 'Suresh Patil', phone: '+91 020-2567-8900', gstin: '27AABCM1234F1Z5', city: 'Pune', pendingDues: 85000, totalPurchases: 540000, dlNumber: 'MH-PUN-2020-12345', brands: ['Cipla', 'Sun Pharma', 'Alkem'], creditPeriod: 30 },
  { id: 'd2', name: 'HealthFirst Wholesale', contact: 'Rajiv Kapoor', phone: '+91 022-4567-8901', gstin: '27BBHFW5678G2Z7', city: 'Mumbai', pendingDues: 0, totalPurchases: 820000, dlNumber: 'MH-MUM-2019-67890', brands: ['GSK', 'Abbott', 'Sanofi', 'Pfizer'], creditPeriod: 45 },
  { id: 'd3', name: 'PharmaCare Supply Co.', contact: 'Amit Gupta', phone: '+91 011-2345-6789', gstin: '07CCPCS1122H3Z9', city: 'Delhi', pendingDues: 120000, totalPurchases: 380000, dlNumber: 'DL-DEL-2021-11223', brands: ['Lupin', 'Torrent', 'Micro Labs'], creditPeriod: 30 },
  { id: 'd4', name: 'CureWell Distributors', contact: 'Hemant Shah', phone: '+91 079-2567-4321', gstin: '24DDCWD3344I4Z1', city: 'Ahmedabad', pendingDues: 45000, totalPurchases: 290000, dlNumber: 'GJ-AHM-2018-44556', brands: ['USV', 'FDC', 'Unichem'], creditPeriod: 30 },
  { id: 'd5', name: 'LifeLine Pharma', contact: 'Prakash Deshmukh', phone: '+91 0712-245-6789', gstin: '27EELLP5566J5Z3', city: 'Nagpur', pendingDues: 0, totalPurchases: 180000, dlNumber: 'MH-NAG-2020-77889', brands: ['Cipla', 'Dr. Reddy\'s'], creditPeriod: 15 },
  { id: 'd6', name: 'MediStock India', contact: 'Ravi Reddy', phone: '+91 040-3456-7890', gstin: '36FFMSI7788K6Z5', city: 'Hyderabad', pendingDues: 65000, totalPurchases: 420000, dlNumber: 'TS-HYD-2022-99001', brands: ['Sun Pharma', 'J&J', 'Win-Medicare'], creditPeriod: 45 },
];

// Recent Bills
export const recentSales = [
  { id: 'inv1', invoiceNo: 'INV-2026-001234', customer: 'Ramesh Gupta', items: 3, amount: 373, paymentMode: 'UPI', date: new Date(), time: '6:45 PM' },
  { id: 'inv2', invoiceNo: 'INV-2026-001233', customer: 'Walk-in', items: 1, amount: 120, paymentMode: 'Cash', date: new Date(), time: '6:22 PM' },
  { id: 'inv3', invoiceNo: 'INV-2026-001232', customer: 'Mohan Yadav', items: 4, amount: 856, paymentMode: 'Card', date: new Date(), time: '5:48 PM' },
  { id: 'inv4', invoiceNo: 'INV-2026-001231', customer: 'Walk-in', items: 2, amount: 58, paymentMode: 'UPI', date: new Date(), time: '5:15 PM' },
  { id: 'inv5', invoiceNo: 'INV-2026-001230', customer: 'Sunita Devi', items: 2, amount: 265, paymentMode: 'Credit', date: new Date(), time: '4:32 PM' },
  { id: 'inv6', invoiceNo: 'INV-2026-001229', customer: 'Arjun Patel', items: 3, amount: 548, paymentMode: 'Cash', date: new Date(), time: '3:55 PM' },
  { id: 'inv7', invoiceNo: 'INV-2026-001228', customer: 'Walk-in', items: 1, amount: 28, paymentMode: 'UPI', date: new Date(), time: '3:20 PM' },
  { id: 'inv8', invoiceNo: 'INV-2026-001227', customer: 'Anjali Verma', items: 3, amount: 478, paymentMode: 'Card', date: new Date(), time: '2:45 PM' },
];

// Dashboard Stats
export const dashboardStats = {
  todaySales: 45230,
  yesterdaySales: 38500,
  monthSales: 385000,
  lastMonthSales: 342000,
  todayBills: 48,
  todayCustomers: 35,
  avgBillValue: 942,
  cashCollection: 18500,
  upiCollection: 15680,
  cardCollection: 8500,
  creditGiven: 2550,
  totalProducts: readyWearProducts.length,
  lowStockItems: readyWearProducts.filter(m => m.stock <= m.minStock).length,
  outOfStock: readyWearProducts.filter(m => m.stock === 0).length,
  nearExpiryItems: 12,
  prescriptionsToday: 48,
};

// Category Sales Distribution (Medicine categories)
export const categorySales = [
  { name: 'Tablets', value: 35, amount: 158305, color: '#059669' },
  { name: 'Capsules', value: 20, amount: 90460, color: '#0d9488' },
  { name: 'Syrups', value: 15, amount: 67845, color: '#06b6d4' },
  { name: 'Injections', value: 12, amount: 54276, color: '#d97706' },
  { name: 'Ointments', value: 8, amount: 36184, color: '#8b5cf6' },
  { name: 'Others', value: 10, amount: 45230, color: '#ec4899' },
];

// Hourly Sales Trend
export const hourlySales = [
  { hour: '9 AM', sales: 3200 },
  { hour: '10 AM', sales: 5500 },
  { hour: '11 AM', sales: 7200 },
  { hour: '12 PM', sales: 4800 },
  { hour: '1 PM', sales: 3100 },
  { hour: '2 PM', sales: 4500 },
  { hour: '3 PM', sales: 5800 },
  { hour: '4 PM', sales: 6200 },
  { hour: '5 PM', sales: 7500 },
  { hour: '6 PM', sales: 5800 },
  { hour: '7 PM', sales: 4200 },
  { hour: '8 PM', sales: 2800 },
];

// Weekly Sales
export const weeklySales = [
  { day: 'Mon', sales: 38000, bills: 42 },
  { day: 'Tue', sales: 35500, bills: 38 },
  { day: 'Wed', sales: 42000, bills: 48 },
  { day: 'Thu', sales: 48000, bills: 52 },
  { day: 'Fri', sales: 52000, bills: 58 },
  { day: 'Sat', sales: 62000, bills: 72 },
  { day: 'Sun', sales: 45230, bills: 48 },
];

// Monthly Sales
export const monthlySales = [
  { month: 'Sep', sales: 320000 },
  { month: 'Oct', sales: 355000 },
  { month: 'Nov', sales: 342000 },
  { month: 'Dec', sales: 410000 },
  { month: 'Jan', sales: 365000 },
  { month: 'Feb', sales: 385000 },
];

// Top Selling Medicines
export const topProducts = [
  { name: 'Dolo 650', genericName: 'Paracetamol 650mg', sales: 145, amount: 3770, trend: 12 },
  { name: 'Crocin 500mg', genericName: 'Paracetamol', sales: 128, amount: 3840, trend: 8 },
  { name: 'Azee 500mg', genericName: 'Azithromycin', sales: 82, amount: 7544, trend: 15 },
  { name: 'Benadryl Syrup', genericName: 'Diphenhydramine', sales: 65, amount: 7800, trend: -3 },
  { name: 'Pan 40', genericName: 'Pantoprazole', sales: 98, amount: 5880, trend: 5 },
];

// Low Stock / Expiry Alerts
export const lowStockAlerts = [
  { name: 'Dolo 650', currentStock: 5, minStock: 25, category: 'Tablets', urgency: 'critical', batchNumber: 'DL2406', expiryDate: '2027-04-10' },
  { name: 'Asthalin Inhaler', currentStock: 1, minStock: 5, category: 'Inhalers', urgency: 'critical', batchNumber: 'AS2404', expiryDate: '2027-01-15' },
  { name: 'Lantus Solostar', currentStock: 3, minStock: 5, category: 'Injections', urgency: 'high', batchNumber: 'LT2405', expiryDate: '2026-11-30' },
  { name: 'Betadine Ointment', currentStock: 4, minStock: 10, category: 'Ointments', urgency: 'high', batchNumber: 'BD2401', expiryDate: '2027-09-30' },
  { name: 'Cetzine 10mg', currentStock: 3, minStock: 15, category: 'Tablets', urgency: 'critical', batchNumber: 'CT2312', expiryDate: '2026-03-28' },
];

// Payment Method Distribution
export const paymentMethods = [
  { name: 'Cash', value: 40, amount: 18500, color: '#22c55e' },
  { name: 'UPI', value: 34, amount: 15680, color: '#8b5cf6' },
  { name: 'Card', value: 19, amount: 8500, color: '#3b82f6' },
  { name: 'Credit', value: 7, amount: 2550, color: '#f59e0b' },
];

// GST Summary (Pharmacy mixed rates: 5%, 12%, 18%)
export const gstSummary = {
  totalTaxable: 42890,
  cgst: 2573,
  sgst: 2573,
  totalTax: 5146,
  totalWithTax: 48036,
};
