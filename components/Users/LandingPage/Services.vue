<template>
    <!-- ======= Services Section ======= -->
    <section id="services" class="services bg-cover">
        <div class="container">

            <div class="section-title layanan-kami" data-aos="fade-up">
                <h2>LAYANAN KAMI</h2>
                <p>Layanan yang kami sediakan untuk membantu bisnis anda semakin profesional</p>
            </div>

            <div class="row" style="display: flex; justify-content: center;">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"
                        style="display: flex !important; flex-direction: column; justify-content: space-between;">
                        <div class="">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4 class="title"><a href="">Website Development</a></h4>
                            <p class="description">Jasa Pembuatan Website dengan Fitur Full Responsive (Mobile
                                Friendly), Fast
                                Loading, Modern Design, SEO Friendly (Branding &amp; Keyword), dan masih banyak fitur
                                lainnya.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" class="aos-init aos-animate">
                            <NuxtLink to="/users/price-web" class="btn-order-now scrollto">
                                PESAN SEKARANG
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"
                        style="display: flex !important; flex-direction: column; justify-content: space-between;">
                        <div class="">
                            <div class="icon"><i class="bx bx-line-chart-down"></i></div>
                            <h4 class="title"><a href="">Social Media Management</a></h4>
                            <p class="description">Tingkatkan brand awareness bisnis Anda di social media. Tim
                                professional kami siap
                                membuatkan strategi yang tepat untuk campaign Anda. Mulai dari konten, foto, video,
                                caption, analisa
                                hashtag, hingga proses upload.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" class="aos-init aos-animate">
                            <NuxtLink to="/users/price-sosmed" class="btn-order-now scrollto">
                                PESAN SEKARANG
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"
                        style="display: flex !important; flex-direction: column; justify-content: space-between;">
                        <div class="">
                            <div class="icon"><i class="bx bx-palette"></i></div>
                            <h4 class="title"><a href="">Graphic Design</a></h4>
                            <p class="description">Kami menyediakan jasa untuk pembuatan logo, banner, packaging, sampai
                                desain produk bagi bisnis Anda. Buat bisnis Anda semakin out standing dengan desain yang
                                profesional untuk meningkatkan branding bisnis kamu dengan konsep design kekinian.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" class="aos-init aos-animate">
                            <NuxtLink to="/users/price-design" class="btn-order-now scrollto">
                                PESAN SEKARANG
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End Services Section -->
</template>

<script>
export default {
    name: 'Services'
}
</script>