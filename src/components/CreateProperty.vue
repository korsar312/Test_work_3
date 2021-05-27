<template>
    <div>
        <div class="back">
        </div>

        <div class="modal centerFull">
            <div>Введите имя</div>
            <input v-model="name"/>

            <div>Введите значение</div>
            <input v-model="values"/>
            <div>
                <button v-on:click="nope()">Нет</button>
                <button v-on:click="yes()">Да</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateProperty",
        data(){
            return{
                name: '',
                values: '',
            }
        },
        methods:{
            yes(){
                if(this.name.length === 0 || this.values.length === 0){
                    alert('Введите значения')
                    return
                }
                if(this.$store.state.show.CreateProperty.obj[this.name]){
                    alert('Данное имя существует')
                    return
                }
                this.$store.dispatch('addProperty',{key:this.name, value:this.values, obj:this.$store.state.show.CreateProperty.obj})
                this.$store.state.show.CreateProperty.visibility = false
            },
            nope(){
                this.$store.state.show.CreateProperty.visibility = false
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
        height: 150px;
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