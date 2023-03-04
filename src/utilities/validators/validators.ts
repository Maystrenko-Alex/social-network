import React from "react";

export const required = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Field is required!'
}

export const maxLengthCreator = (length: number) => {
  return (value: string) => {
    if (value && value.length > length) {
      return `Max length is ${length} symbols`;
    }
    return undefined;
  }
}