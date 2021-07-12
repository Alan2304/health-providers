import React, { useState, useContext, useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import FilterDialog from '../FilterDialog';
import ProvidersContext from '../../../../Context/ProvidersContext';
import { filterSpecilties, resetSpecialtiesFilter } from '../../../../actions/SpecialtiesActions';

import './SpecialityFilter.scss';


const SpecialityFilter = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const {state: {specialties}, dispatch} = useContext(ProvidersContext);
    const [checkedValues, setCheckedValues] = useState([]);

    useEffect(() => {
        const specialtiesEntries = Object.entries(specialties);
        const specialtiesMap = specialtiesEntries.map((specialty) => ({id: specialty[0], value: false}));
        setCheckedValues(specialtiesMap);
    }, [specialties]);

    const onChange = useCallback((id) => {
        const newValues = checkedValues.map((specialty) => {
            if(specialty.id === id) {
                return {
                    ...specialty,
                    value: !specialty.value
                }
            }

            return specialty
        });
        setCheckedValues(newValues);
    }, [checkedValues]);
     
    const getCheckboxes = useCallback(() => {
        if(Object.keys(specialties).length > 0) {
            const specialtiesEntries = Object.entries(specialties);
            const sliceItems = !showMore ? 5 : specialtiesEntries.length; 
    
            const specialtiesCheckbox = specialtiesEntries.slice(0, sliceItems).map((specialty, index) => {
                const [id, name] = specialty;
                return (
                    <Grid item xs={12} key={id}>
                        <FormControlLabel 
                            label={name} 
                            control={
                                <Checkbox 
                                    checked={checkedValues[index]?.value}
                                    name={id} 
                                    color="primary"
                                    onChange={() => onChange(id)}
                                    data-testid="checkbox-specialty"
                                    />
                            }    
                        />
                    </Grid>
                )
            });
            
            return specialtiesCheckbox;
        }

        return null
    }, [specialties, showMore, checkedValues, onChange])

    const filterValues = () => {
        const filteredValues = checkedValues.filter((specialty) => specialty.value);
        setShowDialog(false);
        if (filteredValues.length > 0) {
            const keysToFilter = filteredValues.map((value) => value.id);   
            dispatch(filterSpecilties(keysToFilter));
        } else {
            dispatch(resetSpecialtiesFilter());
        }
    }

     return (
        <div className="speciality-filter">
            <Button variant="outlined" color="primary" size="small" onClick={() => setShowDialog(true)}>
                Specialties
            </Button>
            <FilterDialog searchAction={filterValues} showDialog={showDialog} close={() => setShowDialog(false)} >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                    <Grid item xs={12}>
                        {getCheckboxes()}
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => setShowMore(!showMore)}>
                            Show {!showMore ? 'More' : 'Less'}
                        </Button>
                    </Grid>
                </Grid>
            </FilterDialog>
        </div>

    )
};

export default SpecialityFilter;