import { useParams } from "react-router-dom";
import popularBooks from "../utils/popularBooks";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GenreFiltering() {
    const { ct } = useParams();
    const filteredBooks = popularBooks.filter((book) => 
        book.category && book.category.toLowerCase() === ct.toLowerCase()
    );

    const categoryName = ct.charAt(0).toUpperCase() + ct.slice(1);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header with navigation */}
            <div className="bg-white shadow-md mb-8 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center text-slate-800">
                            <HomeIcon className="mr-2" /> 
                            <span className="font-medium">Home</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-slate-800">{categoryName} Books</h1>
                        <Link to="/" className="flex items-center text-slate-800">
                            <ArrowBackIcon className="mr-2" /> 
                            <span className="font-medium">Back</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Books Grid */}
            <div className="container mx-auto px-4 pb-12">
                {filteredBooks.length > 0 ? (
                    <>
                        <div className="mb-8 text-center">
                            <div className="inline-block px-4 py-2 bg-amber-100 rounded-lg">
                                <span className="text-amber-800 font-medium">
                                    Showing {filteredBooks.length} books in {categoryName}
                                </span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <div key={book.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                                    <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-400 relative">
                                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                        {book.image && (
                                            <img 
                                                src={book.image} 
                                                alt={book.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h2 className="text-xl font-bold text-slate-800 mb-2">{book.title}</h2>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                                        
                                        <div className="flex flex-wrap text-sm text-gray-500 mb-4 gap-2">
                                            <span className="bg-slate-100 px-2 py-1 rounded">By: {book.author}</span>
                                            {book.year && <span className="bg-slate-100 px-2 py-1 rounded">{book.year}</span>}
                                        </div>
                                        
                                        <div className="flex justify-end">
                                            <Link to={`/book/${book.id}`}>
                                                <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500">No books found in this category.</p>
                        <Link to="/" className="mt-4 inline-block px-6 py-3 bg-amber-500 text-white rounded-lg">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GenreFiltering;