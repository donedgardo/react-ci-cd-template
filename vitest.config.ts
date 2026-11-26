import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// Test settings live here so vite.config.ts stays about the app build.
// Tests are in src/tests and run with `npm test`.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.ts'
    }
  })
)
