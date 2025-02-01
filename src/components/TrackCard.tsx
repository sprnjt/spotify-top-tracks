import { SpotifyTrack } from '@/types/spotify';
import { Music } from 'lucide-react';

interface TrackCardProps {
  track: SpotifyTrack;
  rank: number;
}

export default function TrackCard({ track, rank }: TrackCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center">
        {rank}
      </div>
      <div className="aspect-square">
        {track.album.images[0] ? (
          <img
            src={track.album.images[0].url}
            alt={track.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Music className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <a 
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-blue-600 transition-colors"
        >
          {track.name}
        </a>
        <p className="text-sm text-gray-600 mt-1">
          {track.artists.map(artist => artist.name).join(', ')}
        </p>
        <p className="text-xs text-gray-500 mt-1">{track.album.name}</p>
      </div>
    </div>
  );
}