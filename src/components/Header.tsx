import Link from 'next/link';
import React from 'react';
import { ButtonLink } from './ButtonLink';
import { Logo } from './Logo';
import { Heading } from './Heading';
import { contacts } from '@/src/components/data/contact';
import { SlideIn } from './SlideIn';
import Image from 'next/image';
import clsx from 'clsx';

// export async function Header() {
//   return (
//     <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
//       <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
//         <Link href="/" className="justify-self-start">
//           <Logo className="text-brand-purple ~h-12/20" />
//         </Link>
//         <nav
//           aria-label="Main"
//           className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
//         >
//           <ul className="flex flex-wrap items-center justify-center gap-8">
//             <li>Test</li>
//           </ul>
//         </nav>
//         <div className="justify-self-end">
//           <ButtonLink
//             href={''}
//             icon="cart"
//             color="purple"
//             aria-label="Cart (1)"
//           >
//             <span className="md:hidden">1</span>
//             <span className="hidden md:inline">Cart (1)</span>
//           </ButtonLink>
//         </div>
//       </div>
//     </header>
//   );
// }

export async function Header() {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
      <div className="mx-auto grid">
        <Heading className="relative place-self-start w-full flex justify-between items-center">
          <div>
            <div className={'font-sans uppercase'}>
              <h1>Jun Ou</h1>
            </div>

            <div className="max-w-[45ch] font-semibold ~text-lg/xl ml-3">
              <p>Fullstack Software Engineer</p>
              <p className="text-sm">{`On a mission to create better application`}</p>
            </div>
          </div>
        </Heading>

        <div className=" col-span-full row-start-1 flex justify-self-end items-center  md:col-span-2 md:col-start-2 md:row-start-1">
          {contacts.map((item, i) => (
            <div
              className="w-20 h-20 flex justify-center 
                items-center scale-100 text-xl"
              key={i}
            >
              <Link
                href={item.url}
                className="
                    group
                    relative flex justify-center items-center
                    w-[50px] h-[50px]
                    cursor-pointer
                    border-2 border-[var(--color-grey)]
                    rounded-full
                    transition-all duration-300
                    scale-100 hover:scale-150
                  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.svg}
                  alt=""
                  width={80}
                  height={80}
                  className="
                          w-7 h-7
                          transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150
                        "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
