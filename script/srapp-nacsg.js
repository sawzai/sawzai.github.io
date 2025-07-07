const scriptTag = document.getElementById('srapp');
const baseJsonfile = scriptTag ? scriptTag.dataset.json : '';
const baseCountry = scriptTag ? scriptTag.dataset.country : '';
const baseTheme = scriptTag ? scriptTag.getAttribute('theme') || 'default' : 'default';
const jsonfile = `https://sawzai.github.io/json/2025/${baseJsonfile}.json?t=${Date.now()}`;

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://sawzai.github.io/assets/SRCommon.css';
// cssLink.href = '../assets/SRCommon.css';
document.head.appendChild(cssLink);

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { TicketsFull2, SRFooter, SalesPopup } from '../components/index.js';

const app = createApp({
  template: `
      <SRFooter :country="country" />
      <teleport to="#SRTickets">
        <TicketsFull2 :theme="theme" ref="ticketsComponent" :jsonfile="jsonfile" />
      </teleport>
      <!-- <SalesPopup :tickets="['1','2','3','4']" :categories="['Silver','Gold','Diamond']" /> -->
    `,
  data() {
    return {
      jsonfile,
      country: baseCountry,
      theme: baseTheme,
    };
  },
  components: { SRFooter, TicketsFull2, SalesPopup }
});

app.mount('#SRFooter');
