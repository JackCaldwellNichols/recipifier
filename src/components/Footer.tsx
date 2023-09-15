import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-32 md:h-40 p-10 md:p-20 xl:p-20 text-[#94A684] border-t-2 border-[#94A684] flex items-center justify-between ">
      <Link href="/" className="font-bold text-xl">
        RECÍPIFIER
      </Link>
      <p>COPYRIGHT 2023</p>
    </div>
  );
};

export default Footer;
