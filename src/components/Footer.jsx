// components/Footer.js
import Link from 'next/link';
import Logo from './shared/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#331400]  text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-1">
              <Logo width={30} height={30} />
              <span className="font-bold text-white text-xl">bio.site</span>
            </div>
            {/* <p className="text-amber-100 mb-4 max-w-md">
              A.Bio is a free platform to use, but premium & it one page link 
              gives you audience efficiently, and track results.
            </p>
            <p className="text-amber-100">
              to boost your business at front levels
              your social media game.
            </p> */}
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-bold trial text-xl mb-4">Product</h3>
            <div className="space-y-4 font-thin text-[13px]">
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                How it works
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Setup
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="font-bold trial text-xl mb-4">Legal</h3>
            <div className="space-y-4 font-thin text-[13px]">
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Community Guidelines
              </Link>
              <Link href="#" className="block text-white hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              © {currentYear} A.Bio site. One Link Endless Connections
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <span className="text-xs">📘</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <span className="text-xs">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <span className="text-xs">🐦</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <span className="text-xs">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


