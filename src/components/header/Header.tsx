'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const noHeader = ['/track'];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <header className="bg-[#11172b] text-white p-4 py-2">
          <div className="custom_container !px-0 flex justify-center sm:justify-start items-center">
            <Link href="/">
              <Image src="https://i.imgur.com/84713h5.png" width={200} height={200} className="w-[150px]" alt="logo" />
            </Link>
            <nav className="hidden">
              <ul className="flex space-x-4">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
