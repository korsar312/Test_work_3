<template>
    <div>
        <div class="back">
        </div>

        <div class="modal centerFull">
            <div>Вы уверены?</div>
            <div>
                <button v-on:click="nope()">Нет</button>
                <button v-on:click="yes()">Да</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YesNoWindow",
        methods:{
            yes(){
                this.$store.state.show.YesNoWindow.func()
                this.$store.state.show.YesNoWindow.visibility = false
            },
            nope(){
                this.$store.state.show.YesNoWindow.visibility = false
            },
        }
    }
</script>

<style scoped lang="scss">
    .back{
        position: fixed;
        top:0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
    }
    .modal{
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: fixed;
        width: 300px;
        height: 100px;
        background: #fff;
        border-radius: 15px;
        flex-direction: column;

        div{
            margin: 5px;

            button{
                margin: 5px;
                width: 50px;
            }
        }
    }


</style>