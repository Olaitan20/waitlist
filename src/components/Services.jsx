'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Customize",
      description: "Customize your bio link like never before.",
      icon: "/icons/customize.svg",
    },
    {
      title: "Access",
      description: "Access powerful features built for creators, brands & businesses.",
      icon: "/icons/integrate.svg",
    },
    {
      title: "Unlock",
      description: "Unlock early access + exclusive perks",
      icon: "/icons/Share.svg",
    },
  ];

  return (
    <section className="py-8 px-4 sm:py-10 md:py-14 lg:py-16">
      <div className="max-w-5xl sm:max-w-2xl md:max-w-4xl text-center px-4 sm:px-6 md:px-8 z-[999] mx-auto text-center">
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F5F1FF] lg:rounded-2xl shadow-md p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Image
                  src={service.icon}
                  alt={service.title + " icon"}
                  width={58}
                  height={58}
                  className="object-contain sm:w-[48px] sm:h-[48px] md:w-[58px] md:h-[58px]"
                />
              </div>
              <h3 className="text-[18px] lg:text-[25px] font-semibold mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-[13px] font-[400] sm:text-[10px] md:text-[13px] leading-snug text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
