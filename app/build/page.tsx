'use client'

import React from 'react'
import {customizeSettings} from "@/app/build/customize/data"
import { CustomizerControlsProvider } from "./context";
import Preview from '@/src/Build/Preview';
import { Heading } from '@/src/components/Heading';
import { ButtonLink } from '@/src/components/ButtonLink';
import Loading from '@/src/Build/Loading';
import { useProgress } from '@react-three/drei';

import Link from 'next/link';
import { Logo } from '@/src/components/Logo';
import Control from '@/src/Build/Control';


const Page = () => {

  const { wheels, decks, metals } = customizeSettings;

  const { progress } = useProgress();

  const defaultWheel =  wheels[0];
  const defaultDeck = decks[0];
  const defaultTruck = metals[0];
  const defaultBolt = metals[0];

    const wheelTextureURLs = wheels
    .map((texture) => texture.texture.url);
  const deckTextureURLs = decks
    .map((texture) => texture.texture.url)

  return (
    <div 
      // className="flex min-h-screen flex-col lg:flex-row"
      >
      <CustomizerControlsProvider
        defaultWheel={defaultWheel}
        defaultDeck={defaultDeck}
        defaultTruck={defaultTruck}
        defaultBolt={defaultBolt}
      >
        <div 
          className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow"
          >
          <div 
            // className="absolute inset-0"
          // Remove this later?
            style={{
              height: '50vh'
            }}
          >
            <Preview
              deckTextureURLs={deckTextureURLs}
              wheelTextureURLs={wheelTextureURLs}
            />
          </div>
        </div>

        <div 
          className="grow bg-texture bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0"
          style={{
            padding: 20
          }}
          >
          <Heading as="h1" size="sm" className="mb-6 mt-0">
            Build your board
          </Heading>
          <Control
            wheels={wheels}
            decks={decks}
            metals={metals}
            className="mb-6"
          />
          <ButtonLink href="/" color="lime" icon="plus">
            Back to home screen
          </ButtonLink>
        </div>
      </CustomizerControlsProvider>
      {
        progress >= 100 ? <></> : <Loading />
      }
    </div>
  )
}

export default Page