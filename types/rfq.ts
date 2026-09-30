export interface RFQPayload {
  fullName: string;
  company: string;
  email?: string;
  phone?: string;
  country?: string;
  productCategory: string;
  material?: string;
  coating?: string;
  size?: string;
  quantity?: string;
  deliveryPin?: string;
  notes?: string;
  consent: true;
  /** Honeypot — must be empty. */
  company_website?: string;
}

export interface ContactPayload {
  fullName: string;
  email: string;
  message: string;
  consent: true;
  company_website?: string;
}
