// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// const Nav = () => {

//     // for check user logge in or not
//   const isUserloogedin = true;

//   // for the states
//   const [provides, setProvides] = useState(null);
//   const [toggledrop, setToggledrop] = useState(false);

//   // effect for that

//   useEffect(() =>{
//     const setProvides = async()=>{
//         const response = await getProviders();
//         setProvides(response);
//     }
//     setProvides();
//   },[])
//   return (
//     <nav className="flex-between w-full mb-16 pt-3">
//       <Link href="/" className="flex gap-2 flex-center">
//         <Image
//           src="/assets/images/logo.svg"
//           alt="Promptify"
//           width={30}
//           height={30}
//           className="object-conatin"
//         />
//         <p className="logo_text"> Promptify</p>
//       </Link>

//       {/* // for the mobile screen navigation */}
//       <div className="sm:flex hidden">
//         {isUserloogedin ? (
//           <div className="flex gap-3 md:gap-5">
//             <Link href="/create-prompt" className="black_btn">
//               {" "}
//               Create post
//             </Link>
//             <button type="button" onClick={signOut} className="outline_btn">
//               {" "}
//               SignOut
//             </button>
//             <Link href="/profile">
//               <Image
//                 src="/assets/images/logo.svg"
//                 width={35}
//                 height={37}
//                 className="rounded-full"
//                 alt="profile"
//               />
//             </Link>
//           </div>
//         ) : (
//           <>
//             {provides &&
//               Object.values(provides).map((provides) => (
//                 <button
//                   type=" button"
//                   key={provides.name}
//                   onClick={() => signIn(provides.id)}
//                   className="black_btn"
//                 >
//                   SignIN
//                 </button>
//               ))}
//           </>
//         )}
//       </div>

//       {/* mobilenavigation */}
//       <div className="sm:hidden flex relative">
//         {isUserloogedin ? (
//           <div className="flex">
//             <Image
//               src="/assets/images/logo.svg"
//               width={35}
//               height={37}
//               className="rounded-full"
//               alt="profile"
//               onClick={() => setToggledrop((prev)=>
//                  !prev)}
//             />
//             {toggledrop && (
//                 <div className="dropdown">
//                     <Link href="/profile"
//                     className="dropdown_link"
//                     onClick={() => setToggledrop(false)}>
//                         My profile
//                     </Link>
//                 </div>
//             )}
//           </div>
//         ) : (
//           <>
//             {provides &&
//               Object.values(provides).map((provides) => (
//                 <button
//                   type=" button"
//                   key={provides.name}
//                   onClick={() => signIn(provides.id)}
//                   className="black_btn"
//                 >
//                   SignIN
//                 </button>
//               ))}
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Nav;
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserloogedin = true;


  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptify</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserloogedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserloogedin ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;