<template>
    <Header/>

    <router-view>
    </router-view>

    <CreateProperty     v-if="$store.state.show.CreateProperty.visibility"/>
    <CreateContact      v-if="$store.state.show.CreateContact.visibility"/>
    <EditValue          v-if="$store.state.show.EditValue.visibility"/>
    <YesNoWindow        v-if="$store.state.show.YesNoWindow.visibility"/>
</template>


<script>
    import Header from "./components/Header";
    import YesNoWindow from "./components/YesNoWindow";
    import CreateProperty from "./components/CreateProperty";
    import CreateContact from "./components/CreateContact";
    import EditValue from "./components/EditValue";


    export default {
        name: 'App',
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
            EditValue,
            CreateContact,
            CreateProperty,
            YesNoWindow,
            Header
        },
    }
</script>


<style lang="scss">
@import './clear.module.css';

.centerG{
    display: flex;
    justify-content: center;
}
.centerV{
     display: flex;
     justify-content: center;
 }
.centerFull{
     display: flex;
     justify-content: center;
     align-items: center;
 }
.full{
     height: 100%;
     width: 100%;
 }

main{
    height: calc(100vh - 64px);
    overflow: auto;
    padding: 0 15px;
    width: $worksize;
}
</style>
