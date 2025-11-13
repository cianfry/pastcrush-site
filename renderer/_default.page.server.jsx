// renderer/_default.page.server.jsx
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export { render }

function render(pageContext) {
  const { Page, documentProps } = pageContext.exports // <- note .exports
  const title = documentProps?.title || 'PastCrush'
  const desc = documentProps?.description || 'Ancient jewelry for modern hearts'

  const pageHtml = ReactDOMServer.renderToString(<Page />)

  return {
    documentHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="https://www.pastcrush.shop${pageContext.urlOriginal}" />
  </head>
  <body>
    <div id="root">${pageHtml}</div>
  </body>
</html>`
  }
}
