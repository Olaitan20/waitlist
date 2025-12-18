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
import Tickets from '../../components/tickets/Tickets.jsx'

export default function Home({ defaultTab = 'links' }) {
  const [tab, setTab] = useState(defaultTab)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden relative">
      <Frame>
        {/* Header (scrolls away) */}
        <HeaderV1 />

        {/* Tabs sticky to viewport top */}
        <div className="bg-white/90 backdrop-blur-md  border-b border-gray-200 ">
          <TabsV1 value={tab} onChange={setTab} />
        </div>

        {/* Content container */}
        <div className="relative w-full pb-4">
          {/* Background for links and menu tabs only */}
          {tab !== 'tickets' && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/Rectangle 39.png"
                alt="Background"
                fill
                className="object-cover object-bottom"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: '#000000/50' }}></div>
            </div>
          )}

          {/* NON-TICKETS CONTENT */}
{tab !== 'tickets' && (
  <div className="relative z-10 w-full px-4 py-6 max-w-md mx-auto">
    {tab === 'links' && (
      <>
        <LinkListV1 />
        <div className="mb-6">
          <DnaFormV1 />
        </div>
      </>
    )}

    {tab === 'menu' && (
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
)}

{/* TICKETS CONTENT */}
{tab === 'tickets' && (
  <div className="relative z-10 w-full min-h-screen">
    <Tickets />
  </div>
)}

        </div>
      </Frame>
    </main>
  )
}