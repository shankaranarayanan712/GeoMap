/** @format */
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

interface MapProps {
	nodes: any;
	position: any;
}

const Map = (props: MapProps) => {
	const { nodes, position } = props;
	const coordinates = nodes?.coordinates;

	return (
		<div role='map'>
			<MapContainer center={position} zoom={15}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{coordinates.map((val: any, i: number) => {
					return (
						<div role='marker'>
							<Marker position={val} key={i}>
								<Popup key={i}>
									{'The lat and long of this location are '}
									{val[0]} <br /> {val[1]}.{' '}
								</Popup>
							</Marker>
						</div>
					);
				})}
			</MapContainer>
		</div>
	);
};

export default Map;
