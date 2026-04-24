import "./style.css";

// Optional: If you're loading secure web maps
import { configureOAuth } from "./auth/configureOAuth";
configureOAuth({
  // Default portalUrl is ArcGIS Online
  // Only set if using other portals
  // portalUrl: "gsu.maps.arcgis.com",
  appId: "TBZsNEh4voqSgzJj",
});

// Individual imports for each Map, Chart and Calcite component
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-directions";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/charts-components/components/arcgis-chart";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";


// Import modules and types from the SDK's core API
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import type WebMap from "@arcgis/core/WebMap";
import RouteLayer from "@arcgis/core/layers/RouteLayer.js";

const viewElement = document.querySelector("arcgis-map");
const directionsElement = document.querySelector("arcgis-directions");

// create a RouteLayer from a portal item
const MARTAroutes = new RouteLayer({
  portalItem: {
    // autocasts as new PortalItem()
    id: "19683b89f5e74a69afcda912c96ff1a0", // MARTA Routes
  },
});

viewElement?.addEventListener("arcgisViewReadyChange", () => {
  // Use metadata from the Web Map to populate the header
  const map = viewElement.map as WebMap;
  const portalItem = map.portalItem;
  // const title = portalItem?.title ? portalItem.title : "Atlanta Routefinder";
  // const description = portalItem?.description ? portalItem.description : "ArcGIS Maps SDK for JavaScript template";

  MARTAroutes.load().then(() => {
    if (directionsElement?.view?.map) {
      directionsElement.view.map.add(MARTAroutes);
    }
  });

  // Define a point geometry
  // const point = new Point({
  //   longitude: -98.38,
  //   latitude: 38.34,
  // });
});
