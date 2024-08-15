import Image from 'next/image';
import artists from '@/data/artists';

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div>
        <h2 className="text-3xl">Artists</h2>
        <ul>
          {artists.map((cls) => (
            <li key={cls.name}>{cls.name}</li>
          ))}
          <li></li>
        </ul>
      </div>
    </main>
  );
}
