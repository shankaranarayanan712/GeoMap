/** @format */


import { render,screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import Map from '../components/map';
import { configure } from 'enzyme';

import MockResponse from './data/mockData.json';

configure({ adapter: new Adapter() });
describe('Map Component Render Test', () => {
    const coordinates = MockResponse?.features[0]?.geometry?.coordinates;
    const nodes = { ...MockResponse, coordinates };		
    it("should throw error when the nodes are not provided", () => {
        expect(() => render(<Map nodes={[]} position={[]} />))
          .toThrow("Cannot read property 'map' of undefined");
    });

	it('Map component should Render', async () => {
        render(<Map nodes={nodes} position={coordinates[0]} />);
        const doc = screen.getByRole('map');
        expect(doc).toBeInTheDocument()
    });

    it('Should render all the marker elements', async () => {
        render(<Map nodes={nodes} position={coordinates[0]} />);
        const doc = screen.getAllByRole('marker');
        expect(doc).toHaveLength(4);
    });
   
});
