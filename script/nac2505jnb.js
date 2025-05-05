const scriptTag = document.querySelector('script[data-jsonfile]');
const baseJsonfile = scriptTag ? scriptTag.dataset.jsonfile : '';

const jsonfile = `../json/${baseJsonfile}?t=${Date.now()}`;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { TicketsFull, SRFooter, SalesPopup } from '../components/index.js';

const app = createApp({
  template: `
      <SRFooter country="SA" />
      <teleport to="#SRTickets">
        <TicketsFull theme="default" ref="ticketsComponent" :jsonfile="jsonfile" />
      </teleport>
     <!-- <SalesPopup :tickets="['1','2','3','4']" :categories="['Silver','Gold','Diamond']" /> -->
    `,
  data() {
    return {
      jsonfile
    };
  },
  components: { SRFooter, TicketsFull, SalesPopup }
})

app.mount('#SRFooter');
