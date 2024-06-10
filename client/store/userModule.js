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

        positions: []
    }),

    getters: {},

    mutations: {
        setName(state, name) {
            state.name = name
        },

        setSecondName(state, secondName){
            state.secondName = secondName
        },

        setMiddleName(state, middleName){
            state.middleName = middleName
        },

        setSNILS(state, SNILS){
            state.SNILS = SNILS
        },

        setPosition(state, position){
            state.position = position
        },

        setPositions(state, positions) {
            state.positions = positions
        },

        setNumber(state, number){
            state.num = number
        },

        setEmail(state, email){
            state.email = email
        }
    },

    actions: {
        async getUser({commit}) {
            try {
                const {data} = await UserServices.getUser()
                commit.setName(data.name)
                commit.setSecondName(data.secondName)
                commit.setMiddleName(data.middleName)
                commit.setSNILS(data.SNILS)
                commit.setPosition(data.position)
                commit.setNumber(data.num)
                commit.setEmail(data.email)
            }catch (e) {
                alert("Ошибка получения пользователя")
            }
        },

        async getPosition({state, commit}) {
            try {
                const {data} = await UserServices.getPosition()
                commit.setPositions(data)
                return state.positions
            }catch (e) {
                alert("Ошибка получения должностей")
            }
        },

        async changeUser({state}) {
            const params = {
                name: state.name,
                secondName: state.secondName,
                middleName: state.middleName,
                SNILS: state.SNILS,
                position: state.position,
                num: state.num,
                email: state.email
            }

            return await UserServices.changeUser(params)
        }
    },
    namespaced: true
}