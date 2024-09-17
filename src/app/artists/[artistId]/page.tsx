import { notFound, useParams } from 'next/navigation';
import artists from '@/data/artists';

interface ArtistDetailsProps {
  params: {
    artistId: string;
  };
}

const unescapeHtml = (escapedStr: string) => {
  return escapedStr
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
};

export default function ClassDetails({ params }: ArtistDetailsProps) {
  const { artistId } = params;

  const artist = artists.find((artist) => artist.id === artistId);

  if (!artist) {
    return notFound();
  }

  return (
    <div className={`max-w-screen-xl mx-auto font-poppins`}>
      <div className="text-center">
        <h2 className="mb-4">
          <div className=" text-4xl md:text-5xl" style={{ wordWrap: 'break-word' }}>
            {artist.name}
          </div>
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <img src={`/artists/${artist.picture}`} alt={artist.name} className={`w-full h-auto object-cover max-w-full object-cover`} />
        </div>
        <div className="w-full md:w-1/2 flex p-4">
          <div className="">
            {artist.website && (
              <p className="hover:underline text-customButton pb-3 text-forgnRed font-bold">
                <a href={artist.website}>Website</a>
              </p>
            )}
            {artist.description.map((paragraph, index) => (
              <p className="pb-3 leading-relaxed text-justify mb-4" key={index} style={{ wordWrap: 'break-word' }}>
                {unescapeHtml(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
