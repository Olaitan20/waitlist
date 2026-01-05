'use client'

import { useState } from 'react'
import Image from 'next/image'
import Frame from '../../components/dnabygaza/frame.jsx'
import HeaderV3 from '../../components/ootn/HeaderV3.jsx'
import TabsV3 from '../../components/ootn/TabsV3.jsx'
import Forms from '../../components/ootn/Forms.jsx'
import Links from '../../components/ootn/Links.jsx'


export default function Home({ defaultTab = 'links' }) {
  const [tab, setTab] = useState(defaultTab)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden relative">
      <Frame>
        {/* Header (scrolls away) */}
        <HeaderV3 />

        {/* Tabs sticky to viewport top */}
        <div className="bg-white/90 backdrop-blur-md  border-b border-gray-200 ">
          <TabsV3 value={tab} onChange={setTab} />
        </div>

        {/* Content container */}
        <div className="relative min-h-[calc(100vh-210px)] w-full pb-4">
          {/* Background for links and menu tabs only */}
          {tab !== 'tickets' && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/fabs.jpg"
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
    
        <div className="mb-6">
          <Forms />
        </div>

        <Links/>
      </>
    )}

    
  </div>
)}

        </div>
      </Frame>
    </main>
  )
}