import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FilterBySpecialities from './index';
import ProvidersContext from '../../../../Context/ProvidersContext';

describe('<FilterBySpecialities', () => {
    const dispatch = jest.fn();
    const state = {
        specialties: {
            sp_23: "Allergologist",
            sp_21: "Angiologist",
            sp_12: "Cardiologist",
            sp_18: "Dentist",
            sp_9: "Dermatologist",
            sp_22: "Diabetologist",
        }
    }
    const contextMock = {
        state,
        dispatch
    }

    it('Should render properly', () => {
        render(
            <ProvidersContext.Provider value={contextMock}>
                <FilterBySpecialities />
            </ProvidersContext.Provider>
        );

        expect(screen.getByText('Specialties')).toBeInTheDocument();
        expect(screen.queryByText('Filter by:')).not.toBeInTheDocument();
    });

    it('Should display the modal', () => {
        render(
            <ProvidersContext.Provider value={contextMock}>
                <FilterBySpecialities />
            </ProvidersContext.Provider>
        );
        
        const button = screen.getByText('Specialties');
        fireEvent.click(button);
        expect(screen.queryByText('Filter by:')).toBeInTheDocument();
    });

    it('Should display the list of checkbox', () => {
        render(
            <ProvidersContext.Provider value={contextMock}>
                <FilterBySpecialities />
            </ProvidersContext.Provider>
        );

        const button = screen.getByText('Specialties');
        fireEvent.click(button);
        expect(screen.getAllByTestId('checkbox-specialty').length).toEqual(5);

        const showMoreButton = screen.getByText('Show More');
        fireEvent.click(showMoreButton);
        expect(screen.getAllByTestId('checkbox-specialty').length).toEqual(Object.keys(state.specialties).length);
    });

    it('Should dispatch the action to filter by', () => {
        render(
            <ProvidersContext.Provider value={contextMock}>
                <FilterBySpecialities />
            </ProvidersContext.Provider>
        );
        
        const button = screen.getByText('Specialties');
        fireEvent.click(button);
        const specialtiesIdToClick = Object.keys(state.specialties).slice(0, 2);
        specialtiesIdToClick.forEach((specialty) => {
            const checkbox = document.querySelector(`input[name=${specialty}]`);
            fireEvent.click(checkbox);
        });
        const filterButton = screen.getByText('Search');
        fireEvent.click(filterButton);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'FILTER_SPECIALTIES',
            payload: specialtiesIdToClick
        });
    });

    it('Should dispatch the action to reset the filter by specialties', () => {
        render(
            <ProvidersContext.Provider value={contextMock}>
                <FilterBySpecialities />
            </ProvidersContext.Provider>
        );
        const button = screen.getByText('Specialties');
        fireEvent.click(button);

        const filterButton = screen.getByText('Search');
        fireEvent.click(filterButton);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'RESET_FILTER_SPECIALTIES',
        });
    });
})