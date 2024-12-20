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

const beans_brown = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.beans_brown, // Convert values to numbers
}));

const beans_white = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.beans_white, // Convert values to numbers
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

## Beans: Nature’s Protein Source

<p>Discover prices for nutrient-rich legumes like beans.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(beans_brown, "Beans Brown Sold Loose 🫘", "measurement: 1 Kilogram", "#b81702")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(beans_white, "Beans White Black Eye Sold Loose 🫛", "measurement: 1 Kilogram", "#ff8800")) 
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
