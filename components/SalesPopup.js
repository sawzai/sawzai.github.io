import { loadScript, loadCSS } from 'https://sawzai.github.io/components/index.js';

const SalesPopup = {
  template: `<div style="display:none"></div>`,

  props: {
    tickets: {
      type: Array,
      default: () => ["1", "2", "3", "4"]
    },
    categories: {
      type: Array,
      default: () => ["Silver", "Gold", "Diamond"]
    }
  },

  data() {
    return {
      min: 1000,
      max: 360000,
      arrData: []
    };
  },

  mounted() {
    // First load jQuery ONLY
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', 'jquery-js')
      .then(() => {
        // ✅ Only after jQuery loaded, load toastr and css
        return Promise.all([
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js', 'toastr-js'),
          loadCSS('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css', 'toastr-css'),
          loadCSS('https://sawzai.github.io/assets/SalesPopup.css', 'salespopup-css')
        ]);
      })
      .then(() => {
        // ✅ Now toastr is safe to use!
        toastr.options = {
          closeButton: true,
          newestOnTop: true,
          preventDuplicates: true,
          positionClass: "toast-top-right",
          timeOut: 8000,
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
  
        // Fetch sales data
        fetch("https://sheets.googleapis.com/v4/spreadsheets/1nEgCJil7KL2wlDJxk_SIT-SgeQxQAU4ahbsqyxg8nmU/values/Sheet1/?alt=json&key=AIzaSyBKPrSxvCdCZcsBKz-cSAR3HZI44W4xDIA")
          .then(response => response.json())
          .then(data => {
            this.arrData = data.values.slice(1).map(row => ({
              no: row[0],
              name: row[1],
              package: row[2],
              location: row[3],
              date: row[4],
              time: row[5]
            }));
            this.startPopup();
          })
          .catch(error => console.error('Error loading sales data:', error));
      })
      .catch(error => {
        console.error('Error loading scripts/styles:', error);
      });
  },

  methods: {
    startPopup() {
      setTimeout(() => {
        this.salePop();
        this.randomIntervalPop();
      }, 10000);
    },

    randomIntervalPop() {
      setInterval(() => {
        this.salePop();
      }, Math.floor(Math.random() * (40000 - 10000) + 10000));
    },

    salePop() {
      if (this.arrData.length === 0) return;

      const item = this.arrData[Math.floor(Math.random() * this.arrData.length)];
      const ticket = this.tickets[Math.floor(Math.random() * this.tickets.length)];
      const category = this.categories[Math.floor(Math.random() * this.categories.length)];
      let timeAgo = Math.floor(Math.random() * (this.max - this.min) + this.min);

      timeAgo = timeAgo < 60000
        ? `${Math.floor(timeAgo / 1000)} minutes`
        : `${Math.floor(timeAgo / 60000)} hours`;

      toastr.success(`Just signed up for ${ticket} ${category} ticket(s)<div>${timeAgo} ago</div>`, `${item.name} from ${item.location}`);
    }
  }
};

export default SalesPopup;
