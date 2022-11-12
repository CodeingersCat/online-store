import Link from "next/link";
import Image from "next/image";

const HScroller = ({products}) => {
    return(
        <>
            <section className="flex overflow-x-scroll scroll-smooth px-6 mt-6 min-w-full horizontal_scroller" style={{msOverflowStyle: "none", scrollbarWidth: "none"}}>
                { products.map(prod => (
                <div className="relative min-w-[70vw] h-full sm:min-w-[50vw] mobile:min-w-[28vw] p-2">
                <Link href={"#"}>
                    <a>
                    <Image
                        src={prod.img}
                        width={"300"}
                        height={"400"}
                        layout={"responsive"}
                        className="hover:scale-105 ease-in-out duration-300"
                    />
                    Hello
                    </a>
                </Link>
                </div>))}
            </section>
        </>
    )
}

export default HScroller;