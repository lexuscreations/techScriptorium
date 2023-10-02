const InsightRoll = ({ insights = [] }) => {
  return (
    <section className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, ind, arr) => (
          <strong key={`_about_key_${ind}`}>
            {text}{" "}
            <span className="px-4">{!(arr.length - 1 === ind) && "|"}</span>{" "}
          </strong>
        ))}
      </div>
    </section>
  );
};

export default InsightRoll;
