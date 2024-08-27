import Image from 'next/image';
import artists from '@/data/artists';

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div>
        <h1 className="text-5xl">Generations</h1>
        <h2 className="text-3xl">The Evolution of Art through Algorithms</h2>
        <div className="pt-5">
          <img src="/hero/AOG_03.jpg" alt="generative art" />
        </div>
      </div>
    </main>
  );
}
