import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { SpotifyTrack } from '@/types/spotify';
import TrackCard from './TrackCard';

export default function TopTracks() {
  const { data: session, status } = useSession();
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTracks = async () => {
      if (session?.accessToken) {
        try {
          const response = await fetch('/api/spotify');
          const data = await response.json();
          setTracks(data.slice(0, 5));
        } catch (error) {
          console.error('Error fetching top tracks:', error);
        }
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchTopTracks();
    }
  }, [session, status]);

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
      {tracks.map((track, index) => (
        <TrackCard key={track.id} track={track} rank={index + 1} />
      ))}
    </div>
  );
}
