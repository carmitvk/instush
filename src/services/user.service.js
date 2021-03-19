import { storageService } from './async-storage.service'

const loggedinUser = {
      _id: "EEE22",
      fullname: "Benny Orenshtein",
      imgUrl:
        "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984358/instagram/users-pic/user1_yqme7r.jpg",
    };
_saveLocalUser(loggedinUser)


export const userService = {
    getUsers,
    getById,
    getLoggedinUser,
}

function getUsers() {
    return storageService.query('user')
}

function getById(userId) {
    return storageService.get('user', userId)
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

