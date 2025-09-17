'use client';

import { Bounded } from '@/src/components/Bounded';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa6';
import { workHistories } from '@/src/components/data/workHistories';
import { Heading } from '@/src/components/Heading';

const Timeline = () => {
  return (
    <Bounded
      data-slice-type={'timeline'}
      data-slice-variation={'default'}
      className="bg-texture bg-zinc-900 relative overflow-hidden text-zinc-800"
      style={{
        // height: '100vh',
        // border: 'solid 2px red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Heading size="sm" as="h2">
        <div
          className={
            'font-sans uppercase flex justify-center items-center text-white'
          }
        >
          <h1>{'Work History'}</h1>
        </div>
      </Heading>
      <VerticalTimeline>
        {workHistories.map((item, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1b7fd1', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1b7fd1' }}
            date={`${item.employmentStart} - ${item.employmentEnd}`}
            iconStyle={{ background: '#FFC331', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.companyName}
            </h3>
            <h4 className="vertical-timeline-element-title">{item.position}</h4>
            <ul>
              {item.responsibilities?.map((res, index) => (
                <li key={index}>
                  <p className="text-xs">- {res}</p>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Bounded>
  );
};

export default Timeline;
