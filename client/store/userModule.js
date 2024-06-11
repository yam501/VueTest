import {UserServices} from "../services/UserServices";

export const userModule = {
    state: () => ({
        name: '',
        secondName: '',
        middleName: '',
        SNILS: '',
        position: '',
        num: '',
        email: '',

        positions: [],
        invalidFields: []
    }),

    getters: {},

    mutations: {
        setName(state, name) {
            state.name = name
        },

        setSecondName(state, secondName) {
            state.secondName = secondName
        },

        setMiddleName(state, middleName) {
            state.middleName = middleName
        },

        setSNILS(state, SNILS) {
            state.SNILS = SNILS
        },

        setPosition(state, position) {
            state.position = position
        },

        setPositions(state, positions) {
            state.positions = positions
        },

        setNumber(state, number) {
            state.num = number
        },

        setEmail(state, email) {
            state.email = email
        },
        setInvalidFields(state, array){
            state.invalidFields = array
        }
    },

    actions: {
        async getUser({commit}) {
            try {
                const {data} = await UserServices.getUser()
                commit("setName", data.name)
                commit("setSecondName", data.secondName)
                commit("setMiddleName", data.middleName)
                commit("setSNILS", data.SNILS)
                commit("setPosition", data.position)
                commit("setNumber", data.num)
                commit("setEmail", data.email)
            } catch (e) {
                console.log(e)
            }
        },

        async getPosition({state, commit}) {
            try {
                const {data} = await UserServices.getPosition()
                commit("setPositions", data)
                return state.positions
            } catch (e) {
                console.log(e)
            }
        },

        async changeUser({ commit }, params) {
            try {
                await UserServices.changeUser(params);
                commit("setName", params.name);
                commit("setSecondName", params.secondName);
                commit("setMiddleName", params.middleName);
                commit("setSNILS", params.SNILS);
                commit("setPosition", params.position);
                commit("setNumber", params.num);
                commit("setEmail", params.email);
            } catch (e) {
                const invalidFields = e.response.data;
                commit('setInvalidFields', invalidFields);
                return invalidFields;
            }
        }
    },
    namespaced: true
}