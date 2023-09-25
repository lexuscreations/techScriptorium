// pages/categories/slug
// src/app/categories/[slug]/page.js

import { allBlogs } from "contentlayer/generated";
import siteMetadata from "@/src/utils/siteMetaData";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug as slugFn } from "github-slugger";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";

export const dynamicParams = false;

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = ["all"];

  allBlogs.forEach((blog) => {
    if (!blog.isPublished) return;
    blog.tags.forEach((tag) => categories.push(slugger.slug(tag)));
  });

  const paths = [...new Set(categories)].map((slug) => ({ slug }));
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const allCategories = ["all"];
  allBlogs.forEach((blog) =>
    blog.tags.forEach((tag) => allCategories.push(slugFn(tag)))
  );

  return {
    title: `${
      slug === "all" ? "All Web Development Blogs" : slug.replace("-", " ")
    } - Expert Tutorials and Insights`,
    description: `Explore ${
      slug === "all" ? "web development" : slug.replace("-", " ")
    } blogs and tutorials. Gain expert insights and enhance your knowledge. Start learning today!`,
    keywords: `web development blogs, tutorials, articles, insights, ${[
      ...new Set(allCategories)
    ].join(", ")}`,
    canonical: `${siteMetadata.siteUrl}/categories/${slug}`
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];

  const blogs = allBlogs.filter((blog) =>
    blog.tags.some((tag) => {
      allCategories.push(slugFn(tag));
      return params.slug === "all" || slugFn(tag) === params.slug;
    })
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "All Categories",
    headline: `${
      params.slug === "all"
        ? "All Web Development Blogs"
        : params.slug.replace("-", " ")
    } - Expert Tutorials and Insights`,
    description: `Explore ${
      params.slug === "all" ? "web development" : params.slug.replace("-", " ")
    } blogs and tutorials. Gain expert insights and enhance your knowledge. Start learning today!`,
    url: `${siteMetadata.siteUrl}/categories/`,
    organization: {
      "@type": "Organization",
      name: siteMetadata.author,
      url: `${siteMetadata.siteUrl}/`
    }
  };

  return (
    <>
      {/* //? !---start--- for SEO ---start---! */}
      <section className="hidden">
        <h1>Categories page</h1>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* //? !---end--- for SEO ---end---! */}

      <main>
        {blogs.length > 0 ? (
          <article className="flex flex-col text-dark dark:text-light">
            <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
              <h2 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
                #{params.slug}
              </h2>
              <span className="mt-2 inline-block">
                Discover more categories and expand your knowledge!
              </span>
            </div>

            <Categories
              categories={[...new Set(allCategories)]}
              currentSlug={params.slug}
            />

            <div
              className={`grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              ${blogs.length > 3 ? "grid-rows-2" : "grid-rows-1"}
              ${blogs.length > 3 ? "md:mt-20 md:mb-6" : "sxl:mt-12"}
              gap-16 mt-5 sm:mt-10 px-5 sm:px-10 md:px-24 sxl:px-32`}
            >
              {blogs.map((blog, index) => (
                <article key={index} className="col-span-1 row-span-1 relative">
                  <BlogLayoutThree blog={blog} />
                </article>
              ))}
            </div>
          </article>
        ) : null}
      </main>
    </>
  );
};

export default CategoryPage;
