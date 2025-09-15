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

export interface TechnologyType {
  name: string;
  svg: any;
}

export const technologies: TechnologyType[] = [
  {
    name: 'Typescript',
    svg: typescript
  },
  {
    name: 'React',
    svg: react
  },
  {
    name: 'Nextjs',
    svg: nextJS
  },
  {
    name: 'Tailwinc CSS',
    svg: tailwind
  },
  {
    name: 'C#',
    svg: cSharp
  },
  {
    name: '.NET',
    svg: dotNet
  },
  {
    name: 'Ruby',
    svg: ruby
  },
  {
    name: 'SQL Server',
    svg: sql
  },
  {
    name: 'PostgresSQL',
    svg: postgreSQL
  },
  {
    name: 'AWS',
    svg: aws
  }
];
