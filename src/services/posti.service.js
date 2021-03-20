
import { userService } from './user.service.js';
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const KEY = 'postisDB';


export const postiService = {
    query,
    getById,
    remove,
    save,
    getEmptyPosti,
}

_createPostis()

function query() {
    return storageService.query(KEY)
}


function getById(id) {
    return storageService.get(KEY, id)
}

// function savePostiComment(payload ){
//     return storageService.put('comment-list', userId)
// }

// function savePostiLike(payload ){
//     return return storageService.put('posti-like', userId)
// }

// function saveCommentLike(payload ){
//     return return storageService.put('posti-like', userId)
// }

// function tagPost(payload ){
//     return return storageService.???
// }

function remove(id) {
    return storageService.delete(KEY, id)
}

function save(posti) {
    if (posti._id) {
        return storageService.put(KEY, posti) //edit
    } else {
        return storageService.post(KEY, posti) //new
    }
}

function getEmptyPosti() {
    return {                
    "_id": utilService.makeId(),
    "description": "",
    "imgUrl": "",
    "loc": {
        "name": "",
        "lat": 0,
        "lng": 0
    },
    "createdAt": Date.now(),
    "creator": userService.getLoggedinUser()  ,
    "comments": [],
    "likedBy": [],
    "tags": [] }
}

function _createPostis() {
    var postis = JSON.parse(localStorage.getItem(KEY))
    if (!postis || !postis.length) {
        postis = 
        [
            {
                "_id": "FFF234",
                "description": "nice picture",
                "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/v1616094169/instagram/story-pic/pic1_rxlgjs.jpg",
                "loc": {
                    "name": "Tel Aviv",
                    "lat": 35.42,
                    "lng": 34.22
                },
                "createdAt": 1616019495151,
                "creator": { 
                    "_id": "EEE22",
                    "fullname": "Benny Orenshtein",
                    "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984358/instagram/users-pic/user1_yqme7r.jpg"
                },
                "comments": [
                    {
                        "id": "disud3786er3",
                        "txt": "awesome picture",
                        "by": {
                            "_id": "ccr4577",
                            "fullname": "Roni Mizrahi",
                            "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615985058/instagram/users-pic/user5_vtz4w4.jpg"
                        },
                        "likedBy": [
                            {
                                "_id": "EEE22",
                                "fullname": "Benny Orenshtein",
                                "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984358/instagram/users-pic/user1_yqme7r.jpg"
                            }
                        ]
                    },
                    {
                        "id": "dis23232s3786er3",
                        "txt": "great!!!",
                        "by": {
                            "_id": "OOO987",
                            "fullname": "Yoni Doy",
                            "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984338/instagram/users-pic/user4_p6n68b.jpg"
                        },
                        "likedBy": []
                    }
                ],
                "likedBy": [
                    {
                        "_id": "EEE22",
                        "fullname": "Benny Orenshtein",
                        "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984358/instagram/users-pic/user1_yqme7r.jpg"
                    },
                    {
                        "_id": "aar4577",
                        "fullname": "Gal Dvori",
                        "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984349/instagram/users-pic/user2.jpg_muesqu.jpg"
                    }
                ],
                "tags": [
                    "animals",
                    "nature"
                ],
                "isSaved" :true
            },
            {
                "_id": "AAH234",
                "description": "nature is amazing",
                "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/v1616094178/instagram/story-pic/pic7_slvlmn.jpg",
                "loc": {
                    "name": "Italy",
                    "lat": 35.42,
                    "lng": 34.22
                },
                "createdAt": 12122212134,
                "creator": { 
                    "_id": "aar4577",
                    "fullname": "Gal Dvori",
                    "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984349/instagram/users-pic/user2.jpg_muesqu.jpg"
                },
                "comments": [
                    {
                        "id": "disud3786er3",
                        "txt": "want to travell to itally!",
                        "by": {
                            "_id": "EEE22",
                            "fullname": "Benny Orenshtein",
                            "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984358/instagram/users-pic/user1_yqme7r.jpg"
                        },
                        "likedBy": [
                            {
                                "_id": "eeAA22",
                                "fullname": "yossi tik",
                                "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/v1615984344/instagram/users-pic/user3.jpg_clzrsm.jpg"
                            }
                        ]
                    },
                    {
                        "id": "dis23232s3786er3",
                        "txt": "Im lovin it",
                        "by": {
                            "_id": "OOO987",
                            "fullname": "Yoni Doy",
                            "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984338/instagram/users-pic/user4_p6n68b.jpg"
                        },
                        "likedBy": []
                    },
                    {
                        "id": "rrrr3786er3",
                        "txt": "wow!!! really like this one!",
                        "by": {
                            "_id": "EEE22",
                            "fullname": "Gal Dvori",
                            "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984349/instagram/users-pic/user2.jpg_muesqu.jpg"
                        },
                        "likedBy": [
                            {
                                "_id": "eeAA22",
                                "fullname": "yossi tik",
                                "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/v1615984344/instagram/users-pic/user3.jpg_clzrsm.jpg"
                            }
                        ]
                    },
                ],
                "likedBy": [
                    {
                        "_id": "aar4577",
                        "fullname": "Gal Dvori",
                        "imgUrl": "https://res.cloudinary.com/carmitvk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615984349/instagram/users-pic/user2.jpg_muesqu.jpg"
                    }
                ],
                "tags": [
                    "animals",
                    "nature"
                ],
                "isSaved" : false
            }
        ]
        localStorage.setItem(KEY, JSON.stringify(postis))
    }
    return postis;
}
