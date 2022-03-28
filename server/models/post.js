const userModel = require('./user')

let highestId = 3

const list = [
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption: "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption: "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption: "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true
    },
    
]

function get(id){
    return { ...list.find(x => x.id === parseInt(id)), user: userModel.get(x.owner) }
}

function remove(id){
    const index = list.findIndex(x => x.id === parseInt(id))
    const post = list.splice(index, 1)

    return { ...post[0], user: userModel.get(post[0].owner) }
}

function update(id, newPost){
    const index = list.findIndex(x => x.id === parseInt(id))
    const oldPost = list[index]
    
    newPost = { ...oldPost, ...newPost }

    return { ...newPost, user: userModel.get(x.owner) }
}

module.exports = {
    create(post) {
        post.id = ++highestId
        list.push(post)
        return { ...post, user: userModel.get(x.owner) }
    },
    remove,
    update,
    get list(){
        return list.map(x => ({ ...x, user: userModel.get(x.owner) }))
    }
}

module.exports.get = get