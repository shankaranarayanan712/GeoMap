/** @format */

import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import Home from '../container/home';
import { configure } from 'enzyme';
import axios from 'axios';
import MockResponse from './data/mockData.json';

configure({ adapter: new Adapter() });
describe('Container Test', () => {
	it('On Page Load Api test', async () => {
		const spyAxios = jest.spyOn(axios, 'get').mockResolvedValue({
			data: MockResponse,
		});
		render(<Home />);
		expect(spyAxios).toHaveBeenNthCalledWith(
			1,
			'https://www.openstreetmap.org/api/0.6/map?bbox=44.8159610691,20.4595548745,44.8168609308,20.4608191255'
		);
	});
});
