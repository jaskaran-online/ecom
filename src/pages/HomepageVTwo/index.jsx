import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Footer1 from "components/Footer1";

const HomepageVTwoPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div
        className="common-pointer bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full"
        onClick={() => navigate("/homepagevthree")}
      >
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-[88%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-row gap-2 items-center justify-start w-[7%] md:w-full">
                  <Img
                    className="h-6 w-[35%]"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Elliye{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 border-2 border-gray-50 border-solid flex md:flex-1 flex-row sm:gap-10 items-center justify-between mb-[5px] md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[36%] md:w-full">
                  <Text
                    className="text-gray-500_87 text-lg"
                    size="txtPoppinsRegular18Gray50087"
                  >
                    Search here
                  </Text>
                  <div className="bg-gray-800 h-12 md:h-[18px] p-4 relative w-12">
                    <Img
                      className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                </div>
                <Img
                  className="h-6 md:ml-[0] ml-[304px] w-20"
                  src="images/img_car_24X80.svg"
                  alt="car"
                />
                <Button
                  className="cursor-pointer font-bold leading-[normal] ml-8 md:ml-[0] text-center text-sm w-[107px]"
                  shape="square"
                  color="gray_800"
                  size="lg"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
              <Line className="bg-gray-50 h-px mt-[19px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start mt-[27px] w-auto md:w-full">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  Categories
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  New Arrival
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  Features
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  Collections
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  Discount
                </Text>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="overflow-auto overflow-x-auto w-full">
            <div className="h-[750px] sm:h-[950px] md:px-5 relative w-full">
              <div className="h-[750px] m-auto w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={26}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 2 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[750px] items-center justify-start mx-2.5"
                        style={{
                          backgroundImage: "url('images/img_group2291.png')",
                        }}
                      >
                        <div className="bg-black-900_68 flex flex-col items-start justify-end p-8 sm:px-5 w-full">
                          <div className="flex flex-col md:gap-10 gap-[148px] items-start justify-start ml-28 md:ml-[0] mt-[86px] w-[44%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-20 items-start justify-start pt-1 w-full">
                              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtPoppinsMedium24WhiteA700"
                                >
                                  50% Off Limited Offer
                                </Text>
                                <Text
                                  className="leading-[100.00%] md:text-5xl text-9xl text-white-A700"
                                  size="txtPlayfairDisplayBold128"
                                >
                                  <>
                                    Summer <br />
                                    Collection
                                  </>
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer flex h-[60px] items-center justify-center w-[245px]"
                                rightIcon={
                                  <Img
                                    className="h-12 ml-2.5 mr-[33px] my-1.5"
                                    src="images/img_arrowright.svg"
                                    alt="arrow_right"
                                  />
                                }
                                shape="square"
                                color="gray_800"
                                size="lg"
                                variant="fill"
                              >
                                <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                                  Shop Now
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[4%] flex gap-2 h-3 left-[7%] w-28"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
              <div className="absolute bottom-[4%] gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-center right-[0] shadow-bs w-auto">
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[34px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start mt-1 w-auto">
                    <Img
                      className="h-[39px] w-[39px]"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[35px] w-[68%]"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Shirt
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[39px] w-[45%]"
                      src="images/img_vector_68X43.svg"
                      alt="Vector One"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-7 w-[70%]"
                      src="images/img_cut.svg"
                      alt="cut"
                    />
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[39px] w-1/2"
                      src="images/img_vector_68X48.svg"
                      alt="Vector Two"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[31px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start mb-[3px] mt-[11px] w-auto">
                    <Img
                      className="h-8 w-2/5"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Accesories
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[68px] mt-[115px] w-[969px]"
            src="images/img_vector_gray_500.svg"
            alt="Vector Three"
          />
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1633px] mt-[115px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[49%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-start p-[82px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_02.png')" }}
              >
                <Text
                  className="my-[59px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    <>
                      Casual
                      <br />
                    </>
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                    Collection
                  </span>
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[90px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_01.png')" }}
              >
                <Text
                  className="mb-[47px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsRegular36"
                >
                  <span className="text-gray-800 font-poppins text-left font-normal">
                    <>
                      Summer <br />
                    </>
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-gray-800 font-playfairdisplay text-left text-5xl font-bold">
                    Collection
                  </span>
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[832px] items-start justify-start p-[79px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_03.png')" }}
            >
              <Text
                className="mb-[332px] mt-56 text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPoppinsRegular36WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                  Collection
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1632px] mt-[100px] mx-auto pt-2 md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Featured
              </Text>
              <div className="flex flex-row gap-2 items-center justify-between w-[7%]">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
                <Img
                  className="h-[31px] w-8"
                  src="images/img_menu.svg"
                  alt="menu"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start pb-[7px] w-[33%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[761px] items-center justify-start p-14 md:px-10 sm:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_placeholder_11.png')",
                  }}
                >
                  <Text
                    className="mb-[541px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800"
                    size="txtPoppinsRegular36"
                  >
                    <span className="text-gray-800 font-poppins font-normal">
                      <>
                        Discover Our <br />
                      </>
                    </span>
                    <span className="text-gray-800 font-poppins font-bold">
                      Featured Product
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_10.png"
                      alt="RectangleThirtyNine"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Green <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_11.png"
                      alt="RectangleThirtyNine One"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Black
                          <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_175X225.png"
                      alt="RectangleThirtyNine Two"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Blue Grey <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_13.png"
                      alt="RectangleThirtyNine Three"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Blue Denim <br />
                          Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_12.png"
                      alt="RectangleThirtyNine Four"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Casual <br />
                          Pink Shirt
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[23px] items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_rectangle39.png"
                      alt="RectangleThirtyNine Five"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Gray T-shirt
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_9.png"
                      alt="RectangleThirtyNine Six"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Purple <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[21px] items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_12.png"
                      alt="RectangleThirtyNine Seven"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Red Flannel
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1628px] sm:h-[535px] h-[579px] mt-[100px] md:px-5 relative w-full">
            <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[52px] md:px-10 sm:px-5 top-[0] w-full">
              <div className="flex flex-col items-center justify-start mb-[271px] md:ml-[0] ml-[91px]">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsBold36WhiteA700"
                >
                  Limited Offer
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-auto w-[85%]"
              orientation="horizontal"
            >
              <div className="bg-gray-50 flex md:flex-col flex-row gap-12 items-center justify-start sm:ml-[0] p-8 sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[38%] md:w-full">
                  <Img
                    className="h-[279px] md:h-auto object-cover w-[279px]"
                    src="images/img_rectangle45.png"
                    alt="RectangleFortyFive"
                  />
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] text-center text-lg w-[200px]"
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between mt-[31px] w-full">
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-end p-[22px] sm:px-5 w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            08
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[18px] w-[107px]">
                        <div className="flex flex-col gap-[18px] items-center justify-start my-1">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            58
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-3.5 w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start my-2">
                          <Text
                            className="h-6 text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            18
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[29px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Black Warm Jacket{" "}
                    </Text>
                    <div className="flex flex-row gap-6 items-center justify-start mt-[22px] w-[36%] md:w-full">
                      <Text
                        className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsRegular24Gray500"
                      >
                        $299
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-col flex-row gap-12 items-center justify-start sm:ml-[0] p-8 sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[38%] md:w-full">
                  <Img
                    className="h-[279px] md:h-auto object-cover w-[279px]"
                    src="images/img_placeholder_4.png"
                    alt="RectangleFortyFive One"
                  />
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] text-center text-lg w-[200px]"
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between mt-[31px] w-full">
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-end p-[22px] sm:px-5 w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            08
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-[18px] w-[107px]">
                        <div className="flex flex-col gap-[18px] items-center justify-start my-1">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            58
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray-500 border-solid flex flex-col h-[107px] items-center justify-start p-3.5 w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start my-2">
                          <Text
                            className="h-6 text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            18
                          </Text>
                          <Text
                            className="text-gray-800 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-8 text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Casual Grey Shoes
                    </Text>
                    <div className="flex flex-row gap-[23px] items-center justify-start mt-4 w-[36%] md:w-full">
                      <Text
                        className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                        size="txtPoppinsRegular24Gray500"
                      >
                        $399
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1634px] mt-[100px] mx-auto pt-[7px] md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                New Arrival
              </Text>
              <div className="flex flex-col items-center justify-start mt-[42px] w-full">
                <div className="md:gap-5 gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_sportj9bzxuy.png"
                      alt="placeholder"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Checkered Jacket
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                        size="txtPoppinsMedium24Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_shoesisolated.png"
                      alt="placeholder One"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Blue Woman Denim
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                        size="txtPoppinsMedium24Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_250X250.png"
                      alt="placeholder Two"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Orange Jeans
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                        size="txtPoppinsMedium24Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_6.png"
                      alt="placeholder Three"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Classic Watch
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                        size="txtPoppinsMedium24Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[346px] mt-8 w-[14%] md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
                <Img
                  className="h-[31px] w-8"
                  src="images/img_menu.svg"
                  alt="menu One"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Popular This Week
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_3.png"
                      alt="placeholder Four"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Blue Jeans
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                          size="txtPoppinsMedium24Gray500"
                        >
                          $299
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-28"
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_5.png"
                      alt="placeholder Five"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Wristwatch
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                          size="txtPoppinsMedium24Gray500"
                        >
                          $299
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-28"
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_177X177.png"
                      alt="placeholder Six"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Elegant Jacket
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                          size="txtPoppinsMedium24Gray500"
                        >
                          $299
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-28"
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-4 h-[200px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-[107px] md:h-auto object-cover w-[107px]"
                      src="images/img_placeholder_4.png"
                      alt="placeholder Seven"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Gray Watch
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                          size="txtPoppinsMedium24Gray500"
                        >
                          $299
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-28"
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[346px] w-[14%] md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
                <Img
                  className="h-[31px] w-8"
                  src="images/img_menu.svg"
                  alt="menu Two"
                />
              </div>
            </div>
          </div>
          <List
            className="bg-gray-50 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[100px] md:px-10 px-36 sm:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_music.svg"
                alt="music"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Free Delivery
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_computer.svg"
                alt="computer"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Payment Method
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_clock.svg"
                alt="clock"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Warranty
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row gap-8 h-[217px] md:h-auto items-center justify-start sm:pr-5 pr-8 py-16 w-96 sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_music_65X65.svg"
                alt="music One"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Customer Support{" "}
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
          </List>
          <Footer1 className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepageVTwoPage;
