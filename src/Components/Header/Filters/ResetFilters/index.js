import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';

import ProvidersContext from '../../../../Context/ProvidersContext';
import { resetFilters } from '../../../../actions/ProvidersActions';

const ResetFilters = () => {
    const {state: {filteredProviders}, dispatch} = useContext(ProvidersContext);
    return (
        <>
            {filteredProviders.length > 0 && (
                <Button size="small" onClick={() => dispatch(resetFilters())}>
                    Reset
                </Button>
            )}
        </>
    )
};

export default ResetFilters;