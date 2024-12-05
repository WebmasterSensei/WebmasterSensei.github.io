// components/Comments.js
"use client";
import { useState, useEffect } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch comments from Firestore
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) return; // Ignore empty comments

    try {
      await addDoc(collection(db, "comments"), {
        text: newComment,
        timestamp: serverTimestamp(), // Use server timestamp for consistency
      });
      setNewComment(""); // Clear input field
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-[30%] p-10">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-center">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 p-2 rounded-md bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-2 mt-3 rounded-md text-white font-medium transition"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
        <div className="w-[70%] p-10">
          <div className="text-center mb-6">
            <span className="mb-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Comments
            </span>
          </div>
          {comments.map((comment) => (
            <div className=" dark:bg-gray-800">
              <div className=" dark:bg-gray-800 text-white dark:text-gray-200 p-4 antialiased flex">
                <img
                  className="rounded-full h-8 w-8 mr-2 mt-1 "
                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                />
                <div>
                  <div className="bg-gray-900 bg-opacity-35 w-fit dark:bg-gray-700 rounded-lg px-4 pt-2 pb-2.5">
                    <div className=" text-xs leading-relaxed flex justify-between">
                      <div>Anonymous</div>
                      <div className="text-xs ml-10">
                        <small
                          style={{
                            fontSize: "9px",
                          }}
                          className="flex justify-end  text-white"
                        >
                          {comment.timestamp
                            ? new Date(
                                comment.timestamp.seconds * 1000
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                              })
                            : "Just now"}
                        </small>
                      </div>
                    </div>
                    <div className="text-normal leading-snug md:leading-normal">
                      {comment.text}
                    </div>
                  </div>

                  <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                    <small>
                      {comment.timestamp
                        ? new Date(
                            comment.timestamp.seconds * 1000
                          ).toLocaleString("en-US", {
                            hour: "2-digit", // Two-digit hour
                            minute: "2-digit", // Two-digit minutes
                            hour12: true, // 12-hour format (e.g., AM/PM)
                          })
                        : "Just now"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className=" p-4 rounded-md shadow-sm transition hover:bg-gray-800"
            >
              <small className="text-gray-400 flex justify-end">
                {comment.timestamp
                  ? new Date(comment.timestamp.seconds * 1000).toLocaleString()
                  : "Just now"}
              </small>
              <p className="text-white mt-5">{comment.text}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
