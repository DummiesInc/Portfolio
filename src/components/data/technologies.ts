import nextJS from './technologies/nextjs.svg';
import cSharp from './technologies/csharp.svg';
import dotNet from './technologies/dotnet.svg';
import postgreSQL from './technologies/postgresql.svg';
import react from './technologies/react.svg';
import ruby from './technologies/ruby.svg';
import sql from './technologies/sql.svg';
import tailwind from './technologies/tailwind.svg';
import typescript from './technologies/typescript.svg';
import aws from './technologies/aws.svg';

import {
  blueLogo,
  redLogo,
  purpleLogo,
  yellowLogo,
  brownLogo,
  orangeLogo
} from '@/src/components/data/colors';

export interface TechnologyType {
  name: string;
  svg: string;
  color: string;
}

export const technologies: TechnologyType[] = [
  {
    name: 'Typescript',
    svg: typescript,
    color: blueLogo
  },
  {
    name: 'React',
    svg: react,
    color: blueLogo
  },
  {
    name: 'Nextjs',
    svg: nextJS,
    color: redLogo
  },
  {
    name: 'Tailwinc CSS',
    svg: tailwind,
    color: blueLogo
  },
  {
    name: 'C#',
    svg: cSharp,
    color: purpleLogo
  },
  {
    name: '.NET',
    svg: dotNet,
    color: yellowLogo
  },
  {
    name: 'Ruby',
    svg: ruby,
    color: redLogo
  },
  {
    name: 'SQL Server',
    svg: sql,
    color: brownLogo
  },
  {
    name: 'PostgresSQL',
    svg: postgreSQL,
    color: blueLogo
  },
  {
    name: 'AWS',
    svg: aws,
    color: orangeLogo
  }
];
