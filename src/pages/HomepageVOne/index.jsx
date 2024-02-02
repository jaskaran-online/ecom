import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  List,
  PagerIndicator,
  RatingBar,
  Text,
} from "components";

const HomepageVOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[17px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[87%]">
              <div className="flex flex-row gap-2 items-center justify-start w-[7%] md:w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start md:ml-[0] ml-[392px] w-auto md:w-full">
                <Text
                  className="common-pointer text-gray-800 text-lg w-auto"
                  size="txtPoppinsMedium18"
                  onClick={() => navigate("/categorieswithsidebar")}
                >
                  Categories
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  New Arrival
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Features
                </Text>
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Collections
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[259px] w-[16%] md:w-full">
                <Img className="h-6 w-20" src="images/img_car.svg" alt="car" />
                <Button
                  className="common-pointer cursor-pointer font-bold h-[60px] leading-[normal] text-center text-lg w-[107px]"
                  onClick={() => navigate("/homepagevtwo")}
                  shape="square"
                  color="gray_800"
                  size="xl"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-50 sm:h-[1084px] md:h-[1124px] h-[700px] pl-36 md:px-5 relative w-full">
            <div className="absolute sm:h-[1084px] md:h-[1124px] h-[700px] inset-y-[0] my-auto right-[0] w-[93%] md:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[69%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="sm:flex-1 h-[364px] md:h-auto object-cover w-[32%] sm:w-full"
                      src="images/img_placeholder.png"
                      alt="placeholder"
                    />
                    <Img
                      className="sm:flex-1 h-[364px] md:h-auto object-cover w-[69%] sm:w-full"
                      src="images/img_placeholder_364X837.png"
                      alt="placeholder One"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[336px] items-end justify-end p-9 sm:px-5 w-[32%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group2278.png')",
                      }}
                    >
                      <PagerIndicator
                        className="flex gap-2 h-3 items-start justify-start mr-[31px] mt-[252px] w-28"
                        count={6}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3"
                        selectedWrapperCss="inline-block"
                        unselectedWrapperCss="inline-block"
                      />
                    </div>
                    <Img
                      className="md:flex-1 h-[336px] sm:h-auto object-cover w-[32%] md:w-full"
                      src="images/img_placeholder_336X384.png"
                      alt="placeholder Two"
                    />
                    <div
                      className="bg-cover bg-no-repeat md:h-12 h-[336px] pt-36 md:px-10 px-36 sm:px-5 relative w-[38%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group2279.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-12 inset-x-[0] mx-auto w-[36%]"
                        src="images/img_button.svg"
                        alt="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[32%]">
                <Text
                  className="md:text-5xl text-8xl text-gray-800"
                  size="txtPlayfairDisplayRegular96"
                >
                  Summer Sale
                </Text>
                <Text
                  className="mt-[21px] md:text-5xl text-[64px] text-gray-800"
                  size="txtPoppinsBold64"
                >
                  50% Off
                </Text>
                <Text
                  className="leading-[32.00px] mt-[50px] text-gray-800 text-lg w-[93%] sm:w-full"
                  size="txtPoppinsRegular18"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="cursor-pointer flex h-[60px] items-center justify-center mt-14 w-[245px]"
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
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1633px] mt-[100px] mx-auto pt-[11px] md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Categories
              </Text>
              <div className="flex flex-col items-center justify-start mt-[5px]">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[47%] md:w-full">
                  <Img
                    className="h-[68px] w-[68px]"
                    src="images/img_vector.svg"
                    alt="Vector"
                  />
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Jacket
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[3px] w-[46%] md:w-full">
                  <Img
                    className="h-[60px] w-full"
                    src="images/img_file.svg"
                    alt="file"
                  />
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Shirt
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[36%] md:w-full">
                  <Img
                    className="h-[68px] w-[85%]"
                    src="images/img_vector_68X43.svg"
                    alt="Vector One"
                  />
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Pants
                  </Text>
                </div>
              </div>
              <div className="bg-gray-800 flex md:flex-1 flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-9 items-center justify-start mt-[9px] w-[47%] md:w-full">
                  <Img
                    className="h-12 w-full"
                    src="images/img_cut.svg"
                    alt="cut"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    Shoes
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[35%] md:w-full">
                  <Img
                    className="h-[68px] w-[96%]"
                    src="images/img_vector_68X48.svg"
                    alt="Vector Two"
                  />
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Dress
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-[16%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start mt-[5px] w-[68%] md:w-full">
                  <Img
                    className="h-14 w-[70%]"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Accesories
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] mt-[100px] mx-auto pt-[7px] md:px-5 w-full">
            <div className="flex flex-col gap-[42px] items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsBold36"
                >
                  New Arrivals
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
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <div className="bg-gray-50 flex flex-1 md:flex-col flex-row gap-12 h-[688px] md:h-auto items-center justify-center max-w-[800px] p-8 sm:px-5 w-full">
                  <Img
                    className="md:flex-1 h-[631px] sm:h-auto object-cover w-96 md:w-full"
                    src="images/img_placeholder_631X384.png"
                    alt="placeholder Three"
                  />
                  <div className="flex flex-col gap-6 items-center justify-start w-auto">
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsMedium24"
                      >
                        Purple Warm Jacket
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
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
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                  <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-50 flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 w-full">
                      <Img
                        className="h-[177px] md:h-auto object-cover w-[177px]"
                        src="images/img_placeholder_177X177.png"
                        alt="placeholder Four"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Blue Grey Warm Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtPoppinsMedium18Gray500"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 w-full">
                      <Img
                        className="h-[177px] md:h-auto object-cover w-[177px]"
                        src="images/img_placeholder_1.png"
                        alt="placeholder Five"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Denim Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtPoppinsMedium18Gray500"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 w-full">
                      <Img
                        className="h-[177px] md:h-auto object-cover w-[177px]"
                        src="images/img_placeholder_2.png"
                        alt="placeholder Six"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Black Jacket
                        </Text>
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtPoppinsMedium18Gray500"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 w-full">
                      <Img
                        className="h-[177px] md:h-auto object-cover w-[177px]"
                        src="images/img_placeholder_3.png"
                        alt="placeholder Seven"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtPoppinsMedium24"
                        >
                          Green Polar Jacket
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
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] mt-[100px] mx-auto pt-2 md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[41px] w-full">
              <div className="border-2 border-gray-800 border-solid flex sm:flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-96 sm:w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_placeholder_250X250.png"
                  alt="placeholder Eight"
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
              <div className="flex sm:flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-96 sm:w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_placeholder_4.png"
                  alt="placeholder Nine"
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
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 h-[499px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_5.png"
                    alt="placeholder Ten"
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
                <div className="flex flex-col gap-4 h-[499px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_6.png"
                    alt="placeholder Eleven"
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
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-8 w-full">
              <div className="flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_placeholder_3.png"
                  alt="stylishblacks"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Black Highheels
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_placeholder_631X384.png"
                  alt="casualfabrics"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Casual Grey Shoes
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_shoesisolated.png"
                  alt="shoesisolated"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Brown Shoes
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_businessshirt.png"
                  alt="businessshirt"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Business Shirt
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_warmpantspxl7.png"
                  alt="warmpantsPXLSeven"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Grey Warm Pants
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[500px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_sportj9bzxuy.png"
                  alt="sportJ9BZXUY"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Green Sport Jacket
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_travel8v7cnke.png"
                  alt="travel8V7CNKE"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Purple Warm Jacket
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 h-[499px] md:h-auto items-center justify-center p-6 sm:px-5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[250px]"
                  src="images/img_placeholder_1.png"
                  alt="womensdenimsk"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Woman Denim Skirt
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
          <div className="sm:h-[1338px] h-[544px] md:h-[906px] mt-[74px] md:px-5 relative w-full">
            <div className="absolute bg-gray-800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[52px] md:px-10 sm:px-5 top-[0] w-full">
              <div className="flex flex-col items-center justify-start mb-[284px] md:ml-[0] ml-[91px]">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsBold36WhiteA700"
                >
                  Summer Collections
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] sm:h-[1264px] h-[400px] md:h-[832px] inset-x-[0] mx-auto w-[87%] md:w-full">
              <List
                className="absolute sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-auto w-[99%]"
                orientation="horizontal"
              >
                <div className="bg-bluegray-100 flex flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-center p-[59px] md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group2280.png')",
                    }}
                  >
                    <Text
                      className="my-[87px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                      size="txtPoppinsRegular36"
                    >
                      <span className="text-gray-800 font-poppins text-left font-normal">
                        <>
                          Summer <br />
                        </>
                      </span>
                      <span className="text-gray-800 font-poppins text-left font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-bluegray-100 flex flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-center p-[53px] md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group2278.png')",
                    }}
                  >
                    <Text
                      className="my-[93px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtPoppinsRegular36WhiteA700"
                    >
                      <span className="text-white-A700 font-poppins text-left font-normal">
                        <>
                          Casual <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-bluegray-100 flex flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-center p-[52px] md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_placeholder.png')",
                    }}
                  >
                    <Text
                      className="my-[94px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtPoppinsRegular36WhiteA700"
                    >
                      <span className="text-white-A700 font-poppins text-left font-normal">
                        <>
                          Big Vibe <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="absolute flex h-[60px] inset-y-[0] items-center justify-center my-auto right-[0] w-[60px]"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_menu.svg" alt="menu" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1632px] mt-[100px] mx-auto pt-[11px] md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Popular This Week
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
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_175X225.png"
                  alt="placeholder Twelve"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="md:flex-1 h-[175px] sm:h-auto object-cover w-[48%] md:w-full"
                  src="images/img_placeholder_7.png"
                  alt="placeholder Thirteen"
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
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_8.png"
                  alt="placeholder Fourteen"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_9.png"
                  alt="placeholder Fifteen"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="md:flex-1 h-[175px] sm:h-auto object-cover w-[48%] md:w-full"
                  src="images/img_placeholder_10.png"
                  alt="placeholder Sixteen"
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
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_11.png"
                  alt="placeholder Seventeen"
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
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_12.png"
                  alt="placeholder Eighteen"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24"
                    >
                      Black Sport Jacket
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
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="md:flex-1 h-[175px] sm:h-auto object-cover w-[48%] md:w-full"
                  src="images/img_placeholder_13.png"
                  alt="placeholder Nineteen"
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
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 h-[220px] md:h-auto items-center justify-start p-6 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[175px] md:h-auto object-cover w-[48%] sm:w-full"
                  src="images/img_placeholder_14.png"
                  alt="placeholder Twenty"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[152px]"
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-start mt-[113px] w-full">
            <Text
              className="ml-36 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtPoppinsBold36"
            >
              Why Choose Us
            </Text>
            <div className="bg-gray-50 flex flex-row items-center justify-start md:px-10 px-36 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-full">
                <div className="flex sm:flex-1 flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-96 sm:w-full">
                  <div className="border-2 border-gray-500 border-solid h-[120px] md:h-[65px] p-[27px] sm:px-5 relative rounded-[50%] w-[120px]">
                    <Img
                      className="absolute h-[65px] inset-[0] justify-center m-auto w-[65px]"
                      src="images/img_music.svg"
                      alt="music"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="text-center text-gray-500 text-lg"
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
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
                    <div className="border-2 border-gray-500 border-solid md:h-16 h-[120px] p-7 sm:px-5 relative rounded-[50%] w-[120px]">
                      <Img
                        className="absolute h-16 inset-[0] justify-center m-auto w-16"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsBold24"
                      >
                        Payment Method
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-lg"
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
                  <div className="flex flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
                    <div className="border-2 border-gray-500 border-solid md:h-16 h-[120px] p-[27px] sm:px-5 relative rounded-[50%] w-[120px]">
                      <Img
                        className="absolute h-16 inset-[0] justify-center m-auto w-16"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsBold24"
                      >
                        Warranty
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-lg"
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
                  <div className="flex flex-col gap-8 h-96 md:h-auto items-center justify-center p-8 sm:px-5 w-full">
                    <div className="border-2 border-gray-500 border-solid h-[120px] md:h-[65px] p-[27px] sm:px-5 relative rounded-[50%] w-[120px]">
                      <Img
                        className="absolute h-[65px] inset-[0] justify-center m-auto w-[65px]"
                        src="images/img_music_65X65.svg"
                        alt="music One"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                        size="txtPoppinsBold24"
                      >
                        Customer Support{" "}
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-lg"
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
          </div>
          <Img
            className="h-[68px] mt-[100px] w-[51%]"
            src="images/img_brand.svg"
            alt="brand"
          />
          <footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-center mb-8 ml-36 mr-[236px] mt-16 w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[28%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="mt-[31px] text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    <>
                      Drop your email below to get update about us, <br />
                      lastest news, tips, and more!
                    </>
                  </Text>
                  <Input
                    name="input"
                    placeholder="Enter your email"
                    className="leading-[normal] p-0 placeholder:text-gray-500_87 text-left text-lg tracking-[0.36px] w-full"
                    wrapClassName="flex mt-[35px] w-[91%]"
                    type="email"
                    suffix={
                      <Img
                        className="mt-3.5 mb-[15px] ml-[35px] mr-4"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[131px] w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Product Links
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Categories
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      New Arrival
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Features
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Collections
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-7 items-start justify-start ml-28 md:ml-[0] md:mt-0 mt-2 pb-1 w-[8%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Company
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      About
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Blog
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Careers
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Contact{" "}
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Services
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[154px] pb-1 w-[10%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Support
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Support Center
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      FAQ
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Terms of service
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[130px] w-[10%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    Get In Touch
                  </Text>
                  <Img
                    className="h-6 w-[120px]"
                    src="images/img_sosmedia.svg"
                    alt="sosmedia"
                  />
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[676px] mr-[583px] text-sm text-white-A700"
                size="txtPoppinsRegular14"
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

export default HomepageVOnePage;
