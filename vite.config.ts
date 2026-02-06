import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  publicDir: 'assets'
})
```

## 3. Create `.gitignore` at the root level:
```
# Dependencies
node_modules

# Build output - DON'T ignore this if doing manual builds
# dist

# Environment files
.env
.env.local

# Editor
.vscode
.idea

# OS
.DS_Store
Thumbs.db