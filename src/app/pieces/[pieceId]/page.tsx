import { notFound, useParams } from 'next/navigation';
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

export default function ClassDetails({ params }: PieceDetailsProps) {
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
      <div className=" flex flex-col md:flex-row">
        <div className="w-full p-4">
          <img src={`/pieces/${piece.picture}`} alt={piece.name} className={`w-full h-auto object-cover max-w-full object-cover`} />
        </div>
      </div>
    </div>
  );
}
