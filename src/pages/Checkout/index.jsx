import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const formFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const group2283OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const group2284OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[35px] items-center justify-start w-full">
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
            <Text
              className="md:ml-[0] ml-[870px] mt-[49px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtPoppinsBold36"
            >
              Checkout
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mt-[109px] mx-auto md:px-5 w-full">
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
              <Line className="bg-bluegray-100 h-0.5 ml-14 md:ml-[0] md:mt-0 my-[27px] w-[24%]" />
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
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1632px] mt-20 mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-end pt-1.5 w-[41%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Buyer Info
                    </Text>
                  </div>
                  <Line className="bg-bluegray-100 h-px mt-8 w-full" />
                  <div className="flex flex-col gap-5 items-start justify-start mt-[35px] w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="form"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[60px] w-full"
                      shape="square"
                      color="bluegray_100"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-9 w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Address
                    </Text>
                    <Input
                      name="form One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[60px] w-full"
                      shape="square"
                      color="bluegray_100"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-9 w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Contact
                    </Text>
                    <Input
                      name="form Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[60px] w-full"
                      shape="square"
                      color="bluegray_100"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start mt-[38px] w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18Gray500"
                    >
                      City
                    </Text>
                    <Input
                      name="form Three"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[60px] w-full"
                      shape="square"
                      color="bluegray_100"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-9 w-full">
                    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        State
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-left text-lg w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-6 mr-8 w-6"
                            src="images/img_arrowdown_gray_500.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="form Four"
                        options={formFourOptionsList}
                        isSearchable={false}
                        placeholder="Select State"
                        shape="square"
                        color="bluegray_100"
                        size="sm"
                        variant="outline"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[38%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Zip Code
                      </Text>
                      <Input
                        name="form Five"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[60px] w-full"
                        shape="square"
                        color="bluegray_100"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-end pt-1.5 w-1/2 md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Payment Method
                    </Text>
                    <Line className="bg-bluegray-100 h-px w-full" />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[31px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[245px]"
                      leftIcon={
                        <Img
                          className="h-10 mt-8 mb-[31px] ml-[35px] mr-4"
                          src="images/img_computer.svg"
                          alt="computer"
                        />
                      }
                      shape="square"
                      color="bluegray_100"
                      size="3xl"
                      variant="outline"
                    >
                      <div className="leading-[normal] text-left text-lg">
                        Credit Card
                      </div>
                    </Button>
                    <Button
                      className="border border-bluegray-100 border-solid cursor-pointer flex items-center justify-center min-w-[245px]"
                      leftIcon={
                        <div className="h-10 mt-8 mb-[31px] ml-[33px] mr-4 w-10 bg-gray-800 p-[3px] flex justify-center items-center">
                          <Img
                            className="h-[33px]"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                        </div>
                      }
                      shape="square"
                      color="gray_800"
                      size="3xl"
                      variant="fill"
                    >
                      <div className="leading-[normal] text-left text-lg">
                        Bank Transfer
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[245px]"
                      leftIcon={
                        <Img
                          className="h-10 mt-8 mb-[31px] ml-[35px] mr-4"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      }
                      shape="square"
                      color="bluegray_100"
                      size="3xl"
                      variant="outline"
                    >
                      <div className="leading-[normal] text-left text-lg">
                        Paypal
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-9 w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Name on Card
                    </Text>
                    <Input
                      name="form Six"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[60px] w-full"
                      shape="square"
                      color="bluegray_100"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-9 w-full">
                    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Card Number
                      </Text>
                      <Input
                        name="form Seven"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[60px] w-full"
                        shape="square"
                        color="bluegray_100"
                        variant="outline"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[31%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        CVV
                      </Text>
                      <Input
                        name="RectangleTwentyFive"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[60px] w-full"
                        shape="square"
                        color="bluegray_100"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-9 w-full">
                    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Month
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-left text-lg w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-6 mr-8 w-6"
                            src="images/img_arrowdown_gray_500.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="Group2283"
                        options={group2283OptionsList}
                        isSearchable={false}
                        placeholder="Select Month"
                        shape="square"
                        color="bluegray_100"
                        size="sm"
                        variant="outline"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtPoppinsRegular18Gray500"
                      >
                        Year
                      </Text>
                      <SelectBox
                        className="leading-[normal] text-left text-lg w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-6 mr-8 w-6"
                            src="images/img_arrowdown_gray_500.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="Group2284"
                        options={group2284OptionsList}
                        isSearchable={false}
                        placeholder="Select Year"
                        shape="square"
                        color="bluegray_100"
                        size="sm"
                        variant="outline"
                      />
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-[60px] leading-[normal] md:ml-[0] ml-[555px] mt-[75px] text-center text-lg w-[245px]"
                    onClick={() => navigate("/completed")}
                    shape="square"
                    color="gray_800"
                    size="xl"
                    variant="fill"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
            <Footer1 className="bg-gray-800 flex items-center justify-center mt-[100px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
