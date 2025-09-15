import { FaStar } from 'react-icons/fa6';

import clsx from 'clsx';
import Image from 'next/image';
import { ButtonLink } from '@/src/components/ButtonLink';
import { HorizontalLine, VerticalLine } from '@/src/components/Line';

async function getDominantColor(url: string) {
  const paletteURL = new URL(url);
  paletteURL.searchParams.set('palette', 'json');

  const res = await fetch(paletteURL);
  const json = await res.json();

  return (
    json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex
  );
}

type Props = {
  svg: any;
  name: string;
};

const VERTICAL_LINE_CLASSES =
  'absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';

const HORIZONTAL_LINE_CLASSES =
  '-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';

export async function SkateboardProduct({ svg, name }: Props) {
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'left-4')} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'right-4')} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
      <div className="-mb-1 overflow-hidden py-4">
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
