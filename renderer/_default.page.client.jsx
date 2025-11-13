// renderer/_default.page.client.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

export { render }

function render(pageContext) {
  const { Page } = pageContext.exports // <- note .exports
  const root = document.getElementById('root')
  ReactDOM.hydrateRoot(root, <Page />)
}
