import React from "react";

import { SelectBox } from "components";

export default {
  title: "jaskaran_s_application7/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder0",
  variant: "OutlineBluegray100",
  size: "sm",
  className: "w-[300px]",
};
