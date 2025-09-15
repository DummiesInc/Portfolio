import { Header } from '@/src/components/Header';
import Hero from '@/src/slices/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
