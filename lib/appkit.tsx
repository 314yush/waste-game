import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base } from '@reown/appkit/networks'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const projectId = 'YOUR_PROJECT_ID' // Replace with your actual project ID

const metadata = {
  name: 'Waste Segregation Game',
  description: 'Learn to segregate waste correctly',
  url: 'https://example.com', // Replace with your actual URL
  icons: ['https://example.com/icon.png'] // Replace with your actual icon URL
}

const networks = [base]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

export { wagmiAdapter, queryClient }
