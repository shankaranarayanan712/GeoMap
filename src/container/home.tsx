/** @format */

import { useEffect, useState } from 'react';
import Map from '../components/map';

import axios from 'axios';

import osmtogeojson from 'osmtogeojson';
import { Nodes } from '../interfaces/response.interface';
import { ErrorFallback } from '../components/error';

function Home() {
	const [nodes, setNodes] = useState<Nodes | null>(null);
	const [position, setPosition] = useState([]);
	const [error,setError] = useState('')
	// The bbox can be set as configurable or from a dropdown , but since it was not set as the task of this assignment i am leaving it for now
	const bbox = '44.8159610691,20.4595548745,44.8168609308,20.4608191255';
	useEffect(() => {
		const externalAPI = `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox}`;
		async function fetchData() {
			try {
				// convert the osm format to Json format
				const res = await axios.get(externalAPI);
				const jsonData: any = osmtogeojson(res.data);
				const coordinates = jsonData?.features[0]?.geometry?.coordinates;
				setPosition(coordinates[0]);
				setNodes({ ...jsonData, coordinates });
			}
			catch (error: any) {
				setError(error?.response.data)
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			{nodes ? (
				<Map nodes={nodes} position={position} />
			) : (
				<ErrorFallback
					error={{
						message: error,
					}}
				/>
			)}
		</div>
	);
}

export default Home;
