<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2>KONTAK KAMI</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="contact-about">
                        <h3>We Are Ready to Work With You!</h3>
                        <p>
                            ANDILPRO selalu menghargai kebutuhan dan kerja sama Anda, kami juga telah membantu banyak
                            bisnis di Indonesia untuk tumbuh pesat di internet, mulai UMKM hingga Perusahaan Nasional.
                        </p>
                        <p>
                            Pastikan kebutuhan Digital Marketing Anda kepada Ahlinya yang Profesional. Sekarang!
                        </p>
                        <div class="social-links">
                            <!-- <a href="#" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a> -->
                            <a href="https://www.facebook.com/people/AndilPro/100089034135565/" target="_blank"
                                class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/andilpro/" target="_blank" class="instagram"><i
                                    class="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/88458072" target="_blank" class="linkedin"><i
                                    class="bi bi-linkedin"></i></a>
                            <!-- <a href="#" target="_blank" class="tiktok"><i
                                    class="bi bi-tiktok"></i></a> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="info">
                        <div>
                            <i class="ri-map-pin-line"></i>
                            <p>Jl. Batuang Taba, Kec. Lubuk Begalung, Kota Padang, Sumatra Barat, Indonesia</p>
                        </div>
                        <div>
                            <i class="ri-mail-send-line"></i>
                            <p>andilpro.official@gmail.com</p>
                        </div>
                        <div>
                            <i class="ri-phone-line"></i>
                            <p>0896 8956 6800</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                required></textarea>
                        </div>
                        <div class="my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section><!-- End Contact Section -->
</template>

<script>
export default {
    name: 'Contact'
}
</script>