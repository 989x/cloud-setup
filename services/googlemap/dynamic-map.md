# Google Maps - Dynamic Map

Explore the dynamic map example below to integrate Google Maps into your web application.

## Example 

### Simple Markers

Check out the [Simple Markers example](https://developers.google.com/maps/documentation/javascript/examples/marker-simple) in the official Google Maps documentation.

### Try Sample on JSFiddle

Use this [JSFiddle link](https://jsfiddle.net/u80qd3nm/23/) to interactively experiment with the dynamic map example.

```js
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 13.726603, lng: 100.509254 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
```