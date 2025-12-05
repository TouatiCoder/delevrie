// Dummy data for client interface

export const clientProfile = {
  id: 'CLI-001',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+33 1 23 45 67 89',
  address: '123 Main Street, Paris, France',
  joinDate: '2023-01-15',
  totalOrders: 12,
  loyaltyPoints: 450
};

export const clientOrders = [
  {
    id: '#ORD-001',
    date: '2023-06-15',
    recipient: 'Jane Smith',
    destination: '456 Park Avenue, Lyon, France',
    amount: '€45.99',
    status: 'Delivered',
    livreur: 'Michael Smith'
  },
  {
    id: '#ORD-002',
    date: '2023-06-14',
    recipient: 'Robert Brown',
    destination: '789 Boulevard, Marseille, France',
    amount: '€32.50',
    status: 'In Transit',
    livreur: 'Robert Johnson'
  },
  {
    id: '#ORD-003',
    date: '2023-06-14',
    recipient: 'Emily Davis',
    destination: '101 River Road, Paris, France',
    amount: '€78.25',
    status: 'Pending',
    livreur: 'David Wilson'
  },
  {
    id: '#ORD-004',
    date: '2023-06-13',
    recipient: 'Michael Wilson',
    destination: '202 Mountain View, Lyon, France',
    amount: '€22.99',
    status: 'Delivered',
    livreur: 'James Miller'
  },
  {
    id: '#ORD-005',
    date: '2023-06-12',
    recipient: 'Sarah Johnson',
    destination: '303 Ocean Drive, Marseille, France',
    amount: '€56.75',
    status: 'Cancelled',
    livreur: 'John Anderson'
  }
];

export const dashboardStats = [
  { title: 'Total Orders', value: '12', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { title: 'Pending Orders', value: '2', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Loyalty Points', value: '450', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Saved Addresses', value: '3', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
];

export const cities = [
  { id: 1, name: 'Paris', country: 'France' },
  { id: 2, name: 'Lyon', country: 'France' },
  { id: 3, name: 'Marseille', country: 'France' },
  { id: 4, name: 'Toulouse', country: 'France' },
  { id: 5, name: 'Nice', country: 'France' }
];