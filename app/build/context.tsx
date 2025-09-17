"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { DeckType, MetalType, WheelType } from "./customize/data";


type CustomizerControlsContext = {
  selectedWheel?: WheelType;
  setWheel: (wheel: WheelType) => void;
  selectedDeck?: DeckType;
  setDeck: (deck: DeckType) => void;
  selectedTruck?: MetalType;
  setTruck: (trucks: MetalType) => void;
  selectedBolt?: MetalType;
  setBolt: (bolts: MetalType) => void;
};

const defaultContext: CustomizerControlsContext = {
  setWheel: () => {},
  setDeck: () => {},
  setTruck: () => {},
  setBolt: () => {},
};

const CustomizerControlsContext = createContext(defaultContext);

type CustomizerControlsProviderProps = {
  defaultWheel: WheelType;
  defaultDeck: DeckType;
  defaultTruck: MetalType;
  defaultBolt: MetalType;
  children?: ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setWheel] = useState<WheelType>(defaultWheel);
  const [selectedDeck, setDeck] = useState<DeckType>(defaultDeck);
  const [selectedTruck, setTruck] = useState<MetalType>(defaultTruck);
  const [selectedBolt, setBolt] = useState<MetalType>(defaultBolt);

  const value = useMemo(() => {
    return {
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
