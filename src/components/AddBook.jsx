// src/components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    image: '',
    rating: '',
    year: '',
    moreInfo: ''
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!bookData.title) formErrors.title = 'Title is required';
    if (!bookData.author) formErrors.author = 'Author is required';
    if (!bookData.category) formErrors.category = 'Category is required';
    if (!bookData.description) formErrors.description = 'Description is required';
    
    if (bookData.rating && (isNaN(bookData.rating) || bookData.rating < 1 || bookData.rating > 5)) {
      formErrors.rating = 'Rating must be a number between 1 and 5';
    }
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addBook({
        ...bookData,
        rating: bookData.rating ? parseFloat(bookData.rating) : 0,
        year: bookData.year ? parseInt(bookData.year) : null
      }));
      navigate('/browsebooks');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* Header with navigation */}
      <div className="bg-white shadow-md mb-8 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center text-slate-800">
              <HomeIcon className="mr-2" /> 
              <span className="font-medium">Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-800">Add New Book</h1>
            <Link to="/browsebooks" className="flex items-center text-slate-800">
              <ArrowBackIcon className="mr-2" /> 
              <span className="font-medium">Browse</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <LibraryAddIcon style={{ fontSize: 32 }} className="text-amber-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">
              Add a Book to the Library
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Book Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                  Book Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Enter book title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>
              
              {/* Author & Category in a grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-slate-700 mb-1">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={bookData.author}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.author ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="Author name"
                  />
                  {errors.author && <p className="mt-1 text-sm text-red-500">{errors.author}</p>}
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={bookData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="E.g., Fiction, Sci-Fi, Fantasy"
                  />
                  {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                </div>
              </div>
              
              {/* Year & Rating in a grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-slate-700 mb-1">
                    Publication Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={bookData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Publication year"
                  />
                </div>
                
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-1">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={bookData.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    step="0.1"
                    className={`w-full px-4 py-2 rounded-lg border ${errors.rating ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="Rating between 1-5"
                  />
                  {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
                </div>
              </div>
              
              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={bookData.description}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-2 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Brief description of the book"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>
              
              {/* Additional Info */}
              <div>
                <label htmlFor="moreInfo" className="block text-sm font-medium text-slate-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="moreInfo"
                  name="moreInfo"
                  value={bookData.moreInfo}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Any additional details about the book"
                ></textarea>
              </div>
              
              {/* Image URL */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-1">
                  Book Cover Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={bookData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="URL to book cover image"
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Add Book to Library
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
