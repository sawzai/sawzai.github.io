import { Tickets, Modal, SRFooter, CountDown } from './components/index.js';

const app = Vue.createApp({
  template: `
  <teleport to="#app2">
    <CountDown class="container" cdtimer="Sep 6, 2024 00:00:00 +8" />
  </teleport>

  <section class="container">
    <h2> {{ message }} </h2>
  </section>

  <Modal class="container" textline="Replace Modal Textline" />

  <Tickets class="container" gsheetId="1-Qd3YBy4Oxy9qNXRsbHsfmF-tzpH9V_0GIRuU14xQzE" 
  gsheetTab="Tickets" gsheetApi="AIzaSyC7w5L8yL4rpdBsr86_ukMkhTIekmk4uHI" />

  <teleport to="#app3">    
      <SRFooter />
  </teleport>
    `,
  data() {
    return {
      message: 'Hello from Main App!',
    };
  },
  components: { Tickets, Modal, SRFooter, CountDown },
}).mount('#app');


