// pages/index.page.jsx
import React from 'react'

function Page() {
  return (
    <main>
      <h1>PastCrush</h1>
      <p>Where archaeology meets affection. Explore ancient treasures that survived centuries — now ready for their next love story.</p>
    </main>
  )
}

export default {
  Page,
  documentProps: {
    title: 'PastCrush — Ancient Jewelry for Modern Hearts',
    description:
      'Discover authentic ancient jewelry — rings, bracelets, and amulets with stories that outlived empires.'
  }
}
