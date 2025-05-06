import { useParams, Link } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';

function BookDetailBrowse() {
    const { id } = useParams();
    const books = useSelector((state) => state.books);
    const book = books.find((book) => book.id == id);

    // Function to render stars based on rating
    const renderRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<GradeIcon key={`full-${i}`} className="text-amber-400" />);
        }
        
        if (hasHalfStar) {
            stars.push(<GradeIcon key="half" className="text-amber-300" />);
        }
        
        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<GradeIcon key={`empty-${i}`} className="text-gray-300" />);
        }
        
        return stars;
    };

    if (!book) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Book Not Found</h2>
                    <p className="mb-6 text-gray-600">The book you're looking for doesn't exist or has been removed.</p>
                    <Link to="/browsebooks" className="bg-slate-800 text-white px-6 py-2 rounded-lg inline-flex items-center">
                        <ArrowBackIcon className="mr-2" /> Back to Browse
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <div className="mb-6">
                    <Link to="/browsebooks" className="inline-flex items-center text-slate-800 hover:text-amber-600 transition-colors">
                        <ArrowBackIcon className="mr-1" /> Back to Browse
                    </Link>
                </div>

                {/* Book Detail Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Book Image */}
                        <div className="md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6">
                            {book.image ? (
                                <img 
                                    src={book.image} 
                                    alt={book.title} 
                                    className="w-full rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: "400px" }}
                                />
                            ) : (
                                <div className="w-full h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl text-white">No Image</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Book Details */}
                        <div className="md:w-2/3 p-8">
                            <div className="mb-2 flex items-center">
                                {book.category && (
                                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mr-2">
                                        {book.category}
                                    </span>
                                )}
                                {book.year && (
                                    <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">
                                        {book.year}
                                    </span>
                                )}
                            </div>
                            
                            <h1 className="text-3xl font-bold text-slate-800 mb-3">{book.title}</h1>
                            
                            <div className="flex items-center mb-4">
                                <span className="text-slate-700 font-medium mr-2">By {book.author}</span>
                                <span className="flex">
                                    {book.rating ? renderRating(book.rating) : null}
                                </span>
                            </div>
                            
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-slate-800 mb-2">Description</h2>
                                <p className="text-gray-600 mb-4">{book.description}</p>
                                {book.moreInfo && (
                                    <p className="text-gray-600">{book.moreInfo}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetailBrowse;