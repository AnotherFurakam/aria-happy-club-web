import type { Post } from "@interfaces/post";
import { useState, type FC, useEffect } from "react";
import { GetDiffTime } from "../../../utils/post-days";

interface PostsProps {}

const Posts: FC<PostsProps> = ({}) => {
  const [topPosts, setTopPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const PostsResponse = await fetch(
      "https://samamander-api.onrender.com/api/post?pageNumber=1&pageSize=20"
    ).then((res) => res.json());
    setTopPosts(PostsResponse.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {topPosts.map((post) => (
        <section className="bg-smoke border-2 border-purple rounded-3xl">
          <div className="flex justify-between p-4 border-b-2 border-purple">
            <h2 className="text-2xl uppercase">{post.title}</h2>
            <span className="text-purple">{GetDiffTime(post.createAt)}</span>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <p>{post.body}</p>
            <div className="p-5 flex justify-center justify-items-center">
              <img className="rounded-md" src={post.urlImage} alt={post.title} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
export default Posts;
