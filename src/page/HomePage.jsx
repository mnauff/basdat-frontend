import React from 'react'

function HomePage() {
    return (
        <div className="bg-transparent flex flex-row justify-center w-full">
            <div className="overflow-hidden transition-all duration-[0.5s] ease-[ease-in-out] w-[2880px] h-[1800px]">
                <div className="relative w-[6018px] h-[3660px] left-[29px]">
                    <div className="relative h-[3660px]">
                        <div className="absolute w-[6018px] h-[3660px] top-0 left-0">
                            <div className="relative w-[2851px] h-[1800px] bg-[url( Rectangle.png)] bg-[100%_100%]">
                                <img
                                    className="absolute w-[2409px] h-[1470px] top-[171px] left-[213px]"
                                    alt="Vectorb"
                                    src="Vectorb.svg"
                                />
                                <img
                                    className="absolute w-[1555px] h-[1470px] top-[171px] left-[201px]"
                                    alt="layer1"
                                    src="layer1.png"
                                />
                                <img
                                    className="absolute w-[1410px] h-[1471px] top-[170px] left-[595px]"
                                    alt="Rectangle"
                                    src="Rectangle.png"
                                />
                            </div>
                        </div>
                        <div className="absolute w-[595px] h-[451px] top-[487px] left-[1879px]">
                            <div className="relative w-[589px] h-[451px]">
                                <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#212731] text-[125px] tracking-[0] leading-[normal]">
                                    Praktikum
                                </div>
                                <div className="absolute top-[150px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#00aab3] text-[125px] tracking-[0] leading-[normal]">
                                    Teknik
                                </div>
                                <div className="absolute top-[300px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#00aab3] text-[125px] tracking-[0] leading-[normal]">
                                    Komputer
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[391px] h-[173px] top-[1046px] left-[1904px]">
                            <div className="relative w-[385px] h-[173px]">
                                <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#212731] text-[48px] tracking-[0] leading-[normal]">
                                    Persiapkan diri,
                                </div>
                                <div className="absolute top-[58px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#212731] text-[48px] tracking-[0] leading-[normal]">
                                    Luangkan waktu,
                                </div>
                                <div className="absolute top-[115px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#212731] text-[48px] tracking-[0] leading-[normal]">
                                    Hasilkan sesuatu
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[619px] h-[99px] top-[1338px] left-[1908px]">
                            <div className="absolute w-[264px] h-[99px] top-0 left-[336px] transition-transform transform hover:scale-105 active:bg-gray-400">
                                <img
                                    className="absolute w-[264px] h-[99px] top-0 left-[7px]"
                                    alt="Vector"
                                    src="Vector.svg"
                                />
                                {/* <button className='bg-green-500 active:bg-green-700'>Log in</button> */}
                                <div className="absolute w-full h-full top-[20px] mx-[auto] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[35px] text-center tracking-normal leading-normal">
                                    Log in
                                </div>
                            </div>
                            <div className="absolute w-[264px] h-[99px] top-0 left-[7px] transition-transform transform hover:scale-105 active:bg-gray-400">
                                <img
                                    className="absolute w-[264px] h-[99px] top-0 left-[7px]"
                                    alt="Vector-1"
                                    src="Vector-1.svg"
                                />
                                {/* <button className='bg-green-500 active:bg-green-700'>About Us</button> */}
                                <div className="absolute w-full h-full top-[20px] mx-auto [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[35px] text-center tracking-normal leading-normal">
                                    About Us
                                </div>
                            </div>
                        </div>
                        <img
                            className="absolute w-[188px] h-[187px] top-[321px] left-[1879px]"
                            alt="Logo"
                            src="CE.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage
