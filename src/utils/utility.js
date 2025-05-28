import root from "window-or-global";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (name) => {
	return cookies.get(name);
};

export const setCookie = (name, value) => {
	cookies.set(name, value);
};

export const scrollTo = (top = 0, left = 0, isSmooth = true) => {
	root.scrollTo({
		top: top,
		left: left,
		behavior: isSmooth ? "smooth" : "auto",
	});
};

export const scrollToElement = (id) => {
	const offsetTop = root.document.getElementById(`${id}`) && root.document.getElementById(`${id}`).offsetTop;
	root && root.scrollTo && scrollTo(offsetTop, 0, true);
};

export const formatCurrency = (value) => {
	if (value && value > 0) {
		return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
	} else return null;
};
