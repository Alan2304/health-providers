import React from 'react';
import Button from '@material-ui/core/Button';

const NameFilter = () => {
    return (
        <Button variant="outlined" color="primary" size="small" onClick={() => setShowDialog(true)}>
            Name
        </Button>
    )
};

export default NameFilter;