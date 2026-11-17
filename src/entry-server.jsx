import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { buildHead } from './seo/headTags'
import { getMetadata, indexablePaths } from './seo/routeMetadata'

export { indexablePaths }

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  const known = indexablePaths.includes(url)
  return { html, head: buildHead(known ? url : '/404', { notFound: !known }), meta: getMetadata(url) }
}
