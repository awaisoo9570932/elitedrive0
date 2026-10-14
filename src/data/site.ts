// ELITE DRIVE — all demo content lives here. Edit freely.
import sclass from "@/assets/car-sclass.jpg";
import bmw7 from "@/assets/car-bmw7.jpg";
import p911 from "@/assets/car-911.jpg";
import rrs from "@/assets/car-rrs.jpg";
import gclass from "@/assets/car-gclass.jpg";
import m4 from "@/assets/car-m4.jpg";
import tesla from "@/assets/car-tesla.jpg";
import r8 from "@/assets/car-r8.jpg";

export const siteConfig = {
  name: "ELITE DRIVE",
  tagline: "Luxury car rental, reimagined.",
  // Demonstration contact details — replace with your real business details.
  contact: {
    phone: "+00 000 000 0000 (demo)",
    email: "hello@example.com (demo)",
    address: "Your business address here (demo)",
    hours: "Mon–Sun, 08:00–22:00 (demo)",
  },
  // Add your real profile URLs. Empty links render as disabled icons.
  social: { instagram: "", facebook: "", x: "", youtube: "" },
  locations: ["City Centre", "Airport Terminal", "Central Station", "Hotel Delivery"],
};

export type Category = "Luxury" | "Sports" | "SUV" | "Electric";
export const categories: ("All Cars" | Category)[] = ["All Cars", "Luxury", "Sports", "SUV", "Electric"];

export type Car = {
  id: string;
  name: string;
  category: Category;
  image: string;
  transmission: string;
  seats: number;
  price: number;
  power: string;
  acceleration: string;
  fuel: string;
  features: string[];
};

export const cars: Car[] = [
  { id: "s-class", name: "Mercedes-Benz S-Class", category: "Luxury", image: sclass, transmission: "Automatic", seats: 5, price: 420, power: "429 hp", acceleration: "4.9s 0–100", fuel: "Hybrid", features: ["Massage seats", "Burmester audio", "Rear executive package", "Ambient lighting"] },
  { id: "bmw-7", name: "BMW 7 Series", category: "Luxury", image: bmw7, transmission: "Automatic", seats: 5, price: 390, power: "380 hp", acceleration: "5.3s 0–100", fuel: "Petrol", features: ["Panoramic roof", "Bowers & Wilkins audio", "Heated & cooled seats", "Driver assist pro"] },
  { id: "911", name: "Porsche 911", category: "Sports", image: p911, transmission: "PDK Automatic", seats: 4, price: 650, power: "443 hp", acceleration: "3.5s 0–100", fuel: "Petrol", features: ["Sport Chrono", "Sport exhaust", "Adaptive suspension", "Bose audio"] },
  { id: "range-rover-sport", name: "Range Rover Sport", category: "SUV", image: rrs, transmission: "Automatic", seats: 5, price: 480, power: "395 hp", acceleration: "5.4s 0–100", fuel: "Hybrid", features: ["Air suspension", "Terrain response", "Meridian audio", "Heated steering wheel"] },
  { id: "g-class", name: "Mercedes-Benz G-Class", category: "SUV", image: gclass, transmission: "Automatic", seats: 5, price: 720, power: "577 hp", acceleration: "4.5s 0–100", fuel: "Petrol", features: ["Three locking differentials", "AMG interior", "Burmester audio", "360° camera"] },
  { id: "m4", name: "BMW M4", category: "Sports", image: m4, transmission: "Automatic", seats: 4, price: 520, power: "503 hp", acceleration: "3.9s 0–100", fuel: "Petrol", features: ["M carbon seats", "M drive modes", "Head-up display", "Harman Kardon audio"] },
  { id: "model-s", name: "Tesla Model S", category: "Electric", image: tesla, transmission: "Single-speed", seats: 5, price: 360, power: "670 hp", acceleration: "3.2s 0–100", fuel: "Electric", features: ["Autopilot", "Glass roof", "17\" touchscreen", "Up to 600 km range"] },
  { id: "r8", name: "Audi R8", category: "Sports", image: r8, transmission: "S tronic Automatic", seats: 2, price: 890, power: "562 hp", acceleration: "3.4s 0–100", fuel: "Petrol", features: ["Naturally aspirated V10", "Quattro AWD", "Virtual cockpit", "Carbon ceramic brakes"] },
];

export const faqs = [
  { q: "What do I need to rent a car?", a: "Typically a valid driving licence held for a minimum period, a government-issued ID and a credit card in the driver's name. Age requirements may apply for high-performance vehicles." },
  { q: "Is a security deposit required?", a: "Most luxury rentals require a refundable deposit held on a credit card. The amount usually depends on the vehicle category." },
  { q: "Is mileage included?", a: "Rentals often include a daily mileage allowance, with additional kilometres charged at a set rate." },
  { q: "What insurance is included?", a: "Basic cover is commonly included, with optional upgrades to reduce your excess. Full terms are provided before you confirm." },
  { q: "Can I cancel my booking?", a: "Flexible cancellation is usually available up to a set time before pickup. Late cancellations may incur a fee." },
  { q: "How will my booking be confirmed?", a: "In a live setup, you would receive a confirmation by email after availability is checked. This website is a demonstration and does not send real confirmations." },
];

export const testimonials = [
  { name: "Alexandra M.", role: "Sample review", text: "The car was immaculate and the handover took minutes. It felt like a private concierge rather than a rental desk." },
  { name: "James R.", role: "Sample review", text: "Booked the Porsche for a weekend drive along the coast. Seamless from start to finish — I'll be back." },
  { name: "Sofia L.", role: "Sample review", text: "Our wedding car arrived spotless and on time. The team thought of every detail so we didn't have to." },
];
