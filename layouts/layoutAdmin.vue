<template>
    <div>
        <AdminHeader />
        <AdminSidebar />
        <Nuxt />
        <AdminFooter />
    </div>
</template>

<script>
import AdminHeader from '~/components/Admin/AdminHeader.vue';
import AdminSidebar from '~/components/Admin/AdminSidebar.vue';
import AdminFooter from '~/components/Admin/AdminFooter.vue';

export default  {
    components: {
        AdminHeader,
        AdminSidebar,
        AdminFooter
    },
}
</script>