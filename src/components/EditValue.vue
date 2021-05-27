<template>
    <div>
        <div class="back">
        </div>

        <div class="modal centerFull">
            <div>Измените значение</div>
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
        name: "EditValue",
        data(){
            return{
                name: this.$store.state.show.EditValue.obj.key,
                values: this.$store.state.show.EditValue.obj.value,
            }
        },
        methods:{
            yes(){
                if(this.values.length === 0 || this.values === this.$store.state.show.EditValue.obj.value){
                    alert('Введите корректное значения')
                    return
                }

                this.$store.commit('showYesNoWindow',this.yesToTransfer())

                this.$store.state.show.EditValue.visibility = false
            },

            yesToTransfer(){
                return () => this.$store.dispatch('editProperty',{key:this.name, value:this.values, preValue:this.$store.state.show.EditValue.obj.value, obj:this.$store.state.show.CreateProperty.obj})
            },

            nope(){
                this.$store.commit('showYesNoWindow',this.nopeToTransfer())
            },
            nopeToTransfer(){
                return () => this.$store.state.show.EditValue.visibility = false
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