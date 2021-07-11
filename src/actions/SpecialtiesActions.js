export const ADD_SPECIALTIES = 'ADD_SPECIALTIES';

export const addSpecialties = (specialties) => ({
    type: ADD_SPECIALTIES,
    payload: specialties
});

export const FILTER_SPECIALTY = 'FILTER_SPECIALTY';

export const filterSpecilty = (specialty) => ({
    type: FILTER_SPECIALTY,
    payload: specialty
})