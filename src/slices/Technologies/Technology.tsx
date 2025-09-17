'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { HorizontalLine, VerticalLine } from '@/src/components/Line';
import { Scribble } from './Scribble';

type Props = {
  svg: string;
  name: string;
  color: string;
};

const VERTICAL_LINE_CLASSES =
  'absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';

const HORIZONTAL_LINE_CLASSES =
  '-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';

export function Technology({ svg, name, color }: Props) {
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'left-4')} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'right-4')} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble className="absolute inset-0 h-full w-full" color={color} />
        <Image
          src={svg}
          alt=""
          width={80}
          height={80}
          className=" mx-auto w-[28%]  transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        {name}
      </h3>
    </div>
  );
}
