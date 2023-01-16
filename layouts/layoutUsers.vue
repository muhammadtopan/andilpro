<template>
    <div>
        <UsersHeader />
        <Nuxt />
        <Contact />
        <UsersFooter />
        <ScrollUp />
    </div>
</template>

<script>
import UsersHeader from '../components/Users/UsersHeader.vue';
import Contact from '~/components/Users/LandingPage/Contact.vue';
import UsersFooter from '../components/Users/UsersFooter.vue';
import ScrollUp from '~/components/Users/ScrollUp.vue';

export default {
    components: {
        UsersHeader,
        Contact,
        UsersFooter,
        ScrollUp
    }
}
</script>