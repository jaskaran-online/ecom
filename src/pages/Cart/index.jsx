import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-auto w-full">
        <Header1 className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-start justify-start ml-36 md:ml-[0] md:px-5 w-[12%] md:w-full">
            <Text
              className="text-gray-500 text-lg"
              size="txtPoppinsMedium18Gray500"
            >
              Home
            </Text>
            <Text
              className="text-bluegray-100 text-lg"
              size="txtPoppinsMedium18Bluegray100"
            >
              <>&gt;</>
            </Text>
            <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
              Shopping Cart
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[826px] mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
            size="txtPoppinsBold36"
          >
            Shopping Cart
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[21px] items-center justify-between w-[42%] md:w-full">
              <div className="flex flex-row gap-6 items-center justify-start">
                <Text
                  className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                  size="txtPoppinsMedium24"
                >
                  1
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Shopping Cart
                </Text>
              </div>
              <Line className="bg-gray-800 h-0.5 md:mt-0 my-[27px] w-[59%]" />
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-14 items-center justify-center md:ml-[0] ml-[57px] w-2/5 md:w-full">
              <div className="flex flex-row gap-6 items-center justify-start w-[31%] md:w-full">
                <Text
                  className="border-2 border-bluegray-100 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-bluegray-100 text-center sm:text-xl w-14"
                  size="txtPoppinsMedium24Bluegray100"
                >
                  2
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-100 sm:text-xl"
                  size="txtPoppinsMedium24Bluegray100"
                >
                  Checkout
                </Text>
              </div>
              <Line className="bg-bluegray-100 h-0.5 md:mt-0 my-[27px] w-[61%]" />
            </div>
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8 md:ml-[0] w-[14%] md:w-full">
              <Text
                className="border-2 border-bluegray-100 border-solid flex h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-bluegray-100 text-center sm:text-xl w-14"
                size="txtPoppinsMedium24Bluegray100"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-bluegray-100 sm:text-xl"
                size="txtPoppinsMedium24Bluegray100"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-end justify-start max-w-[1632px] mt-20 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                <div className="flex flex-col gap-8 items-start justify-start pt-1 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-4/5 md:w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsMedium18Gray500"
                    >
                      Product
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[590px] md:mt-0 mt-[5px] text-gray-500 text-lg"
                      size="txtPoppinsMedium18Gray500"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[231px] md:mt-0 mt-[3px] text-gray-500 text-lg"
                      size="txtPoppinsMedium18Gray500"
                    >
                      Price
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[232px] md:mt-0 mt-1 text-gray-500 text-lg"
                      size="txtPoppinsMedium18Gray500"
                    >
                      Total
                    </Text>
                  </div>
                  <Line className="bg-bluegray-100 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-[31px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-bluegray-100 border-solid md:h-[180px] h-[200px] p-6 sm:px-5 relative w-[200px]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[180px]"
                          src="images/img_placeholder_2.png"
                          alt="placeholder"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[66px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        Gray T-shirt
                      </Text>
                      <div className="h-12 md:ml-[0] ml-[250px] relative w-[11%] md:w-full">
                        <Button
                          className="absolute flex h-12 inset-y-[0] items-center justify-center my-auto right-[0] w-12"
                          shape="square"
                          color="gray_800"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
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
                      <Text
                        className="md:ml-[0] ml-[139px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[186px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $100.99
                      </Text>
                      <Img
                        className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <Line className="bg-bluegray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="border border-bluegray-100 border-solid md:h-[180px] h-[200px] p-6 sm:px-5 relative w-[200px]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[180px]"
                          src="images/img_warmpantspxl7.png"
                          alt="placeholder One"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[66px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        Red Flannel
                      </Text>
                      <div className="h-12 md:ml-[0] ml-[255px] relative w-[11%] md:w-full">
                        <Button
                          className="absolute flex h-12 inset-y-[0] items-center justify-center my-auto right-[0] w-12"
                          shape="square"
                          color="gray_800"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="images/img_grid.svg"
                            alt="grid One"
                          />
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
                      <Text
                        className="md:ml-[0] ml-[139px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[186px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                        size="txtPoppinsMedium24"
                      >
                        $100.99
                      </Text>
                      <Img
                        className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                        src="images/img_close.svg"
                        alt="close One"
                      />
                    </div>
                    <Line className="bg-bluegray-100 h-px w-full" />
                  </div>
                </List>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-2 w-full">
                <div className="border border-bluegray-100 border-solid flex md:flex-1 flex-row items-center justify-between pl-4 w-[29%] md:w-full">
                  <Text
                    className="text-gray-500_87 text-lg tracking-[0.36px]"
                    size="txtPoppinsRegular18Gray50087"
                  >
                    Enter coupon code
                  </Text>
                  <Button
                    className="cursor-pointer h-[60px] leading-[normal] min-w-[137px] text-center text-lg"
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                  >
                    Apply Code
                  </Button>
                </div>
                <div className="flex flex-col gap-[29px] items-end justify-start md:mt-0 mt-1">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                    size="txtPoppinsBold36"
                  >
                    $202.00
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-8 items-center justify-end w-[26%] md:w-full">
              <Button
                className="cursor-pointer font-medium h-12 leading-[normal] min-w-[207px] text-center text-lg"
                shape="square"
                color="gray_800"
                size="md"
                variant="outline"
              >
                Continue Shopping
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 leading-[normal] text-center text-lg w-[171px]"
                onClick={() => navigate("/checkout")}
                shape="square"
                color="gray_800"
                size="lg"
                variant="fill"
              >
                Checkout
              </Button>
            </div>
          </div>
          <Footer className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
