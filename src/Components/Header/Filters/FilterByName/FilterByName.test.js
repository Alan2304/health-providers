import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FilterByName from './index';
import ProvidersContext from '../../../../Context/ProvidersContext';

describe('<FilterByName />', () => {
    const dispatch = jest.fn();

    it('Should render properly', () => {
        render(
            <ProvidersContext.Provider value={{dispatch}}>
                <FilterByName />
            </ProvidersContext.Provider>
        );

        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.queryByText('Filter by:')).not.toBeInTheDocument();
    });

    it('Should display the modal', () => {
        render(
            <ProvidersContext.Provider value={{dispatch}}>
                <FilterByName />
            </ProvidersContext.Provider>
        );

        const button = screen.getByText('Name');
        fireEvent.click(button);
        expect(screen.getByText('Filter by:')).toBeInTheDocument();
    });

    it('Should dispatch the action to filter by name', () => {
        render(
            <ProvidersContext.Provider value={{dispatch}}>
                <FilterByName />
            </ProvidersContext.Provider>
        );

        const button = screen.getByText('Name');
        fireEvent.click(button);
        const input = document.querySelector('#outlined-basic');
        fireEvent.change(input, {target: {value: 'family'}});
        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'FILTER_BY_NAME',
            payload: 'family'
        });
    });

    it('Should dispatch the action to reset the filter', () => {
        render(
            <ProvidersContext.Provider value={{dispatch}}>
                <FilterByName />
            </ProvidersContext.Provider>
        );

        const button = screen.getByText('Name');
        fireEvent.click(button);

        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'RESET_FILTER_BY_NAME',
        });
    });
})