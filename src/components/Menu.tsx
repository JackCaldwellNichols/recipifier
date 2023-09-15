"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuAlignRight } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Categories", url: "/categories" },
  { id: 3, title: "Search", url: "/search" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <span className="text-2xl">
          <LuAlignRight onClick={() => setOpen(true)} />
        </span>
      ) : (
        <span className="text-2xl">
          <AiOutlineClose onClick={() => setOpen(false)} />
        </span>
      )}
      {open && (
        <div className="bg-[#94A684] text-white absolute left-0 top-12 w-full z-10 h-[calc(100vh-6rem)] flex flex-col gap-8 text-3xl items-center justify-center">
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
