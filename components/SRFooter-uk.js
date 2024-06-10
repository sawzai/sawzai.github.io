export default {
    template: `
    <footer class="bg-black text-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img width="220" style="opacity:.7" src="https://cch-files.edge.live.ds25.io/cch/v/6a50f05c-d80c-431e-83f4-1bd0bf1d9722/files/64cb4ddb83b73_logo.png?o=333&amp;q=high&amp;s=333" data-src="https://cch-files.edge.live.ds25.io/cch/v/6a50f05c-d80c-431e-83f4-1bd0bf1d9722/files/64cb4ddb83b73_logo.png" alt="Success Resources" class="pgb-align-left pgb-image-radius-select-no no-shadow pgb-full-color">
                    <div class="py-3 d-flex gap-3">
                        <a class="text-light h2 footer-icon" href="https://www.facebook.com/SuccessResources" target="_blank">
                            <i class="fa fa-facebook-square"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://www.linkedin.com/company/127784" target="_blank">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://twitter.com/srseminars" target="_blank">
                            <i class="fa fa-twitter-square"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://www.pinterest.com/srseminars/" target="_blank">
                            <i class="fa fa-pinterest-square"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://www.instagram.com/successresourcesglobal/" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://www.youtube.com/user/successresources" target="_blank">
                            <i class="fa fa-youtube-play"></i>
                        </a>
                        <a class="text-light h2 footer-icon" href="https://successresources.com/" target="_blank">
                            <i class="fa fa-globe"></i>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <h5 class="text-light">ABOUT US</h5>
                    <ul>
                        <li class="text-light"><i class="fa fa-users" aria-hidden="true"></i>12M attendees</li>
                        <li class="text-light"><i class="fa fa-ticket" aria-hidden="true"></i>500 events per year</li>
                        <li class="text-light"><i class="fa fa-globe" aria-hidden="true"></i>37 countries represented</li>
                        <li class="text-light"><i class="fa fa-trophy" aria-hidden="true"></i>#1 seminar promoter in the world</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5 class="text-light">CONTACT US</h5>
                    <ul>
                        <li class="text-light">
                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                            <a class="text-light" href="tel:+442038683587">+44 203 868 3587</a>
                        </li>
                        <li class="text-light">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            <a class="text-light" href="https://wa.me/447458159416">+44 745 815 9416</a>
                        </li>
                        <li class="text-light">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <a class="text-light" href="info.uk@srglobal.com">info.uk@srglobal.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row text-center pt-4">
                <div class="col text-light">
                    <div>Presented by Success Resources</div>
                    <a target="_blank" class="text-light" href="https://docs.google.com/document/d/1PhLwqN0UoL0a8a3KvwKFkYs2VwCdjs6zeDXwZ_hxAq0/">
                        Terms & Conditions
                    </a>
                     / 
                     <a target="_blank" class="text-light" href="https://docs.google.com/document/d/1WWRyCrQ9jwLe8NR4A270KG3Ggyrk1D4b7Sxud95sIYo/edit">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `,
    props: ['textline'],
    computed: {
        defaultTextline() {
            return this.textline || 'My Textline is here!';
        }
    }
};