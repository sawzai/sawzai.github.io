import { Tickets, Modal, SRFooterSG, CountDown } from './components/index.js';

const app = Vue.createApp({
  template: `
  <section class="container" style="padding-block:60px">
    <h1> {{ message }} </h1>
  </section>

  <!-- <Modal class="container" textline="Replace Modal Textline" /> -->
  <teleport to="#SRTickets">  
  <Tickets jsonfile="https://sawzai.github.io/json/2025/data.json?t=${Date.now()}" />
  </teleport>

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
  // mounted() {
  //   this.observeTicketChanges();
  // },
  // methods: {
  //   observeTicketChanges() {
  //     const observer = new MutationObserver((mutationsList, observer) => {
  //       mutationsList.forEach(mutation => {
  //         const updateItem = document.querySelector('.category-yellow .category-price');
  //         if (updateItem) {
  //           updateItem.innerHTML = `S$100`;
  //           observer.disconnect();
  //         }
  //         const updateItem2 = document.querySelector('.category-silver .category-price');
  //         if (updateItem2) {
  //           updateItem2.innerHTML = `S$50`;
  //           observer.disconnect();
  //         }
  //       });
  //     });
  //     const targetNode = document.getElementById("SRTickets");
  //     if (targetNode) {
  //       observer.observe(targetNode, { childList: true, subtree: true });
  //     } else {
  //       console.warn("No Item Found to Update");
  //     }
  //   }
  // },
  components: { Tickets, Modal, SRFooterSG, CountDown },
}).mount('#app');


