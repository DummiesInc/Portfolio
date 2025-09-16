import { Header } from '@/src/components/Header';
import Hero from '@/src/slices/Hero';
import TechnologyGrid from '@/src/slices/Technologies';
import WorkHistories from '@/src/slices/WorkHistories';
import { workHistories } from '@/src/components/data/workHistories';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TechnologyGrid />
      <WorkHistories
        workHistory={workHistories[0]}
        index={0}
        size={workHistories.length}
      />
      <WorkHistories
        workHistory={workHistories[1]}
        index={1}
        size={workHistories.length}
      />
      <WorkHistories
        workHistory={workHistories[2]}
        index={2}
        size={workHistories.length}
      />
      <WorkHistories
        workHistory={workHistories[3]}
        index={3}
        size={workHistories.length}
      />
    </div>
  );
}
