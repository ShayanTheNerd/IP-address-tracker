export const getURLHashValue = () => location?.hash.toLocaleLowerCase().trim().slice(1);

export const upperCaseFirstLetter = string => {
	const newString = `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
	return newString;
};
