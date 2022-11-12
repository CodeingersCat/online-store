import SectionHeading from "./SectionHeading";
import HScroller from "./HScroller";
import { scrollTiles } from "../data/products";

const Sections = () => {
  return (
    <>
      <SectionHeading
        heading="LATEST LAUNCHES"
        subheading="Fresh off the boat, explore the best in audiophilia right now"
      />

      {/* Latest launches */}
      <HScroller products={scrollTiles} />
      {/* <section className="flex overflow-x-scroll scroll-smooth px-6 mt-6 min-w-full horizontal_scroller" style={{msOverflowStyle: "none", scrollbarWidth: "none"}}>
        <div className="relative min-w-[70vw] h-full sm:min-w-[50vw] mobile:min-w-[28vw] p-2">
          <Link href={"#"}>
            <a>
              <Image
                src={"/tile-images/img_1.webp"}
                width={"100"}
                height={"150"}
                layout={"responsive"}
                className="hover:scale-105 ease-in-out duration-300"
              />
              Hello
            </a>
          </Link>
        </div>
        <div className="relative min-w-[70vw] h-full sm:min-w-[50vw] mobile:min-w-[28vw] p-2">
          <Link href={"#"}>
            <a>
              <Image
                src={"/tile-images/img_1.webp"}
                width={"300"}
                height={"400"}
              />
              Hello
            </a>
          </Link>
        </div>
        <div className="relative min-w-[70vw] h-full sm:min-w-[50vw] mobile:min-w-[28vw] p-2">
          <Link href={"#"}>
            <a>
              <Image
                src={"/tile-images/img_1.webp"}
                width={"300"}
                height={"400"}
              />
              Hello
            </a>
          </Link>
        </div>
        <div className="relative min-w-[70vw] h-full sm:min-w-[50vw] mobile:min-w-[28vw] p-2">
          <Link href={"#"}>
            <a>
              <Image
                src={"/tile-images/img_1.webp"}
                width={"300"}
                height={"400"}
              />
              Hello
            </a>
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default Sections;
