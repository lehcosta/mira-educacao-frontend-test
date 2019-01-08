const strpad = (string, pad_length, pad_string = "0") => {
  const str = "" + string;
  const pad = Array.from({ length: pad_length }, (k, v) => pad_string).join("");
  console.log("pad -> ", pad);
  return pad.substring(0, pad.length - str.length) + str;
};

export default strpad;
