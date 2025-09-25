# Google Maps - Static Map

Explore examples and resources to create static maps using Google Maps in your React applications.

## Creating a Static Map in React

Visit the following Stack Overflow thread to understand how to create a static map with `google-map-react` in React:

- [How I can make a static map with google-map-react in react?](https://stackoverflow.com/questions/66876496/how-i-can-make-a-static-map-with-google-map-react-in-react)

`google-map-react` is written to use `Maps JavaScript API`. Please note that Maps JavaScript API is different from `Maps Static API`. If you would like to show a static map in your react code, you can just directly put the `Maps Static API` URL in the `src` parameter of your `<img/>` tag.

Here's a sample code snippet:

```js
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Static Maps Sample</h1>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=YOUR_API_KEY"/>   
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Full Documentation for react-static-google-map

Explore the full documentation for the `react-static-google-map` library to create static Google Maps images the React way.

- GitHub Repository: [bondz/react-static-google-map](https://github.com/bondz/react-static-google-map)

Install the library using:

```bash
yarn add react-static-google-map
```

Usage examples:

```js
import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';

<StaticGoogleMap size="600x600" className="img-fluid" apiKey="YOUR_API_KEY">
  <Marker location="6.4488387,3.5496361" color="blue" label="P" />
</StaticGoogleMap>

<StaticGoogleMap size="600x600" apiKey="YOUR_API_KEY">
  <Marker.Group label="T" color="brown">
    <Marker location="40.737102,-73.990318" />
    <Marker location="40.749825,-73.987963" />
  </Marker.Group>
</StaticGoogleMap>

<StaticGoogleMap size="600x600" apiKey="YOUR_API_KEY">
  <Marker
    location={{ lat: 40.737102, lng: -73.990318 }}
    color="blue"
    label="P"
  />
  <Path
    points={[
      '40.737102,-73.990318',
      '40.749825,-73.987963',
      '40.752946,-73.987384',
      '40.755823,-73.986397',
    ]}
  />
</StaticGoogleMap>
```

Rendered static maps:

```js
<img class="img-fluid" src="https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:blue%7Clabel:P%7C6.4488387,3.5496361&key=YOUR_API_KEY">

<img src="https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:brown%7Clabel:T%7C40.737102,-73.990318%7C40.749825,-73.987963&key=YOUR_API_KEY">

<img src="https://maps.googleapis.com/maps/api/staticmap?size=600x600&scale=1&format=png&maptype=roadmap&markers=size:normal%7Ccolor:blue%7Clabel:P%7C40.737102,-73.990318&path=weight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397&key=YOUR_API_KEY">
```
