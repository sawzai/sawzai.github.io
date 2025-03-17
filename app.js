import { Tickets, Modal, SRFooterSG, CountDown } from './components/index.js';

const app = Vue.createApp({
  template: `
  <section class="container" style="padding-block:60px">
    <h1> {{ message }} </h1>
  </section>

  <!-- <Modal class="container" textline="Replace Modal Textline" /> -->

  <Tickets jsonfile="https://raw.githubusercontent.com/sawzai/sawzai.github.io/main/assets/data.json" />

  <teleport to="#app2">
    <CountDown style="padding-block:60px" class="container" 
    cdsize="large" cdtimer="July 14, 2025 11:54:00 +8" />
  </teleport>

  <teleport to="#app3">    
      <SRFooterSG />
  </teleport>
    `,
  data() {
    return {
      message: 'Welcome to SawZai Components',
    };
  },
  components: { Tickets, Modal, SRFooterSG, CountDown },
}).mount('#app');


