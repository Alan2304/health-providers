import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Grid } from '@material-ui/core';

import FilterBySpecialities from './Filters/FilterBySpecialities';
import FilterByName from './Filters/FilterByName';
import ResetFilters from './Filters/ResetFilters';

import './Header.scss';

const Header = () => {
    return (
        <AppBar position="sticky" className="providers-header">
            <Toolbar variant="dense">
                <LocalHospitalIcon />
                <Typography variant="h6" color="inherit" className="providers-header__title">
                    Health Providers
                </Typography>
            </Toolbar>
            <div className="providers-header__filters">
                <Grid container direction="row">
                    <Typography variant="subtitle1" color="textSecondary" className="providers-header__filters__title">Filter by:</Typography>
                    <FilterBySpecialities />
                    <FilterByName />
                    <ResetFilters />
                </Grid>
            </div>
        </AppBar>
    )
};

export default Header;