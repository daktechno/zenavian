import { FileText, BookOpen, Package, FolderOpen } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/constants'

/**
 * Product content is the approved copy from the original site. `detail` holds extra,
 * non-clinical copy for each product page and only restates approved information.
 * Composition, dosage and withdrawal period are intentionally NOT stated: they must come from the approved label.
 */
export const products = [
  {
    id: 'cox-zen',
    slug: 'cox-zen',
    path: '/products/cox-zen',
    name: 'COX ZEN',
    category: 'Anticoccidial',
    filter: 'Anticoccidial',
    categoryTone: 'text-plum-dark',
    audience: 'Commercial Poultry (Broilers & Layers)',
    subtitle: 'Coccidiosis Management',
    badge: 'Batch Verified',
    image: '/images/products/cox-zen.webp',
    imageAlt:
      'COX ZEN veterinary anticoccidial oral suspension, 100 ml amber glass bottle with white cap on a laboratory bench with a graduated cylinder and syringe',
    description:
      'Cox Zen is our poultry healthcare product positioned for coccidiosis management. Specially developed to support intestinal lining stability and control oocyst proliferation.',
    bullets: [
      'Coccidiosis management & parasite mitigation',
      'Support during acute coccidial challenges',
      'Helps support overall flock health and feed performance',
    ],
    callout: {
      variant: 'note',
      label: 'Compliance Note:',
      text: 'Composition, dosage, withdrawal period, and specific claims should be displayed exactly as approved on the product label.',
    },
    cta: { label: 'Request Technical Spec Sheet', icon: FileText, enquiry: 'Technical Spec Sheet' },
    whatsapp: buildWhatsAppUrl('Hello, I have an enquiry regarding Cox Zen anticoccidial.'),
    seo: {
      title: 'COX ZEN – Poultry Anticoccidial for Coccidiosis Management',
      description:
        'COX ZEN by ZenAvian Healthcare: a poultry anticoccidial positioned for coccidiosis management in broilers and layers. Enquire for details and supply.',
      keywords: { primary: 'poultry anticoccidial', supporting: ['coccidiosis management in poultry', 'veterinary anticoccidial India', 'COX ZEN'] },
    },
    detail: {
      intro:
        'Coccidiosis is an intestinal parasitic challenge that is a recognised concern in commercial broiler and layer flocks. COX ZEN is positioned by ZenAvian Healthcare as a poultry anticoccidial to support coccidiosis management programmes.',
      useCases: ['Broiler flocks', 'Layer flocks'],
    },
  },
  {
    id: 'pulmo-zen',
    slug: 'pulmo-zen',
    path: '/products/pulmo-zen',
    name: 'PULMO ZEN',
    category: 'Respiratory Healthcare',
    filter: 'Respiratory Healthcare',
    categoryTone: 'text-secondary',
    audience: 'Commercial Poultry',
    subtitle: 'Respiratory Health',
    badge: 'Avian Airway Tested',
    image: '/images/products/pulmo-zen.webp',
    imageAlt:
      'PULMO ZEN veterinary respiratory healthcare oral solution bottle with teal lung-icon label beside a glass beaker and pipette in a laboratory',
    description:
      'Pulmo Zen is designed as a poultry respiratory-health solution for farms facing acute or environmental respiratory challenges, facilitating bronchial comfort.',
    bullets: [
      'Targeted avian respiratory health',
      'Active support during seasonal respiratory distress',
      'Helps support flock recovery and productive performance',
    ],
    callout: {
      variant: 'note',
      label: 'Compliance Note:',
      text: 'Specific indications should be based on the approved composition and product label.',
    },
    cta: { label: 'Request Dosage Guide', icon: BookOpen, enquiry: 'Dosage Guide' },
    whatsapp: buildWhatsAppUrl('Hello, I have an enquiry regarding Pulmo Zen respiratory solution.'),
    seo: {
      title: 'PULMO ZEN – Poultry Respiratory Healthcare Solution',
      description:
        'PULMO ZEN by ZenAvian Healthcare: a poultry respiratory-health solution for acute or environmental respiratory challenges. Request dosage guidance.',
      keywords: { primary: 'poultry respiratory health product', supporting: ['avian respiratory support', 'poultry respiratory solution India', 'PULMO ZEN'] },
    },
    detail: {
      intro:
        'Respiratory challenges, whether acute or linked to the farm environment, are a common concern in commercial poultry. PULMO ZEN is positioned by ZenAvian Healthcare as a poultry respiratory-health solution to support bronchial comfort.',
      useCases: ['Commercial poultry flocks', 'Seasonal or environmental respiratory challenges'],
    },
  },
  {
    id: 'bact-t-drop',
    slug: 'bact-t-drop',
    path: '/products/bact-t-drop',
    name: 'BACT-T DROP',
    category: 'Antibacterial / Respiratory Healthcare',
    filter: 'Antibacterial',
    categoryTone: 'text-plum-dark',
    audience: 'Commercial Poultry',
    subtitle: 'CRD & Coryza Support',
    badge: 'High Dissolution',
    image: '/images/products/bact-t-drop.webp',
    imageAlt:
      'BACT-T DROP veterinary oral solution dropper bottle on a stainless steel diagnostic workstation with a microscope and monitor in the background',
    description:
      'Bact-T Drop is positioned as a poultry product for CRD and infectious coryza-related bacterial challenges with high oral bioavailability.',
    bullets: [
      'CRD (Chronic Respiratory Disease) management',
      'Infectious coryza mitigation',
      'Respiratory bacterial challenges',
      'Targeted support during mixed respiratory infections',
    ],
    callout: {
      variant: 'insight',
      label: 'Clinical Insight:',
      text: 'CRD and infectious coryza can present with respiratory signs such as coughing, sneezing, and nasal discharge; accurate diagnosis is important because respiratory disease complexes can involve multiple pathogens.',
    },
    cta: { label: 'Enquire for Bulk Supply', icon: Package, enquiry: 'Bulk Supply' },
    whatsapp: buildWhatsAppUrl('Hello, I would like commercial details for Bact-T Drop.'),
    seo: {
      title: 'BACT-T DROP – Poultry Product for CRD & Infectious Coryza',
      description:
        'BACT-T DROP by ZenAvian Healthcare: positioned for CRD and infectious coryza-related bacterial challenges in commercial poultry. Enquire for bulk supply.',
      keywords: { primary: 'poultry CRD treatment product', supporting: ['infectious coryza poultry', 'chronic respiratory disease poultry', 'BACT-T DROP'] },
    },
    detail: {
      intro:
        'Chronic Respiratory Disease (CRD) and infectious coryza are bacterial challenges that can affect commercial flocks. BACT-T DROP is positioned by ZenAvian Healthcare for these challenges; accurate diagnosis by a veterinarian remains important.',
      useCases: ['Commercial poultry flocks', 'Mixed respiratory infections under veterinary guidance'],
    },
  },
  {
    id: 'allbact-z',
    slug: 'allbact-z',
    path: '/products/allbact-z',
    name: 'ALLBACT-Z',
    category: 'Antibacterial / Poultry Healthcare',
    filter: 'Antibacterial',
    categoryTone: 'text-plum-dark',
    audience: 'Commercial Poultry',
    subtitle: 'E. coli & Bacterial Disease Support',
    badge: 'Potency Certified',
    image: '/images/products/allbact-z.webp',
    imageAlt:
      'ALLBACT-Z veterinary antibiotic suspension, 100 ml amber bottle with white, orange and blue label on a clean laboratory counter',
    description:
      'Allbact-Z is positioned for poultry bacterial-health challenges, including *E. coli* and coryza, according to its approved product indications.',
    bullets: [
      '*E. coli* / colibacillosis management',
      'Infectious coryza control',
      'Secondary bacterial complications',
      'Support during severe bacterial challenges',
    ],
    callout: {
      variant: 'warning',
      label: 'Important Regulatory & Clinical Note:',
      text: "Fowlpox is a viral disease; antibiotics do not treat the underlying poxvirus and have a role only for secondary bacterial complications under veterinary direction. India's official veterinary vaccine listings identify fowlpox vaccines for biological protection.",
    },
    cta: { label: 'View Batch Dossier', icon: FolderOpen, enquiry: 'Batch Dossier' },
    whatsapp: buildWhatsAppUrl('Hello, I have an enquiry regarding Allbact-Z antibacterial.'),
    seo: {
      title: 'ALLBACT-Z – Poultry Antibacterial for E. coli & Coryza',
      description:
        'ALLBACT-Z by ZenAvian Healthcare: positioned for poultry bacterial challenges including E. coli and coryza, per approved indications. Request the dossier.',
      keywords: { primary: 'poultry antibacterial for E. coli', supporting: ['colibacillosis poultry', 'infectious coryza control', 'ALLBACT-Z'] },
    },
    detail: {
      intro:
        'Bacterial challenges such as E. coli (colibacillosis) and infectious coryza are a concern in commercial poultry. ALLBACT-Z is positioned by ZenAvian Healthcare for these challenges according to its approved product indications.',
      useCases: ['Commercial poultry flocks', 'Bacterial challenges under veterinary direction'],
    },
  },
]

export const productFilters = ['All', 'Anticoccidial', 'Respiratory Healthcare', 'Antibacterial']
export const getProduct = (slug) => products.find((p) => p.slug === slug)
