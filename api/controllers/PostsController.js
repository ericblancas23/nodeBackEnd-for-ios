const post1 = {
    id: 1,
    title: 'name',
    body: 'yada'
};
const post2 = {
    id: 2,
    title: 'name2',
    body: 'yada2'
};

const all = [post1, post2];

module.exports = {
    posts: (req, res) => {
        res.send(all);
    },
    createPost: (req, res) => {
        const newPosts = req.body;
        all.push(newPosts);
        res.end();
    },
    findById: (req, res) => {
        const userId = req.params.postId;
        const filterPosts = all.filter(p => {
            return p.id == userId
            }
        )
        if(filterPosts.length > 0) {
            res.send(filterPosts[0])
        } else {
            res.send('failed to find');
        }
        
    }
}