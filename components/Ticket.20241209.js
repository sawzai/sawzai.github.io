import TCountDown from 'https://sawzai.github.io/components/CountDown.js';

export default {
  template: `
    <div v-if="showTickets" class="tickets">
      <div v-for="ticket in sortedTickets" :key="ticket.order" :class="getTicketClass(ticket)">
        <div v-if="ticket.label" class="category-label">{{ ticket.label }}</div>
        <div class="category-header">
          <div v-if="ticket.offer" class="category-offer">{{ ticket.offer }}</div>
          <h3 class="category-title">{{ ticket.category }}</h3>
          <div v-if="ticket.country" class="category-country">{{ ticket.country }}</div>
          <TCountDown v-if="ticket.countdown" :responsive="false" class="countdown container" :cdtimer="ticket.countdown" />
          <div v-if="ticket.cdtext" class="category-cdtext">{{ ticket.cdtext }}</div>
        </div>
        <div v-if="ticket.doorprice" class="category-doorprice">DOOR PRICE: <span>{{ ticket.doorprice }}</span></div>
        <h3 v-if="ticket.price" class="category-price">{{ ticket.price }}</h3>
        <div v-if="ticket.save" class="category-save">SAVE {{ ticket.save }}</div>
        <div v-if="ticket.next" class="category-next">{{ ticket.next }}</div>
        <div v-if="ticket.status" class="category-status">{{ ticket.status }}</div>
        <div v-if="ticket.seat" class="category-seat-layout">SEATING LAYOUT</div>
        <img v-if="ticket.seat" class="category-seat" :src="ticket.seat">
        <ul v-if="ticket.included" class="category-items">
          <li v-for="(item, index) in ticket.includedArray" :key="index" :class="{ 'active': index < ticket.initems }">{{ item }}</li>
        </ul>
        <ul v-if="ticket.included" class="category-items">
          <li v-for="(item, index) in ticket.includedArray" :key="index" :class="{ 'active': index < ticket.initems }" v-html="item"></li>
        </ul>
        <a v-if="!ticket.soldout === 'FALSE' || ticket.secbuttonon === 'TRUE'" class="ticket-btn2" :href="ticket.securl">
          <div class="category-btnsub">{{ ticket.secbuttonsub }}</div>
          <div class="category-btntitle">{{ ticket.secbutton }}</div>
        </a>
        <a v-if="ticket.soldout === 'FALSE'" class="ticket-btn" :href="ticket.url">
          <div class="category-btnsub">{{ ticket.buttonsub }}</div>
          <div class="category-btntitle">{{ ticket.button }}</div>
        </a>
      </div>
    </div>
  `,
  components: { TCountDown },
  data() {
    return {
      showTickets: false,
      tickets: [],
      isMobile: false,
    };
  },
  props: {
    gId: String,
    gTab: String,
    ga: {
      type: String,
      default: "AAIzaSyDcSC5ryP_tbNI3PEp4qisCsrObJoLOBW4Z"
    }
  },
  computed: {
    sortedTickets() {
      return this.tickets
        .filter(ticket => ticket.show === "TRUE")
        .sort((a, b) => this.isMobile ? Number(a.om) - Number(b.om) : Number(a.order) - Number(b.order));
    }
  },
  mounted() {
    this.fetchTickets();
    this.updateIsMobile();
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    fetchTickets() {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${this.gId}/values/${this.gTab}/?alt=json&key=${this.ga}`)
      //fetch(`https://raw.githubusercontent.com/sawzai/sawzai.github.io/main/assets/data.json`)
        .then(res => res.json())
        .then(data => {
          console.log("tested")
          this.tickets = this.transformData(data);
          this.showTickets = true;
          console.log(this.tickets)
        })
        .catch(error => console.error('Error loading tickets:', error));
    },
    transformData(data) {
      const headers = data.values[0];
      return data.values.slice(1).map(row => {
        const rowObj = headers.reduce((obj, header, index) => {
          obj[header.toLowerCase()] = row[index];
          return obj;
        }, {});
        if (rowObj.included) {
          rowObj.includedArray = rowObj.included.split('\n').map(item => item.trim().replace(/["]+/g, ''));
        }
        return rowObj;
      });
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 1000;
    },
    getTicketClass(ticket) {
      return [
        { 'featured': ticket.isfeatured === 'TRUE' },
        'category-' + ticket.color.toLowerCase(),
        { 'soldout': ticket.soldout === 'TRUE' }
      ];
    },
  }
};
