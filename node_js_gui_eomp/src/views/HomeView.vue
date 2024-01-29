<template>
  <div>
    <!-- landing page image and text -->
    <div id="image_for_landing_page">
      <h1 id="landing_page_text">STELLARWRIST</h1>
      <img id="landing_page_image" class="img-fluid" src="https://i.ibb.co/hfHhK6F/Screenshot-2024-01-29-121909-removebg-preview-1.png" alt="landing_page_image">
      <h3 id="landing_page_text">"WHERE TIME MEETS LUXURY"</h3>
    </div>
    <!-- promotions and sales -->
    <div id="promo_and_sales">
      <div id="deal_1">
        <div id="deal_1_text">
          <h2>Get a discount of <span style="color: red;" id="flicker">20%</span> on our watches</h2>
          <h2>If you have bought here before...</h2>
          <h2>Become a <span style="color: #ffc851;" id="flicker_1">GOLD Customer Today.</span></h2>
        </div>
      </div>
      <div id="deal_2">
        <div id="deal_2_text">
          <h2>Our all <span style="color: #ffc851" id="flicker_1">NEW</span> September Sneak Peek Deal</h2>
          <a href="#sneak_peek"><svg id="animation_downarrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg></a>
        </div>
      </div>
    </div>
    <!-- sneak peek -->
    <div id="sneak_peek">
      <div>
        <h1 id="sneak_peek_text">Take a look at our NEW design of watches...</h1>
      </div>

      <!-- media query image -->
      <div id="div_media_image">
        <img id="media_query_image" src="https://i.ibb.co/HKJF3M3/Nismo-R35-RS-Chrono-1695209383989.webp" class="img-fluid" alt="watch_1_image">
      </div>
      

      <!-- carousel start -->
      <div id="carouosel_watch_div" class="container-fluid">

        <!-- carousel -->
        <div id="carouselExample" class="carousel slide container-fluid">
          <div class="carousel-inner container-fluid">
            <div class="carousel-item active">
              <img id="watch_image_carousel" src="https://i.ibb.co/HKJF3M3/Nismo-R35-RS-Chrono-1695209383989.webp" class="img-fluid" alt="watch_1_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/rm60F2p/Non-Gyro-Petronas-63-S-Yellow-Black-Red-Leather-Strap-RS-Chono-1669215188-74eec2d2-5c3c-4492-a241-62.webp" class="img-fluid" alt="watch_1_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/SQxwjhL/Bayer-795-M-RS-Chrono-1695209443446.webp" class="img-fluid" alt="watch_2_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/dcSygJX/Gyro-Speedtail-765-Orange-Black-Orange-Leather-Strap-RS-Chono-1669251861-78b53d0e-ebbf-4049-89cf-939.webp" class="img-fluid" alt="watch_2_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/L8Jwbf3/Petronas-E63-RS-Chrono-1695209147562.webp" class="img-fluid" alt="watch_3_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/Zx84xBW/Shelby-GT500-RS-Chrono-1695209063343.webp" class="img-fluid" alt="watch_3_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/frYZY2N/Speedtail-765-White-RS-Chrono-1695209036774.webp" class="img-fluid" alt="watch_4_image">
            </div>
            <div class="carousel-item">
              <img id="watch_image_carousel" src="https://i.ibb.co/GWG8ZPK/Vorsprung-RS7-Green-RS-Chrono-1695208956117.webp" class="img-fluid" alt="watch_4_image">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        
      </div>
    </div>



  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>