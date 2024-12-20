---
toc: false
---

```js
// import csv file containing food items prices
const foodprices = FileAttachment("../data/food_price_database.csv").csv({ typed: true });
```

```js
const parseDate = d3.utcParse("%y-%b");
const formatDate = d3.timeFormat("%b, %Y");

const egg = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.egg, // Convert values to numbers
}));

const egg_crate = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.egg_crate, // Convert values to numbers
}));
```

```js
function plotChart(data, title, subtitle, stroke, { width } = {}) {
  return Plot.plot({
    title: title,
    subtitle: subtitle,
    width,
    height: 300,
    y: { ticks: 4, grid: true, label: "Monthly Prices" },
    marks: [
      Plot.ruleY([0]),
      Plot.line(data, {
        x: "date",
        y: "price",
        stroke: stroke,
        strokeWidth: 4,
        tip: true,
        title: (d) => `Date: ${formatDate(d.date)} \n\nAmount: ${d3.format(".2s")(+d.price)}`,
      }),
      Plot.crosshair(data, { x: "date", y: "price" }),
    ],
  });
}
```

## Protein Boost - Animal Sourced Products

<p class="LN-paragraph-block">Explore prices of eggs, vital sources of protein that support growth and overall health.</p>

<div class="LN-section-block">
  <div class="LN-icon">
    <img src="../assets/icons/money.png">
  </div>
  <div class="LN-section-title">Price of Egg</div>
</div>

<div>
  <div>
    <div class="LN-price-value">N300</div>
    <div class="LN-price-description">Current Price of <span class="LN-span-bold">One Egg</span> in Local market</div>
  </div>
  <div class="grid grid-cols-2 card-margin">
    <div  class="card">
      ${
          resize((width) => plotChart(egg, "Agric Egg Medium Size Price of One🥚", "measurement: 1 Piece", "#b81702")) 
        }
    </div>
    <div class="card">
      ${
          resize((width) => plotChart(egg_crate, "Agric Egg Medium Size Crate🥚", "measurement: 1 Dozen", "#ff8800"))
        }
    </div>
  </div>
</div>

<div class="LN-section-block">
  <div class="LN-icon">
    <img src="../assets/icons/money.png">
  </div>
  <div class="LN-section-title">Consumption</div>
</div>

<div>
  <div class="subtitle">CONSUMER EXPENDITURE PATTERN ON ANIMAL PRODUCT</div>
  <div class="stats-container">
    <div class="stat-box">
      <div class="stat-value">879,915,554,716</div>
      <div class="stat-description">Total Household Expenditure on Animal Product</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">2.19%</div>
      <div class="stat-description">Percentage Share in Total Expenditure</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">3.86%</div>
      <div class="stat-description">Percentage Share in Food Expenditure</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">2.6</div>
      <div class="stat-description">Number of days per week household consumes Meat, Fish and Animal Product</div>
    </div>
  </div>
</div>

<style>
  text {
    font-size: 14px;
    color: #666;
  }

  [aria-label="x-axis tick"], [aria-label="y-axis tick"] {
     stroke: #ccc;
  }
/* 
  .card-margin {
    margin: 3rem 0;
  } */

  figure h2 {
    font-size: 16px;
    font-weight: 600;
  }

  p{
    color: #666;
  }

  /*  CSS */
   
  .LN-section-block {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f4f4f4;
    margin: 2rem 0;
  }

  .LN-section-title {
    font-family: var(--serif-hd);
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--theme-foreground-alt);
  }

  .LN-paragraph-block {
    font-size: 16px;
  }

  .LN-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .LN-span-bold {
    color: #111111;
    font-weight: bold;
  }

  .subtitle {
    color: #888;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .stats-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .stat-box {
    padding: 15px;
    background-color: #fff;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  }

  .stat-value {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .stat-description {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
  }

  .LN-price-value {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  .LN-price-description {
    font-size: 14px;
    color: #666;
  }
</style>
