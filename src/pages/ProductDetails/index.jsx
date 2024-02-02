import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-8 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1632px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[523px] md:h-auto object-cover w-full"
                src="images/img_shoesisolated.png"
                alt="placeholder"
              />
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center w-[61%] md:w-full">
                <Img
                  className="h-[137px] md:h-auto object-cover w-[29%] sm:w-full"
                  src="images/img_placeholder_245X245.png"
                  alt="placeholder One"
                />
                <Img
                  className="h-[137px] md:h-auto object-cover w-[29%] sm:w-full"
                  src="images/img_placeholder_15.png"
                  alt="placeholder Two"
                />
                <Img
                  className="h-[137px] md:h-auto object-cover w-[29%] sm:w-full"
                  src="images/img_placeholder_5.png"
                  alt="placeholder Three"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-14 items-start justify-start w-1/2 md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Featured
                  </Text>
                  <Text
                    className="text-bluegray-100 text-lg w-auto"
                    size="txtPoppinsMedium18Bluegray100"
                  >
                    <>&gt;</>
                  </Text>
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-gray-800"
                    size="txtPoppinsBold56"
                  >
                    <>
                      Purple Warm <br />
                      Zip Jacket
                    </>
                  </Text>
                  <Text
                    className="mt-[41px] text-4xl sm:text-[32px] md:text-[34px] text-gray-500"
                    size="txtPoppinsRegular36Gray500"
                  >
                    $299
                  </Text>
                  <Line className="bg-bluegray-100 h-px mt-10 w-full" />
                  <Text
                    className="leading-[32.00px] mt-[31px] text-gray-500 text-lg w-full"
                    size="txtPoppinsRegular18Gray500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start w-[35%] md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  Quantity
                </Text>
                <div className="h-12 relative w-[63%]">
                  <Button
                    className="absolute flex h-12 inset-y-[0] items-center justify-center my-auto right-[0] w-12"
                    shape="square"
                    color="gray_800"
                    size="lg"
                    variant="fill"
                  >
                    <Img className="h-4" src="images/img_grid.svg" alt="grid" />
                  </Button>
                  <div className="bg-gray-50 flex flex-col md:h-auto h-full items-center justify-center my-auto p-4 w-12">
                    <div className="bg-gray-500 h-0.5 w-[57%]"></div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-medium h-full inset-[0] leading-[normal] m-auto text-center text-lg w-[171px]"
                    shape="square"
                    color="bluegray_100"
                    size="lg"
                    variant="outline"
                  >
                    1
                  </Button>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center w-[245px]"
                onClick={() => navigate("/cart")}
                rightIcon={
                  <Img
                    className="h-8 ml-4 mr-[35px] my-4"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                }
                shape="square"
                color="gray_800"
                size="2xl"
                variant="fill"
              >
                <div className="font-bold leading-[normal] text-left text-lg">
                  Add to Cart
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1632px] mt-[183px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between py-[3px] w-full">
              <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between sm:mt-0 mt-1 w-1/4 sm:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                  size="txtPoppinsBold36"
                >
                  Similiar Product
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsMedium18Gray500"
                >
                  View all
                </Text>
              </div>
              <Img
                className="h-12"
                src="images/img_button_bluegray_100.svg"
                alt="button"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 h-[500px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_1.png"
                    alt="placeholder Four"
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
                <div className="flex flex-col gap-4 h-[500px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_placeholder_16.png"
                    alt="placeholder Five"
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
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 h-[499px] md:h-auto items-center justify-center sm:ml-[0] p-6 sm:px-5 w-96 sm:w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-[250px]"
                    src="images/img_travel8v7cnke.png"
                    alt="placeholder Six"
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
                    src="images/img_placeholder_2.png"
                    alt="placeholder Seven"
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
          <Footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
