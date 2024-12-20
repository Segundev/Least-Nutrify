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

const tin_milk = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.tin_milk, // Convert values to numbers
}));

const tin_milk_peak = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.tin_milk_peak, // Convert values to numbers
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

## Animal-Sourced Foods: Milk

<p>Explore price of milk.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(tin_milk, "Evaporated Tinned Milk Carnation 170g 🥛", "measurement: 1 Unit", "#431259")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(tin_milk_peak, "Evaporated Tinned Milk Peak 170g 🥛", "measurement: 1 Unit", "#007bba")) 
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
