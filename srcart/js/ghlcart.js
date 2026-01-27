"use strict";

const srCart = {
  btnClass: ".pgb-custom-cart-row .pgb-buy-button-link",
  isHome: false,
  trackData: {},
  expiryDays: 7,

  init: function () {
    this.checkParams();
    const currentURL = window.location.href;
    currentURL.includes("-cart") ? this.cartPage() : this.generateBtn();
  },

  checkParams: function () {
    const affiliateParam = this.getParams("affiliate");
    const utmSourceParam = this.getParams("utm_source");

    // If affiliate exists but utm_source doesn't, map affiliate -> utm_source
    if (affiliateParam && !utmSourceParam) {
      this.trackData["utm_source"] = affiliateParam;
      this.createCookie("utm_source", affiliateParam, this.expiryDays);
    }

    // Hydrate trackData from URL -> cookie -> default trackData
    for (let key in this.trackData) {
      const fromUrl = this.getParams(key);
      const fromCookie = this.readCookie(key);

      this.trackData[key] = fromUrl || fromCookie || this.trackData[key];

      // If URL has a value, persist it
      if (fromUrl !== "") {
        this.createCookie(key, this.trackData[key], this.expiryDays);
      }
    }
  },

  generateBtn: function () {
    // Main buy buttons
    const thriveLinks = document.querySelectorAll(this.btnClass);
    if (thriveLinks.length > 0) {
      thriveLinks.forEach((thriveLink) => {
        let thriveBtnLink = thriveLink.getAttribute("href");
        if (!thriveBtnLink) return;

        let url;
        try {
          url = new URL(thriveBtnLink, window.location.origin);
        } catch (e) {
          return;
        }

        // Preserve these params from the original button URL
        const addonSp = new URLSearchParams();
        if (url.searchParams.has("add-to-cart")) {
          addonSp.append("add-to-cart", url.searchParams.get("add-to-cart"));
        }
        if (url.searchParams.has("plan")) {
          addonSp.append("plan", url.searchParams.get("plan"));
        }
        if (url.searchParams.has("coupon")) {
          addonSp.append("coupon", url.searchParams.get("coupon"));
        }

        // Strip existing query from button link
        thriveBtnLink = thriveBtnLink.split("?")[0];

        const queryString = this.combineParams(addonSp.toString());
        const separator = thriveBtnLink.includes("?") ? "&" : "?";
        const newBtnSrc = `${thriveBtnLink}${separator}${queryString}`;
        thriveLink.setAttribute("href", newBtnSrc);
      });
    }

    // Logo + tracking links
    const srLogos = document.querySelectorAll(
      ".pgb-custom-srlogo, .pgb-custom-hero-location .pgb-buy-button-link, .srtrack, .srlogo"
    );

    if (srLogos.length > 0) {
      srLogos.forEach((srLogo) => {
        const utmSource = this.getParams("utm_source");
        const affiliate = this.getParams("affiliate");

        if (affiliate) {
          this.trackData["affiliate"] = affiliate;
        }

        if (utmSource && !affiliate) {
          this.trackData["affiliate"] = utmSource;
          this.createCookie("affiliate", utmSource, this.expiryDays);
        }

        let srlogoLink = srLogo.getAttribute("href");
        if (!srlogoLink) return;

        srlogoLink = srlogoLink.split("?")[0];

        const queryString = this.generateURL();
        const separator = srlogoLink.includes("?") ? "&" : "?";
        const logoBtnSrc = `${srlogoLink}${separator}${queryString}`;
        srLogo.setAttribute("href", logoBtnSrc);
      });
    }
  },

  cartPage: function () {
    this.checkParams();

    const url = new URL(window.location.href);

    // Normalize current vs desired query strings to prevent %20/+ loops
    const desired = this.combineParams(); // already encoded
    const current = new URLSearchParams(url.search).toString();

    if (current !== desired) {
      url.search = desired;
      // replace() avoids filling history and reduces loop-y behavior
      window.location.replace(url.toString());
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
      if (c.indexOf(nameEQ) === 0) {
        const raw = c.substring(nameEQ.length, c.length);
        try {
          return decodeURIComponent(raw);
        } catch (e) {
          return raw;
        }
      }
    }
    return "";
  },

  createCookie: function (name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    // Encode cookie value so spaces/commas/etc don't break persistence
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; secure; path=/`;
  },

  // IMPORTANT: Use URLSearchParams so "+" and "%20" normalize consistently
  getParams: function (name) {
    const v = new URLSearchParams(window.location.search).get(name);
    return v === null ? "" : v;
  },

  generateURL: function () {
    const sp = new URLSearchParams();
    for (const key in this.trackData) {
      const val = this.trackData[key];
      if (val !== undefined && val !== null && val !== "") {
        sp.set(key, String(val));
      }
    }
    return sp.toString(); // encoded & normalized
  },

  // addon can be:
  // - "" / undefined
  // - "add-to-cart=123&plan=xxx&coupon=yyy" (encoded or raw)
  combineParams: function (addon) {
    const sp = new URLSearchParams();

    for (const key in this.trackData) {
      const val = this.trackData[key];
      if (val !== undefined && val !== null && val !== "") {
        sp.set(key, String(val));
      }
    }

    const coupon = this.getParams("coupon");
    if (coupon) sp.set("coupon", coupon);

    if (addon) {
      const extraSp = new URLSearchParams(addon.replace(/^&/, ""));
      for (const [k, v] of extraSp.entries()) sp.append(k, v);
    }

    return sp.toString(); // encoded & normalized
  },
};

document.addEventListener("DOMContentLoaded", function () {
  srCart.trackData["utm_source"] = "affiliateName";
  srCart.btnClass = ".pgb-custom-cart-row .pgb-buy-button-link";
  srCart.init();
});
