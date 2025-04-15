import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    //fetching blogs data through id
    const fetchBlog = async () => {
        //api calling for blogs
      const response = await fetch(`/api/blogs/${id}`);  
      const data = await response.json();
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loadingg....</div>;

  return (
    <div className="container mt-5">
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="w-100" />
      <div className="mt-4">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
