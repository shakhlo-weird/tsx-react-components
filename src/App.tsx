// src/App.tsx or App.js
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import ('./routes/Home') );
function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
        </Suspense>
    );
}

export default App;
