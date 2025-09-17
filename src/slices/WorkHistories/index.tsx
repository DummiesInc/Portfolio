'use client';

import { Bounded } from '@/src/components/Bounded';
import { ButtonLink } from '@/src/components/ButtonLink';
import { WorkHistoryType } from '@/src/components/data/workHistories';
import { Heading } from '@/src/components/Heading';
import clsx from 'clsx';
import React from 'react';
import { ParallaxImage } from './ParallaxImage';
import Image from 'next/image';
import useIsMobile from '@/src/hooks/useIsMobile';
import ExpandableText from '@/src/components/ExpandableText';

interface WorkHistory {
  workHistory: WorkHistoryType;
  index: number;
  size: number;
}

declare module 'react' {
  interface CSSProperties {
    '--index'?: number;
  }
}

const WorkHistories = ({ workHistory, index }: WorkHistory) => {
  const {
    companyName,
    companySite,
    companyLogo,
    position,
    techStack,
    theme,
    variation,
    summary
  } = workHistory;

  const isMobile = useIsMobile();

  return (
    <Bounded
      data-slice-type={'workHistories'}
      data-slice-variation={'default'}
      className={clsx(
        'sticky top-[calc(var(--index)*2rem)] min-h-full',
        theme === 'Blue' && 'bg-texture bg-brand-blue text-white',
        theme === 'Orange' && 'bg-texture bg-brand-orange text-white',
        theme === 'Navy' && 'bg-texture bg-brand-navy text-white',
        theme === 'Lime' && 'bg-texture bg-brand-lime'
      )}
      style={{ '--index': index }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            'flex flex-col items-center gap-8 text-center md:items-start md:text-left',
            variation === 'imageOnLeft' && 'md:order-2'
          )}
        >
          <Heading size="sm" as="h2">
            <div
              className={clsx(
                'font-sans uppercase',
                variation === 'default' ? 'ml-5' : ''
              )}
            >
              <h1>{companyName}</h1>
            </div>
          </Heading>

          <div className={clsx(variation === 'default' ? 'ml-5' : '')}>
            <p>Professional Experience</p>
            <p>{position}</p>
          </div>

          <ExpandableText
            className={clsx(
              'text-sm leading-relaxed list-disc text-left md:text-md',
              variation === 'default' ? 'ml-3' : ''
            )}
            text={summary ?? ''}
          />

          {/* <p
            className={clsx(
              'text-sm leading-relaxed list-disc text-left md:text-md',
              variation === 'default' ? 'ml-3' : ''
            )}
          >
            {summary}
          </p> */}

          {companySite !== undefined && (
            <ButtonLink
              href={companySite ?? ''}
              target="_blank"
              color={theme === 'Lime' ? 'orange' : 'lime'}
              className={clsx(variation === 'default' ? 'ml-12' : 'mr-10')}
            >
              {'Company Link'}
            </ButtonLink>
          )}

          <div className="grid w-full grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {techStack?.map((tech, techIndex) => (
              <div
                className="group flex flex-col justify-center self-center "
                key={techIndex}
              >
                <div className="bg-texture bg-brand-gray rounded-md w-14 flex justify-center self-center p-2">
                  <Image
                    alt={``}
                    src={tech.svg}
                    width={40}
                    height={40}
                    className="min-w-10 min-h-10 transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
                  />
                </div>
                <p className="text-xs mt-2  flex justify-center font-light">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {isMobile ? (
          <></>
        ) : (
          <ParallaxImage companyImage={companyLogo} variation={variation} />
        )}
      </div>
    </Bounded>
  );
};

export default WorkHistories;
