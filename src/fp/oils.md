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

const groundnut_oil = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.groundnut_oil, // Convert values to numbers
}));

const palm_oil = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.palm_oil, // Convert values to numbers
}));

const vegetable_oil = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.vegetable_oil, // Convert values to numbers
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

## Fat and Oil

<p>Discover the prices of Palm Oil and Vegetable Oil.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(groundnut_oil, "Groundnut Oil: 1 Bottle, Specify Bottle 🍶", "measurement: 1 Litre", "#b81702")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(palm_oil ,"Palm Oil: 1 Bottle, Specify Bottle 🍶", "measurement: 1 Litre","#ff8800")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(vegetable_oil, "Vegetable Oil: 1 Bottle, Specify Bottle 🍶", "measurement: 1 Litre", "#ffa200")) 
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
