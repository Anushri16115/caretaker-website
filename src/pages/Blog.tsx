import "../styles/Blog.css";
import Image from '../components/Image';
const blogHeroImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format=fit=crop";

const blogPosts = [
  {
    title: "Diet for Stroke Patients: Best Foods for Brain Recovery",
    category: "Nutrition",
    author: "Dr. Priya Sharma",
    image: "https://images.pexels.com/photos/34242362/pexels-photo-34242362.jpeg",
    readTime: 5,
    date: "Oct 12, 2025",
  },
  {
    title: "Brain Hemorrhage Recovery: A Step-by-Step Guide",
    category: "Rehabilitation",
    author: "Dr. Rahul Verma",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    readTime: 7,
    date: "Oct 10, 2025",
  },
  {
    title: "Comprehensive Guide to Geriatric Physiotherapy",
    category: "Physiotherapy",
    author: "Dr. Anjali Mehta",
    image: "https://images.pexels.com/photos/4506162/pexels-photo-4506162.jpeg",
    readTime: 8,
    date: "Oct 5, 2025",
  },
  {
    title: "Managing Post-Surgery Pain at Home Safely",
    category: "Post-Operative Care",
    author: "Dr. Sameer Khan",
    image: "https://images.pexels.com/photos/6627569/pexels-photo-6627569.jpeg",
    readTime: 6,
    date: "Sep 28, 2025",
  },
  {
    title: "The Importance of Companionship in Elderly Care",
    category: "Elderly Care",
    author: "Dr. Meera Desai",
    image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg",
    readTime: 4,
    date: "Sep 21, 2025",
  },
  {
    title: "Setting Up a Safe Home ICU: A Checklist",
    category: "Critical Care",
    author: "Dr. Arjun Reddy",
    image: "https://media.istockphoto.com/id/1143275640/photo/modern-hospital-room-with-bed-and-ventilation-equipment.jpg?s=2048x2048&w=is&k=20&c=lMulR_KdOIA2ms4Ik48vcj6oJRNuZOi0WTUm2r7rdtc=",
    readTime: 9,
    date: "Sep 15, 2025",
  },
   {
    title: "Navigating the Challenges of Dementia Care",
    category: "Elderly Care",
    author: "Dr. Sneha Patil",
    image: "https://media.istockphoto.com/id/2199136104/photo/close-up-of-smart-doctor-pointing-and-looking-at-hologram-of-brain-remedial.jpg?s=2048x2048&w=is&k=20&c=hwBSsaczLuZ09ZA8ZvGY0hYMKwGYNCXWBZrqw0pT6MY=",
    readTime: 7,
    date: "Sep 8, 2025",
  },
  {
    title: "Breathing Exercises for Post-COVID Recovery",
    category: "Rehabilitation",
    author: "Dr. Vikram Singh",
    image: "https://images.pexels.com/photos/8111469/pexels-photo-8111469.jpeg",
    readTime: 5,
    date: "Sep 1, 2025",
  },
  {
    title: "Understanding Palliative Care and Its Benefits",
    category: "Critical Care",
    author: "Dr. Aisha Begum",
    image: "https://images.pexels.com/photos/3162828/pexels-photo-3162828.jpeg",
    readTime: 6,
    date: "Aug 25, 2025",
  },
];

const categories = [
  { name: "Stroke Rehabilitation", icon: "🧠" },
  { name: "Spine Rehab", icon: "🦴" },
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
          <p className="hero-subtitle">Your trusted source for expert advice on elderly care, post-operative recovery, and holistic well-being.</p>
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

      <section className="blog-content-section section">
        <div className="container">
          <div className="blog-layout">
            <div className="posts-column">
              <h2 className="section-title">Featured Post</h2>
              <div className="featured-post-card card">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} className="card-image" />
                <div className="card-content">
                  <span className="pill">{blogPosts[0].category}</span>
                  <h3>{blogPosts[0].title}</h3>
                  <p className="muted">By {blogPosts[0].author} • {blogPosts[0].readTime} min read • {blogPosts[0].date}</p>
                </div>
              </div>

              <h2 className="section-title" style={{ marginTop: '48px' }}>All Posts</h2>
              <div className="posts-grid">
                {blogPosts.slice(1).map((post, index) => (
                  <div key={index} className="blog-card card">
                    <Image src={post.image} alt={post.title} className="card-image" />
                    <div className="card-content">
                      <span className="pill">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p className="muted">By {post.author} • {post.readTime} min read • {post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="sidebar-column">
              <div className="sidebar-widget card">
                <h3 className="widget-title">Categories</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">
                        <span className="category-icon">{category.icon}</span>
                        <span>{category.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-widget card">
                <h3 className="widget-title">Top Searches</h3>
                <div className="top-searches-tags">
                  {topSearches.map((search, index) => (
                    <a href="#" key={index} className="pill">{search}</a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </div>
  );
}