const bcrypt = require('bcrypt')
let highestId = 3

const list = [
    {
        firstName: 'John',
        lastName: 'Doe',
        handle: 'johndoe',
        password: 'password',
        email: 'john@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        handle: 'russian_dictator',
        password: 'long table',
        email: 'john@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: 'vp',
        password: 'password',
        email: 'kamila@whitehouse.org',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3
    }
]

function get(id){
    return { ...list.find(user => user.id === parseInt(id)), password: undefined }
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id))
    const user = list.splice(index, 1)

    return { ...user[0], password: undefined }
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id))
    const oldUser = list[index]

    newUser.password = await bcrypt.hash(newUser.password, 10)
    
    newUser = list[index] = { ...oldUser, ...newUser }

    return { ...newUser, password: undefined }
}

module.exports = {
    async create(user) {
        user.id = ++highestId

        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
        console.log(user)

        throw { message: 'This is a test error' }

        list.push(user)
        return { ...user, password: undefined }
    },
    remove,
    update,
    get list(){
        return list.map(x => ({ ...x, password: undefined }))
    }
}

module.exports.get = get