import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function Error() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-lg text-center">
                <div className="mb-6 flex justify-center">
                    <SentimentDissatisfiedIcon style={{ fontSize: 80 }} className="text-amber-500" />
                </div>
                
                <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">Page Not Found</h2>
                
                <p className="text-gray-600 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                
                <Link to='/' className="inline-flex items-center justify-center bg-slate-800 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                    <HomeIcon className="mr-2" /> Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Error;