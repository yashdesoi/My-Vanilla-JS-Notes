// FOLLOWING IS PRACTICAL EXAMPLE OF HOW CALLBACKS CAN BE USED

const posts = [
  { 
    id: 1, 
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  { id: 2, 
    title: 'Second Post',
    content: 'Hic nulla ducimus laudantium fugiat dolores placeat consequatur.'
  },
  { 
    id: 3, 
    title: 'Third Post',
    content: 'Adipisci commodi eius ab maiores ratione asperiores'
  }
];

const comments = [
  { 
    post_id: 2, 
    content: 'Great Post!'
  },
  { 
    post_id: 2, 
    content: 'Nice Post!'
  },
  { 
    post_id: 3, 
    content: 'Awesome Post!'
  }
];

const getPost = function(id, callback) {
  const post = posts.find(post => {
    return post.id === id;
  });

  if (post) {
    callback(null, post);
  } else {
    callback('No such post', undefined);
  }
}

const getComments = function(postId, callback) {
  const result = comments.filter(comment => {
    return comment.post_id === postId;
  });

  if (result.length > 0) {
    callback(null, result)
  } else {
    callback('This post has no comments', undefined);
  }
}

getPost(4, (error, post) => {

  if (error) {
    console.log(error);
  } else {
    console.log('POST:-');
    console.log(post.title);
    console.log(post.content);
    console.log();
    console.log('COMMENTS:-');
    getComments(post.id, (error, comments) => {
      if (error) {
        console.log(error);
      } else {
        comments.forEach(comment => console.log(comment.content));
      }
    })
  }
});