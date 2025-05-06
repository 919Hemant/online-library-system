// src/components/BrowseBooks.jsx
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

function BrowseBooks() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector((state) => state.books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = books.filter((book) => 
      book.title.toLowerCase().includes(term) || 
      book.author.toLowerCase().includes(term)
    );

    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with navigation */}
      <div className="bg-white shadow-md mb-8 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center text-slate-800">
              <HomeIcon className="mr-2" /> 
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-800">Browse Books</h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full py-3 pl-12 pr-4 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
          />
          <SearchIcon className="absolute left-4 top-3 text-gray-400" />
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
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
                    {book.category && <span className="bg-amber-100 px-2 py-1 rounded">{book.category}</span>}
                  </div>
                  
                  <div className="flex justify-end">
                    <Link to={`/bookId/${book.id}`}>
                      <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl text-gray-500">No books found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
