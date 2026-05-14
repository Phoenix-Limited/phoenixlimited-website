import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LandingPage = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Services />
            <About />
            <Support />
            <Contact />
        </main>
        <Footer />
    </>
);

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-50 font-sans">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={
                        <div className="min-h-screen flex items-center justify-center flex-col">
                            <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
                            <p className="text-slate-600 mb-8">Page Not Found</p>
                            <a href="/" className="bg-brand-secondary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Go Home</a>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;