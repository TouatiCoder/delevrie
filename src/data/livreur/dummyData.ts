// Dummy data for livreur interface

export const livreurProfile = {
  id: 'LIV-001',
  name: 'Michael Smith',
  email: 'michael.smith@example.com',
  phone: '+33 1 23 45 67 95',
  vehicle: 'Van - ABC-123-EF',
  joinDate: '2023-01-15',
  totalDeliveries: 45,
  rating: 4.8
};

export const livreurOrders = [
  {
    id: '#ORD-001',
    client: 'John Doe',
    destination: '456 Park Avenue, Lyon, France',
    amount: '€45.99',
    status: 'pending',
    date: '2023-06-15',
    distance: '2.5 km'
  },
  {
    id: '#ORD-002',
    client: 'Jane Smith',
    destination: '789 Boulevard, Marseille, France',
    amount: '€32.50',
    status: 'en route',
    date: '2023-06-14',
    distance: '3.2 km'
  },
  {
    id: '#ORD-003',
    client: 'Robert Brown',
    destination: '101 River Road, Paris, France',
    amount: '€78.25',
    status: 'livrée',
    date: '2023-06-14',
    distance: '1.8 km'
  },
  {
    id: '#ORD-004',
    client: 'Emily Davis',
    destination: '202 Mountain View, Lyon, France',
    amount: '€22.99',
    status: 'pending',
    date: '2023-06-13',
    distance: '4.1 km'
  },
  {
    id: '#ORD-005',
    client: 'Michael Wilson',
    destination: '303 Ocean Drive, Marseille, France',
    amount: '€56.75',
    status: 'annulée',
    date: '2023-06-12',
    distance: '5.7 km'
  }
];

export const earningsData = {
  today: {
    deliveries: 5,
    earnings: 45.99,
    tips: 8.50
  },
  week: {
    deliveries: 28,
    earnings: 256.75,
    tips: 42.30
  },
  month: {
    deliveries: 112,
    earnings: 1024.50,
    tips: 168.75
  }
};

export const dashboardStats = [
  { title: 'Today\'s Deliveries', value: '5', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { title: 'Today\'s Earnings', value: '€45.99', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
  { title: 'Rating', value: '4.8', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { title: 'Completed', value: '3', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
];