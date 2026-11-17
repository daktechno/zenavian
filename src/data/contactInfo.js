import { BadgeCheck, Truck, Headset } from 'lucide-react'
import {
  EMAIL,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  WHATSAPP_DISPLAY,
} from '../utils/constants'

export const contactInfo = {
  email: EMAIL,
  phones: [
    { display: WHATSAPP_DISPLAY, tel: PHONE_PRIMARY_TEL },
    { display: PHONE_SECONDARY_DISPLAY, tel: PHONE_SECONDARY_TEL },
  ],
  hours: 'Mon-Sat: 09:00 - 18:00 IST',
  hub: {
    name: 'Central Poultry Corridor Logistics Hub',
    cities: 'Hyderabad & Bengaluru, India',
    note: 'Specialized cold-chain pharma distribution node',
  },
}

export const distributorBenefits = [
  {
    icon: BadgeCheck,
    tone: 'text-primary',
    title: 'Protected Regional Territories',
    text: 'Clear geographic allocation with dedicated distributor margins and contract compliance.',
  },
  {
    icon: Truck,
    tone: 'text-secondary',
    title: 'Robust Supply Chain Logistics',
    text: 'Cold-chain and temperature-monitored dispatches direct from central pharmaceutical depots.',
  },
  {
    icon: Headset,
    tone: 'text-primary',
    title: 'Avian Veterinary Field Support',
    text: 'Technical farm seminars, diagnostic post-mortem kits, and flock consultation assistance.',
  },
]

export const regions = [
  'Andhra Pradesh',
  'Telangana',
  'Tamil Nadu',
  'Karnataka',
  'Maharashtra',
  'Punjab & Haryana',
  'West Bengal',
  'Other / Multi-State',
]

export const productInterests = [
  { value: 'Full Portfolio', label: 'Complete Poultry Formulary' },
  { value: 'Cox Zen', label: 'Cox Zen (Anticoccidial)' },
  { value: 'Pulmo Zen', label: 'Pulmo Zen (Respiratory)' },
  { value: 'Bact-T Drop', label: 'Bact-T Drop (CRD & Coryza)' },
  { value: 'Allbact-Z', label: 'Allbact-Z (E. coli & Antibacterial)' },
]
