let posts = [];

const postIt = function () {
    let userText = $("#post-name").val()
    pushToArray(userText);
    renderScreen()
}

let idNumber = 0

const pushToArray = function (userText) {
    posts.push({ text: userText, id: idNumber, comments: [] })
    idNumber++
}

const renderScreen = function () {
    $(".posts").empty()
    for (let i = 0; i < posts.length; i++) {


        let $post = $("<div class='post' data-id='" + posts[i].id + "'><p>" + posts[i].text + '</p>' +
            '<input type="text" class="usernameInput username form-control" placeholder="Username..."  />' +
            '<textarea  type="text" class="commentInput comment form-control" placeholder="Comments Here..."  />' +
            '<button type="button" class="postComment btn postButton">Post Comment</button><button type="button" class="'+
            'removePost btn postButton">Remove Post</button></div>')

        AddComments($post, posts[i].comments);
        $(".posts").append($post)
    }


}
const AddComments = function ($post, comments) {
    for (let a = 0; a < comments.length; a++) {
        $post.append("<div class='commentAdded'><h4>Username: " + comments[a].username + "</h4><p>Comment: " + comments[a].comment + "</p></div>")
    }
}



$(".posts").on('click', '.removePost', function () {
    for (let i = 0; i < posts.length; i++) {
        if ($(this).closest(".post").data().id === posts[i].id) {
            posts.splice(i, 1)
        }
    }
    renderScreen()
})


$("body").on('click', '.postComment', function () {
    let user = $(this).closest(".post").find(".usernameInput").val();
    let commentInput = $(this).closest(".post").find(".commentInput").val();
    for (let i = 0; i < posts.length; i++) {
        if ($(this).closest(".post").data().id === posts[i].id) {
            posts[i].comments.push({ username: user, comment: commentInput });
        }
    };

    renderScreen();

})



$(".addPost").click(postIt)