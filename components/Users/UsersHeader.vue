<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="logo">
                <h1>
                    <NuxtLink to="/" class="navbar-brand logo-image">
                        <img src="/dist/img/logo.png" alt="alternative" class="img-fluid">
                    </NuxtLink>
                </h1>
            </div>
            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto active" href="/#hero">HOME</a></li>
                    <li><a class="nav-link scrollto" href="/#about">TENTANG KAMI</a></li>
                    <li><a class="nav-link scrollto" href="/#services">LAYANAN KAMI</a></li>
                    <li><a class="nav-link scrollto " href="/#portfolio">PORTOFOLIO</a></li>
                    <li class="dropdown"><a><span>ARTIKEL</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="https://ajakan.me/blog/Health">KESEHATAN</a></li>
                            <li><a href="https://ajakan.me/blog/Technology">TEKNOLOGI</a></li>
                            <li><a href="https://ajakan.me/blog/Business%20&%20Entrepreneurship">BISNIS</a></li>
                            <li><a href="https://ajakan.me/blog/Lifestyle">GAYA HIDUP</a></li>
                        </ul>
                    </li>
                    <li><a class="nav-link scrollto" href="/#contact">KONTAK</a></li>
                    <li><a class="getstarted scrollto" href="/#services">GET STARTED</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->
        </div>
    </header><!-- End Header -->
</template>

<script>
export default {
    name: 'UsersHeader',
}
</script>