import React from 'react';
import { Bounded } from './Bounded';
import react from '@/src/components/data/technologies/react.svg';
import nextjs from '@/src/components/data/technologies/nextjs.svg';
import tailwind from '@/src/components/data/technologies/tailwind.svg';
import Image from 'next/image';

const Footer = () => {
  const techs = [react, nextjs, tailwind];

  return (
    <Bounded className="bg-texture bg-brand-gray flex justify-center self-center h-11">
      <div className="flex flex-wrap justify-center gap-2 ~text-lg/xl">
        <p className="text-black">Made with</p>
        {techs.map((tech, i) => (
          <Image alt={``} src={tech} width={30} height={30} className="" />
        ))}
      </div>
    </Bounded>
  );
};

export default Footer;
