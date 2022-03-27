import MasonryWall from '@yeger/vue-masonry-wall'
import type { UserModule } from '@/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ app }) => {
  app.use(MasonryWall)
}
