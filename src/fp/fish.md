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

const catfish_fresh = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.catfish_fresh, // Convert values to numbers
}));

const catfish_dried = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.catfish_dried, // Convert values to numbers
}));

const catfish_smoked = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.catfish_smoked, // Convert values to numbers
}));

const dried_fish_sardine = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.dried_fish_sardine, // Convert values to numbers
}));

const iced_sardine = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.iced_sardine, // Convert values to numbers
}));

const mackerel_frozen = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.mackerel_frozen, // Convert values to numbers
}));

const mudfish_aro = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.mudfish_aro, // Convert values to numbers
}));

const mudfish_dried = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.mudfish_dried, // Convert values to numbers
}));

const tilapia_fish = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.tilapia_fish, // Convert values to numbers
}));

const titus_frozen = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.titus_frozen, // Convert values to numbers
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

## A Protein Boost - Fish

<p>Explore prices of various type of fish, vital sources of protein that support growth and overall health.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(catfish_fresh, "Catfish (Obokun) Fresh 🦈", "measurement: 1 Kilogram", "#532a09")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(catfish_dried, "Catfish Dried 🦈", "measurement: 1 Kilogram", "#606f49")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(catfish_smoked, "Catfish Smoked 🦈", "measurement: 1 Kilogram", "#669900")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(dried_fish_sardine, "Dried Fish Sardine 🐡", "measurement: 1 Kilogram", "#669900")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(titus_frozen, "Titus Frozen 🦈", "measurement: 1 Kilogram", "#ff9500")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(iced_sardine, "Iced Sardine 🦈", "measurement: 1 Kilogram", "#990066")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(mackerel_frozen, "Mackerel Frozen 🦈", "measurement: 1 Kilogram", "#006699")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(mudfish_aro, "Mudfish Aro Fresh 🐡", "measurement: 1 Kilogram", "#FF8C00")) 
      }
  </div>
</div>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(mudfish_dried, "Mudfish Dried 🐡", "measurement: 1 Kilogram", "#ff9500")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(tilapia_fish, "Tilapia Fish Epiya Fresh 🦈", "measurement: 1 Kilogram", "#ff9500")) 
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
