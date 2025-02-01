'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import TopTracks from '@/components/TopTracks';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Top 5 Spotify Tracks
          </h1>
          {status === 'authenticated' ? (
            <>
              <p className="text-gray-600 mb-8">
                Here are your most listened to tracks on Spotify
              </p>
              <TopTracks />
              <button
                onClick={() => signOut()}
                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn('spotify')}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              Sign in with Spotify
            </button>
          )}
        </div>
      </div>
    </main>
  );
}