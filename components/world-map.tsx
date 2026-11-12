'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import worldAtlas from 'world-atlas/countries-110m.json'

const hotspots = [
  { name: 'Eastern Europe', coordinates: [31, 50] as [number, number], type: 'conflict' },
  { name: 'Red Sea', coordinates: [39, 18] as [number, number], type: 'security' },
  { name: 'Sahel', coordinates: [1, 15] as [number, number], type: 'weather' },
  { name: 'South Pacific', coordinates: [168, -18] as [number, number], type: 'weather' },
  { name: 'East Asia', coordinates: [119, 32] as [number, number], type: 'trend' },
  { name: 'Central America', coordinates: [-88, 15] as [number, number], type: 'security' },
]

const hotspotColors: Record<string, string> = {
  conflict: '#ff493e',
  security: '#c6ff00',
  weather: '#77c9ff',
  trend: '#c39bff',
}

export function WorldMap() {
  return (
    <div className="world-map-frame" role="img" aria-label="Sample global watch regions plotted on a world map">
      <ComposableMap
        width={800}
        height={400}
        projection="geoEqualEarth"
        projectionConfig={{ scale: 145, center: [0, 5] }}
        className="world-map-svg"
      >
        <Geographies geography={worldAtlas as never}>
          {({ geographies }) => geographies.map((geography) => (
            <Geography
              key={geography.rsmKey}
              geography={geography}
              fill="#202323"
              stroke="#55584c"
              strokeWidth={0.6}
            />
          ))}
        </Geographies>
        {hotspots.map(({ name, coordinates, type }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={13} fill={hotspotColors[type]} opacity={0.13} />
            <circle r={5} fill={hotspotColors[type]} stroke="#111" strokeWidth={1.5} />
            <title>{`${name} · sample watch marker`}</title>
          </Marker>
        ))}
      </ComposableMap>
      <div className="world-map-caption"><span><i /> SAMPLE WATCH REGIONS</span><span>APPROXIMATE LOCATIONS · NOT LIVE</span></div>
    </div>
  )
}
