"use strict";
const srCart = {
	btnClass: ".pgb-custom-cart-row .pgb-buy-button-link",
	isHome: false,
	trackData: {
	},
	expiryDays: 7,
	init: function () {
		this.checkParams();
		const currentURL = window.location.href;
		currentURL.includes("-cart") ? this.cartPage() : this.generateBtn();
	},
	checkParams: function () {
		for (let key in this.trackData) {
			this.trackData[key] = this.getParams(key) || this.readCookie(key) || this.trackData[key]
			this.getParams(key) !== "" && this.createCookie(key, this.trackData[key], this.expiryDays);
		}
	},
	generateBtn: function () {
		let thriveLinks = document.querySelectorAll(this.btnClass);
		if (thriveLinks.length > 0) {
			thriveLinks.forEach((thriveLink) => {
				let thriveBtnLink = thriveLink.getAttribute("href");
				let url = new URL(thriveBtnLink)
				let addon = "";
				if(url.searchParams.has('add-to-cart')) {
                	addon += "&add-to-cart=" + url.searchParams.get('add-to-cart');
                }
                if(url.searchParams.has('plan')) {
                	addon += "&plan=" + url.searchParams.get('plan');
                }
				if(url.searchParams.has('coupon')) {
                	addon += "&coupon=" + url.searchParams.get('coupon');
                }
				thriveBtnLink = thriveBtnLink.split('?')[0]
				const queryString = this.combineParams(addon);
				const separator = thriveBtnLink.includes('?') ? '&' : '?';
				const newBtnSrc = `${thriveBtnLink}${separator}${queryString}`;
				thriveLink.setAttribute("href", newBtnSrc);
			});
		}
		let srLogos = document.querySelectorAll(".srlogo, .pgb-custom-srlogo, .pgb-custom-hero-location .pgb-buy-button-link");
		if (srLogos.length > 0) {
			srLogos.forEach((srLogo) => {
				let srlogoLink = srLogo.getAttribute("href");
				srlogoLink = srlogoLink.split('?')[0]
				const queryString = this.generateURL();
				const separator = srlogoLink.includes('?') ? '&' : '?';
				const logoBtnSrc = `${srlogoLink}${separator}${queryString}`;
				srLogo.setAttribute("href", logoBtnSrc);
			});
		}
		
	},
	cartPage: function () {
		this.checkParams();
		let newUrl = new URL(window.location.href);
		if (newUrl.search !== "?" + this.combineParams()) {
			newUrl.search = this.combineParams();
			window.location.href = newUrl;
		}

	},
	eraseCookie: function (name) {
		this.createCookie(name, "", -1);
	},
	readCookie: function (name) {
		const nameEQ = name + "=";
		const ca = document.cookie ? document.cookie.split(";") : [];
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
	},
	createCookie: function (name, value, days) {
		let expires = "";
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		document.cookie = `${name}=${value}${expires}; secure; path=/`;
	},
	getParams: function (name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		const results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	generateURL: function(){
		let homeURL = ""
		for (const key in this.trackData) {
			homeURL += homeURL === "" ? "" : "&";
			homeURL += this.trackData[key] !== undefined  ? `${key}=${this.trackData[key]}` : '';
		};
		return homeURL;
	},
	combineParams: function (addon) {
		let combineParams = "";

			for (const key in this.trackData) {
				combineParams += combineParams === "" ? "" : "&";
				combineParams += this.trackData[key] !== undefined  ? `${key}=${this.trackData[key]}` : '';
			}

		if(this.getParams('coupon')) {
			combineParams += "&coupon=" + this.getParams('coupon');
		}

		if(addon){
			combineParams += addon
		}
		console.log(combineParams)
		return combineParams;
	},
	help: function () {
		let helpTips = "Update below variable before run init()"
		helpTips += "\n" + "srCart.trackData['leadsource_name with quote'] = 'leadsource_data with quote'"
		helpTips += "\n" + "srCart.btnClass = 'quote with .classname'"
		helpTips += "\n" + "srCart.expiryDays = without quote numbering"
		helpTips += "\n" + "srCart.trackData['affiliate'] = 'affiliateID';"
		helpTips += "\n" + "srCart.isHome = true;"
		console.log(helpTips)
	}

};

document.addEventListener("DOMContentLoaded", function () {
	srCart.trackData['utm_source'] = 'affiliateName'
	srCart.trackData['ref'] = '1'
	srCart.trackData['utm_campaign'] = 'NAC2024KR'
	srCart.trackData['utm_medium'] = 'website'
	srCart.btnClass = '.pgb-custom-cart-row .pgb-buy-button-link'
	srCart.init();
});
