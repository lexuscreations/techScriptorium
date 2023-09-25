import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/logo.png";

const Logo = ({ click }) => {
  return (
    <Link
      href="/"
      className="flex items-center text-dark dark:text-light transition-all ease duration-300 relative sm:static"
      style={{ top: !click ? "0rem" : "-5rem" }}
    >
      <div className="w-8 md:w-12 rounded-full overflow-hidden mr-1 md:mr-0">
        <Image
          src={profileImg}
          alt="TechScriptorium logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl -ml-4">
        echScriptorium
      </span>
    </Link>
  );
};

export default Logo;
