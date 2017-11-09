import React from 'react'

const Grid = () => (
  <article className="component-style">
    <header>
      <h2>Responsonsive Grid by SCSS</h2>
      <p>It has two thresholds</p>
    </header>
    <section className="grid">
      <div className="grid__item col-lg-6 col-xs-2 col-sm-3">First column</div>
      <div className="grid__item col-lg-3 col-xs-3 col-sm-3">Second column</div>
      <div className="grid__item col-lg-2 col-xs-5 col-sm-3">Third column</div>
      <div className="grid__item col-lg-1 col-xs-2 col-sm-3">Fourth column</div>
    </section>
  </article>
)

export default Grid
