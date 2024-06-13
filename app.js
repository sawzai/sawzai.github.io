import { Tickets, Modal, SRFooter, CountDown } from './components/index.js';

const app = Vue.createApp({
  template: `
  <section class="container" style="padding-block:60px">
    <h1> {{ message }} </h1>
  </section>

  <!-- <Modal class="container" textline="Replace Modal Textline" /> -->

  <Tickets class="" gId="1-Qd3YBy4Oxy9qNXRsbHsfmF-tzpH9V_0GIRuU14xQzE" gTab="Tickets" />

  <teleport to="#app2">
    <CountDown style="padding-block:60px" class="container" 
    cdsize="small" cdtimer="June 13, 2024 00:00:00 +8" />
  </teleport>

  <teleport to="#app3">    
      <SRFooter />
  </teleport>
    `,
  data() {
    return {
      message: 'Welcome to SawZai Components',
    };
  },
  components: { Tickets, Modal, SRFooter, CountDown },
}).mount('#app');


