import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import SpecialityFilter from './Filters/FilterBySpecialities';

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
                Filter By:
                <SpecialityFilter />
            </div>
        </AppBar>
    )
};

export default Header;