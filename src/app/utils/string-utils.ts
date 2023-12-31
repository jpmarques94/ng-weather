/**
 * * Checks if given string matches a US zipcode
 * *  US zip codes can be either 5 digits or 9 digits
 * @param zipcode
 */
export function isValidUSZipCode(zipcode: string): boolean {
	const zipCodeRegex = /^\d{5}(-\d{4})?$/;
	return zipCodeRegex.test(zipcode);
}
