import { AppBar } from '@mui/material';
import React from 'react';
import MainNav from './MainNav';
import {CircularProgress} from '@mui/material';
import { Container } from '@mui/system';
function AppLoader() {
    return (
        <Container>
            <CircularProgress />
        </Container>
    );
}

export default AppLoader;