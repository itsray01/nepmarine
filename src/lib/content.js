import {
  Ship,
  Anchor,
  Wrench,
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
  { value: '3', label: 'Countries served across Singapore, Malaysia, and Indonesia' },
  { value: '2024', label: 'Founded in Singapore, built on decades of know-how' },
  { value: '100%', label: 'Owner-protective, transparent husbandry handling' },
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
      'Customs & immigration clearance',
      'Pilot & tug booking, berth scheduling',
      'Cargo operations supervision',
      'Documentation & port formalities',
    ],
  },
  {
    id: 'operational',
    number: '02',
    icon: Wrench,
    title: 'Operational Support',
    summary:
      'Keep vessels moving with responsive on-the-ground support around the clock.',
    points: [
      'Crew changes & repatriation',
      'Spares & stores delivery',
      'Bunker operations coordination',
      'Medical & emergency assistance',
    ],
  },
  {
    id: 'specialized',
    number: '03',
    icon: Anchor,
    title: 'Specialized Services',
    summary:
      'Complex, high-stakes operations executed with precision and local expertise.',
    points: [
      'Ship-to-ship (STS) coordination',
      'Underwater hull cleaning & inspection',
      'Owner-protective (P&I) attendance',
      'Survey & class arrangements',
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
      'Husbandry & cash-to-master',
      'Transparent disbursement accounts',
      'Logistics & freight forwarding',
      'Local procurement & sourcing',
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
    body: 'Smooth loading, discharge, and turnaround supervision that protects your schedule and your cargo.',
    image: img('photo-1769144256181-698b8f807066'),
    imageAlt: 'Container ship being loaded with colourful cargo at port',
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
    image: img('photo-1530890448995-4d82724f702c'),
    imageAlt: 'Tanker moored at a port at dusk',
  },
  {
    icon: Users,
    title: 'Crew Change Logistics',
    body: 'End-to-end crew rotations with immigration handled and travel arranged.',
    image: img('photo-1776661616822-ba34fe4e5638'),
    imageAlt: 'Crew members working on the deck of a cargo ship',
  },
  {
    icon: Droplets,
    title: 'Underwater Services',
    body: 'Hull cleaning, inspections, and STS support coordinated to spec.',
    image: img('photo-1758656993377-e7be90b57557'),
    imageAlt: 'Divers working underwater alongside a large ship hull',
  },
]

export const testimonials = [
  {
    quote:
      'Nepmarine has been our go-to partner for vessel operations in Singapore and beyond. Their team is incredibly efficient with customs clearances and pilot bookings, saving us time and hassle.',
    name: 'Mark L.',
    role: 'Fleet Operations Manager',
  },
  {
    quote:
      'The team consistently goes above and beyond. From bunker operations to crew changes, they manage everything seamlessly. Their knowledge of ports in Singapore, Malaysia, and Indonesia is invaluable.',
    name: 'Sophia T.',
    role: 'Chartering Director',
  },
  {
    quote:
      'We worked with Nepmarine for ship-to-ship coordination and underwater cleaning. Their attention to detail and clear communication ensured smooth operations every step of the way.',
    name: 'Jonathan How',
    role: 'Technical Superintendent',
  },
]

export const ports = [
  {
    country: 'Singapore',
    tagline: 'The maritime crossroads of Asia',
    body: 'Round-the-clock agency at the world’s busiest transshipment hub, from anchorage calls to full port operations.',
    harbours: ['Port of Singapore', 'Jurong', 'Sembawang', 'Eastern Anchorages'],
    icon: Compass,
  },
  {
    country: 'Malaysia',
    tagline: 'Straits-side strength',
    body: 'Coverage along the Strait of Malacca with reliable clearances, bunkering, and crew logistics.',
    harbours: ['Port Klang', 'Tanjung Pelepas', 'Johor', 'Pasir Gudang'],
    icon: Waves,
  },
  {
    country: 'Indonesia',
    tagline: 'Archipelago reach',
    body: 'Local partners and on-the-ground know-how across key Indonesian ports and anchorages.',
    harbours: ['Batam', 'Tanjung Priok', 'Surabaya', 'Nipah Anchorage'],
    icon: Anchor,
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
    id: 'australia',
    name: 'Australia',
    port: 'Port Botany, Sydney',
    lat: -33.9600,
    lng: 151.2300,
    address: 'Penrhyn Rd, Port Botany NSW 2036',
    phone: '+61 2 9000 4000',
    email: 'australia@nepmarine.com',
  },
]

// Placeholder team. Add an `image` URL to any member to show a photo instead
// of the generated initials avatar.
export const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    focus: 'Sets the course for the agency and our key owner relationships.',
    location: 'Singapore',
    image: '',
  },
  {
    name: 'Mei Ling Tan',
    role: 'Operations Director',
    focus: 'Oversees port-call execution and on-the-ground coordination across the region.',
    location: 'Singapore',
    image: '',
  },
  {
    name: 'Arif Rahman',
    role: 'Husbandry & P&I Lead',
    focus: 'Owner-protective attendance, surveys, and disbursement integrity.',
    location: 'Batam',
    image: '',
  },
  {
    name: 'Daniel Lim',
    role: 'Bunker & Logistics Manager',
    focus: 'Coordinates bunker calls, spares, stores, and freight movements.',
    location: 'Singapore',
    image: '',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Crew & Documentation Manager',
    focus: 'Crew changes, immigration, and port formalities, handled end to end.',
    location: 'Port Klang',
    image: '',
  },
  {
    name: 'James Wong',
    role: 'Business Development',
    focus: 'Builds new partnerships across Singapore, Malaysia, and Indonesia.',
    location: 'Singapore',
    image: '',
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
