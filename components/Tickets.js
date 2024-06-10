export default {
  template: `
  <div class="tickets" v-if="showTickets">
    <div v-for="ticket in sortedTickets" :key="ticket.order"
      :class="[{'featured': ticket.isfeatured === 'TRUE'}, 'category-' + ticket.color.toLowerCase(), 
      {'soldout': ticket.soldout === 'TRUE'}]">
          <div class="category-offer">{{ ticket.offer }}</div>
          <h3 class="category-title">{{ ticket.category }}</h3>
          <div class="category-country">{{ ticket.country }}</div>
          <div class="category-doorprice">{{ ticket.doorprice }}</div>
          <h3 class="category-price">{{ ticket.price }}</h3>
          <div class="category-save-next">
            <div class="category-save">Save {{ ticket.save }}</div>
            <div class="category-next">{{ ticket.next }}</div>
          </div>
          <div class="category-status">{{ ticket.status }}</div>
          <ul class="category-items">
              <li v-for="(item, index) in ticket.includedArray" :key="index"
                  :class="{ 'active': index < ticket.initems }">
                {{ item }}
              </li>
          </ul>
          <a class="ticket-btn" :href="ticket.url">
            <div class="category-btnsub">{{ ticket.buttonsub }}</div>
            <div class="category-btnsub">{{ ticket.button }}</div>
          </a>
      </div>
  </div>
  `,
  data() {
    return {
      showTickets: false,
      tickets: [],
    };
  },
  props: ['appScript', 'gsheetId', 'gsheetTab', 'gsheetApi'],
  computed: {
    sortedTickets() {
      // return this.tickets.sort((a, b) => Number(a.order) - Number(b.order));
      return this.tickets.filter(ticket => ticket.show === "TRUE")
        .sort((a, b) => Number(a.order) - Number(b.order));
    }
  },
  mounted() {
    this.fetchTickets();
  },
  methods: {
    fetchTickets() {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${this.gsheetId}/values/${this.gsheetTab}/?alt=json&key=${this.gsheetApi}`)
      //fetch(this.appScript)
        .then(res => res.json())
        .then(data => {
          //console.log(data)
          this.tickets = this.transformData(data);
          console.log(this.tickets)
          // this.tickets = data.map(ticket => {
          //   return Object.keys(ticket).reduce((newObj, key) => {
          //     newObj[key.toLowerCase()] = ticket[key];  // Convert key to lowercase and copy value
          //     return newObj;
          //   }, {});
          // });
          this.showTickets = true;
        })
        .catch(error => console.error('Error loading tickets:', error));
    },
    transformData(data) {
      const headers = data.values[0];
      return data.values.slice(1).map(row => {
        let rowObj = headers.reduce((obj, header, index) => {
          obj[header.toLowerCase()] = row[index];
          return obj;
        }, {});
        if (rowObj.included) {
          rowObj.includedArray = rowObj.included.split('\n').map(item => item.trim().replace(/["]+/g, ''));
        }
        return rowObj;
      });
    }
  }
};
