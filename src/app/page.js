import Link from "next/link";
import React from "react";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="flex justify-center">
              <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/${post.id}`}>
                  <h2 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-500">
                    {post.title.slice(0, 20)}...
                  </h2>
                </Link>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>User ID: {post.userId}</span>
                  <span>Post ID: {post.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
