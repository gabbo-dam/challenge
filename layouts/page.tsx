import React from 'react'
import Head from 'next/head'
import Entry from '../interfaces/entry'
import Repeater from '../utils/rendering/repeater'

export default function Page({ entry }: { entry: Entry }) {
  return (
    <div>
      <Head>
        <title>PXLP - WebStack</title>
        <meta name="description" content="pxlp" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');
          `}
        </style>
      </div>
      <main>
        <Repeater blocks={entry.replicator} />
      </main>

    </div>
  )
}
