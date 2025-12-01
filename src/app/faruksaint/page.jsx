'use client'

import { useState } from 'react'
import Image from 'next/image'
import Frame from '../../components/dnabygaza/frame.jsx'
import TabsV2 from '../../components/faruksaint/TabsV2.jsx'
import DnaFormV1 from '../../components/dnabygaza/DnaFormV1.jsx'
import AccordionV2 from '../../components/dnabygaza/AccordionV2.jsx'
import { MENU } from '../data/index.jsx'
import HeaderV2 from '@/components/faruksaint/HeaderV2.jsx'
import LinkListV2 from '@/components/faruksaint/LinkListV2.jsx'

export default function Home({ defaultTab = 'links' }) {
  const [tab, setTab] = useState(defaultTab)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="min-h-screen w-full overflow-x-hidden relative">
      {/* Full Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/fsLogo.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Frame>
          {/* Header (scrolls away) */}
          <HeaderV2 />

          {/* Tabs sticky to viewport top */}
          <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
            <TabsV2 value={tab} onChange={setTab} />
          </div>

          {/* Content container */}
          <div className="relative w-full pb-4">
            {/* Foreground content */}
            <div className="w-full px-4 py-6 max-w-md mx-auto">
              {tab === 'links' ? (
                <LinkListV2 />
              ) : (
                <div className="space-y-4 pb-10">
                  {Object.entries(MENU).map(([title, items], index) => (
                    <AccordionV2
                      key={title}
                      title={title}
                      items={items}
                      isOpen={openIndex === index}
                      onToggle={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Frame>
      </div>
    </main>
  )
}