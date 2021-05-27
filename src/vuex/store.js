import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            contactsAll:[],         //contains all contacts       (поздно ночью, когда я только начал, я хотел сделать вместо массива связанные списки, но утром меня отпустило:3 )
            journal:[],             //registration of mutations   (я мог бы сохранять массив после любого изменения целиком, переводя его в json, но что будет, если контактов будет 500к+? каждое действие с массивом будет сохранять его же копию в json. Тут же кода больше, но он не так много памяти берет)

            show:{                  //modal window settings
                YesNoWindow: {
                    func: null,
                    visibility: false,
                },
                CreateProperty: {
                    obj: null,
                    visibility: false,
                },
                CreateContact: {
                    obj: null,
                    visibility: false,
                },
                EditValue: {
                    obj: null,
                    visibility: false,
                }
            },

            stopWord: [             //dont render prop in About
                'id',
                'name',
            ],
            rename:{                //rename key object in About
            },
        }
    },
    mutations: {

        //=============== WORK WITH contactsAll ===============\\

        createContact(state,name){
            let id = Date.now()
            state.contactsAll.unshift({
                name,
                id,
            })
        },
        deleteContact(state, index){
            state.contactsAll.splice(index, 1)
        },
        createProperty(state, payload){
            payload.obj[payload.key] = payload.value
        },
        deleteProperty(state, payload){
            delete payload.obj[payload.key]
        },
        editProperty(state, payload){
            payload.obj[payload.key] = payload.value
        },

        //=============== JOURNAL ===============\\

        addJournalCreate(state){
            state.journal.push({
                type: 'CREATE',
            })
        },
        addJournalRemove(state, payload){
            state.journal.push({
                type: 'REMOVE',
                value: payload.cont ,
                index: payload.index,
            })
        },
        addJournalCreateProperty(state, payload){
            state.journal.push({
                type: 'CREATEPROP',
                obj: payload.obj,
                key: payload.key,
            })
        },
        addJournalRemoveProperty(state, payload){
            state.journal.push({
                type: 'REMOVEPROP',
                obj: payload.obj,
                key: payload.key,
                value:payload.value
            })
        },
        addJournalEditProperty(state, payload){
            state.journal.push({
                type: 'EDITPROP',
                obj: payload.obj,
                key: payload.key,
                value:payload.preValue
            })
        },
        //=============== RESTORE ===============\\

        restoreRemove(state, el){
            state.contactsAll.splice(el.index,0,el.value)
        },
        restoreCreate(state){
            state.contactsAll.shift()
        },
        restoreCreateProperty(state, el){
            delete el.obj[el.key]
        },
        restoreRemoveProperty(state, el){
            el.obj[el.key] = el.value
        },
        restoreEditProperty(state, el){
            el.obj[el.key] = el.value
        },

        //=============== MODAL WINDOW ===============\\

        showYesNoWindow(state, func){
            state.show.YesNoWindow.func = func
            state.show.YesNoWindow.visibility = true
        },
        showCreateContact(state, obj){
            state.show.CreateContact.obj = obj
            state.show.CreateContact.visibility = true
        },
        showCreateProperty(state, obj){
            state.show.CreateProperty.obj = obj
            state.show.CreateProperty.visibility = true
        },
        showEditValue(state, obj){
            state.show.EditValue.obj = obj
            state.show.EditValue.visibility = true
        }
    },
    actions: {

        addContact(store, name){
            store.commit('createContact',name)
            store.commit('addJournalCreate')
        },
        addProperty(store, payload){
            store.commit('createProperty', payload)
            store.commit('addJournalCreateProperty', payload)
        },
        removeContact(store, payload){
            store.commit('addJournalRemove',payload)
            store.commit('deleteContact', payload.index)
        },
        removeProperty(store, payload){
            store.commit('addJournalRemoveProperty', payload)
            store.commit('deleteProperty', payload)
        },
        editProperty(store, payload){
            store.commit('addJournalEditProperty', payload)
            store.commit('editProperty', payload)
        },
        backOneTurn(store){
            let lastTurn = store.state.journal.pop()
            switch (lastTurn?.type) {
                case 'REMOVE':
                    store.commit('restoreRemove', lastTurn)
                    break;
                case 'CREATE':
                    store.commit('restoreCreate', lastTurn)
                    break;
                case 'CREATEPROP':
                    store.commit('restoreCreateProperty', lastTurn)
                    break;
                case 'REMOVEPROP':
                    store.commit('restoreRemoveProperty', lastTurn)
                    break;
                case 'EDITPROP':
                    store.commit('restoreEditProperty', lastTurn)
                    break;
                default:
                    alert('У действия небыло типа или тип не прописан')
            }
        },
    },
    getters:{

    },
})

export default store
