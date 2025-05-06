import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link to="/" className="flex items-center text-white">
                        <LibraryBooksIcon className="mr-2" />
                        <span className="font-medium">Library System</span>
                    </Link>

                    {/* Navigation - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-white text-sm hover:text-gray-300 transition-colors">
                            <div className="flex items-center">
                                <HomeIcon fontSize="small" className="mr-1" /> 
                                <span>Home</span>
                            </div>
                        </Link>
                        
                        <Link to="/browsebooks" className="text-white text-sm hover:text-gray-300 transition-colors">
                            <div className="flex items-center">
                                <MenuBookIcon fontSize="small" className="mr-1" /> 
                                <span>Browse Books</span>
                            </div>
                        </Link>
                        
                        <Link to="/addBooks" className="bg-white text-black text-sm px-3 py-1 rounded hover:bg-gray-200 transition-colors ml-2">
                            <div className="flex items-center">
                                <AddIcon fontSize="small" className="mr-1" /> 
                                <span>Add Book</span>
                            </div>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-white p-1"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <div className={`md:hidden bg-black border-t border-gray-800 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 py-2 space-y-2">
                    <Link to="/" className="block py-2 text-white hover:text-gray-300 transition-colors">
                        <div className="flex items-center">
                            <HomeIcon fontSize="small" className="mr-2" /> 
                            <span>Home</span>
                        </div>
                    </Link>
                    
                    <Link to="/browsebooks" className="block py-2 text-white hover:text-gray-300 transition-colors">
                        <div className="flex items-center">
                            <MenuBookIcon fontSize="small" className="mr-2" /> 
                            <span>Browse Books</span>
                        </div>
                    </Link>
                    
                    <Link to="/addBooks" className="block py-2 text-white hover:text-gray-300 transition-colors">
                        <div className="flex items-center">
                            <AddIcon fontSize="small" className="mr-2" /> 
                            <span>Add Book</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;