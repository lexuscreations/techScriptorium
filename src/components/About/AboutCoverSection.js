import LottieAnimation from "@/src/components/LottieAnimation";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <LottieAnimation src="/animation_lmur23vg.lottie" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Elevating Visions, Crafting Excellence.
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          <mark style={{ backgroundColor: "#d0ff13b8" }}>Hi everyone</mark>,
          <br />
          In the world of technology and design, I blend creativity and skill,
          proficient in technologies{" "}
          <mark style={{ backgroundColor: "#d0ff13b8" }}>
            from web to android, frontend to backend.
          </mark>{" "}
          With a passion for excellence and innovation, I craft exceptional
          digital experiences, always exploring new horizons. Beyond coding, I
          stay updated with tech trends and collaborate to solve real-world
          problems.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
