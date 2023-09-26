"use client";

import Link from "next/link";
import { useId } from "react";
import siteMetadata from "@/src/utils/siteMetaData";
import { isContainsDotComThenSlash } from "@/src/utils";
import { socialLinksMappedArr } from "@/src/components/config";

const Footer = () => {
  const uuid = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.elements.footerEmailInpElID.value);
  };

  return (
    <footer className="mt-16 rounded-2xl m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <div className="customGradientFooterBgColor flex flex-col items-center justify-center w-full md:w-4/5 rounded-md bg-dark dark:bg-accentDark/80">
        <h3 className="mt-8 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4 dark:text-light">
          <strong>Interesting Stories | Updates | Guides</strong>
        </h3>
        <p className="mt-5 px-4 text-center w-full sm:w-3/5 text-light dark:font-medium text-sm sm:text-base dark:text-dark">
          Subscribe to learn about new technology and updates. Join over{" "}
          {siteMetadata.membersCommunityCount} members community to stay up to
          date with latest news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
        >
          <input
            type="email"
            id="footerEmailInpElID"
            placeholder="Enter your email"
            minLength="5"
            maxLength="80"
            required
            className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 dark:text-light"
          />

          <input
            type="submit"
            className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
          />
        </form>
        <div className="flex items-center mt-8 mb-8">
          {socialLinksMappedArr.map((curLinkObj, ind) =>
            isContainsDotComThenSlash(siteMetadata[curLinkObj.key]) ? (
              <a
                key={`footer_social_${ind}`}
                href={siteMetadata[curLinkObj.key]}
                className={`inline-block w-6 h-6 mr-4 ${
                  curLinkObj.key === "github" ? " fill-light" : ""
                }`}
                aria-label={`Reach out to me via ${curLinkObj.label}`}
                target="_blank"
              >
                <curLinkObj.Icon
                  uid={`footer_social_link_${curLinkObj.key}_${uuid}`}
                  className={`${
                    curLinkObj.key === "github" ? "fill-light" : ""
                  } hover:scale-125 transition-all ease duration-200`}
                />
              </a>
            ) : null
          )}
        </div>
      </div>

      <div className="dark:bg-accentDark/90 bg-dark w-full mt-16 relative font-medium border-t border-solid border-light p-2 md:py-4 md:px-8 flex flex-col md:flex-row items-center justify-between rounded-xl">
        <Link
          href="/sitemap.xml"
          className="text-center underline-offset-2 underline md:my-0"
        >
          <strong>sitemap.xml</strong>
        </Link>

        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://github.com/lexuscreations"
            className="underline underline-offset-2"
            target="_blank"
          >
            LexusCreations
          </a>
        </div>

        <span className="text-center">
          &copy;2023 TechScriptorium. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
