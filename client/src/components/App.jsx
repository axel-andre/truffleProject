import React from 'react';
import { Drizzle, generateStore } from '@drizzle/store'
import { DrizzleContext } from '@drizzle/react-plugin'
import Migrations from '../Migrations.json';

import Home from '../pages/Home'
const options = { contracts: [Migrations] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const App = () => (
    <DrizzleContext.Provider drizzle={drizzle}>
        <Home />
    </DrizzleContext.Provider>
)
export default App;


