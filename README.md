# 🎵 Spotify Top Tracks Explorer

A web application that visualizes your personal Spotify listening history and top tracks. Built with Next.js 14, Spotify Web API, and NextAuth.js.

[Live Demo](https://spotify-top-tracks-steel.vercel.app)

![Spotify Top Tracks Screenshot](/api/placeholder/800/400)

## ✨ Features

- **Spotify Authentication**: Secure login with your Spotify account using NextAuth.js
- **Top Tracks Analysis**: View your most played tracks across different time ranges
- **Interactive UI**: Modern, responsive interface built with Tailwind CSS
- **Real-time Data**: Direct integration with Spotify's Web API
- **Personalized Experience**: See your actual listening habits and preferences

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Authentication**: NextAuth.js with Spotify Provider
- **Styling**: Tailwind CSS
- **API**: Spotify Web API
- **Deployment**: Vercel
- **State Management**: React Hooks

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Spotify Developer account
- Spotify API credentials

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotify-top-tracks.git
cd spotify-top-tracks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Add `http://localhost:3000/api/auth/callback/spotify` to the Redirect URIs
4. Copy the Client ID and Client Secret to your `.env.local` file

## 📦 Project Structure

```
spotify-top-tracks/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── components/
│   ├── lib/
│   └── page.tsx
├── public/
├── styles/
├── types/
└── package.json
```

## 🔒 Authentication Flow

1. User clicks "Login with Spotify"
2. NextAuth.js handles OAuth flow with Spotify
3. Access token stored securely in session
4. Token used for subsequent Spotify API calls

## 🎨 Features in Detail

- **Time Range Selection**: Choose between short-term (4 weeks), medium-term (6 months), and long-term (all time) listening history
- **Track Details**: View comprehensive information about each track including:
  - Song title and artist
  - Album artwork
  - Popularity score
  - Preview audio clips (where available)
- **Responsive Design**: Optimized for both desktop and mobile devices

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- Spotify Web API for providing the data
- Next.js team for the amazing framework
- NextAuth.js for simplified authentication
- All contributors and users of the application

## 📞 Support

If you have any questions or run into issues, please open an issue in the GitHub repository.
