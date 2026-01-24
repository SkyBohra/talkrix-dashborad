import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Talkrix - AI Voice Agents for Enterprise',
    short_name: 'Talkrix',
    description: 'Build conversational AI voice agents that automate 80% of customer calls. Sub-100ms latency, 50+ languages, enterprise-grade security.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a2e',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
