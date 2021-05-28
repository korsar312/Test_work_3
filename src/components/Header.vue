<template>
    <header class="centerFull">
        <nav class="workplace">
            <div><button v-on:click="home()">Главная</button></div>
            <div><button v-on:click="addContact()">Добавить контакт</button></div>
            <div><button v-on:click="backOneTurn()">Отмена действия</button></div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            addContact(){
                this.$store.commit('showCreateContact',this.removeToTransfer)
            },
            backOneTurn(){
                this.$store.dispatch('backOneTurn');
            },
            home(){
                this.$router.push({ name: 'main'})
            },
        }
    }
</script>

<style scoped lang="scss">

    header{
        height: 64px;
        background: #8ac858;
        flex-direction: row;
        @extend %centerG;

        .workplace{
            width: $worksize;
            @extend %centerG;

            div{
                flex: 1;
                @extend %centerFull;

                button{
                    font-size: 11pt;
                    width: 100px;
                    min-height: 30px;
                    border-radius: 10px;
                }
            }
        }
    }


</style>