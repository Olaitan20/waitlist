import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className = '', width, height, showText = false, textSize = "text-[20px]" }) => {
  const baseClasses = 'cursor-pointer inline-flex gap-1 w-fit items-center';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Link href="/" className={combinedClasses}>
      <Image
        src="/icons/logo.png"
        alt="A logo"
        width={width || 50}
        height={height || 50}
        className="max-[320px]:size-10 size-9 md:size-10"
        priority
      />
      {showText && <span className={`${textSize} font-extrabold tracking-tight`}>A.Bio</span>}
    </Link>
  );
};

export default Logo;
