import { createRef } from "react";
import { atom } from "recoil";

export const userStateValue = atom({
    key: 'userStateValue', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });

export const refState = atom({
    key:'refState',
    default: createRef()
})