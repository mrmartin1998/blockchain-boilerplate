// frontend/src/app/components/layout/Navbar.js
'use client';

import Link from 'next/link';
import WalletConnect from '../WalletConnect';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-start flex-1">
          <div className="text-primary-content font-bold text-xl">App Name</div>
        </div>
        <div className="flex justify-center flex-1">
          <ul className="flex space-x-4 items-center">
            <li><Link href="/" className="text-primary-content hover:text-secondary">Home</Link></li>
            <li><Link href="/pages/profile" className="text-primary-content hover:text-secondary">Profile</Link></li>
          </ul>
        </div>
        <div className="flex justify-end flex-1">
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
