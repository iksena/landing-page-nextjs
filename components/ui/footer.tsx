import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '@/public/images/logo.png';

interface FooterProps {
  address: string
}

export default function Footer({ address }: FooterProps) {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image src={Logo} width={50} height={50} alt="Logo" />
                </Link>
              </div>
              <span className="text-gray-400 whitespace-pre-line">{address}</span>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; PT KPI. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
