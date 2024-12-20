import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const CompletedPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-auto w-full">
        <Header1 className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-start justify-start ml-36 md:ml-[0] md:px-5 w-[19%] md:w-full">
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
            <Text
              className="text-gray-500 text-lg"
              size="txtPoppinsMedium18Gray500"
            >
              Shopping Cart
            </Text>
            <Text
              className="text-bluegray-100 text-lg"
              size="txtPoppinsMedium18Bluegray100"
            >
              <>&gt;</>
            </Text>
            <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
              Checkout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start w-[16%] md:w-full">
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
            <Line className="bg-gray-800 h-0.5 md:ml-[0] ml-[21px] md:mt-0 my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[57px] w-[13%] md:w-full">
              <Text
                className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                size="txtPoppinsMedium24"
              >
                2
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-gray-800 h-0.5 ml-14 md:ml-[0] md:mt-0 my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8 md:ml-[0] w-[14%] md:w-full">
              <Text
                className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14"
                size="txtPoppinsMedium24"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[614px] mt-[222px] md:px-5 w-[37%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-800"
              size="txtPoppinsBold64"
            >
              Checkout Complete!
            </Text>
            <Text
              className="leading-[32.00px] mt-4 text-center text-gray-800 text-lg w-[98%] sm:w-full"
              size="txtPoppinsRegular18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="cursor-pointer font-medium h-[60px] leading-[normal] mt-16 text-center text-lg w-[245px]"
              shape="square"
              color="gray_800"
              size="xl"
              variant="fill"
            >
              Go Shopping Again
            </Button>
          </div>
          <Footer1 className="bg-gray-800 flex items-center justify-center mt-[200px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CompletedPage;
