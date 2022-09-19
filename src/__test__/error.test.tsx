/** @format */


import { render,screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import { ErrorFallback } from '../components/error';
import { configure } from 'enzyme';

import MockResponse from './data/mockData.json';

configure({ adapter: new Adapter() });
describe('Error component Test', () => {

    it('Should render error component', async () => {
        const errorMessage = 'Cant read properties of undefined'
        render(<ErrorFallback error={{
            message: errorMessage
        }}  />);
        const doc = screen.getByRole('alert');
        expect(doc).toHaveTextContent('Something went wrong:'); 
        expect(doc).toHaveTextContent(errorMessage);
        expect(doc).toHaveTextContent('Please try after sometime');
    });
   
});
