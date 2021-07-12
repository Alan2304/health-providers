export const ADD_SPECIALTIES = 'ADD_SPECIALTIES';

export const addSpecialties = (specialties) => ({
    type: ADD_SPECIALTIES,
    payload: specialties
});

export const FILTER_SPECIALTIES = 'FILTER_SPECIALTIES';

export const filterSpecilties = (specialties) => ({
    type: FILTER_SPECIALTIES,
    payload: specialties
})

export const RESET_FILTER_SPECIALTIES = 'RESET_FILTER_SPECIALTIES';

export const resetSpecialtiesFilter = () => ({
    type: RESET_FILTER_SPECIALTIES
});