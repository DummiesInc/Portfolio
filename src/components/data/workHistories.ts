import nextJS from './technologies/nextjs.svg';
import cSharp from './technologies/csharp.svg';
import dotNet from './technologies/dotnet.svg';
import postgreSQL from './technologies/postgresql.svg';
import react from './technologies/react.svg';
import ruby from './technologies/ruby.svg';
import sql from './technologies/sql.svg';
import typescript from './technologies/typescript.svg';
import aws from './technologies/aws.svg';
import graphql from './technologies/graphql.svg';
import vue from './technologies/vue.svg';
import nuxt from './technologies/nuxt.svg';

import qw from './companies/QW.svg';
import vesta from './companies/vesta.svg';
import uno from './companies/uno.svg';
import onestaff from './companies/onestaff.svg';

interface TechStack {
  name: string;
  svg: string;
}

export interface WorkHistoryType {
  companyName: string;
  companySite?: string | null;
  companyLogo: string;
  position: string;
  employmentStart: string;
  employmentEnd?: string | null;
  responsibilities: string[];
  techStack: TechStack[];
  summary?: string;
  theme: 'Blue' | 'Orange' | 'Navy' | 'Lime';
  variation: 'default' | 'imageOnLeft';
}

export const workHistories: WorkHistoryType[] = [
  {
    companyName: 'OneStaff Medical',
    companySite: 'https://www.onestaffmedical.com/',
    companyLogo: onestaff,
    position: 'Fullstack Software Engineer',
    employmentStart: '2023',
    employmentEnd: '2025',
    responsibilities: [
      'Collaborated with developers, designers, and product managers to define product scope, user flows, and design patterns',
      'Contributed legacy product rewrite that significantly improved load times, enhanced user experience, and streamlined workflows',
      'Played a key role in migrating legacy features, reimagining them with modern UI/UX and improved functionality',
      'Delivered feature demos to stakeholders, effectively communicating progress and gathering feedback',
      'Actively participated in code reviews and pull request discussions to promote knowledge sharing and maintain code quality',
      'Worked with database administrators to ensure accurate mapping of legacy data structures to new application models',
      'Developed many core features include enabling users to build and merge custom PDF documents for formal submissions',
      'Supported QA efforts by debugging complex product and data-related issues, including SQL/database layer investigations',
      'Utilized AWS products such as Grafana/CloudWatch for monitoring and debugging production issues in real-time',
      'Maintained task progress and documentation using Jira for agile planning and tracking',
      'Started an application from scratch with Blazor as a test project. Pitched to the stakeholder and received great feedback. The project was greenlit to become a standalone product'
    ],
    summary:
      'Collaborated with developers, designers, and product managers to define product scope, user flows, and design patterns, while modernizing legacy products to improve performance, user experience, and workflows. Migrated and reimagined features with updated UI/UX, built core functionality including custom PDF generation and merging, and ensured accurate legacy data mapping in coordination with database administrators. Delivered feature demos to stakeholders, supported QA with complex debugging, and leveraged AWS tools like Grafana and CloudWatch to monitor and resolve production issues in real time. Actively participated in code reviews, tracked progress in Jira for agile planning, and initiated a Blazor-based application that received stakeholder approval and was greenlit as a standalone product.',
    techStack: [
      {
        name: 'Typescript',
        svg: typescript
      },
      {
        name: 'React',
        svg: react
      },
      {
        name: 'NextJS',
        svg: nextJS
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
        name: 'SQLServer',
        svg: sql
      },
      {
        name: 'AWS',
        svg: aws
      }
    ],
    theme: 'Blue',
    variation: 'default'
  },

  {
    companyName: 'Quantum Workplace',
    companySite: 'https://www.quantumworkplace.com/',
    companyLogo: qw,
    position: 'Fullstack Software Engineer',
    employmentStart: '2022',
    employmentEnd: '2023',
    responsibilities: [
      'Cross squad collaboration to coordinate feature planning and implementation',
      'Engaged in code review and discussions with other developers to trade ideas',
      'Implemented and developed Keyword Detection feature to help survey admins to detect naughty languages',
      'Delivered new survey creation experience for survey admins to construct new surveys to fit their needs',
      'Communicate with customer facing team to resolve production bugs',
      'Develop features in various different patterns such as Repository Pattern, Mediator Pattern and Entity Framework',
      'Developed strong SQL skills and Server Side knowledge through building various products',
      'Follow the MVC pattern to develop key features',
      'Engaged in code review and resolve Pull Request comments',
      'Code refactor to improve feature performance and separation of business logics',
      'Task tracking and documentation using Asana',
      'Involve in sprint ceremonies (Task scrum, estimate, and planning)',
      'Error tracking using New Relics',
      'Solid understanding of Git Resource Control',
      'Effective communication between product management, developers, and quality assurance',
      'Assisted QA for product testing',
      'Participated in code deployment and production release',
      'Participated in weekly developer show and share to learn from other developers'
    ],
    techStack: [
      {
        name: 'Typescript',
        svg: typescript
      },
      {
        name: 'React',
        svg: react
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
        name: 'SQLServer',
        svg: sql
      }
    ],
    summary:
      'Collaborated across squads to plan and implement new features while engaging in code reviews and discussions that encouraged knowledge sharing and continuous improvement. Delivered impactful functionality such as a Keyword Detection system to flag inappropriate survey responses and a new survey creation experience that empowered admins with greater flexibility. Leveraged design patterns like Repository, Mediator, and MVC, along with Entity Framework and SQL, to build robust, high-performing products. Supported production stability by working with customer-facing teams to resolve issues, assisting QA with testing, refactoring code for performance, and using tools like New Relic for error tracking. Maintained progress in Asana, actively participated in sprint ceremonies, contributed to deployments and releases, and shared learnings in weekly developer sessions.',
    theme: 'Orange',
    variation: 'imageOnLeft'
  },

  {
    companyName: 'Event Vesta',
    companySite: 'https://eventvesta.com/',
    companyLogo: vesta,
    position: 'Fullstack Software Engineer',
    employmentStart: '2020',
    employmentEnd: '2022',
    responsibilities: [
      'Fullstack developer utilized tools such as Ruby on Rails and React Native',
      'Redesigned and implemented UI features for better user experience',
      'Map navigation integration for easy access finding events',
      'Implemented analytics to keep track of user actions and better understand what features user like the most',
      'Firebase dynamic link and calendar integration',
      'Search and filter content within the application',
      'Integrate Google event schema and Sitemap for better SEO'
    ],
    techStack: [
      {
        name: 'Typescript',
        svg: typescript
      },
      {
        name: 'React',
        svg: react
      },
      {
        name: 'GraphQL',
        svg: graphql
      },
      {
        name: 'Rails',
        svg: ruby
      },
      {
        name: 'PostgreSQL',
        svg: postgreSQL
      }
    ],
    summary:
      'Fullstack developer leveraging Ruby on Rails and React Native to build and enhance user-focused applications. Redesigned and implemented UI features to improve user experience, integrated map navigation for seamless event discovery, and added search and filtering capabilities for easier content access. Implemented analytics to track user behavior and highlight popular features, along with Firebase dynamic links and calendar integration to improve engagement. Additionally, optimized SEO by integrating Google event schema and sitemaps for greater visibility.',
    theme: 'Lime',
    variation: 'default'
  },

  {
    companyName: 'University of Omaha Nebraska',
    companySite: undefined,
    companyLogo: uno,
    position: 'Student Software Developer',
    employmentStart: '2020',
    employmentEnd: '2020',
    responsibilities: [
      'Initiated and developed a research project for University of Nebraska Medical Center',
      'Utilized frontend tool like Vue and Nuxt',
      'Collaborated with other students to create full stack application'
    ],
    summary:
      'Initiated and developed a research project for the University of Nebraska Medical Center, collaborating with fellow students to build a full-stack application. Utilized frontend technologies such as Vue and Nuxt to deliver a polished and functional user interface.',
    techStack: [
      {
        name: 'Typescript',
        svg: typescript
      },
      {
        name: 'Vue',
        svg: vue
      },
      {
        name: 'NuxtJS',
        svg: nuxt
      }
    ],
    theme: 'Navy',
    variation: 'imageOnLeft'
  }
];
