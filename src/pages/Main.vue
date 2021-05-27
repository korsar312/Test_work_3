<template>
    <div class="back">
        <main>
            <Person v-for="(contact, index) in $store.state.contactsAll" :key="contact.id" :cont="contact" :index="index"/>
        </main>
    </div>
</template>


<script>
    import Person from "../components/Person";

    export default {
        name: "Main",
        data() {
            return {
            }
        },
        props: {
        },
        computed:{
        },
        methods: {
        },
        watch: {
        },
        components: {
            Person,
        },
    }
</script>


<style scoped lang="scss">

    .back{
        background: #f4f4f4;
        @extend %centerG;
    }


</style>
