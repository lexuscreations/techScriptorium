// pages/about
// src/app/(about)/about/page.js

import Link from "next/link";
import Skills from "@/src/components/About/Skills";
import siteMetadata from "@/src/utils/siteMetaData";
import InsightRoll from "@/src/components/About/InsightRoll";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";

const SEO_Data = {
  title: "About page",
  description: `Discover the expertise behind TechScriptorium - Your source for tech tutorials and articles. Learn more about our experience, skills, and passion for technology.`,
  keywords: `web development blogs, tutorials, articles, insights, ${siteMetadata.insights.join(
    ", "
  )}, ${siteMetadata.skillList.join(", ")}`,
  alternates: {
    canonical: `/about`
  }
};

export async function generateMetadata() {
  return { ...SEO_Data };
}

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Me",
    headline: SEO_Data.title,
    description: SEO_Data.description,
    url: `${siteMetadata.siteUrl}/about/`,
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
        <h1>About Me Page</h1>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* //? !---end--- for SEO ---end---! */}

      <InsightRoll insights={siteMetadata.insights} />

      <AboutCoverSection />

      <Skills />

      <section>
        <h2 className="mt-8 font-semibold text-lg md:text-2xl text-center mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
          Have a personal project in mind? Reach out to me for collaboration 📞
          from{" "}
          <Link
            href="/contact"
            className="!underline underline-offset-4 transition duration-150 ease-in-out transition-all pt-0 pr-1 pb-1 pl-1 rounded-md hover:bg-slate-400 hover:text-white"
          >
            here
          </Link>{" "}
          and let's make it happen.
        </h2>
      </section>
    </>
  );
}
