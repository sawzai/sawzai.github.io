const scriptTag = document.querySelector('script[data-jsonfile]');
const baseJsonfile = scriptTag ? scriptTag.dataset.jsonfile : '';

const jsonfile = `${baseJsonfile}?t=${Date.now()}`;

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { TicketsFull, Modal, SRFooter, CountDown, SalesPopup, Popup } from './components/index.js';


const app = createApp({
  template: `
  <section class="container" style="padding-block:60px">
    <h1> {{ message }} </h1>
  </section>

<button class="btn btn-success" @click="showOfferPopup = true">Show Offer</button>
<button class="btn btn-warning" @click="showWarningPopup = true">Show Warning</button>
<button class="btn btn-info" @click="showNewsletterPopup = true">Show Newsletter</button>

<Popup v-model:show="showOfferPopup" title="🔥 Limited Time Deal">
  <p>50% off on all Premium Tickets!</p>
</Popup>

<Popup v-model:show="showWarningPopup" title="⚠️ Important Notice">
  <p>VIP tickets are almost sold out.</p>
</Popup>

<Popup v-model:show="showNewsletterPopup" title="📧 Stay Updated">
  <p>Subscribe to our newsletter and get free bonuses!</p>
</Popup>


  <Modal textline="Change modal text" />

  <teleport to="#SRTickets" >  
    <!-- <TicketsFull theme="default" jsonfile="./assets/data.json?t=${Date.now()}" /> -->
    <TicketsFull theme="default" :jsonfile="jsonfile" />
  </teleport>

  <teleport to="#app2">
    <CountDown style="padding-block:60px" class="container" cdsize="large" cdtimer="July 14, 2025 11:54:00 +8" />
  </teleport>


  <teleport to="#app3">    
    <SRFooter country="SGMY" />
  </teleport>



  <!-- <SalesPopup :tickets="['1','2','3','4']" :categories="['Silver','Gold','Diamond']" /> -->
  `,
  data() {
    return {
      message: 'Welcome to SawZai Components',
      jsonfile,
      showOfferPopup: false,
      showWarningPopup: false,
      showNewsletterPopup: false
    };
  },
  mounted() {
    // this.showPopup = true;
    const utm = new URLSearchParams(window.location.search).get('utm_source');
    const slug = utm ? utm.toLowerCase() : null;

    const links = {
      tktk: {
        bronze: 'https://paystack.com/buy/nac2505jnb-bronze-tktk',
        diamond: 'https://paystack.com/buy/nac2505jnb-diamond-tktk',
        vip: 'www.vip.com',
        general: "http://general.ticket"
      },
      linkedin: {
        bronze: 'https://paystack.com/buy/nac2505jnb-bronze-linkedin',
        diamond: 'https://paystack.com/buy/nac2505jnb-diamond-linkedin',
        vip: 'www.vip.com',
        general: "http://general.ticket"
      },
      x: {
        bronze: 'https://paystack.com/buy/nac2505jnb-bronze-x',
        diamond: 'https://paystack.com/buy/nac2505jnb-diamond-x',
        vip: 'www.vip.com',
        general: "http://general.ticket"
      }
    };

    if (slug && links[slug]) {
      const updateLinks = () => {
        document.querySelectorAll('a[href]').forEach(el => {
          const isAnchor = el.tagName.toLowerCase() === 'a';

          if (isAnchor && el.href.includes('bronze')) {
            el.href = links[slug].bronze;
          }
          if (isAnchor && el.href.includes('diamond')) {
            el.href = links[slug].diamond;
          }
          if (isAnchor && el.href.includes('vip')) {
            el.href = links[slug].vip;
          }
          if (isAnchor && el.href.includes('general')) {
            el.href = links[slug].general;
          }

        });
      };

      this.$nextTick(() => {
        const target = document.querySelector('#SRTickets');
        if (target) {
          const observer = new MutationObserver(() => updateLinks());
          observer.observe(target, { childList: true, subtree: true });
        }
        updateLinks();
      });
    }
  },
  components: { TicketsFull, Modal, SRFooter, CountDown, SalesPopup, Popup },
});

app.mount('#app');
