import { redirect } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import RecentPosts from "@/src/components/Home/RecentPosts";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";

export default function Home() {
  if (!allBlogs || !Array.isArray(allBlogs) || allBlogs.length === 0) {
    return redirect("/404");
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      {allBlogs.length > 1 ? (
        <>
          <FeaturedPosts blogs={allBlogs} />
          {allBlogs.length >= 5 ? <RecentPosts blogs={allBlogs} /> : null}
        </>
      ) : null}
    </main>
  );
}
