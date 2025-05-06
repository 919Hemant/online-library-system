import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookIcon from '@mui/icons-material/Book';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';

function Body(){
    const categories = [
        { name: "Fiction", icon: <AutoStoriesIcon /> },
        { name: "Non-Fiction", icon: <ImportContactsIcon /> },
        { name: "Sci-Fi", icon: <SchoolIcon /> },
        { name: "Mystery", icon: <LocalLibraryIcon /> },
        { name: "Romance", icon: <BookIcon /> },
        { name: "Biography", icon: <HistoryEduIcon /> },
        { name: "History", icon: <MenuBookIcon /> },
        { name: "Fantasy", icon: <LibraryBooksIcon /> }
    ];

    const popularBooks = [
        { id: 1, title: "The Nightingale", author: "Kristin Hannah", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg" },
        { id: 2, title: "Project Hail Mary", author: "Andy Weir", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg" },
        { id: 9, title: "The Love Hypothesis", author: "Ali Hazelwood", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg" },
        { id: 15, title: "Mistborn: The Final Empire", author: "Brandon Sanderson", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg" }
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <div className="pt-12 pb-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Welcome to the Online Library</h1>
                    <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">Discover thousands of books across various categories. Start your reading journey today!</p>
                    <Link to="/browsebooks">
                        <button className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-opacity-90 transition-colors">
                            Browse All Books
                        </button>
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="pb-16 px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Book Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {categories.map((category, index) => (
                        <Link to={`/category/${category.name.toLowerCase()}`} key={index} className="block">
                            <div className="border border-white border-opacity-20 rounded p-4 text-center hover:bg-white hover:bg-opacity-10 transition-colors">
                                <div className="flex justify-center mb-2">
                                    {category.icon}
                                </div>
                                <p className="font-medium">{category.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Books Section */}
            <div className="pb-16 px-4">
                <div className="flex justify-between items-center max-w-5xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold">Popular Books</h2>
                    <Link to="/browsebooks" className="text-sm underline hover:no-underline">
                        View All
                    </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {popularBooks.map((book) => (
                        <div key={book.id} className="flex flex-col">
                            <div className="aspect-[2/3] mb-3 bg-gray-800 rounded overflow-hidden">
                                {book.coverUrl && (
                                    <img 
                                        src={book.coverUrl} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <h3 className="font-bold text-sm mb-1">{book.title}</h3>
                            <p className="text-sm opacity-70">by {book.author}</p>
                            <Link to={`/book/${book.id}`} className="mt-2 text-center">
                                <button className="w-full border border-white text-xs py-1 px-2 rounded hover:bg-white hover:text-black transition-colors">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;