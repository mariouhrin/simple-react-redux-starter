import React from 'react'

const Grid = () => (
  <article className="grid">
    <div className="grid__item grid__item--lg-span-8 grid__item--xs-span-1 grid__item--sm-span-3">
      xs-1
    </div>
    <div className="grid__item grid__item--lg-span-1 grid__item--xs-span-2 grid__item--sm-span-3">
      xs-2
    </div>
    <div className="grid__item grid__item--lg-span-1 grid__item--xs-span-3 grid__item--sm-span-3">
      xs-3
    </div>
    <div className="grid__item grid__item--lg-span-2 grid__item--xs-span-6 grid__item--sm-span-3">
      xs-6
    </div>
  </article>
)

export default Grid
