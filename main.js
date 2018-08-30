var SpacebookApp = function () {
    return {
        posts: [
            {
                text: "Hello world", id: 1, comments: [
                    { text: "Man, this is a comment!", id: 1 },
                    { text: "Man, this is a comment!", id: 2 },
                    { text: "Man, this is a comment!", id: 3 }
                ]
            },
            {
                text: "Hello world", id: 2, comments: [
                    { text: "Man, this is a comment!", id: 4 },
                    { text: "Man, this is a comment!" , id: 5},
                    { text: "Man, this is a comment!" , id: 6}
                ]
            },
            {
                text: "Hello world", id: 3, comments: [
                    { text: "Man, this is a comment!", id: 7 },
                    { text: "Man, this is a comment!" , id: 8},
                    { text: "Man, this is a comment!" , id: 9}
                ]
            }
        ],

        // the current id to assign to a post
        currentId: 4,
        commentId:10,
        $posts: $('.posts'),

        _findPostById: function (id) {
            for (var i = 0; i < this.posts.length; i += 1) {
                if (this.posts[i].id === id) {
                    return i;
                }
            }
        },

        _findCommentById: function (postID, id) {
            let i = this._findPostById(postID)
            for (let a = 0; a < this.posts.length; a += 1) {
                if (this.posts[i].comments[a].id === id) {
                    return a;
                }
            }
        },

        createPost: function (text) {
            var post = {
                text: text,
                id: this.currentId,
                comments:[]
            }

            this.currentId ++;

            this.posts.push(post);
        },

        renderPosts: function () {
            this.$posts.empty();

            for (let i = 0; i < this.posts.length; i++) {
                let post = this.posts[i];
                
                let commentsContainer = `<div class="comments-container">
                <input type="text" class="comment-name">
                <button class="btn btn-primary add-comment">Post Comment</button> 
                ${this.addComments(post.comments)}
                </div>`;
                
                
                let $myPost = $('<div class="post" data-id=' + post.id + '>'+
                '<p class="text">'+ post.text + '</p><br>'
                +'<button type="button" class="btn button remove">Remove Post</button> ' + 
                '<button type="button" class="btn button show-comments">Toggle Comments</button> ' +
                commentsContainer);
                

                $('.posts').append($myPost)

            }

            
        },

        addComments: function(comments){
            let $comments =""
            for (let a = 0; a < comments.length; a++) {
                $comments+="<div class='comment' data-id='"+ comments[a].id +"'>" +
                comments[a].text + "<button type='button' class='btn removeComment'>Remove Comment</button></div>"
            }
            return $comments
        },

        removePost: function (postID) {

            var post = this._findPostById(postID);

            this.posts.splice(this.posts.indexOf(post), 1);
        },

        toggleComments: function (currentPost) {
            var $clickedPost = $(currentPost).closest('.post');
            $clickedPost.find('.comments-container,.comment').toggleClass('show');
        },

        createComment: function (postID,commentText) {
            let i = this._findPostById(postID)
            this.posts[i].comments.push({text:commentText, id:this.commentId})
            this.commentId++
        },
        removeComment: function (postID, commentID) {
            let i = this._findPostById(postID)
            let a = this._findCommentById(postID, commentID)
            this.posts[i].comments.splice(a,1)
        }
    };
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function () {
    var text = $('#post-name').val();

    app.createPost(text);
    app.renderPosts();
});

$('.posts').on('click', '.remove', function () {

    var $clickedPost = $(this).closest('.post');
    var postID = $clickedPost.data().id;

    app.removePost(postID);
    app.renderPosts();
});

$('.posts').on('click', '.show-comments', function () {
    app.toggleComments(this);
});
$('.posts').on('click', '.add-comment', function () {
    let postID = $(this).closest(".post").data().id
    let commentText = $(this).closest(".comments-container").find(".comment-name").val()
    app.createComment(postID,commentText);
    app.renderPosts();
});
$('.posts').on('click', '.removeComment', function () {
    let postID = $(this).closest(".post").data().id
    let commentId = $(this).closest(".comment").data().id
    app.removeComment(postID,commentId)
    app.renderPosts();
})