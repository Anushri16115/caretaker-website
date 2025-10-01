import "../styles/Blog.css";

const blogHeroImage = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop";

const blogPosts = [
  {
    title: "Diet for Stroke Patients: Best Foods for Brain Recovery",
    category: "Stroke Rehabilitation",
    image: "https://images.unsplash.com/photo-1540420773420-226c262f92c2?q=80&w=2070&auto=format&fit=crop",
    views: 2741,
    readTime: 5,
    date: "10 months ago",
  },
  {
    title: "Brain Hemorrhage Recovery - A Step-by-Step Guide",
    category: "Stroke Rehabilitation",
    image: "https://images.unsplash.com/photo-1581091019534-4d058a5c3928?q=80&w=2070&auto=format&fit=crop",
    views: 1511,
    readTime: 5,
    date: "2 months ago",
  },
];

const categories = [
  { name: "Stroke Rehabilitation", icon: "🧠" },
  { name: "Spine Rehab", icon: "🦴" },
  { name: "Assisted Living", icon: "👵" },
  { name: "Rehab and Recovery Centre", icon: "🏥" },
  { name: "Physiotherapy", icon: "💪" },
  { name: "Lifestyle and Wellness", icon: "🌿" },
];

const topSearches = [
  "Stroke Rehabilitation",
  "Spine Rehab",
  "Assisted Living",
  "Rehab and Recovery Centre",
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section 
        className="blog-hero section"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${blogHeroImage})`
        }}
      >
        <div className="container">
          <h1 className="section-title center">Trusted Health Insights from Leading Experts</h1>
          <div className="hero-stats">
            <span className="pill">25K+ Successful Recovery Stories</span>
            <span className="pill">100+ Years of Expertise of Our Doctors</span>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <h2>Search from our blogs library</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search for Stroke Care, Paralysis..." />
            <button>Search</button>
          </div>
          <div className="top-searches">
            <strong>Top Searches:</strong>
            {topSearches.map((search, index) => (
              <a href="#" key={index} className="pill">{search}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-posts section">
        <div className="container">
          <h2 className="section-title">Most Viewed Posts</h2>
          <div className="posts-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card card">
                <img src={post.image} alt={post.title} className="card-image" />
                <div className="card-content">
                  <span className="pill">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="muted">{post.views} Views • {post.readTime} min read • {post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section section">
        <div className="container">
          <h2 className="section-title center">Explore Our Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card card">
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
          <div className="view-all-btn">
            <button className="btn btn-outline">View All</button>
          </div>
        </div>
      </section>
    </div>
  );
}