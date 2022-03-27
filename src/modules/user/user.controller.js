const UserService = require('./user.service')


async function getUsers(req, res){
    return UserService.getUsers(req, res);
}   

module.exports = {
    getUsers
}