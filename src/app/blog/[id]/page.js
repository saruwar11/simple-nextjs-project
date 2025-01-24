import BackButton from "@/components/BackButton";
import React from "react";

const page = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-700 text-lg mb-6">{post.body}</p>
          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-gray-600 font-semibold text-lg">
              Additional Information
            </h3>
            <ul className="mt-2 text-gray-600">
              <li>
                <span className="font-semibold">User ID:</span> {post.userId}
              </li>
              <li>
                <span className="font-semibold">Post ID:</span> {post.id}
              </li>
            </ul>
          </div>
          <BackButton></BackButton>
        </div>
      </div>
    </div>
  );
};

export default page;
