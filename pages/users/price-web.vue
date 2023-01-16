<template>
    <div>
        <main id="main">
            <!-- ======= Breadcrumbs Section ======= -->
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Jasa Pembuatan Website</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Website Development</li>
                        </ol>
                    </div>
                </div>
            </section><!-- End Breadcrumbs Section -->
            <Packages />
            <FaqServicesWeb />
        </main>
    </div>
</template>

<script>
import Packages from '~/components/Users/PricingWeb/Packages.vue';
import FaqServicesWeb from '~/components/Users/PricingWeb/FaqServicesWeb.vue';

export default {
    layout: 'layoutUsers',
    components: {
        Packages,
        FaqServicesWeb,
    }
}
</script>