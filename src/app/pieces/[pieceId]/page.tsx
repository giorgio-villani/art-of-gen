import { notFound } from 'next/navigation';
import pieces from '@/data/pieces';

interface PieceDetailsProps {
  params: {
    pieceId: string;
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

export default function PieceDetails({ params }: PieceDetailsProps) {
  const { pieceId } = params;

  const piece = pieces.find((piece) => piece.id === pieceId);

  if (!piece) {
    return notFound();
  }

  return (
    <div className={`max-w-screen-xl mx-auto font-poppins`}>
      <div className="text-center">
        <h2 className="mb-4">
          <div className="text-4xl md:text-5xl" style={{ wordWrap: 'break-word' }}>
            {piece.name}
          </div>
        </h2>
        <div className="text-xl md:text-2xl">{piece.artist}</div>
        <p className="hover:underline text-customButton pb-3 text-forgnRed font-bold">
          <a href={piece.website}>Website</a>
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full p-4">
          {piece.video ? (
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${piece.video}?autoplay=1&mute=1`}
                title={piece.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          ) : (
            <img src={`/pieces/${piece.picture}`} alt={piece.name} className="w-full h-auto object-cover max-w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
