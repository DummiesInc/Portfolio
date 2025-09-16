import { Bounded } from '@/src/components/Bounded';
import { ButtonLink } from '@/src/components/ButtonLink';
import { WorkHistoryType } from '@/src/components/data/workHistories';
import { Heading } from '@/src/components/Heading';
import { SlideIn } from '@/src/components/SlideIn';
import clsx from 'clsx';
import React from 'react';
import { ParallaxImage } from './ParallaxImage';

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
    // employmentStart,
    position,
    // responsibilities,
    // techStack,
    // employmentEnd,
    theme,
    variation
    // summary
  } = workHistory;

  return (
    <Bounded
      data-slice-type={'workHistories'}
      data-slice-variation={'default'}
      className={clsx(
        'sticky top-[calc(var(--index)*2rem)]',
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
          <SlideIn>
            <Heading size="lg" as="h2">
              <div
                className={clsx(
                  'font-sans uppercase'
                  // variation === 'default' ? 'ml-10' : 'mr-10'
                )}
              >
                <h1>{companyName}</h1>
              </div>
            </Heading>
          </SlideIn>

          <SlideIn>
            <div
            // className={clsx(variation === 'default' ? 'ml-10' : 'mr-10')}
            >
              <p>Professional Experience</p>
              <p>{position}</p>
            </div>
          </SlideIn>

          <SlideIn>
            <p
              className={clsx(
                'max-w-md text-lg leading-relaxed list-disc'
                // variation === 'default' ? 'ml-10' : 'mr-10'
              )}
            >
              {/* {summary} */}
              {` simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
            </p>
          </SlideIn>

          {companySite !== undefined && (
            <SlideIn direction="right" customClass="slide-in-hidden-left">
              <ButtonLink
                href={companySite ?? ''}
                target="_blank"
                color={theme === 'Lime' ? 'orange' : 'lime'}
                className={clsx(variation === 'default' ? 'ml-12' : 'mr-10')}
              >
                {'Company Link'}
              </ButtonLink>
            </SlideIn>
          )}
        </div>

        <ParallaxImage companyImage={companyLogo} />
      </div>
    </Bounded>
  );
};

export default WorkHistories;
