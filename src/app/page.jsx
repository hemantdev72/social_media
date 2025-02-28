
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import { getDbUserId } from "@/actions/user.action";
import { getPosts } from "@/actions/post.action";
import PostCard from "@/components/PostCard";

export default async function Home() {
  
  const user = await currentUser();
  const dbUserId=await getDbUserId();
  const posts=await getPosts();
 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6" suppressHydrationWarning>
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
      </div>

  );
}
