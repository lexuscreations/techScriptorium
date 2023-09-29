import Link from "next/link";
import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-4 sm:px-6 bg-light text-dark rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition transition-all ease duration-200 text-lg sm:text-xl mix-blend-screen font-black",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
