'use client'


import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { generateMarkers } from './Markers';
import { useQuery } from '@tanstack/react-query';
import { fetchUbis } from '@/lib/data';


const { MapContainer } = ReactLeaflet;

const Map = ({ ...rest }) => {
  const { data: ubis, error, isFetched } = useQuery({
    queryKey: ["ubicacion"],
    queryFn: fetchUbis
  })

  if (!ubis || ubis.length === 0) {
    return null;
  }

  const averageLat = ubis.reduce((sum: any, ubi: any) => sum + ubi.latitud, 0) / ubis.length;
  const averageLng = ubis.reduce((sum: any, ubi: any) => sum + ubi.longitud, 0) / ubis.length;
  return (
    <MapContainer center={[averageLat, averageLng]} zoom={4} {...rest}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {generateMarkers(ubis)}
    </MapContainer>
  )
}

export default Map;
