import siteMetadata from "@/src/utils/siteMetaData";
import { isContainsDotComThenSlash } from "@/src/utils";
import { socialLinksMappedArr } from "@/src/components/config";

const RightSocialLinks = () => {
  return (
    <div className="hidden sm:flex items-center">
      {socialLinksMappedArr.map((curLinkObj, ind) =>
        isContainsDotComThenSlash(siteMetadata[curLinkObj.key]) ? (
          <a
            key={`header_social_${ind}`}
            href={siteMetadata[curLinkObj.key]}
            className="inline-block w-6 h-6 mr-4"
            aria-label={`Reach out to me via ${curLinkObj.label}`}
            target="_blank"
          >
            <curLinkObj.Icon
              className={`${
                curLinkObj.key === "github" ? "dark:fill-light" : ""
              } hover:scale-125 transition-all ease duration-200`}
            />
          </a>
        ) : null
      )}
    </div>
  );
};

export default RightSocialLinks;
