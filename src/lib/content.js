import {
  Ship,
  Anchor,
  ShipWheel,
  LifeBuoy,
  Fuel,
  Users,
  ShieldCheck,
  Container,
  Waves,
  Compass,
  ClipboardCheck,
  Droplets,
} from 'lucide-react'

export const stats = [
  { value: '24/7', label: 'Operational coverage across all serviced ports' },
  { value: '13', label: 'Countries served across Asia-Pacific and beyond' },
  { value: '2024', label: 'Founded in Singapore, built on decades of know-how' },
  { value: '100%', label: 'Effective resolution rate for client enquiries and operational requirements' },
]

export const serviceGroups = [
  {
    id: 'core',
    number: '01',
    icon: Ship,
    title: 'Core Agency Services',
    summary:
      'Seamless port calls handled end to end, from clearances and berthing to cargo coordination.',
    points: [
      'Comprehensive port agency solutions',
      'Direct operations in Singapore',
      'Coordinated support via established sub-agents',
      'Extensive coverage across Asia Pacific',
    ],
  },
  {
    id: 'operational',
    number: '02',
    icon: ShipWheel,
    title: 'Operational Support',
    summary:
      'Keep vessels moving with responsive on-the-ground support around the clock.',
    points: [
      'Bunker & deslop operation coordination',
      'Fresh water & supply boat arrangements',
      'Crew change, medical consultation visits & visas arrangements',
      'Cash to master (CTM)',
    ],
  },
  {
    id: 'specialized',
    number: '03',
    icon: Anchor,
    title: 'Other Services',
    summary:
      'Complex, high-stakes operations executed with precision and local expertise.',
    points: [
      'Ship-to-ship (STS) coordination',
      'Underwater cleaning & inspection',
      'Disclosed naval & warship husbandry',
      'Purchase & delivery of ship spares',
      'B/L services',
      'Ship chandling',
    ],
  },
  {
    id: 'value',
    number: '04',
    icon: LifeBuoy,
    title: 'Value-Added Services',
    summary:
      'Thoughtful extras that reduce friction and protect your bottom line.',
    points: [
      '24/7 vessel movement updates',
      'Multi-channel communication tailored to client preferences',
      'Cost-efficient coordination through competitive sourcing and expense control.',
      'Prompt updates of local port regulatory changes',
    ],
  },
]

// Image URLs are free-to-use Unsplash placeholders (Unsplash License).
// Swap these out for your own brand photography when available.
const img = (id) =>
  `https://images.unsplash.com/${id}?q=80&w=1400&auto=format&fit=crop`

export const bentoFeatures = [
  {
    icon: Container,
    title: 'Reliable Cargo Operations',
    body: 'Prompt loading, discharge, and turnaround notifications to safeguard your company’s interests.',
    image: '/bunker-coordination.png',
    imageAlt: 'Aerial view of tankers and vessels anchored at a busy anchorage',
  },
  {
    icon: ShieldCheck,
    title: 'Specialized Husbandry',
    body: 'Owner-protective attendance and meticulous husbandry, handled with discretion.',
    image: img('photo-1769297603337-3dd7bfba6cc1'),
    imageAlt: 'Officer in a hard hat on a ship deck overlooking the ocean',
  },
  {
    icon: Fuel,
    title: 'Bunker Coordination',
    body: 'Timely, well-documented bunker calls across all serviced ports.',
    image: '/cargo-operations.png',
    imageAlt: 'Bunker tanker moored alongside a vessel during a ship-to-ship operation',
  },
  {
    icon: Users,
    title: 'Crew Change Arrangements',
    body: 'Encompasses all services within crew change, in accordance with individual port regulations.',
    image: img('photo-1776661616822-ba34fe4e5638'),
    imageAlt: 'Crew members working on the deck of a cargo ship',
  },
  {
    icon: Droplets,
    title: 'Miscellaneous Services',
    body: 'Contact us for further details.',
    example: 'e.g. Underwater Service, Fresh Water Testing, Loadline Painting',
    image: img('photo-1758656993377-e7be90b57557'),
    imageAlt: 'Divers working underwater alongside a large ship hull',
  },
]

export const testimonials = [
  {
    quote:
      'NEPMARINE has been our go-to partner for vessel operations in Singapore and beyond. Their team is incredibly efficient in handling customs clearances and pilot bookings, saving us time and hassle. We trust them to handle even the most complex tasks with professionalism.',
    name: 'Mark L.',
    role: 'Fleet Operations Manager',
  },
  {
    quote:
      'The team at NEPMARINE consistently goes above and beyond. From bunker operations to crew changes, they manage everything seamlessly. Their in-depth knowledge of ports across 13 countries makes them an invaluable partner for our fleet.',
    name: 'Sophia T.',
    role: 'Chartering Director',
  },
  {
    quote:
      'We recently worked with NEPMARINE for ship-to-ship coordination and underwater cleaning. Their attention to detail and excellent communication ensured smooth operations every step of the way. Highly recommended for anyone needing a dependable local agent.',
    name: 'Jonathan How',
    role: 'Technical Superintendent',
  },
]

export const ports = [
  {
    country: 'Singapore',
    tagline: '1.3041° N, 103.8535° E',
    body: 'Round-the-clock agency at the world’s busiest transshipment hub, ensuring seamless coordination and efficient support throughout every port call.',
    harbours: ['Singapore'],
    icon: Compass,
  },
  {
    country: 'Malaysia',
    tagline: 'Straits-side strength',
    body: 'Extensive coverage along the Strait of Malacca with reliable clearances, bunkering, and cargo operations across key terminals.',
    harbours: [
      'Tanjung Pelepas',
      'Tanjung Bin',
      'Pasir Gudang',
      'Tanjung Langsat',
      'Pengerang',
      'Melaka',
      'Linggi',
      'Port Klang',
      'Port Dickson',
    ],
    icon: Waves,
  },
  {
    country: 'Indonesia',
    tagline: 'Archipelago reach',
    body: 'Local partners and on-the-ground know-how across key Indonesian anchorages for smooth, timely tanker operations.',
    harbours: ['Nipah', 'Karimun'],
    icon: Anchor,
  },
  {
    country: 'Vietnam',
    tagline: 'Mekong gateway',
    body: 'Responsive port-call handling along Vietnam’s fast-growing trade corridors and river terminals.',
    harbours: ['Cat Lai', 'Cai Mep', 'Hai Phong', 'Da Nang'],
    icon: Ship,
  },
  {
    country: 'Thailand',
    tagline: 'Gulf coast coverage',
    body: 'Dependable agency across Thailand’s principal gateways, from container calls to bunkering.',
    harbours: ['Laem Chabang', 'Bangkok', 'Map Ta Phut', 'Sriracha'],
    icon: Fuel,
  },
  {
    country: 'China',
    tagline: 'Deep-water scale',
    body: 'Coordinated support at China’s mega-ports with the throughput your schedule demands.',
    harbours: ['Yangshan', 'Shanghai', 'Ningbo', 'Shenzhen'],
    icon: Container,
  },
  {
    country: 'India',
    tagline: 'Subcontinent reach',
    body: 'On-the-ground expertise across India’s busiest container and bulk terminals.',
    harbours: ['Nhava Sheva (JNPT)', 'Mumbai', 'Mundra', 'Chennai'],
    icon: ShieldCheck,
  },
  {
    country: 'Bangladesh',
    tagline: 'Bay of Bengal access',
    body: 'Reliable husbandry and clearances at Bangladesh’s primary seaport and anchorages.',
    harbours: ['Chittagong', 'Mongla', 'Kutubdia Anchorage', 'Matarbari'],
    icon: LifeBuoy,
  },
  {
    country: 'Guam',
    tagline: 'Pacific waypoint',
    body: 'Mid-Pacific port-call support for transiting vessels and crew logistics at Apra Harbor.',
    harbours: ['Apra Harbor', 'Piti', 'Cabras Island', 'Outer Anchorage'],
    icon: Droplets,
  },
  {
    country: 'Philippines',
    tagline: 'Island-nation network',
    body: 'Trusted attendance across the Philippines’ principal harbours and transhipment anchorages.',
    harbours: ['Port of Manila', 'Batangas', 'Subic Bay', 'Cebu'],
    icon: Users,
  },
  {
    country: 'Taiwan',
    tagline: 'Cross-strait gateway',
    body: 'Reliable attendance and clearances across Taiwan’s principal container and bulk terminals.',
    icon: Anchor,
  },
  {
    country: 'Hong Kong',
    tagline: 'Pearl River hub',
    body: 'Efficient agency support at one of the world’s busiest deep-water harbours and transhipment centres.',
    icon: Waves,
  },
  {
    country: 'Australia',
    tagline: 'Southern ocean reach',
    body: 'Dependable port-call handling across Australia’s major bulk and container gateways.',
    icon: Ship,
  },
]

// Interactive-globe markers. `lat`/`lng` place the pin; contact fields are
// placeholders, swap for real per-port details when available.
export const globePorts = [
  {
    id: 'singapore',
    name: 'Singapore',
    port: 'Port of Singapore',
    lat: 1.2905,
    lng: 103.8520,
    address: '12 Marina Boulevard, Singapore 018982',
    phone: '+65 6957 7364',
    email: 'singapore@nepmarine.com',
    primary: true,
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    port: 'Port Klang',
    lat: 3.0000,
    lng: 101.3900,
    address: 'Jalan Pelabuhan, Port Klang 42000, Selangor',
    phone: '+60 3 3168 8000',
    email: 'malaysia@nepmarine.com',
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    port: 'Tanjung Priok, Jakarta',
    lat: -6.1045,
    lng: 106.8810,
    address: 'Jl. Raya Pelabuhan, Tanjung Priok, Jakarta 14310',
    phone: '+62 21 4390 9000',
    email: 'indonesia@nepmarine.com',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    port: 'Cat Lai, Ho Chi Minh City',
    lat: 10.7600,
    lng: 106.7900,
    address: 'Nguyen Thi Dinh, Cat Lai, Ho Chi Minh City',
    phone: '+84 28 3742 0000',
    email: 'vietnam@nepmarine.com',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    port: 'Laem Chabang',
    lat: 13.0820,
    lng: 100.8850,
    address: 'Laem Chabang Port, Chonburi 20230',
    phone: '+66 38 409 000',
    email: 'thailand@nepmarine.com',
  },
  {
    id: 'china',
    name: 'China',
    port: 'Yangshan, Shanghai',
    lat: 30.6260,
    lng: 122.0650,
    address: 'Yangshan Deep-Water Port, Shanghai 201306',
    phone: '+86 21 5840 0000',
    email: 'china@nepmarine.com',
  },
  {
    id: 'india',
    name: 'India',
    port: 'Nhava Sheva (JNPT), Mumbai',
    lat: 18.9490,
    lng: 72.9490,
    address: 'JNPT, Nhava Sheva, Navi Mumbai 400707',
    phone: '+91 22 2724 0000',
    email: 'india@nepmarine.com',
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    port: 'Chittagong',
    lat: 22.3100,
    lng: 91.8000,
    address: 'Port Connecting Rd, Chattogram 4100',
    phone: '+880 31 2510 000',
    email: 'bangladesh@nepmarine.com',
  },
  {
    id: 'guam',
    name: 'Guam',
    port: 'Apra Harbor',
    lat: 13.4430,
    lng: 144.6560,
    address: 'Apra Harbor, Piti, Guam 96915',
    phone: '+1 671 477 8000',
    email: 'guam@nepmarine.com',
  },
  {
    id: 'philippines',
    name: 'Philippines',
    port: 'Port of Manila',
    lat: 14.5800,
    lng: 120.9700,
    address: 'South Harbor, Port Area, Manila 1018',
    phone: '+63 2 8527 0000',
    email: 'philippines@nepmarine.com',
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    port: 'Port of Kaohsiung',
    lat: 22.6163,
    lng: 120.2833,
    address: 'Kaohsiung Harbor, Kaohsiung 803',
    phone: '+886 7 561 0000',
    email: 'taiwan@nepmarine.com',
  },
  {
    id: 'hongkong',
    name: 'Hong Kong',
    port: 'Kwai Tsing Terminals',
    lat: 22.3193,
    lng: 114.1360,
    address: 'Kwai Chung, New Territories, Hong Kong',
    phone: '+852 2100 0000',
    email: 'hongkong@nepmarine.com',
  },
  {
    id: 'australia',
    name: 'Australia',
    port: 'Port Botany, Sydney',
    lat: -33.9600,
    lng: 151.2300,
    address: 'Port Botany, Sydney NSW 2036',
    phone: '+61 2 9394 0000',
    email: 'australia@nepmarine.com',
  },
]

// Leadership. Add an `image` URL to any member to show a photo instead of the
// generated initials avatar.
export const generalManager = {
  name: 'Heinrich Lim',
  role: 'General Manager',
  email: 'heinrich.lim@nepmarine.com',
  businessCard: 'https://blinq.me/cmrahjx0m00410bs66l0n2ck1?bs=iwa',
  linktree: 'https://linktr.ee/nepmarine.agency',
  image: '/team-heinrich.png',
}

// Departments branching from the General Manager.
export const teamGroups = [
  {
    title: 'Commercial Operations',
    members: [
      {
        name: 'Abel Lam',
        role: 'Commercial Operations',
        email: 'agency@nepmarine.com',
        image: '/team-abel.png',
      },
      {
        name: 'Charmaine Yeow',
        role: 'Commercial Operations',
        email: 'agency@nepmarine.com',
        image: '/team-charmaine.png',
      },
    ],
  },
  {
    title: 'Naval Operations',
    members: [
      {
        name: 'Abdul Muhaimin',
        role: 'Naval Operations Manager',
        email: 'navy@nepmarine.com',
        businessCard: 'https://blinq.me/cmr20ms49058j0bs6c32xcwq2',
        image: '/team-abdul.png',
      },
    ],
  },
  {
    title: 'HR & Accounts',
    members: [
      {
        name: 'Nadhira Husna',
        role: 'HR & Accounts Manager',
        email: 'agency@nepmarine.com',
        businessCard: 'https://s.blinq.me/cmr3g675o00940cs6y78xrp42?bs=icl',
        image: '/team-nadhira.png',
      },
    ],
  },
]

export const process = [
  {
    icon: ClipboardCheck,
    title: 'Appointment & Pre-arrival',
    body: 'We confirm nominations, file pre-arrival documents, and brief all stakeholders before the vessel berths.',
  },
  {
    icon: Ship,
    title: 'Port Call Execution',
    body: 'Clearances, berthing, cargo ops, and crew matters handled on the ground in real time.',
  },
  {
    icon: ShieldCheck,
    title: 'Owner-Protective Oversight',
    body: 'Transparent reporting and disbursement accounts keep your interests fully protected.',
  },
  {
    icon: LifeBuoy,
    title: 'Departure & Follow-up',
    body: 'Smooth sailing out, with complete documentation and a clear post-call summary.',
  },
]
