import { ThemeProvider } from 'next-themes'
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import PageNotFound from '@/pages/PageNotFound';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <Router>
                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Toaster />
        </ThemeProvider>
    )
}

export default App
