import { useParams, Link } from "react-router-dom";
import teamWork from "/assets/HomeComPics/teamWork.jpg";
import familyPic from "/assets/HomeComPics/familyPic.jpg";
import office from "/assets/HomeComPics/office.jpg";

const blogPosts = {
  "working-together": {
    title: "Working Together!",
    date: "Jan 3, 2024",
    content: `
      Teamwork is the foundation of any successful logistics operation. 
      In this article, we explore the importance of collaboration and 
      communication within the industry.
    `,
    image: teamWork,
  },
  "moving-families": {
    title: "Moving Families!",
    date: "Feb 08, 2025",
    content: `
      Relocating can be stressful, but understanding the logistics 
      behind a smooth move can ease the process. We discuss best 
      practices for moving families efficiently.
    `,
    image: familyPic,
  },
  "logistics-industry": {
    title: "Moving in the Logistics Industry!",
    date: "March 2, 2025",
    content: `
      The logistics industry is evolving rapidly. From supply chain 
      management to last-mile delivery, we cover key trends and 
      challenges professionals face today.
    `,
    image: office,
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post)
    return <h2 className="text-center text-red-500">Blog post not found.</h2>;

  return (
    <section className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-16 flex flex-col">
      {/* Blog Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md"
          loading="lazy"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-2xl font-bold text-gray-800 pt-6">{post.title}</h1>

      {/* Author and Date */}
      <p className="text-gray-600 mt-2">By Rashad Edwards • {post.date}</p>

      {/* Blog Content */}
      <p className="text-gray-700 mt-4">{post.content}</p>

      {/* Back to Blog Button */}
      <Link to="/blog">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition">
          Back to Blog
        </button>
      </Link>
    </section>
  );
};

export default BlogDetail;
