<template>
    <div>
        <main id="main">
            <!-- ======= Breadcrumbs Section ======= -->
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Jasa Pengelolaan Media Sosial</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Social Media Management</li>
                        </ol>
                    </div>
                </div>
            </section><!-- End Breadcrumbs Section -->
            <PackagesA />
            <PackagesB />
            <PackagesC />
            <FaqSosmed />
        </main>
    </div>
</template>

<script>
import PackagesA from '~/components/Users/PricingSosmed/PackagesA.vue';
import PackagesB from '~/components/Users/PricingSosmed/PackagesB.vue';
import PackagesC from '~/components/Users/PricingSosmed/PackagesC.vue';
import FaqSosmed from '~/components/Users/PricingSosmed/FaqSosmed.vue';

export default {
    layout: 'layoutUsers',
    components: {
        PackagesA,
        PackagesB,
        PackagesC,
        FaqSosmed,
    }
}
</script>