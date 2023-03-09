import {MantineProvider} from '@mantine/core'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

import router from './router/router'

createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withNormalizeCSS withGlobalStyles>
    <RouterProvider router={router} />
  </MantineProvider>
)
