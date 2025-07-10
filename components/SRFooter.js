import { loadCSS } from './index.js';

export default {
  template: `
    <footer class="bg-black text-light py-5" v-if="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="disclaimer" v-html="footer.disclaimer"></p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <a class="srlogo" target="_blank" rel="noopener noreferrer" :href="footer.logoLink">
              <img width="220" style="opacity:.7" :src="footer.logoSrc" alt="Success Resources">
            </a>
            <div class="py-3 d-flex gap-3">
              <a v-for="(social, index) in footer.socials" :key="index" :href="social.link" target="_blank" rel="noopener noreferrer" class="text-light h2 footer-icon">
                <i :class="['fa', social.icon]"></i>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <h5 class="text-light">ABOUT US</h5>
            <ul>
              <li v-for="(about, index) in footer.about" :key="index" class="text-light">
                <i :class="['fa', about.icon]" aria-hidden="true"></i> {{ about.text }}
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <h5 class="text-light">CONTACT US</h5>
            <ul>
              <li v-for="(contact, index) in footer.contact" :key="index" class="text-light">
                <i :class="['fa', contact.icon]" aria-hidden="true"></i>
                <a class="text-light" :href="contact.href" target="_blank" rel="noopener noreferrer">{{ contact.text }}</a>
              </li>
            </ul>
            <p v-html="footer.address"></p>
          </div>
        </div>

        <div class="row text-center pt-4">
          <div class="col text-light">
            <div>Presented by Success Resources</div>
            <template v-for="(policy, index) in footer.policies" :key="index">
              <span v-if="!policy.link">{{ policy.name }}</span>
              <a v-else :href="policy.link" target="_blank" rel="noopener noreferrer" class="text-light">
                {{ policy.name }}
              </a>
            </template>
          </div>
        </div>

    </footer>
  `,

  props: {
    country: {
      type: String,
      default: 'SG'
    }
  },

  data() {
    return {
      footers: {
        SG: {
          disclaimer: `Disclaimer (I)<br>
                        In consideration of my participation in the above mentioned Event presented by Success Resources (“SR”), its Speaker/Trainer and its promoters, I hereby generally release SR and their agents, representatives, employees, promoters, successors, assigns, insurers and affiliated companies for any and all liability whatsoever related to SR’s negligence, negligent conduct or omissions. Including any activity and indemnify each of the aforesaid from any loss or liability arising from any claim arising out of my participation in the event in general and in particular any activity. These releases shall not exclude any liability for death or personal injury caused by negligence or where such limitation or exclusion is not permitted by law.
                        <br><br>
                        The information presented at the event and the supplementary materials provided to me are intended for educational and informational purposes only. 
                        I acknowledge that SR does not make any representation or warranties with respect to the accuracy, applicability, fitness, or completeness of the event presented by the Speaker/Trainer. Nothing contained therein is to be considered as the rendering of legal advice for specific cases or circumstances.`,
          logoLink: 'https://successresources.com/',
          logoSrc: 'https://cch-files.edge.live.ds25.io/cch/v/6a50f05c-d80c-431e-83f4-1bd0bf1d9722/files/64cb4ddb83b73_logo.png',
          socials: [
            { link: 'https://www.facebook.com/SuccessResources', icon: 'fa-facebook-square' },
            { link: 'https://www.linkedin.com/company/127784', icon: 'fa-linkedin-square' },
            { link: 'https://twitter.com/srseminars', icon: 'fa-twitter-square' },
            { link: 'https://www.pinterest.com/srseminars/', icon: 'fa-pinterest-square' },
            { link: 'https://www.instagram.com/successresourcesglobal/', icon: 'fa-instagram' },
            { link: 'https://www.youtube.com/user/successresources', icon: 'fa-youtube-play' },
            { link: 'https://successresources.com/', icon: 'fa-globe' }
          ],
          about: [
            { icon: 'fa-users', text: '12M attendees' },
            { icon: 'fa-ticket', text: '500 events per year' },
            { icon: 'fa-globe', text: '37 countries represented' },
            { icon: 'fa-trophy', text: '#1 seminar promoter in the world' }
          ],
          contact: [
            { icon: 'fa-phone-square', text: '+65 6299 4677', href: 'tel:+6562994677' },
            { icon: 'fa-envelope', text: 'info.sg@srglobal.com', href: 'mailto:info.sg@srglobal.com' }
          ],
          address: `
            <b>Success Resources Singapore Pte Ltd</b><br>
            33 Ubi Avenue 3<br>
            #05-51 Vertex Tower A<br>
            Singapore 408868
          `,
          policies: [
            { name: 'Terms & Conditions', link: 'https://successresources.com/terms-and-conditions/' },
            { name: ' | ', link: '' },
            { name: 'Privacy Policy', link: 'https://successresources.com/privacy-policy/' }
          ]
        },
        SGCN: {
          disclaimer: `免责声明<br>
                      考虑到我参加上述由Success Rescoures（""SR""）、其演讲者/培训师及其发起人举办的活动，我在此全面免除SR及其代理人、代表、雇员、发起人、继承人、受让人、保险公司和附属公司与SR的疏忽、过失行为或遗漏有关的任何和所有责任，包括任何活动，并确认上述各人对因我参加该活动，特别是任何活动而产生的任何索赔的责任。免责声明不应排除任何因疏忽而导致的死亡或人身伤害的责任，或在法律不允许的情况下的限制或排除。
                      <br><br>
                      活动中介绍的信息和提供给我的补充材料仅用于教育和信息目的。我承认，SR公司不对演讲者/培训师所介绍的活动的准确性、适用性、适应性或完整性作出任何陈述或保证，其中的任何内容都不能被视为对具体案件或情况的法律建议。`
        
        },
        MY: {
          contact: [
            { icon: 'fa-phone-square', text: '+603 7801 2888', href: 'tel:+60378012888' },
            { icon: 'fa-whatsapp', text: '+44 745 815 9416', href: 'https://wa.me/447458159416' },
            { icon: 'fa-envelope', text: 'info.my@srglobal.com', href: 'mailto:info.my@srglobal.com' }
          ],
          address: ''
        },
        SGMY: {
            contact: [
              { icon: 'fa-phone-square', text: 'SG: +65 6299 4677', href: 'tel:+6562994677' },
              { icon: 'fa-phone-square', text: 'MY: +603 7801 2888', href: 'tel:+60378012888' },
              { icon: 'fa-whatsapp', text: 'SG: Lena', href: 'https://wa.link/gbxmu3' },
              { icon: 'fa-whatsapp', text: 'MY: Emily', href: 'https://wa.link/5a8e65' },
              { icon: 'fa-envelope', text: 'info.sg@srglobal.com', href: 'mailto:info.sg@srglobal.com' }
            ]
        },
        SA: {
          contact: [
            { icon: 'fa-phone-square', text: '+27 10 745 0583', href: 'tel:+27107450583' },
            { icon: 'fa-whatsapp', text: '+27 72 420 8467', href: 'https://wa.me/27724208467' },
            { icon: 'fa-envelope', text: 'info.za@srglobal.com', href: 'mailto:info.za@srglobal.com' }
          ],
          address: `
            <b>Success Resources South Africa (Pty) Ltd.</b><br>
            WeWork<br>
            155 West Street,<br>
            Sandown, Sandton, 2031<br>
            South Africa
          `
        },
        KUMA: {
          contact: [
            { icon: 'fa-phone-square', text: '+94 776 601 601', href: 'tel:+94776601601' },
            { icon: 'fa-whatsapp', text: '+94 776 601 601', href: 'https://wa.me/94776601601' },
            { icon: 'fa-envelope', text: 'wisdom@wisdomtrainer.com', href: 'mailto:wisdom@wisdomtrainer.com' }
          ],
          address: `
            <b>Wisdom Trainer Office</b><br>
            166/4, High Level Road, Maharagama.<br>
            Sri Lanka
          `
        },
        UK: {
          contact: [
            { icon: 'fa-phone-square', text: '+44 203 868 3587', href: 'tel:+442038683587' },
            { icon: 'fa-whatsapp', text: '+44 745 815 9416', href: 'https://wa.me/447458159416' },
            { icon: 'fa-envelope', text: 'info.uk@srglobal.com', href: 'mailto:info.uk@srglobal.com' }
          ],
          address: `
            <b>Success Resources UK Pte Ltd</b><br>
            457 Southchurch Road<br>
            Southend on Sea<br>
            Essex SS1 2PH<br>
            United Kingdom
          `
        },
        EU: {
            contact: [
              { icon: 'fa-phone-square', text: '+44 203 868 3587', href: 'tel:+442038683587' },
              { icon: 'fa-whatsapp', text: '+44 745 815 9416', href: 'https://wa.me/447458159416' },
              { icon: 'fa-envelope', text: 'info.uk@srglobal.com', href: 'mailto:info.uk@srglobal.com' }
            ],
            address: `
              <b>Success Resources UK Pte Ltd</b><br>
              457 Southchurch Road<br>
              Southend on Sea<br>
              Essex SS1 2PH<br>
              United Kingdom
            `
          }
      }
    };
  },

  computed: {
    footer() {
      const sgFooter = this.footers.SG;
      const selectedFooter = this.footers[this.country] || {};
      return {
        disclaimer: selectedFooter.disclaimer || sgFooter.disclaimer,
        logoLink: selectedFooter.logoLink || sgFooter.logoLink,
        logoSrc: selectedFooter.logoSrc || sgFooter.logoSrc,
        socials: selectedFooter.socials && selectedFooter.socials.length ? selectedFooter.socials : sgFooter.socials,
        about: selectedFooter.about && selectedFooter.about.length ? selectedFooter.about : sgFooter.about,
        contact: selectedFooter.contact && selectedFooter.contact.length ? selectedFooter.contact : sgFooter.contact,
        address: selectedFooter.address || sgFooter.address,
        policies: selectedFooter.policies && selectedFooter.policies.length ? selectedFooter.policies : sgFooter.policies
      };
    }
  },

  mounted() {
    Promise.all([
      loadCSS('https://sawzai.github.io/assets/footer.css', 'footer-css'),
      loadCSS('https://sawzai.github.io/assets/font-awesome.min.css', 'awesome-css')
    ]).catch(console.error);
  }
};
