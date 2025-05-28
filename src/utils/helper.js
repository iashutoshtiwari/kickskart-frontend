export const getApiUrl = () =>
	//TODO: Modify this method to support environment variables
	"https://sneaker-store-alpha.cyclic.app";

export const getAuthToken = () => {
	return localStorage.getItem("token");
};
