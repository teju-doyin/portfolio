import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function App() {
    return (
        <Router basename="/" future={{ v7_relativeSplatPath: true }}>
            <div className="overflow-x-hidden">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ProjectsPage" element={<ProjectsPage />} />
                    <Route path="/ContactPage" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
