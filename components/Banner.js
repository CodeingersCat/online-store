import { useEffect, useRef, useState } from "react";
import Link from 'next/link'

export const Banner = () => {

    const [bannerVisible, setBannerVisible] = useState(false);
    const [pageVisible, setPageVisible] = useState(false);

    

    const bannerRef = useRef(null);

    const cbFunc = (entries) => {
      const [entry] = entries;
      console.log(entry.isIntersecting)
      setBannerVisible(entry.isIntersecting);
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    useEffect(() => {
        const observer = new IntersectionObserver(cbFunc, options);

        if(bannerRef.current) observer.observe(bannerRef.current);

        setPageVisible(true);
        return () => {
            if(bannerRef.current) observer.unobserve(bannerRef.current);
        }
    }, [bannerRef, options, pageVisible])

  return (
    <div className={"bg-black w-full transition-transform duration-300 "+(pageVisible ? " translate-x-0":" translate-x-[100vw]")} >
      <div className={"transition-opacity duration-700"+(bannerVisible ? " opacity-100" : " opacity-0")}  ref={bannerRef}>
        <div
          className={"w-full text-white text-right bg-contain h-[40vh] mobile:h-[50vh]"}
          style={{
            backgroundImage: 'url("/cover-parallax.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />

        <div className="w-full bg-transparent pl-5 pb-6">
          <div
            className="text-[3.5rem] c_tab:text-9xl bg-gradient-radial bg-[rgba(253,29,29,1)]  from-[rgba(253,29,29,1)] to-[rgba(252,176,69,1)] bg-clip-text text-transparent overflow-hidden"
            style={{
              fontWeight: "600",
              wordWrap: "break-word",
              lineHeight: "120%",
            }}
          >
            Pure sound
          </div>

          <div className="text-white pl-1">The classic hifiman sundara sound now in a closed design</div>

          <Link href="#"><a><button className="bg-gradient-to-l bg-[rgba(253,29,29,1)] from-[rgba(253,29,29,1)] to-[rgba(252,176,69,1)] text-black font-extrabold text-[1rem] c_tab:text-2xl rounded-lg px-2 ml-[4px] scale-1 transition transition:transform duration:200 hover:scale-[1.05] mt-4 mb-4">
            Buy now {">>>"}
          </button></a></Link>
        </div>
      </div>
    </div>
  );
};
