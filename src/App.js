import React, { Component } from 'react';

import './styles/global';

import Siderbar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';


const App = () => (
    <Wrapper>
        <Container>
            <Siderbar />
        </Container>
        <Player />
    </Wrapper>
);

export default App;
