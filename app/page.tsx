import { Header } from '@/src/components/Header';
import Hero from '@/src/slices/Hero';
import TechnologyGrid from '@/src/slices/Technologies';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Hero />
      <TechnologyGrid />
    </div>
  );
}
