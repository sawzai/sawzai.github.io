export { default as Tickets } from './Tickets.js';
export { default as Modal } from './Modal.js';
export { default as SRFooterMY } from './SRFooter-MY.js';
export { default as SRFooterUK } from './SRFooter-uk.js';
export { default as SRFooterSG } from './SRFooter-SG.js';
export { default as SRFooterSGMYTK } from './SRFooter-SGMY-TK.js';
export { default as SRFooterEU } from './SRFooter-EU.js';
export { default as SRFooterSA } from './SRFooter-SA.js';
export { default as SRFooterSATK } from './SRFooter-SA-TK.js';
export { default as SRFooterSGMY } from './SRFooter-SGMY.js';
export { default as CountDown } from './CountDown.js';


// include Script and CSS on the compenents
export { default as TicketsFull } from './TicketsFull.js';
export { default as SRFooter } from './SRFooter.js';
export { default as SalesPopup } from './SalesPopup.js';

export function loadScript(src, check) {
    if (check && window[check]) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = Object.assign(document.createElement('script'), { src, async: true });
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  }
  
  export function loadCSS(href, id) {
    if (id && document.getElementById(id)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', type: 'text/css', href, id });
      link.onload = resolve;
      link.onerror = () => reject(new Error(`Failed to load ${href}`));
      document.head.appendChild(link);
    });
  }