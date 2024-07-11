"use strict";const srCart={btnClass:".pgb-custom-thriveCart .pgb-buy-button-link",isHome:!1,trackData:{ls:"projectCode",fbclid:"fbonot"},expiryDays:7,init:function(){this.checkParams();let t=window.location.href;t.includes("-cart")?this.cartPage():this.generateBtn()},checkParams:function(){for(let t in this.trackData)this.trackData[t]=this.getParams(t)||this.readCookie(t)||this.trackData[t],""!==this.getParams(t)&&this.createCookie(t,this.trackData[t],this.expiryDays)},generateBtn:function(){let t=document.querySelectorAll(this.btnClass);t.length>0&&t.forEach(t=>{let e=t.getAttribute("href"),a=new URL(e),r="";a.searchParams.has("plan")&&(r+="&plan="+a.searchParams.get("plan")),a.searchParams.has("coupon")&&(r+="&coupon="+a.searchParams.get("coupon")),e=e.split("?")[0];let i=this.combineParams(r),s=e.includes("?")?"&":"?",n=`${e}${s}${i}`;t.setAttribute("href",n)});let e=document.querySelectorAll(".srlogo, .pgb-custom-srlogo");e.length>0&&e.forEach(t=>{let e=t.getAttribute("href");e=e.split("?")[0];let a=this.generateURL(),r=e.includes("?")?"&":"?",i=`${e}${r}${a}`;t.setAttribute("href",i)})},cartPage:function(){this.checkParams();let t=new URL(window.location.href);t.search!=="?"+this.combineParams()&&(t.search=this.combineParams(),window.location.href=t)},eraseCookie:function(t){this.createCookie(t,"",-1)},readCookie:function(t){let e=t+"=",a=document.cookie?document.cookie.split(";"):[];for(let r=0;r<a.length;r++){let i=a[r].trim();if(0===i.indexOf(e))return i.substring(e.length,i.length)}},createCookie:function(t,e,a){let r="";if(a){let i=new Date;i.setTime(i.getTime()+864e5*a),r="; expires="+i.toGMTString()}document.cookie=`${t}=${e}${r}; secure; path=/`},getParams:function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");let e=RegExp("[\\?&]"+t+"=([^&#]*)"),a=e.exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))},generateURL:function(){let t="";for(let e in this.trackData)t+=""===t?"":"&",t+=void 0!==this.trackData[e]?`${e}=${this.trackData[e]}`:"";return t},combineParams:function(t){let e="";if(this.isHome)for(let a in this.trackData)e+=""===e?"":"&",e+=void 0!==this.trackData[a]?`${a}=${this.trackData[a]}`:"";else for(let r in this.trackData)e+=""===e?"":"&",e+=void 0!==this.trackData[r]?`passthrough[${r}]=${this.trackData[r]}`:"";return this.getParams("coupon")&&(e+="&coupon="+this.getParams("coupon")),t&&(e+=t),e},help:function(){let t="Update below variable before run init()";t+="\nsrCart.trackData['leadsource_name with quote'] = 'leadsource_data with quote'",t+="\nsrCart.btnClass = 'quote with .classname'",t+="\nsrCart.expiryDays = without quote numbering",t+="\nsrCart.trackData['affiliate'] = 'affiliateID';",t+="\nsrCart.isHome = true;",console.log(t)}};document.addEventListener("DOMContentLoaded",function(){srCart.init()});