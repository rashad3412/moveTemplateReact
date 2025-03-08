import teamWork from "/assets/HomeComPics/teamWork.jpg";
import office from "/assets/HomeComPics/office.jpg";
import family from "/assets/HomeComPics/family.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "working-together",
    title: "Working Together!",
    date: "Jan 3, 2024",
    image: teamWork,
  },
  {
    id: "moving-families",
    title: "Moving Families!",
    date: "Feb 08, 2025",
    image: family,
  },
  {
    id: "logistics-industry",
    title: "Moving in the Logistics Industry!",
    date: "March 2, 2025",
    image: office,
  },
];

const BlogPage = () => {
  return (
    <div>
      <section className="relative flex justify-center scroll-smooth">
        <div className="relative rounded w-full h-[20rem] aspect-w-16 aspect-h-9">
          <img
            src={office}
            alt="office"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-extrabold mb-2 tracking-tight font-Roboto">
              Our Blog
            </h2>
            <div className="text-md">
              <Link to="/" className="hover:text-deepYellow">
                Home
              </Link>
              <span className="before:content-['»'] before:text-deepYellow before:mx-1"></span>
              <span className="text-deepYellow font-Playfair tracking-wide">
                Blog
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Section */}
      <section className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-center text-center mb-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md"
              loading="lazy"
            />
            <div className="flex items-center gap-4 mt-4 text-gray-600 text-sm">
              <h2 className="font-semibold">By Rashad Edwards</h2>
              <span>•</span>
              <p>{post.date}</p>
            </div>
            <h3 className="text-lg font-bold mt-2 text-gray-800">
              {post.title}
            </h3>
            <Link to={`/blog/${post.id}`}>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Read More
              </button>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
