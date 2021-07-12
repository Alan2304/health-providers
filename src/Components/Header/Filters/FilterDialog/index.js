import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const FilterDialog = ({children, searchAction, showDialog, close}) => {
    return (
        <Dialog aria-labelledby="speciality-filter-modal" className="speciality-filter-modal" fullWidth open={showDialog} onClose={close} data-testid="filter-dialog">
            <DialogTitle>
                Filter by:
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                  Cancel
                </Button>
                <Button onClick={searchAction} color="primary">
                  Search
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FilterDialog