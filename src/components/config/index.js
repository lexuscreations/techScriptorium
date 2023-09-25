import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/src/components/Icons";

export const membersCommunityCount = "5+";

export const socialLinksMappedArr = [
  {
    key: "github",
    label: "Github",
    Icon: GithubIcon,
  },
  {
    key: "twitter",
    label: "Twitter",
    Icon: TwitterIcon,
  },
  {
    key: "facebook",
    label: "Facebook",
    Icon: () => <h2>Facebook</h2>,
  },
  {
    key: "youtube",
    label: "Youtubeb",
    Icon: YoutubeIcon,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    key: "dribbble",
    label: "Dribbble",
    Icon: DribbbleIcon,
  },
];
