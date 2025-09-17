import clsx from 'clsx';
import { useState } from 'react';

export default function ExpandableText({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const limit = 150; // characters before cutoff

  if (text.length <= limit) return <p>{text}</p>;

  return (
    <p className={clsx(className)}>
      {expanded ? text : text.slice(0, limit) + '...'}
      <button
        className="text-black font-bold ml-2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </p>
  );
}
