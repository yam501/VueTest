let {position,user} = require("../mocks")

class UserController {

    async getUser(req, res) {
        return res.json(user)
    }

    async changeUser(req, res) {
        const {params} = req.body

        const list = []

        if (!params.name) {
            list.push("name")
        }

        if (!params.secondName) {
            list.push("secondName")
        }

        if (!params.position) {
            list.push("position")
        }

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phonePattern = /^\+7\d{10}$/;


        if (!emailPattern.test(params.email)){
            list.push("email")
        }

        if (!phonePattern.test(params.num)){
            list.push("num",params.num)
        }

        if (params.SNILS && params.SNILS.length !== 11) {
            list.push("SNILS")
        }

        if (list.length > 0) {
            return res.status(400).send(list)
        }


        user = {... params}

        return res.status(200)
    }

    async getPositions (req, res){
        return res.json(position)
    }
}

module.exports = new UserController()