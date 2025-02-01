import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    spotifyApi.setAccessToken(session.accessToken);

    const response = await spotifyApi.getMyTopTracks({
      limit: 5,
      time_range: 'medium_term' // last 6 months
    });

    if (!response.body.items) {
      return NextResponse.json(
        { error: 'No tracks found' },
        { status: 404 }
      );
    }

    return NextResponse.json(response.body.items);
  } catch (error) {
    console.error('Error in Spotify API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}