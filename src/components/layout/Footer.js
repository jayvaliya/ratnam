import Link from 'next/link';
import { brands } from '@/data/brands';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src="/images/logos/logo.png" alt="Ratnam Enterprise" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-sm mb-4">
              Based in Pune, RATNAM ENTERPRISE specializes in supplying high-quality industrial electrical goods, including control panel accessories, flexible wires, cables, industrial switchgear, and more.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2 text-sm">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <Link href={`/products#${brand.slug}`} className="hover:text-white transition">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/FsfFHYS44GuDRE1M6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Telco Road, Near Quality Circle,<br />
                  Bhosari MIDC,<br />
                  Pune - 411026, Maharashtra.
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Email</span>
                  <br />
                  <a href="mailto:sales@ratnam.org.in" className="hover:text-white transition">
                    sales@ratnam.org.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Akshat Khodifad</span>
                  <br />
                  <a href="tel:9429094277" className="hover:text-white transition">
                    9429094277
                  </a>
                  <br />
                  <span className="font-medium mt-2 block">Office</span>
                  <a href="tel:9426074277" className="hover:text-white transition">
                    9426074277
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Ratnam Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

