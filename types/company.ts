export interface CompanyAddress {
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface CompanyProfile {
  legalName: string;
  contactPerson: string;
  telephones: readonly string[];
  whatsapp: { number: string; prefill: string };
  email: string;
  address: CompanyAddress;
  geo: { lat: number; lng: number } | null;
  hours: readonly string[] | null;
  sameAs: readonly string[];
}
