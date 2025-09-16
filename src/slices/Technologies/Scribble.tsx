import { SVGProps } from 'react';

export function Scribble({ color, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 166 306"
      preserveAspectRatio="none"
      opacity={0.2}
      {...props}
    >
      <path
        className="origin-center opacity-60 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:1700] [stroke-dashoffset:1700] group-hover:[stroke-dashoffset:0]"
        filter="url(#scribble)"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M 126 8 c -10 10 -26 17 -41 22 c -24 9 -50 14 -74 23 a 152 152 0 0 0 24 3 l 50 1 c 5 0 17 0 20 4 c 3 3 -13 6 -15 6 a 689 689 0 0 0 -45 12 c 1 2 7 2 9 2 c 11 2 22 1 33 1 l 48 -2 l 17 1 c 2 0 -2 2 -3 2 l -8 2 l -60 11 l -32 7 c -5 1 -12 2 -16 5 c -2 1 8 3 9 4 c 13 2 27 2 39 2 c 14 0 29 -2 43 0 c 3 1 7 1 3 3 c -7 3 -15 4 -23 6 l -41 7 c -10 2 -22 5 -31 9 c -2 2 -1 2 1 3 l 23 2 c 22 1 43 0 64 3 c 4 0 4 1 1 2 l -20 7 c -11 3 -22 5 -32 9 l -14 6 c -3 4 32 7 35 7 c 20 1 43 0 62 6 c 1 1 5 2 4 3 l -30 7 l -9 3 h 1 l -39 7 c -2 1 -24 5 -22 7"
      />
      <filter id="scribble">
        <feTurbulence
          baseFrequency="0.05"
          id="turbulence"
          numOctaves="2"
          result="noise"
          seed="0"
        />
        <feDisplacementMap
          id="displacement"
          in2="noise"
          in="SourceGraphic"
          scale="5"
        />
      </filter>
    </svg>
  );
}
