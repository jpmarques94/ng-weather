export function findDifferentElements(
	arr1: string[],
	arr2: string[]
): string[] {
	const difference1 = arr1.filter((element) => !arr2.includes(element));
	const difference2 = arr2.filter((element) => !arr1.includes(element));

	const result = [...difference1, ...difference2];
	return result;
}
