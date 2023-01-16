<template>
    <div>
        <main id="main">
            <!-- ======= Breadcrumbs Section ======= -->
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Jasa Desain Grafis</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Graphic Designer</li>
                        </ol>
                    </div>
                </div>
            </section><!-- End Breadcrumbs Section -->
            <PricingLogo />
            <PricingDesign />
        </main>
    </div>
</template>

<script>
import PricingLogo from '~/components/Users/PricingDesign/PricingLogo.vue';
import PricingDesign from '~/components/Users/PricingDesign/PricingDesign.vue';

export default {
    layout: 'layoutUsers',
    components: {
        PricingLogo,
        PricingDesign
    }
}

</script>