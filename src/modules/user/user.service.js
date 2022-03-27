async function getUsers(req, res){
    try {
      console.log("HELLO USERS!")
      return res.json({
        "hola": "COCACOLA"
      })
    } catch (error) {
        return res.status(error.status).json(error)
    }

}


module.exports = {
    getUsers
}