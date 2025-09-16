import { Bounded } from '@/src/components/Bounded';
import { technologies } from '@/src/components/data/technologies';
import { Heading } from '@/src/components/Heading';
import { SlideIn } from '@/src/components/SlideIn';
import React from 'react';
import Image from 'next/image';
import { SkateboardProduct } from './SkateboardProduct';

const TechnologyGrid = () => {
  return (
    <Bounded
      data-slice-type={'hero'}
      data-slice-variation={'default'}
      className="bg-texture bg-brand-gray"
    >
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          <div className={'font-sans uppercase'}>
            <h1>Technologies</h1>
          </div>
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          <p>Technologies I've worked with...</p>
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {technologies.map((item, i) => (
          <SkateboardProduct
            key={i}
            svg={item.svg}
            name={item.name}
            color={item.color}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default TechnologyGrid;
