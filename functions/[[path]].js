import { createPageRenderer } from 'vite-plugin-ssr/server'

const renderPage = createPageRenderer({
  isProduction: true,
  root: './dist'
})

export async function onRequest(context) {
  const pageContextInit = {
    urlOriginal: context.request.url
  }

  const pageContext = await renderPage(pageContextInit)
  const response = new Response(pageContext.httpResponse.body, {
    status: pageContext.httpResponse.status,
    headers: pageContext.httpResponse.headers
  })
  return response
}
