'use client';

import Link from 'next/link';
import { footerLinks, socialLinks } from './MockData';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface IconComponents {
  [key: string]: React.ComponentType<IconBaseProps>;
}

const iconComponents: IconComponents = {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
};

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ['/track'];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="bg-[#11172b] py-6 mt-14">
          <div className="flex custom_container flex-wrap items-center justify-between gap-[5px] mt-[30px]">
            <Link href="/">
              <Image src="https://i.imgur.com/84713h5.png" width={200} height={200} className="w-[150px]" alt="logo" />
            </Link>
            <div className="flex gap-[20px]">
              {socialLinks.map((sLinks, index) => (
                <div key={index} className="w-full flex flex-col gap-2">
                  <h3 className="text-[#ffffff] text-[12px] font-bold">{sLinks.title}</h3>
                  <ul className="flex gap-3">
                    {sLinks.list.map((item, itemIndex) => {
                      const IconComponent = iconComponents[item.icon];
                      return (
                        <li key={itemIndex} className="mb-[5px]">
                          <Link href={item.slug} className="text-[#ffffff] text-xl">
                            <IconComponent />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="custom_container text-[#fff] flex flex-col gap-6">
            <ul className="flex flex-wrap gap-3 text-sm items-center">
              <li>
                <Link className="hover:underline" href="">
                  Fraud Awareness
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="">
                  Privacy Notice
                </Link>
              </li>
            </ul>
            <div className="text-center text-sm">&copy; 2024 Flight Details Checker. All rights reserved.</div>
          </div>
        </div>
      )}
    </>
  );
}
