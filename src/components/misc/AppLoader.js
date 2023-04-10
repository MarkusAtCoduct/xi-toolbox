import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
function AppLoader() {
    return (
        <Container>
            <CircularProgress />
        </Container>
    );
}

export default AppLoader;