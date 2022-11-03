import Link from "next/link";

const Layout = ({ children  }) => {

    return(
        <div>
            <nav>
                <div className="flex justify-center">
                    <div className="mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 md:pt-2 md:pb-2 desktop:px-0 px-4 pt-4 flex flex-col w-fw">
                        <div className="sm:mr-16 max-w-48 sm:max-w-none">
                              <Link href="/">
                                <a aria-label="Home">
                                    <img src="/logo.png" alt="logo" width="100" height="100"
                                    className="mt-2"/>
                                </a>
                              </Link>
                        </div>

                        <div className="flex flex-wrap mt-5">
                            <Link href='/'>
                              <a aria-label="Home" className="mt-auto mb-1">
                                <p className="
                                  sm:mr-8
                                  mb-4 text-left text-smaller mr-4
                                  sm:mb-0 relative
                                  after:transition-transform
                                  after:duration-200
                                  after:absolute
                                  after:content-[''] 
                                  after:w-full 
                                  after:h-0.5 
                                  after:top-full 
                                  after:left-0
                                  after:bg-[rgb(2,0,36)]
                                  after:bg-gradient-to-r
                                  after:from-[rgba(9,9,121,1)]
                                  after:to-[rgba(0,212,255,1)]
                                  after:scale-x-0
                                  hover:after:scale-x-100
                                  after:origin-right
                                  hover:after:origin-left
                                "
                                >
                                Home
                                </p>
                              </a>
                            </Link>
                            <Link href="/#">
                              <a aria-label="In ear earphones" className="mt-auto mb-1">
                                <p className="
                                  sm:mr-8
                                  mb-4 text-left text-smaller mr-4
                                  sm:mb-0 relative
                                  after:transition-transform
                                  after:duration-200
                                  after:absolute
                                  after:content-[''] 
                                  after:w-full 
                                  after:h-0.5 
                                  after:top-full 
                                  after:left-0
                                  after:bg-[rgb(2,0,36)]
                                  after:bg-gradient-to-r
                                  after:from-[rgba(9,9,121,1)]
                                  after:to-[rgba(0,212,255,1)]
                                  after:scale-x-0
                                  hover:after:scale-x-100
                                  after:origin-right
                                  hover:after:origin-left
                                ">
                                In-Ears
                                </p>
                              </a>
                            </Link>
                            <Link href="/#">
                              <a aria-label="Overhead headphones" className="mt-auto mb-1">
                                <p className="
                                  sm:mr-8
                                  mb-4 text-left text-smaller mr-4
                                  sm:mb-0 relative
                                  after:transition-transform
                                  after:duration-200
                                  after:absolute
                                  after:content-[''] 
                                  after:w-full 
                                  after:h-0.5 
                                  after:top-full 
                                  after:left-0
                                  after:bg-[rgb(2,0,36)]
                                  after:bg-gradient-to-r
                                  after:from-[rgba(9,9,121,1)]
                                  after:to-[rgba(0,212,255,1)]
                                  after:scale-x-0
                                  hover:after:scale-x-100
                                  after:origin-right
                                  hover:after:origin-left
                                ">
                                Headphones
                                </p>
                              </a>
                            </Link>
                            <Link href="/#">
                              <a aria-label="Wireless" className="mt-auto mb-1">
                                <p className="
                                  sm:mr-8
                                  mb-4 text-left text-smaller mr-4
                                  sm:mb-0 relative
                                  after:transition-transform
                                  after:duration-200
                                  after:absolute
                                  after:content-[''] 
                                  after:w-full 
                                  after:h-0.5 
                                  after:top-full 
                                  after:left-0
                                  after:bg-[rgb(2,0,36)]
                                  after:bg-gradient-to-r
                                  after:from-[rgba(9,9,121,1)]
                                  after:to-[rgba(0,212,255,1)]
                                  after:scale-x-0
                                  hover:after:scale-x-100
                                  after:origin-right
                                  hover:after:origin-left
                                ">
                                Wireless Earbuds
                                </p>
                              </a>
                            </Link>
                            <Link href="#">
                              <a aria-label="Help Center" className="mt-auto mb-1">
                                <p className="
                                  sm:mr-8
                                  mb-4 text-left text-smaller mr-4
                                  sm:mb-0 relative
                                  after:transition-transform
                                  after:duration-200
                                  after:absolute
                                  after:content-[''] 
                                  after:w-full 
                                  after:h-0.5 
                                  after:top-full 
                                  after:left-0
                                  after:bg-[rgb(2,0,36)]
                                  after:bg-gradient-to-r
                                  after:from-[rgba(9,9,121,1)]
                                  after:to-[rgba(0,212,255,1)]
                                  after:scale-x-0
                                  hover:after:scale-x-100
                                  after:origin-right
                                  hover:after:origin-left
                                ">
                                Help Center
                                </p>
                              </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <main>{children}</main>
            </div>
            <footer className="flex justify-center">
                <div className="
                sm:flex-row sm:items-center
                flex-col
                flex w-fw px-12 py-8
                desktop:px-0
                border-solid
                border-t border-gray-300">
                  <span className="block text-gray-700 text-xs">Copyright © 2022 Headfunz Ecommerce. All rights reserved.</span>
                  <div className="
                    sm:justify-end sm:m-0
                    flex flex-1 mt-4
                  ">
                    <Link href="/admin">
                      <a aria-label="Admin panel">
                      <p className="text-sm font-semibold">Admins</p>
                      </a>
                    </Link>
                  </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;