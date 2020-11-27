let user = {
    username: 'nisachr',
    blogs: [
        {
            title: 'Summer of 69',
            likes: 36,
            comments: 5
        },
        {
            title: 'Welcome to the Jungle',
            likes: 28,
            comments: 2
        }
    ],
    logBlogs(){
        console.log(`${this.username} has following blogs:-`);
        this.blogs.forEach(function(blog,index){
            console.log(`${index + 1}) ${blog.title}; Likes ${blog.likes}; Comments ${blog.comments}`);
        })
    }
}

user.logBlogs();