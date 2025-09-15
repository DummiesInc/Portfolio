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

const Hero = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const deckTextureURL = DEFAULT_DECK_TEXTURE;
  const wheelTextureURL = DEFAULT_WHEEL_TEXTURE;
  const truckColor = DEFAULT_TRUCK_COLOR;
  const boltColor = DEFAULT_BOLT_COLOR;

  const generateRandomNum = (numLength: number) => {
    return Math.floor(Math.random() * Math.floor(numLength));
  };

  useEffect(() => {
    setQuote(quotesData[generateRandomNum(quotesData.length)]);
  }, []);

  return (
    <Bounded
      data-slice-type={'hero'}
      data-slice-variation={'default'}
      className="bg-brand-lime relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative max-w-2xl place-self-start">
          <div>
            <h1>Jun's Portfolio</h1>
          </div>
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <p>{quote?.quote}</p>
            <p>- {quote?.author}</p>
          </div>
          {/* <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            {slice.primary.button.text}
          </ButtonLink> */}
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
