export default {
    template: `
    <footer class="bg-black text-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="disclaimer">
                        Disclaimer (I)<br>
                        In consideration of my participation in the above mentioned Event presented by Success Resources (“SR”), its Speaker/Trainer and its promoters, I hereby generally release SR and their agents, representatives, employees, promoters, successors, assigns, insurers and affiliated companies for any and all liability whatsoever related to SR’s negligence, negligent conduct or omissions. Including any activity and indemnify each of the aforesaid from any loss or liability arising from any claim arising out of my participation in the event in general and in particular any activity. These releases shall not exclude any liability for death or personal injury caused by negligence or where such limitation or exclusion is not permitted by law.
                        <br><br>
                        The information presented at the event and the supplementary materials provided to me are intended for educational and informational purposes only. 
                        I acknowledge that SR does not make any representation or warranties with respect to the accuracy, applicability, fitness, or completeness of the event presented by the Speaker/Trainer. Nothing contained therein is to be considered as the rendering of legal advice for specific cases or circumstances.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <a class="srlogo" target="_blank" href="https://successresources.com/">
                        <img width="220" style="opacity:.7" src="https://cch-files.edge.live.ds25.io/cch/v/6a50f05c-d80c-431e-83f4-1bd0bf1d9722/files/64cb4ddb83b73_logo.png?o=333&amp;q=high&amp;s=333" data-src="https://cch-files.edge.live.ds25.io/cch/v/6a50f05c-d80c-431e-83f4-1bd0bf1d9722/files/64cb4ddb83b73_logo.png" alt="Success Resources" class="pgb-align-left pgb-image-radius-select-no no-shadow pgb-full-color">
                    </a>
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
                            <a target="_blank" class="text-light" href="tel:+442038683587">+44 203 868 3587</a>
                        </li>
                        <li class="text-light">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            <a target="_blank" class="text-light" href="https://wa.me/447458159416">+44 745 815 9416</a>
                        </li>
                        <li class="text-light">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <a target="_blank" class="text-light" href="mailto:info.uk@srglobal.com">info.uk@srglobal.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row text-center pt-4">
                <div class="col text-light">
                    <div>Presented by Success Resources</div>
                    <a target="_blank" class="text-light" href="https://successresources.com/terms-and-conditions/">
                        Terms & Conditions
                    </a>
                     / 
                     <a target="_blank" class="text-light" href="https://successresources.com/privacy-policy/">
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