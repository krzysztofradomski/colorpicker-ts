/*
 * Adapted from http://www.javascripter.net/faq/hextorgb.htm
 */
export const hexToRgbConverter = (hex: string, opacity: number) => {
	const cutHex = (h: string) => h.charAt(0) === "#" ? h.substring(1,7) : h;
	const hexToR = (h: string) => parseInt((cutHex(h)).substring(0,2),16);
	const hexToG = (h: string) => parseInt((cutHex(h)).substring(2,4),16);
	const hexToB = (h: string) => parseInt((cutHex(h)).substring(4,6),16);
	const output = `rgba(${hexToR(hex)},${hexToG(hex)},${hexToB(hex)}, ${opacity})`;
	return output;
};