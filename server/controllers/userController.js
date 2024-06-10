let {position,user} = require("../mocks")

class UserController {

    async getUser(req, res) {
        return res.json(user)
    }

    async changeUser(req, res) {
        const {params} = req.body

        const list = []

        if (!params.name) {
            list.append("name")
        }

        if (!params.secondName) {
            list.append("secondName")
        }

        if (!params.position) {
            list.append("position")
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;


        if (!emailPattern.test(params.email)){
            list.append("email")
        }

        if (!phonePattern.text(params.num)){
            list.append("num")
        }

        if (params.SNILS && params.SNILS.length !== 11) {
            list.append("SNILS")
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