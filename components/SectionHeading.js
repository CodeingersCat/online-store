import { useEffect, useRef, useState } from "react";

const SectionHeading = ({heading, subheading}) => {
  const [headlineVisible, setHeadlineVisibility] = useState(false);
  const headlineRef = useRef(null);

  const cbFunc = (entries) => {
    const [entry] = entries;
    setHeadlineVisibility(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cbFunc, options);

    if (headlineRef.current) observer.observe(headlineRef.current);

    return () => {
      if (headlineRef.current) observer.unobserve(headlineRef.current);
    };
  }, [headlineRef, options]);

  return (
    <div
      className="pt-6 flex flex-col justify-center content-center align-middle"
      ref={headlineRef}
    >
      <div
        className={
          "text-center text-[14px] py-2 transition-opacity ease-in-out duration-700 " +
          (headlineVisible ? " opacity-100" : " opacity-0")
        }
      >
        {subheading}
      </div>
      <h3
        className={
          "text-center text-[32px] py-2 font-semibold transition-[opacity] ease-in  duration-[1.5s]" +
          (headlineVisible ? " opacity-100" : " opacity-0")
        }
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeading;