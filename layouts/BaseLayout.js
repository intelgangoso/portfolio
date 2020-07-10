import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import {ToastContainer} from 'react-toastify';

export default function BaseLayout({ children, page = '' }) {

    const isHomepage = () => page === "Home";
    const isResume = () => page === "Resume";

    return (
        <div className="portfolio-app">
            <Navbar />
            {isHomepage() && <Hero />}
            {
                !isResume() &&
                <div className="page-containers">
                    <div className="container">
                        {children}
                    </div>
                </div>
            }
            {
                isResume() &&
                <div>
                    {children}
                </div>
            }
            <ToastContainer />
            <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
                <div className="container text-center">
                    <small>Copyright &copy; 2020 Crystel Gangoso</small>
                </div>
            </footer>
        </div>
    )
}