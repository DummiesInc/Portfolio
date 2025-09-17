'use client';
import { Header } from '@/src/components/Header';
import Hero from '@/src/slices/Hero';
import TechnologyGrid from '@/src/slices/Technologies';
import WorkHistories from '@/src/slices/WorkHistories';
import { workHistories } from '@/src/components/data/workHistories';
import Timeline from '@/src/slices/Timeline';
import { useProgress } from '@react-three/drei';
import Loading from '@/src/Build/Loading';

export default function Home() {
  const { progress } = useProgress();
  return (
    <div>
      <Header />
      <Hero />
      <TechnologyGrid />
      {workHistories?.map((item, i) => (
        <WorkHistories
          key={i}
          workHistory={item}
          index={i}
          size={workHistories.length}
        />
      ))}
      <Timeline />

      {progress >= 100 ? <></> : <Loading />}
    </div>
  );
}
