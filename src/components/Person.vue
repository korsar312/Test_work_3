<template>
    <div class="contact">
        <div class="centerG propWrapper">
            <span class="propL">Имя:</span>
            <span class="propC"></span>
            <span class="propR">{{cont.name}}</span>
        </div>

        <div v-on:click="remove()" class="remove">
            <div></div>
        </div>
        <div v-on:click="edit()" class="edit">
            Редактировать
        </div>
    </div>
</template>


<script>
    export default {
        name: "Person",
        computed:{
        },
        data() {
            return {

            }
        },
        methods:{
            removeToTransfer(){
                this.$store.dispatch('removeContact',{index:this.index, cont:this.cont})
            },
            remove(){
                this.$store.commit('showYesNoWindow',this.removeToTransfer)
            },
            edit(){
                this.$router.push({ name: 'about', params: { id: `${this.cont.id}` } })
            },
        },
        props:{
            cont:{
                type: Object,
                default(){
                    return {}
                }
            },
            index:{
                type: Number,
                default(){
                    return 0
                }
            },
        },

    }
</script>


<style scoped lang="scss">
    .contact{
        height: 40px;
        position: relative;

        padding: 10px;
        margin: 50px 0 0 0;
        background: #fff;
        border: 1px solid #eeeeee;
        border-radius: 5px;
    }
    .propWrapper{
    }
    .propL{
        text-align: left;
    }
    .propC{
        flex:2;
        border-bottom: 1px dotted #cccccc;
    }
    .propR{
        text-align: right;
    }
    .remove{
        position: absolute;
        top: -11px;
        right: -11px;
        background: red;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;

        @extend %centerFull;

        div{
            transform: rotateZ(45deg);
            width: 10px;
            height: 2px;
            background: #fff;

            &::after{
                content: '';
                position: absolute;
                transform: rotateZ(90deg);
                width: 10px;
                height: 2px;
                background: #fff;
            }
        }
    }
    .edit{
        position: absolute;
        bottom: -8px;
        left: -10px;
        background: #fff;
        border: 3px solid #f4f4f4;
        border-radius: 10px;
        padding: 3px;
        cursor: pointer;

        @extend %centerFull;
    }

</style>