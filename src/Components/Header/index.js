import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import './Header.scss';

const Header = () => {
    return (
        <header className="providers-header">
            <div className="providers-header__container">
                <LocalHospitalIcon />
                <h1 className="providers-header__title">Health Providers</h1>
            </div>
        </header>
    )
};

export default Header;