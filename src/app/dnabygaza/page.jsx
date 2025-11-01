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
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Frame>
        {/* Header + Tabs */}
        <div className="bg-white sticky top-0 z-20">
          <HeaderV1 />
          <div>
            <TabsV1 value={tab} onChange={setTab} />
          </div>
        </div>

        {/* Main content area */}
        <div className="relative w-full min-h-[75vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Rectangle 39.png"
              alt="Background"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 py-6 max-w-md mx-auto">
            {tab === 'links' && (
              <div className="mb-6">
                <DnaFormV1 />
              </div>
            )}

            {tab === 'links' ? (
              <LinkListV1 />
            ) : (
              <div className="space-y-4">
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
    </main>
  )
}
