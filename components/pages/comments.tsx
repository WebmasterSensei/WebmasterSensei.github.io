"use client";
import { useState, useEffect } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { cn } from "@/lib/utils";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    // Fetch comments from Firestore
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    // Listen for authentication state changes
    const unsubscribeAuth = auth.onAuthStateChanged(setUser);

    return () => {
      unsubscribe(); // Cleanup Firestore listener
      unsubscribeAuth(); // Cleanup Auth listener
    };
  }, [auth]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    try {
      const emailUsername = user?.email.split("@")[0] || "Anonymous"; // Default to "Anonymous"
      await addDoc(collection(db, "comments"), {
        text: newComment,
        timestamp: serverTimestamp(),
        username: emailUsername,
        photoURL: user?.photoURL || null,
      });
      setNewComment(""); // Clear the comment input field
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-[30%] p-10">
          {!user ? (
            <div className="z-10 flex min-h-32 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText  className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <button onClick={handleLogin}>✨ Login here to comment?</button>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex items-center">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 p-2 rounded-md bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white font-medium transition"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <div className="w-[70%] p-10">
          <div className="text-center mb-6">
            <span className="mb-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Comments
            </span>
          </div>
          {comments.map((comment) => (
            <div key={comment.id} className="dark:bg-gray-800">
              <div className="dark:bg-gray-800 text-white dark:text-gray-200 p-4 antialiased flex">
                <img
                  className="rounded-full h-8 w-8 mr-2 mt-1"
                  src={comment.photoURL || "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}
                  alt="User Avatar"
                />
                <div>
                  <div className="bg-gray-900 bg-opacity-35 w-fit dark:bg-gray-700 rounded-lg px-4 pt-2 pb-2.5">
                    <div className="text-xs leading-relaxed flex justify-between">
                      <div>{comment.username || "Anonymous"}</div>
                      <div className="text-xs ml-10">
                        <small
                          style={{
                            fontSize: "9px",
                          }}
                          className="flex justify-end text-white"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
