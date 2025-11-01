'use client'

import { useState } from 'react'
import Image from 'next/image'
import Frame from '../../components/dnabygaza/frame.jsx'
import HeaderV1 from '../../components/dnabygaza/HeaderV1.jsx'
import TabsV1 from '../../components/dnabygaza/TabsV1.jsx'
import LinkListV1 from '../../components/dnabygaza/LinkListV1.jsx'
import DnaFormV1 from '../../components/dnabygaza/DnaFormV1.jsx'
import AccordionV2 from '../../components/dnabygaza/AccordionV2.jsx'
import { MENU } from '../data/index.jsx'

export default function Home({ defaultTab = 'links' }) {
  const [tab, setTab] = useState(defaultTab)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden relative">
      <Frame>
        {/* Header (scrolls away) */}
        <HeaderV1 />

        {/* Tabs sticky to viewport top */}
        <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
          <TabsV1 value={tab} onChange={setTab} />
        </div>

        {/* Content container */}
        <div className="relative w-full pb-4">
          {/* Background expands with content */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Rectangle 39.png"
              alt="Background"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 w-full px-4 py-6 max-w-md mx-auto">
            {tab === 'links' && (
              <div className="mb-6">
                <DnaFormV1 />
              </div>
            )}

            {tab === 'links' ? (
              <LinkListV1 />
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

        {/* Footer */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center font-semibold justify-center text-white/80 text-[12px] mt-2">
        <div className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="flex items-center font-semibold text-white gap-1">
            <Image
                src="/icons/A.Bio.png"
                alt="Aorbyte logo"
                width={18}
                height={18}
                className="object-contain"
            />
            Orbyte
            </span>
        </div>
        </div> */}

      </Frame>
    </main>
  )
}



