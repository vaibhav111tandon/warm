import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
const Header = () => {
    return (
        <div>
            <Box fixed>
                <Typography variant="h4" style={{ backgroundColor: '#333', height: '10vh', textAlign: 'center', paddingTop: '3vh', color: 'whitesmoke' }} >WARM</Typography>
            </Box>          
        </div>
    )
};

export default Header
