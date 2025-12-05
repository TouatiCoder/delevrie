// Dummy data for admin dashboard

export const ordersData = [
  {
    id: '#ORD-001',
    client: 'John Doe',
    livreur: 'Michael Smith',
    date: '2023-06-15',
    amount: '€45.99',
    status: 'Delivered',
    city: 'Paris'
  },
  {
    id: '#ORD-002',
    client: 'Jane Smith',
    livreur: 'Robert Johnson',
    date: '2023-06-14',
    amount: '€32.50',
    status: 'In Transit',
    city: 'Lyon'
  },
  {
    id: '#ORD-003',
    client: 'Robert Brown',
    livreur: 'David Wilson',
    date: '2023-06-14',
    amount: '€78.25',
    status: 'Pending',
    city: 'Marseille'
  },
  {
    id: '#ORD-004',
    client: 'Emily Davis',
    livreur: 'James Miller',
    date: '2023-06-13',
    amount: '€22.99',
    status: 'Delivered',
    city: 'Paris'
  },
  {
    id: '#ORD-005',
    client: 'Michael Wilson',
    livreur: 'John Anderson',
    date: '2023-06-13',
    amount: '€56.75',
    status: 'Cancelled',
    city: 'Lyon'
  },
  {
    id: '#ORD-006',
    client: 'Sarah Johnson',
    livreur: 'Mark Taylor',
    date: '2023-06-12',
    amount: '€41.30',
    status: 'Delivered',
    city: 'Marseille'
  },
  {
    id: '#ORD-007',
    client: 'David Thompson',
    livreur: 'Paul Martinez',
    date: '2023-06-12',
    amount: '€67.80',
    status: 'In Transit',
    city: 'Paris'
  },
  {
    id: '#ORD-008',
    client: 'Lisa Anderson',
    livreur: 'Steven Lee',
    date: '2023-06-11',
    amount: '€29.99',
    status: 'Pending',
    city: 'Lyon'
  }
];

export const clientsData = [
  {
    id: 'CLI-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+33 1 23 45 67 89',
    orders: 12,
    joined: '2023-01-15'
  },
  {
    id: 'CLI-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+33 1 23 45 67 90',
    orders: 8,
    joined: '2023-02-20'
  },
  {
    id: 'CLI-003',
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    phone: '+33 1 23 45 67 91',
    orders: 15,
    joined: '2023-03-10'
  },
  {
    id: 'CLI-004',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+33 1 23 45 67 92',
    orders: 5,
    joined: '2023-04-05'
  },
  {
    id: 'CLI-005',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    phone: '+33 1 23 45 67 93',
    orders: 20,
    joined: '2023-05-12'
  },
  {
    id: 'CLI-006',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+33 1 23 45 67 94',
    orders: 7,
    joined: '2023-05-18'
  }
];

export const livreursData = [
  {
    id: 'LIV-001',
    name: 'Michael Smith',
    email: 'michael.smith@example.com',
    phone: '+33 1 23 45 67 95',
    deliveries: 45,
    rating: 4.8,
    status: 'Active'
  },
  {
    id: 'LIV-002',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '+33 1 23 45 67 96',
    deliveries: 38,
    rating: 4.6,
    status: 'Active'
  },
  {
    id: 'LIV-003',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '+33 1 23 45 67 97',
    deliveries: 52,
    rating: 4.9,
    status: 'Active'
  },
  {
    id: 'LIV-004',
    name: 'James Miller',
    email: 'james.miller@example.com',
    phone: '+33 1 23 45 67 98',
    deliveries: 31,
    rating: 4.5,
    status: 'Inactive'
  },
  {
    id: 'LIV-005',
    name: 'John Anderson',
    email: 'john.anderson@example.com',
    phone: '+33 1 23 45 67 99',
    deliveries: 42,
    rating: 4.7,
    status: 'Active'
  },
  {
    id: 'LIV-006',
    name: 'Mark Taylor',
    email: 'mark.taylor@example.com',
    phone: '+33 1 23 45 68 00',
    deliveries: 29,
    rating: 4.4,
    status: 'Active'
  }
];

export const dashboardStats = [
  { title: 'Total Orders', value: '142', change: '12.5', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { title: 'Total Revenue', value: '€12,450', change: '8.3', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
  { title: 'Active Clients', value: '86', change: '5.2', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { title: 'Active Livreurs', value: '24', change: '-2.1', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
];