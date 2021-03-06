import L from 'leaflet'
import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export type Agent = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  icon: {
    url: string
  }
}

export type MapProps = {
  agents?: Agent[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ agents }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {agents?.map(({ id, name, location, slug, icon }) => {
        const { latitude, longitude } = location
        const markerIcon = L.icon({
          iconUrl: icon.url,
          iconSize: [32, 32],
          iconAnchor: [20, 20]
        })
        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/agent/${slug}`)
              }
            }}
            icon={markerIcon}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
