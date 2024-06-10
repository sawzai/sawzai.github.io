export default {
    template: `
    <div class="tickets" v-if="showTickets">
        <link rel="stylesheet" href="./assets/tickets.css">
        <div :class="[{'featured': ticket.isfeatured === 'TRUE'}, 'category-' + ticket.category.toLowerCase()]" v-for="ticket in sortedTickets" :key="ticket.order">
            <h3>{{ticket.category}}</h3>
            <p>{{ticket.doorprice}}</p>
            <h3>{{ticket.price}}</h3>
            <ul>
              <li v-for="(item, index) in ticket.includedArray" :key="index">{{ item }}</li>
            </ul>
            <a class="ticket-btn" :href="ticket.url">BUY NOW</a>
        </div>
    </div>
    `,
    data() {
      return {
        showTickets: false,
        tickets: [],
      };
    },
    props: ['gsheet'],
    computed: {
      sortedTickets() {
        return this.tickets.sort((a, b) => parseInt(a.order) - parseInt(b.order));
      }
    },
    mounted() {
      fetch(this.gsheet)
        .then(res => res.json())
        .then(data => {
          this.tickets = this.transformData(data);
          this.showTickets = true;
          console.log(this.transformData(data))
        })
        .catch(error => console.error('Error:', error));
    },
    methods: {
      transformData(data) {
        let arr = [];
        var cells = data.values;
        if (cells && cells.length > 1) {
          var headers = cells[0];
          for (var i = 1; i < cells.length; i++) {
            var rowObj = {};
            var row = cells[i];
            for (var j = 0; j < headers.length; j++) {
              rowObj[headers[j].toLowerCase()] = row[j];
            }
            if (rowObj.included) {
              rowObj.includedArray = rowObj.included.split('\n').map(line => line.trim());
              rowObj.includedArray = rowObj.includedArray.map(line => line.replace(/["]+/g, ''));
            }
            arr.push(rowObj);
          }
        }
        return arr;
      }
    }
  };