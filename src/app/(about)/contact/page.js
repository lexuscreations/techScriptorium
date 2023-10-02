// pages/contact
// src/app/(about)/contact/page.js

import siteMetadata from "@/src/utils/siteMetaData";
import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/LottieAnimation";

const SEO_Data = {
  title: "Contact Me - Get in Touch",
  description: `Contact me through the form available on this page and Let's connect and collaborate.`,
  keywords:
    "contact, contact form, get in touch, reach out, send a message, connect, collaborate, message, contact me",
  alternates: {
    canonical: `/contact`
  }
};

export async function generateMetadata() {
  return { ...SEO_Data };
}

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Me",
    headline: SEO_Data.title,
    description: SEO_Data.description,
    url: `${siteMetadata.siteUrl}/contact/`,
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
        <h1>Contact Me page</h1>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* //? !---end--- for SEO ---end---! */}

      <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light mt-11 border-t-2 border-solid border-dark dark:border-light">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
          <LottieAnimation src="/animation_lmuogof3.lottie" />
        </div>
        <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
          <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
            Let's Connect!
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
