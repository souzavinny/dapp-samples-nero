import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(import.meta.env.VITE_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
})
