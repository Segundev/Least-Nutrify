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

const bread_sliced = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: d.bread_sliced, // Convert values to numbers
}));

const bread_unsliced = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.bread_unsliced, // Convert values to numbers
}));

const wheat_flour = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.wheat_flour, // Convert values to numbers
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

## Energy Essentials: Bread

<p>Discover the prices of bread, key source of energy that form the foundation of many diets worldwide.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(bread_sliced, "Bread Sliced 500g 🍞", "measurement: 1 loaf", "#b81702")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(bread_unsliced, "Bread Unsliced 500g 🥪", "measurement: 1 loaf", "#ff8800")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(wheat_flour, "Wheat Flour: Prepackaged (Golden Penny 2kg) 🌾", "measurement: 2 Kilogram", "#007bba")) 
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
