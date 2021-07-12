import React, { useState, useContext, useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

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

    const onChange = (id) => {
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
    };
     
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
                                    />
                            }    
                        />
                    </Grid>
                )
            });
            
            return specialtiesCheckbox;
        }

        return null
    }, [specialties, showMore, checkedValues])

    const handleClose = () => {
        setShowDialog(false)
    }

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
                Specialities
            </Button>
            <Dialog aria-labelledby="speciality-filter-modal" className="speciality-filter-modal" fullWidth open={showDialog} onClose={handleClose}>
                <DialogTitle>
                    Filter By:
                </DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={filterValues} color="primary">
                      Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
};

export default SpecialityFilter;