import popularBooks from '../utils/popularBooks';
import { Link } from 'react-router-dom';

function PopularBooks(){
    return (
        <div className='books-section w-full lg:w-[65%]'>
            <div className='books-container bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
                <div className='books-header bg-gradient-to-r from-slate-800 to-slate-700 p-5 flex justify-between items-center'>
                    <h2 className='text-white text-xl font-semibold'>Popular Books</h2>
                    <span className='bg-amber-400 text-xs text-slate-900 font-bold py-1 px-3 rounded-full'>Trending</span>
                </div>
                
                <div className='p-5'>
                    <div className='books-grid grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-auto max-h-[600px] pr-1'>
                        {popularBooks.map((book) => (
                            <div key={book.id} className='book-card group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300'>
                                <div className='book-card-top h-20 bg-gradient-to-r from-amber-400 to-orange-400 relative overflow-hidden'>
                                    <div className='absolute inset-0 bg-black bg-opacity-20'></div>
                                    <div className='absolute bottom-0 left-0 w-full p-4 text-white'>
                                        <h3 className='font-bold text-lg tracking-tight truncate'>{book.title}</h3>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center text-xs text-gray-500 mb-2'>
                                        <span className='mr-3 bg-slate-100 px-2 py-1 rounded'>{book.year || 'N/A'}</span>
                                        <span className='opacity-70'>• ID: {book.id}</span>
                                    </div>
                                    <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{book.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-1'>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className='text-amber-400 text-xs'>★</span>
                                            ))}
                                        </div>
                                        <Link to={`/book/${book.id}`}>
                                            <button className='bg-slate-100 hover:bg-slate-800 hover:text-white text-slate-800 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300'>
                                                Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='mt-6 pt-4 border-t border-gray-100 flex justify-between items-center'>
                        <span className='text-sm text-gray-500'>Showing {popularBooks.length} books</span>
                        <Link to='/browsebooks' className='text-sm text-slate-700 hover:text-slate-900 font-medium'>
                            View All Books →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularBooks;