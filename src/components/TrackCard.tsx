import { SpotifyTrack } from '@/types/spotify';
import { ExternalLink } from 'lucide-react';

interface TrackCardProps {
  track: SpotifyTrack;
  rank: number;
}

export default function TrackCard({ track, rank }: TrackCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <img 
        src={track.album.images[0]?.url} 
        alt={track.album.name} 
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-600 font-semibold">{rank}.</span>
            <a 
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors flex items-center"
            >
              {track.name} <ExternalLink className="ml-1" />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {track.artists.map(artist => artist.name).join(', ')}
        </p>
        <p className="text-xs text-gray-400 mt-1">{track.album.name}</p>
      </div>
    </div>
  );
}