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

const bone_beef = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.bone_beef, // Convert values to numbers
}));

const boneless_beef = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.boneless_beef, // Convert values to numbers
}));

const chicken_feet = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.chicken_feet, // Convert values to numbers
}));

const chicken_wings = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +chicken_feet, // Convert values to numbers
}));

const frozen_chicken = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.frozen_chicken, // Convert values to numbers
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

## Animal-Sourced Foods: Beef and Chicken

<p>Explore prices of Beef and Chicken, vital sources of protein that support growth and overall health.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(bone_beef, "Beef Bone 🍖", "measurement: 1 Kilogram", "#ffa200")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(boneless_beef, "Beef Boneless 🥩", "measurement: 1 Kilogram", "#ffaa00")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(chicken_feet, "Chicken Wings 🐔", "measurement: 1 Kilogram", "#2e401c")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(chicken_feet, "Chicken Feet 🐔", "measurement: 1 Kilogram", "#fa5e1f")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(frozen_chicken, "Frozen Chicken 🐔", "measurement: 1 Kilogram", "#FF8C00")) 
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
