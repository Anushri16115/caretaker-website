
const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 mb-12">Coming soon with the latest updates and health tips</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog posts will be listed here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Stay Tuned</h2>
              <p className="text-gray-600">We're working on some great content for you. Check back soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
