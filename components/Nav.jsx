"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {

    // for check user logge in or not
  const isUserloogedin = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptify"
          width={30}
          height={30}
          className="object-conatin"
        />
        <p className="logo_text"> Promptify</p>
      </Link>

      {/* // for the mobile screen navigation */}
      <div className="sm:flex hidden">
        {isUserloogedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              {" "}
              Create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              {" "}
              SignOut
            </button>
            <Link href="/profile">
                <Image 
                src ="/assets/images/logo.svg"
                width={35}
                height={37}
                className="rounded-full"
                alt="profile"/> 
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
