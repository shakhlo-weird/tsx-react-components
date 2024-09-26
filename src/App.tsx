// src/App.tsx or App.js
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './routes/NotFound';



const HomePage = lazy(() => import ('./routes/Home') );
const AboutPage = lazy(() => import('./routes/About'));
function App() {
    return (
        <Suspense fallback={<div className="text-center text-xl p-5">Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
        </Suspense>
    );
}

export default App;
