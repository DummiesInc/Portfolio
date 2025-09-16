'use client';

import { Bounded } from '@/src/components/Bounded';
import { Heading } from '@/src/components/Heading';
import React, { useEffect, useState } from 'react';
import { Quote, quotesData } from '../../components/data/quotes';
import InteractiveSkateboard from './InteractiveSkateboard';
const DEFAULT_DECK_TEXTURE = '/skateboard/Deck.webp';
const DEFAULT_WHEEL_TEXTURE = '/skateboard/SkateWheel1.png';
const DEFAULT_TRUCK_COLOR = '#6F6E6A';
const DEFAULT_BOLT_COLOR = '#6F6E6A';
import { ButtonLink } from '@/src/components/ButtonLink';
import Image from 'next/image';
import { contacts } from '@/src/components/data/contact';
import { Scribble } from '../Technologies/Scribble';
import Link from 'next/link';
import { SkateboardProduct } from '../Technologies/SkateboardProduct';
import { SlideIn } from '@/src/components/SlideIn';

const generateRandomNum = (numLength: number) => {
  return Math.floor(Math.random() * Math.floor(numLength));
};

const Hero = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    setQuote(quotesData[generateRandomNum(quotesData.length)]);
  }, []);

  const deckTextureURL = DEFAULT_DECK_TEXTURE;
  const wheelTextureURL = DEFAULT_WHEEL_TEXTURE;
  const truckColor = DEFAULT_TRUCK_COLOR;
  const boltColor = DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={'hero'}
      data-slice-variation={'default'}
      className="bg-brand-lime relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 mx-auto grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative place-self-start w-full flex justify-between items-center">
          <div>
            <div className={'font-sans uppercase'}>
              <h1>Jun Ou</h1>
            </div>

            <div className="max-w-[45ch] font-semibold ~text-lg/xl">
              <p>Fullstack Software Engineer</p>
              <p className="text-sm">{`On a mission to create better application`}</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {contacts.map((item, i) => (
              <SlideIn delay={i - 0.3} key={i}>
                <div
                  className="w-20 h-20 flex justify-center 
                items-center scale-100 text-xl z-[1000]"
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
              </SlideIn>
            ))}
          </div>
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <p>{quote?.quote}</p>
            <p className="text-center">- {quote?.author}</p>
          </div>
          <ButtonLink
            icon="skateboard"
            size="lg"
            className="z-20  block"
            href={''}
          >
            {'Customize the board'}
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        wheelTextureURL={wheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />
    </Bounded>
  );
};

export default Hero;
