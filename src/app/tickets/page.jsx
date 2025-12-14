'use client'

import { useState } from 'react'
import Frame from '../../components/dnabygaza/frame.jsx'
import TabsV3 from '@/components/tickets/TabsV3.jsx'
import Tickets from '@/components/tickets/Tickets.jsx'
import HeaderV3 from '@/components/tickets/HeaderV3.jsx'

export default function Home({ defaultTab = 'links' }) {
  const [tab, setTab] = useState(defaultTab)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="min-h-screen w-full overflow-x-hidden relative">
      {/* Full Background Image */}
      
  
      {/* Content overlay */}
      <div className="relative z-10">
        <Frame>
          {/* Header (scrolls away) */}
          <HeaderV3 />

          {/* Tabs sticky to viewport top */}
          <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
            <TabsV3 value={tab} onChange={setTab} />
          </div>

          {/* Content container */}
          <div className="relative w-full ">
            <Tickets/>
          </div>
        </Frame>
      </div>
    </main>
  )
}