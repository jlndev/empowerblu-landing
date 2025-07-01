import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EmpowerBlu
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#industries" className="text-gray-700 hover:text-blue-600 transition-colors">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 