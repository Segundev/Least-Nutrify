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

const beans_brown = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.beans_brown, // Convert values to numbers
}));

const beans_white = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.beans_white, // Convert values to numbers
}));

const bone_beef = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.bone_beef, // Convert values to numbers
}));

const boneless_beef = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.boneless_beef, // Convert values to numbers
}));

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

const chicken_feet = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.chicken_feet, // Convert values to numbers
}));

const chicken_wings = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +chicken_feet, // Convert values to numbers
}));

const dried_fish_sardine = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.dried_fish_sardine, // Convert values to numbers
}));

const tin_milk = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.tin_milk, // Convert values to numbers
}));

const tin_milk_peak = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.tin_milk_peak, // Convert values to numbers
}));

const frozen_chicken = foodprices.map((d) => ({
  date: parseDate(d.month), // Parse dates from string
  price: +d.frozen_chicken, // Convert values to numbers
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

// const test = foodprices.map((d) => ({
//   date: parseDate(d.month), // Parse dates from string
//   price: chicken_wings, // Convert values to numbers
// }));
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

## Animal-Sourced Foods: A Protein Boost

<p>Explore prices for essential animal-sourced foods like eggs, milk, and fish—vital sources of protein that support growth and overall health.</p>

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(egg, "Agric Egg Medium Size Price of One🥚", "measurement: 1 Piece", "#b81702")) 
      }
  </div>

  <div  class="card">
    ${
        resize((width) => plotChart(egg_crate, "Agric Egg Medium Size Crate🥚", "measurement: 1 Dozen", "#ff8800")) 
      }
  </div>
</div>

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
        resize((width) => plotChart(chicken_feet, "Chicken Feet 🐔", "measurement: 1 Kilogram", "#fa5e1f")) 
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
        resize((width) => plotChart(dried_fish_sardine, "Dried Fish Sardine 🐡", "measurement: 1 Kilogram", "#669900")) 
      }
  </div>
</div>

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

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(frozen_chicken, "Frozen Chicken 🐔", "measurement: 1 Kilogram", "#FF8C00")) 
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

<div class="grid grid-cols-2 card-margin">
  <div  class="card">
    ${
        resize((width) => plotChart(titus_frozen, "Titus Frozen 🦈", "measurement: 1 Kilogram", "#ff9500")) 
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
