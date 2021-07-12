import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FilterDialog from '../FilterDialog';
import { filterByName, resetFilterByName } from '../../../../actions/ProvidersActions';
import ProvidersContext from '../../../../Context/ProvidersContext';

const NameFilter = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [name, setName] = useState('');
    const { dispatch } = useContext(ProvidersContext);

    const onChange = (event) => {
        setName(event.target.value);
    }

    const filterProviderByName = () => {
        if (name !== '') {
            dispatch(filterByName(name));   
        } else {
            dispatch(resetFilterByName());
        }
        setShowDialog(false);
    }

    return (
        <div className="name-filter">
            <Button variant="outlined" color="primary" size="small" onClick={() => setShowDialog(true)}>
                Name
            </Button>
            <FilterDialog searchAction={() => filterProviderByName()} showDialog={showDialog} close={() => setShowDialog(false)}>
                <TextField 
                    id="outlined-basic" 
                    label="Search by name" 
                    autoFocus 
                    fullWidth 
                    variant="outlined" 
                    value={name}
                    onChange={onChange}
                    />
            </FilterDialog>
        </div>
    )
};

export default NameFilter;