import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

const allowedTLDArr = [".com", ".in", ".org"];

export const isContainsDotComThenSlash = (
  link,
  allowedTLDs = allowedTLDArr
) => {
  for (const tld of allowedTLDs) return link.indexOf(tld + "/") !== -1;
};
