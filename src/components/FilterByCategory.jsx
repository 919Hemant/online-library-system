import { Link } from "react-router-dom";

function FilterByCategory(){
  const categories = [
    { name: "Science Fiction", path: "/category/sci-fi", icon: "🚀", color: "from-blue-500 to-indigo-600", bgColor: "bg-blue-50" },
    { name: "Fiction", path: "/category/fiction", icon: "📚", color: "from-green-500 to-emerald-600", bgColor: "bg-green-50" },
    { name: "Romance", path: "/category/romance", icon: "💖", color: "from-pink-500 to-rose-600", bgColor: "bg-pink-50" },
    { name: "Fantasy", path: "/category/fantasy", icon: "🧙", color: "from-purple-500 to-violet-600", bgColor: "bg-purple-50" },
    { name: "Historical", path: "/category/historical", icon: "🏛️", color: "from-amber-500 to-yellow-600", bgColor: "bg-amber-50" }
  ];

  return (
    <div className="categories-section w-full lg:w-[35%]">
      <div className="category-container bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="category-header bg-gradient-to-r from-slate-800 to-slate-700 p-5">
          <h3 className="text-white text-xl font-semibold">Browse Categories</h3>
        </div>
        
        <div className="p-5">
          <div className="space-y-3">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} className="block">
                <div className={`category-card ${category.bgColor} rounded-xl p-4 flex items-center transition-all duration-300 hover:shadow-md transform hover:-translate-y-1`}>
                  <div className={`icon-wrapper w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4 shadow-sm`}>
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{category.name}</h4>
                    <p className="text-xs text-slate-500">Browse collection</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link to="/browsebooks" className="block text-center py-3 bg-slate-100 rounded-lg text-slate-700 font-medium hover:bg-slate-200 transition-colors">
              View All Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByCategory;