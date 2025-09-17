'use client';

import { Bounded } from '@/src/components/Bounded';
import React, { useEffect, useState } from 'react';
import { Quote, quotesData } from '../../components/data/quotes';
import InteractiveSkateboard from './InteractiveSkateboard';
import { ButtonLink } from '@/src/components/ButtonLink';
import { skateboardEnum } from '@/src/Build/Control';
const DEFAULT_DECK_TEXTURE = '/skateboard/Deck.webp';
const DEFAULT_WHEEL_TEXTURE = '/skateboard/SkateWheel1.png';
const DEFAULT_TRUCK_COLOR = '#6F6E6A';
const DEFAULT_BOLT_COLOR = '#6F6E6A';
const generateRandomNum = (numLength: number) => {
  return Math.floor(Math.random() * Math.floor(numLength));
};

const Hero = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    setQuote(quotesData[generateRandomNum(quotesData.length)]);
  }, []);

  const deckTextureURL =
    typeof window !== 'undefined' && localStorage.getItem(skateboardEnum.deck)
      ? (localStorage.getItem(skateboardEnum.deck) ?? '')
      : DEFAULT_DECK_TEXTURE;

  const wheelTextureURL =
    typeof window !== 'undefined' && localStorage.getItem(skateboardEnum.wheels)
      ? (localStorage.getItem(skateboardEnum.wheels) ?? '')
      : DEFAULT_WHEEL_TEXTURE;

  const truckColor =
    typeof window !== 'undefined' && localStorage.getItem(skateboardEnum.trucks)
      ? (localStorage.getItem(skateboardEnum.trucks) ?? '')
      : DEFAULT_TRUCK_COLOR;

  const boltColor =
    typeof window !== 'undefined' && localStorage.getItem(skateboardEnum.bolts)
      ? (localStorage.getItem(skateboardEnum.bolts) ?? '')
      : DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={'hero'}
      data-slice-variation={'default'}
      className="bg-brand-lime relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 mx-auto grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <p>{quote?.quote}</p>
            <p className="text-center">- {quote?.author}</p>
          </div>
          <ButtonLink
            icon="skateboard"
            size="lg"
            className="z-20  block"
            href={'/build'}
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
