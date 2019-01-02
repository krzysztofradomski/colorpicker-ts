export const sanitizeInput = (txt: { replace: (arg0: RegExp, arg1: string) => void; }) => {
  return txt.replace(/[^\w\s]/gi, "");
};