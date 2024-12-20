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

const garri_white = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.garri_white, // Convert values to numbers
}));

const garri_yellow = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.garri_yellow, // Convert values to numbers
}));

const irish_potato = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.irish_potato, // Convert values to numbers
}));

const sweet_potato = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.sweet_potato, // Convert values to numbers
}));

const yam_tuber = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.yam_tuber, // Convert values to numbers
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

## Energy Essentials: The Starchy Food Group

<p>Discover the prices of essential starchy staples like yam, potato and garri.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(garri_white, "Garri White (Sold Loose) 🍛", "measurement: 1 Kilogram", "#ffa200")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(garri_yellow, "Garri Yellow (Sold Loose) 🍛", "measurement: 1 Kilogram", "#ffaa00")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(yam_tuber, "Yam Tuber 🍠", "measurement: 1 Kilogram", "#532a09")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(irish_potato, "Irish Potato 🥔", "measurement: 1 Kilogram", "#606f49")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(sweet_potato, "Sweet Potato 🥔", "measurement: 1 Kilogram", "#431259")) 
      }
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

  .card-margin {
    margin: 3rem 0;
  }

  figure h2 {
    font-size: 16px;
    font-weight: 600;
  }

  p{
    color: #666;
  }

</style>
