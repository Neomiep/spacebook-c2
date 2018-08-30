
describe("app.createPost", function() {
    it("should add a new post to the list", function() {
    app.createPost("jjj");
    var actualResult = app.posts[app.posts.length-1].text;
    expect(actualResult).toBe("jjj");
    });
    it("should add a new post to the list", function() {
      app.createPost("Hi, how are you?");
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe("Hi, how are you?");
     });
     it("should add a new post to the list", function() {
      app.createPost(99999);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(99999);
     });
     it("should add a new post to the list", function() {
      app.createPost(undefined);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(undefined);
     });
     it("should add a new post to the list", function() {
      app.createPost(null);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(null);
     });
     it("should add a new post to the list", function() {
      app.createPost(true);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(true);
     });
     it("should add a new post to the list", function() {
      app.createPost(false);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(false);
     });
     it("should add a new post to the list", function() {
      app.createPost(5+5);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(10);
     });
     it("should add a new post to the list", function() {
      app.createPost(5*5);
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe(25);
     });
     it("should add a new post to the list", function() {
      app.createPost(5+"n");
       var actualResult = app.posts[app.posts.length-1].text;
       expect(actualResult).toBe("5n");
     });
  });
  describe("app.removePost", function() {
    it("should remove a post from the list", function() {
    app.removePost(1);
    var actualResult = app.posts[app.posts.length-1].id;
    expect(actualResult).toBe(3);
    });
    it("should remove a post from the list", function() {
    app.removePost(app.posts[app.posts.length-1].id);
    var actualResult = app.posts.length;
    expect(actualResult).toBe(1);
    });
    it("should remove a post from the list", function() {
    app.removePost('i');
    var actualResult = app.posts.length;
    expect(actualResult).toBe(0);
    });
  })
  describe("app._findPostById", function() {
    it("should check a post id", function() {
      var actualResult = app._findPostById(1)
      expect(actualResult).toBe(app.posts[0]);
  })
  it("should check a post id", function() {
    var actualResult = app._findPostById(app.posts[app.posts.length-1].id)
    expect(actualResult).toBe(app.posts[2]);
})
  it("should check a post id", function() {
     var actualResult = app._findPostById("r")
    expect(actualResult).toBe();
  })

})