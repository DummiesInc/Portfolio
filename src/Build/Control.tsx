"use client";



import clsx from "clsx";
import { ComponentProps, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCustomizerControls } from "@/app/build/context";
import { WheelType, DeckType, MetalType } from "@/app/build/customize/data";
import { Heading } from "../components/Heading";

interface Props {
    wheels:WheelType[]
    decks: DeckType[]
    metals: MetalType[]
    className?: string;
}

export enum skateboardEnum {
    deck = 'deck',
    bolts = 'bolts',
    trucks = 'trucks',
    wheels = 'wheels'
}

export default function Controls({ wheels, decks, metals, className }: Props) {
  const {
    setBolt,
    setDeck,
    setTruck,
    setWheel,
    selectedBolt,
    selectedDeck,
    selectedTruck,
    selectedWheel,
  } = useCustomizerControls();
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={selectedDeck?.uid}>
        {decks.map((deck) => (
          <Option
            key={deck.uid}
            colorField={deck.texture?.color ?? ''}
            onClick={() => {
                setDeck(deck)
                localStorage.setItem(skateboardEnum.deck, deck.texture.url);

            }}
            uid={deck.uid}
            type="deck"
          >
            {deck.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={selectedWheel?.uid}>
        {wheels.map((wheel) => (
          <Option
            key={wheel.uid}
            colorField={wheel.texture?.color ?? ''}
            onClick={() => {
                setWheel(wheel)
                localStorage.setItem(skateboardEnum.wheels, wheel.texture.url);
            }}
            uid={wheel.uid}
            type="wheel"
          >
            {wheel.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={selectedTruck?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            colorField={metal.color}
            onClick={() => {
                setTruck(metal)
                localStorage.setItem(skateboardEnum.trucks, metal.color);
            }}
            uid={metal.uid}
            type="truck"
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={selectedBolt?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            colorField={metal.color}
            onClick={() => {
                setBolt(metal)
                localStorage.setItem(skateboardEnum.bolts, metal.color);
            }}
            uid={metal.uid}
            type="bolt"
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
    </div>
  );
}

interface OptionsProps  {
  title?: ReactNode;
  selectedName?: string;
  children?: ReactNode;
};

function Options({ title, selectedName, children }: OptionsProps) {
  const formattedName = selectedName?.replace(/-/g, " ");

  return (
    <div
        style={{
            marginTop: 10,
            minHeight: '10.5vh'
        }}
    >
      <div className="flex self-center">
        <Heading as="h2" size="xs" className="mb-2">
          {title}
        </Heading>
        <p className="ml-3 text-zinc-300 flex self-center">
          <span className="select-none text-zinc-500"> | </span>
          <span className="ml-3">{formattedName}</span>
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2"
        style={{
            marginTop: 10
        }}
      >{children}</ul>
    </div>
  );
}


interface OptionProps {
    children: ReactNode;
    onClick: () => void;
    colorField: string
    uid: string
    type: 'wheel' | 'deck' | 'truck' | 'bolt'
}

function Option({
  children,
  colorField,
  uid,
  type,
  onClick,
}: OptionProps) {
      const {
    selectedBolt,
    selectedDeck,
    selectedTruck,
    selectedWheel,
  } = useCustomizerControls();
    const checkSelected = (type: 'wheel' | 'deck' | 'truck' | 'bolt') => {
        switch(type) {
            case 'wheel':
                return selectedWheel?.uid ?? '';
            case 'deck':
                return selectedDeck?.uid ?? '';
            case 'truck':
                return selectedTruck?.uid ?? '';
            case 'bolt':
                return selectedBolt?.uid ?? '';
            default:
                return selectedWheel?.uid ?? '';
        }
    }
  
  return (
    <li>
      <button
        className={clsx(
          "size-10 cursor-pointer rounded-full bg-black p-0.5 outline-2 outline-white",
          checkSelected(type) === uid && "outline"
        )}
        onClick={onClick}
      >
        <div
            className="h-full w-full rounded-full"
            style={{ 
                backgroundColor: colorField ?? undefined,
                height: 40,
                width: 40
             }}
          />

      </button>
    </li>
  );
}
