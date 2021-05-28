<template>
    <div class="back">
        <main v-if="obj[0]">
            <div class="contact">
                <div class="centerG propWrapper">
                    <span class="propL">Имя:</span>
                    <span class="propC"></span>
                    <span class="propR">{{obj[0].name}}</span>
                </div>
                <div v-for="i in renderProperty()" :key="i" class="centerG propWrapper">
                    <span class="propL">{{i[0]}}:</span>
                    <span class="propC"></span>
                    <span v-on:click="editProp(i)"  class="propR edit">{{i[1]}}</span><span v-on:click="removeProp(i[0],i[1])" class="del">удалить</span>
                </div>
                <div class="centerG propWrapper">
                    <span class="propL">id:</span>
                    <span class="propC"></span>
                    <span class="propR">{{obj[0].id}}</span>
                </div>

                <div v-if="renderProperty().length == 0" class="centerG">
                    <span>Ничего не добавлено</span>
                </div>
            </div>
            <div class="centerG add">
                <button v-on:click="createProp()">Добавить параметр</button>
            </div>
        </main>
        <div class="none" v-if="!obj[0]">Такого id нет</div>
    </div>
</template>


<script>

    export default {
        name: "About",
        data(){
            return{
            }
        },
        methods:{
            renderProperty(){
                let arr = []
                for(let i in this.obj[0]){
                    let tempName = i
                    if(this.$store.state.stopWord.includes(i)){continue}
                    if(this.$store.state.rename[i]){
                        i = this.$store.state.rename[i]
                    }
                    arr.push([i, this.obj[0][tempName]])
                }
                return arr
            },

            editProp(prop){
                this.$store.commit('showEditValue',{obj:this.obj[0],key:prop[0],value:prop[1]})
            },
            createProp(){
                this.$store.commit('showCreateProperty',this.obj[0])
            },
            removeToTransfer(key, value){
                return () => this.$store.dispatch('removeProperty', {obj:this.obj[0],key,value})
            },
            removeProp(key, value){
                this.$store.commit('showYesNoWindow',this.removeToTransfer(key, value))
            },
        },
        computed:{
            obj(){
                let q = this.$store.state.contactsAll.findIndex(i => i.id == this.$route.params.id )
                return [
                    this.$store.state.contactsAll[q],
                    q
                ]
            }
        }
    }
</script>


<style scoped lang="scss">
    .back{
        background: #f4f4f4;
        @extend %centerG;
    }

    .contact{
        min-height: 100px;
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
    .del{
        margin: 5px ;
        color: red;
        cursor: pointer;
    }
    .none{
        font-size: 15pt;
        margin: 10px;
    }
    .edit{
        cursor: pointer;
        color: blue;
    }
    span{
        margin: 5px 0;
    }
    button{
        margin: 50px;
        width: 200px;
        height: 30px;
        border-radius: 10px;
    }
</style>