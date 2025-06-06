const scriptTag = document.getElementById('srapp');
const baseJsonfile = scriptTag ? scriptTag.dataset.json : '';
const baseCountry = scriptTag ? scriptTag.dataset.country : '';
const jsonfile = `https://sawzai.github.io/json/2025/${baseJsonfile}.json?t=${Date.now()}`;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { TicketsFull, SRFooter, SalesPopup } from '../components/index.js';

const app = createApp({
  template: `
      <SRFooter :country="country" />
      <teleport to="#SRTickets">
        <TicketsFull theme="default" ref="ticketsComponent" :jsonfile="jsonfile" />
      </teleport>
     <!-- <SalesPopup :tickets="['1','2','3','4']" :categories="['Silver','Gold','Diamond']" /> -->
    `,
  data() {
    return {
      jsonfile,
      country: baseCountry
    };
  },
  components: { SRFooter, TicketsFull, SalesPopup }
})

app.mount('#SRFooter');
