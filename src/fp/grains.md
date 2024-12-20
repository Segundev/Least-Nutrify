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

const rice_ofada = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.rice_ofada, // Convert values to numbers
}));

const maize_white = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.maize_white, // Convert values to numbers
}));

const maize_yellow = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.maize_yellow, // Convert values to numbers
}));

const rice_agric = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.rice_agric, // Convert values to numbers
}));

const rice_local = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.rice_local, // Convert values to numbers
}));

const rice_medium_grained = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.rice_medium_grained, // Convert values to numbers
}));

const rice_imported = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.rice_imported, // Convert values to numbers
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

## Energy Essentials: Grains and Rice

<p>Discover the prices of rice and Maize, key sources of energy that form the foundation of many diets worldwide.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(maize_white, "Maize Grain White (Sold Loose) 🌽", "measurement: 1 Kilogram", "#669900")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(maize_yellow, "Maize Grain Yellow (Sold Loose) 🌽", "measurement: 1 Kilogram", "#fa5e1f")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(rice_agric, "Rice Agric (Sold Loose) 🍚", "measurement: 1 Kilogram", "#FF8C00")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(rice_local, "Rice Local (Sold Loose) 🍚", "measurement: 1 Kilogram", "#990066")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(rice_medium_grained, "Rice Medium Grained 🍚", "measurement: 1 Kilogram", "#006699")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(rice_imported, "Rice Imported High Quality (Sold Loose) 🍚", "measurement: 1 Kilogram", "#FF8C00")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(rice_ofada, "Broken Rice (Ofada) 🍚", "measurement: 1 Kilogram", "#ff9500")) 
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
