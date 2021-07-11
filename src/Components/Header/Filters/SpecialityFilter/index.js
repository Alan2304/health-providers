import React, { useState, useContext, useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import ProvidersContext from '../../../../Context/ProvidersContext';
import { filterSpecilty } from '../../../../actions/SpecialtiesActions';

import './SpecialityFilter.scss';


const SpecialityFilter = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const {state: {specialties}} = useContext(ProvidersContext);
    // const specialtiesEntries = Object.entries(specialties);
    const [checkedValues, setCheckedValues] = useState([]);

    useEffect(() => {
        const specialtiesEntries = Object.entries(specialties);
        setCheckedValues(specialtiesEntries.slice().fill(false));
        console.log(specialtiesEntries.slice().fill(false));
    }, [specialties]);

    const onChange = (id) => {
        
    };
    
    let specialtiesCheckbox = null;
    if(specialties) {
        const sliceItems = !showMore ? 5 : specialtiesEntries.length; 

        // specialtiesCheckbox = specialtiesEntries.slice(0, sliceItems).map((specialty) => (
        //     <Grid item xs={12} key={specialty[0]}  >
        //         <FormControlLabel 
        //             label={specialty[1].name} 
        //             control={
        //                 <Checkbox 
        //                     checked={specialties[specialty[0]].checked} 
        //                     name={specialty[0]} 
        //                     color="primary"
        //                     onChange={() => onChange(specialty[0])}
        //                     />
        //             }    
        //         />
        //     </Grid>
        // ))
    }

    const handleClose = useCallback(() => {
        setShowDialog(false)
    }, [setShowDialog])

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
                            {specialtiesCheckbox}
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
                    <Button onClick={handleClose} color="primary">
                      Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
};

export default SpecialityFilter;