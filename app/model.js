var _homeContent = `

        <div class="home">
            <section class="hero">
                <div class="details">
                    <h1>travel-fly</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fugiat aliquid minus nemo sed est.</p>
                </div>
                <div class="button">
                    READ MORE
                </div>
            </section>
            <section class="tours">
                <div class="cards">
                    <div class="card" id="first"><h2>ISRAEL</h2>
                        <p>from $1000</p>
                    <div class="learn-more">
                        Learn More
                    </div></div>
                    <div class="card" id="second"><h2>USA</h2>
                        <p>from $1000</p>
                        <div class="learn-more">
                            Learn More
                        </div>
                    </div>
                    <div class="card" id="third"><h2>AUSTRALIA</h2>
                        <p>from $1800</p>
                        <div class="learn-more">
                            Learn More
                        </div>
                    </div>
                </div>
                <h1>Booking form</h1>
                <form action="">
                    <div id="first-four-inputs">
                        <input type="text" placeholder="name...">
                        <input type="text" placeholder="email...">
                        <input type="text" placeholder="country...">
                        <input type="text" placeholder="hotel...">
                    </div>
                    <div><label for="check-in">Check-In</label>
                        <input type="date" id="check-in">
                    </div>
                    <div>
                        <label for="check-out">Check-Out</label>
                        <input type="date" id="check-out">
                    </div>
                    <div>
                        
                        Adult
                        <input type="number">
                        Children
                        <input type="number">
                        Rooms
                        <input type="number">

                    </div>
                   
                    
                    <textarea rows="7" placeholder="message..."></textarea>
                    <input type="submit">
                </form>
            </section>
        </div>`;

var _aboutContent = `

<div class="about"> 
<section>
    <h1>ABOUT:</h1>
    <hr>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</section>       
<section>
    <h2>CLIENT QUOTES:</h2>
    <hr>
    <div class="clients">
        <div class="card">
            <img src="images/about-client-01.jpg" alt="">
            <div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <span>- Miranda Brown</span>
            </div>
            
        </div>
        <div class="card">
            <img src="images/about-client-02.jpg" alt="">
            <div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <span>- Johnathan wes</span>
            </div>
            
        </div>
    </div>
</section>
</div>`;

var _toursContent = `

<header>
<h1>TOURS:</h1>
</header>
<div class="tours-page"> 
<div id="packages">
    <div class="tour-card" id="isr">
        <h1>Israel</h1>
        <span>from $1000</span>
        <a href="#" id="tour_01"><div class="learn-more">LEARN MORE</div></a>
    </div>
    <div class="tour-card" id="usa">
        <h1>USA</h1>
        <span>from $1500</span>
        <a href="#" id="tour_02"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="aus">
        <h1>Australia</h1>
        <span>from $1800</span>
        <a href="#" id="tour_03"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="nez">
        <h1>New Zealand</h1>
        <span>from $1200</span>
        <a href="#" id="tour_04"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="fra">
        <h1>France</h1>
        <span>from $2500</span>
        <a href="#" id="tour_05"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="egy">
        <h1>Egypt</h1>
        <span>from $900</span>
        <a hhref="#" id="tour_06"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="jap">
        <h1>Japan</h1>
        <span>from $1300</span>
        <a href="#" id="tour_07"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="can">
        <h1>Canada</h1>
        <span>from $2000</span>
        <a href="#" id="tour_08"><div class="learn-more">LEARN MORE</div></a>

    </div>
    <div class="tour-card" id="uae">
        <h1>UAE</h1>
        <span>from $3000</span>
        <a href="#" id="tour_09"><div class="learn-more">LEARN MORE</div></a>

    </div>
</div>
</div>


</div>`;

var _contactContent = ` 
<section id="content">
<h1>Volunteer</h1><hr><p>123 Baker Street<br>Masonopolis<br>ZH 456780<Br><br><tel>9310-979-300</tel></p>
    <form>
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Phone Number">
        <input type="number" placeholder="Age">
        <input type="text" placeholder="Job interested">
        <input type="submit">
    </form>
</section>

`;

var _tour_01Content = `<header class="tour-package-header" id="tour-01">
<h1>Israel tour package:</h1>
<p>STARTING FROM $1000 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-israel/israel-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-israel/israel-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-israel/israel-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>
</div>`;

var _tour_02Content = `<header class="tour-package-header" id="tour-02">
<h1>USA tour package:</h1>
<p>STARTING FROM $1500 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-usa/usa-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-usa/usa-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-usa/usa-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>
</div>`;


var _tour_03Content = `<header class="tour-package-header" id="tour-03">
<h1>Australia tour package:</h1>
<p style="bottom: 70px">STARTING FROM $1800 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-aus/aus-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-aus/aus-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-aus/aus-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_04Content = `<header class="tour-package-header" id="tour-04">
<h1>New Zealand tour package:</h1>
<p>STARTING FROM $1200 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-nz/nz-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-nz/nz-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-nz/nz-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_05Content = `<header class="tour-package-header" id="tour-05">
<h1>France tour package:</h1>
<p>STARTING FROM $2500 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-france/france-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-france/france-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-france/france-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_06Content = `<header class="tour-package-header" id="tour-06">
<h1>Egypt tour package:</h1>
<p>STARTING FROM $900 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-egypt/egypt-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-egypt/egypt-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-egypt/egypt-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_07Content = `<header class="tour-package-header" id="tour-07">
<h1>Japan tour package:</h1>
<p>STARTING FROM $1300 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-japan/japan-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-japan/japan-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-japan/japan-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_08Content = `<header class="tour-package-header" id="tour-08">
<h1>Canada tour package:</h1>
<p>STARTING FROM $2000 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-canada/canada-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-canada/canada-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-canada/canada-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;

var _tour_09Content = `<header class="tour-package-header" id="tour-09">
<h1>UAE tour package:</h1>
<p>STARTING FROM $3000 (prices may vary)</p>
</header>
<div class="tour-details"> 
<div class="location-highlights">
    <img src="../images/tour/tour-uae/uae-tour-01.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-uae/uae-tour-02.jpg" alt="pillars somewhere in Israel">
    <img src="../images/tour/tour-uae/uae-tour-03.jpg" alt="pillars somewhere in Israel">

</div>
<div>
    <h1><u>Day #</u> 1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div>
    <h1><u>Day #</u> 3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="learn-more">BOOK NOW</div>

</div>`;


var _special_offersContent = `<div class="special"> 
<div class="heading"><u>SPECIAL OF</u>FER(S)</div>
<div class="offers">
    <div class="offer-card">
        <img src="images/special-offer-01.jpg" alt="Barcelona offer picture">
        <div class="detail">
            <div style="display: flex-inline; flex-direction: row;" >
                <div class="heading">
                    <u>BARCELON</u>A, SPAIN &nbsp; 
                </div>
                <span class="discount">(20% off!)</span>
            </div>
            
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div class="learn-more">LEARN MORE</div>
        </div>
    </div>
    <div class="offer-card">
        <img src="images/special-offer-02.jpg" alt="Bangkok offer picture">
        <div class="detail">
            <div style="display: flex-inline; flex-direction: row;">
                <div class="heading">
                    <u>BANGKOK, T</u>HAILAND  &nbsp; 
                </div>
                <span class="discount">(20% off!)</span>
            </div>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div class="learn-more">LEARN MORE</div>
        </div>
    </div>
</div>

</div>
`;

var _blogContent = `<div class="blog"> 
<h3><u>BLOG:</u></h3>
<div class="blog-card">
    <div class="date">
        <span class="number">06</span><br>
        <span class="month">JUN</span>
    </div>
    <div>
        <div class="blog-img">

        </div>
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
</div>
<div class="blog-card">
    <div class="date">
        <span class="number">23</span><br>
        <span class="month">JUN</span>
    </div>
    <div>
        <div class="blog-img">

        </div>
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
</div>
</div>
`;

var _contactContent = `<div class="contact"> 
<h3><u>CONTACT</u> US</h3>
<div class="contact-items">

    <section id="location">
        <div class="map"></div>
        <div id="address">
            travel-fly Inc. <br>
            8901 Marmora Road,<br>
            Glasgow, D04 89GR. <br>
            Freephone:+1 800 559 6580 <br>
            Telephone:+1 800 603 6035 <br>
            FAX:+1 800 889 9898 <br>
            E-mail: mail@travelfly.org
        </div>
    </section>
    <section id="form-contact">
        <form action="">
            <input type="text" placeholder="Your name..."> <br>
            <input type="text" placeholder="Email Address..."><br>
            <input type="text" placeholder="Company..."><br>
            <input type="textarea" aria-rowspan="5" placeholder="Message..." id="message-box"><br>

            <div class="send">SEND MESSAGE</div>
        </form>
    </section>
    
</div>

</div>`;


export function updateView(pageName) {

    var pageContent = "_" + pageName + "Content";
    $("#app").html(eval(pageContent));
    console.log("changed to " + pageContent);

}