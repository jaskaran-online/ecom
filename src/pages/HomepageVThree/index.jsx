import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";

const HomepageVThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-row items-center justify-start p-[30px] sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-[114px] w-[88%]">
                  <div className="flex sm:flex-col flex-row gap-14 items-start justify-start mb-[5px] md:mt-0 mt-2 w-auto sm:w-full">
                    <Text
                      className="common-pointer text-gray-800 text-lg w-auto"
                      size="txtPoppinsRegular18"
                      onClick={() => navigate("/categorieswithsidebar")}
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
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[213px] w-[7%] md:w-full">
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
                  <Img
                    className="h-6 md:ml-[0] ml-[592px] md:mt-0 my-1.5 w-[168px]"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <Line className="bg-gray-50 h-px w-[85%]" />
            </div>
            <div className="bg-white-A700 flex flex-row items-start justify-center max-w-[1920px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-[67%]">
                <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_cut_48X48.svg"
                      alt="cut"
                    />
                    <Text
                      className="text-bluegray-100 text-lg w-auto"
                      size="txtPoppinsRegular18Bluegray100"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Text
                      className="text-bluegray-100 text-lg w-auto"
                      size="txtPoppinsRegular18Bluegray100"
                    >
                      Shirt
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Text
                      className="text-bluegray-100 text-lg w-auto"
                      size="txtPoppinsRegular18Bluegray100"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-gray-800 text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-bluegray-100 text-lg w-auto"
                      size="txtPoppinsRegular18Bluegray100"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-4 w-[44%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[11px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-3 mt-[7px] w-auto">
                      <Img
                        className="h-12 w-12"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-bluegray-100 text-lg w-auto"
                        size="txtPoppinsRegular18Bluegray100"
                      >
                        Accesories
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                      <Img
                        className="h-12 w-12"
                        src="images/img_skirt.svg"
                        alt="Skirt"
                      />
                      <Text
                        className="text-bluegray-100 text-lg w-auto"
                        size="txtPoppinsRegular18Bluegray100"
                      >
                        Skirt
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-2.5 w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-[13px] mt-2 w-auto">
                      <Img
                        className="h-12 w-12"
                        src="images/img_bra.svg"
                        alt="Bra"
                      />
                      <Text
                        className="text-bluegray-100 text-lg w-auto"
                        size="txtPoppinsRegular18Bluegray100"
                      >
                        Underwear
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-[18px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-auto">
                      <Img
                        className="h-12 w-12"
                        src="images/img_car_48X48.svg"
                        alt="car"
                      />
                      <Text
                        className="text-bluegray-100 text-lg w-auto"
                        size="txtPoppinsRegular18Bluegray100"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[718px] items-center justify-start w-full"
            style={{ backgroundImage: "url('images/img_herosection.png')" }}
          >
            <div className="bg-white-A700_82 flex flex-col items-start justify-start p-[157px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[126px] w-[43%] md:w-full">
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[271px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  50% Off Limited Offer
                </Button>
                <Text
                  className="mt-8 md:text-5xl text-7xl text-gray-800"
                  size="txtPlayfairDisplayBold72"
                >
                  Summer Collection
                </Text>
                <Text
                  className="leading-[32.00px] mt-10 text-gray-800 text-lg w-full"
                  size="txtPoppinsRegular18"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="cursor-pointer flex h-[60px] items-center justify-center mt-20 w-[245px]"
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
                  <div className="font-medium font-poppins leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                    Shop Now
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[42px] items-center justify-start max-w-[1632px] mt-8 mx-auto pt-2 md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Featured
              </Text>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_warmpantspxl7.png"
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
                      src="images/img_rectangle39_245X245.png"
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
                      src="images/img_placeholder_177X177.png"
                      alt="placeholder"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Black <br />
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
                      src="images/img_placeholder_6.png"
                      alt="placeholder One"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Black
                          <br />
                          Brief Case
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
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="bg-gray-50 flex flex-col items-center justify-start pb-[55px] w-full">
                  <Img
                    className="h-[400px] sm:h-auto object-cover w-full"
                    src="images/img_placeholder_400X521.png"
                    alt="placeholder Two"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start mt-[27px] w-auto">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-800"
                      size="txtPoppinsMedium36"
                    >
                      <>
                        Brown <br />
                        Casual Sneaker
                      </>
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500 w-auto"
                      size="txtPoppinsMedium36Gray500"
                    >
                      $299
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] mt-14 text-center text-lg w-[200px]"
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_1.png"
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
                      src="images/img_placeholder_631X384.png"
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
                  <div className="flex flex-1 flex-col gap-4 justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_245X245.png"
                      alt="placeholder Three"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[42px] w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Modern Classic
                          <br />
                          Watch
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
                  <div className="flex flex-1 flex-col gap-4 justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] md:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_250X250.png"
                      alt="placeholder Four"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[42px] w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        <>
                          Casual <br />
                          Classic Watch
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
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1442px] h-[426px] sm:h-[526px] max-w-[1630px] mt-[100px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col gap-6 h-full items-start justify-start ml-8 mt-8">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA700"
              >
                New Arrival
              </Text>
              <Text
                className="leading-[32.00px] text-lg text-white-A700 w-full"
                size="txtPoppinsRegular18WhiteA700"
              >
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </div>
            <div className="absolute flex inset-[0] justify-center m-auto w-full">
              <div className="bg-gray-800 h-[426px] my-auto w-[24%]"></div>
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between ml-[-109px] my-auto w-[84%] z-[1]">
                <List
                  className="sm:flex-col flex-row gap-[26.57px] grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-4 h-[362px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover w-[200px]"
                      src="images/img_businessshirt.png"
                      alt="blackbusiness"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Black Briefcase
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-4 h-[362px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover w-[200px]"
                      src="images/img_sportj9bzxuy.png"
                      alt="pink3TZ3PBBOne"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Pink Shirt
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-[26.58px] grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-4 h-[361px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover w-[200px]"
                      src="images/img_placeholder_4.png"
                      alt="graytshirtis"
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
                  <div className="bg-white-A700 flex flex-col gap-4 h-[361px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 shadow-bs2 w-[318px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover w-[200px]"
                      src="images/img_placeholder_5.png"
                      alt="redcheckereds"
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
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1633px] mt-[100px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-center p-[82px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_02_400X800.png')" }}
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
              className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-center p-[79px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_03_400X801.png')" }}
            >
              <Text
                className="my-[73px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
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
          <div className="flex flex-col items-center justify-start mt-[100px] w-full">
            <div className="h-[362px] md:h-[466px] sm:h-[964px] md:px-5 relative w-full">
              <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[63px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex flex-col items-center justify-start mb-[154px] ml-20 md:ml-[0]">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Why Choose Us
                  </Text>
                </div>
              </div>
              <List
                className="absolute bottom-[0] sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-center mx-auto w-[85%]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
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
                <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
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
                <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
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
                <div className="bg-white-A700 flex flex-row gap-8 h-[217px] md:h-auto items-center justify-center sm:ml-[0] sm:px-5 px-8 py-16 shadow-bs3 w-96 sm:w-full">
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
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1630px] mt-[100px] mx-auto pt-[11px] md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Popular this Week
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-0 mt-[5px]">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-center justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_placeholder_6.png"
                  alt="placeholder Five"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Black Adventure
                      <br />
                      Boots
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_placeholder_177X177.png"
                  alt="placeholder Six"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Black Formal
                      <br />
                      Highheels
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_placeholder_250X250.png"
                  alt="placeholder Seven"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Brown <br />
                      Casual Shoes
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_travel8v7cnke.png"
                  alt="placeholder Eight"
                />
                <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[50px] w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Gray <br />
                      Longpants
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_placeholder_245X245.png"
                  alt="placeholder Nine"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Green
                      <br />
                      Sport Jacket
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start pb-1 w-full">
                <Img
                  className="h-[245px] md:h-auto object-cover w-[245px]"
                  src="images/img_placeholder_3.png"
                  alt="placeholder Ten"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-[143px]">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <>
                      Blue Denim <br />
                      Skirt
                    </>
                  </Text>
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
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Img
            className="h-[68px] mt-[100px] w-[51%]"
            src="images/img_brand.svg"
            alt="brand"
          />
          <footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-center mb-8 mt-16 mx-auto w-[85%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-12 items-start justify-start md:mt-0 mt-[5px] w-[26%] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-[416px] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtPoppinsBold24WhiteA700"
                      >
                        Contacts
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto sm:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_call.svg"
                            alt="call"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsRegular18WhiteA700"
                          >
                            +1234567890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto sm:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_mail.svg"
                            alt="mail"
                          />
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsRegular18WhiteA700"
                          >
                            elliye@support.com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtPoppinsBold24WhiteA700"
                      >
                        Social Media
                      </Text>
                      <Img
                        className="h-6 w-[120px]"
                        src="images/img_sosmedia.svg"
                        alt="sosmedia"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start w-[166px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24WhiteA700"
                    >
                      Product Links
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Categories
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        New Arrival
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Features
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Collections
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Discount
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Special Offer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[251px] w-[245px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBold24WhiteA700"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        About
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Blog
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Careers
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Services
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Terms of service
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[170px] w-[24%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24WhiteA700"
                    >
                      Join our Newsletter
                    </Text>
                    <Text
                      className="mt-[31px] text-gray-500 text-lg w-full"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Drop your email below to get update, promotions, coupons,
                      and more!
                    </Text>
                    <Input
                      name="form"
                      placeholder="Enter your email"
                      className="leading-[normal] p-0 placeholder:text-bluegray-100_87 text-left text-lg tracking-[0.36px] w-full"
                      wrapClassName="border border-solid border-white-A700 flex mt-[35px] w-full"
                      type="email"
                      suffix={
                        <div className="h-[60px] ml-[35px] w-[60px] bg-white-A700 p-3.5 flex justify-center items-center">
                          <Img
                            className="my-auto"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        </div>
                      }
                      shape="square"
                      color="gray_800"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <Text
                className="text-bluegray-100 text-sm"
                size="txtPoppinsRegular14Bluegray100"
              >
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepageVThreePage;
