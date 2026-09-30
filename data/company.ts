import type { CompanyProfile } from '@/types/company';

export const company: CompanyProfile = {
  legalName: 'KP Fasteners',
  contactPerson: 'Mr. Pramod Panchal',
  telephones: ['+91-98982-30448'],
  whatsapp: {
    number: '+919898230448',
    prefill: 'Hello KP Fasteners, I want to enquire about fasteners.',
  },
  email: 'sales@kpfasteners.com',
  address: {
    streetAddress: '23/4, Ghanshyam Industrial Estate, Margha Farm',
    locality: 'Ahmedabad',
    region: 'GJ',
    postalCode: '380024',
    country: 'IN',
  },
  geo: null,
  hours: ['Mo-Sa 09:30-19:00'],
  sameAs: ['https://www.indiamart.com/kp-fasteners-ahmedabad/'],
};
