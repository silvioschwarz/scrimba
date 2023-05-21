const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("posts")

posts.map((post)=>{
    let postDiv = document.createElement("div")
    postDiv.innerHTML = ` 
        <div class="main-content">
        <img id="avatar-${post.username}"  class="avatar post-avatar" src="${post.avatar}">
        <div id="avatar-text">
            <h1>${post.name}</h1>
            <h2>${post.location}</h2>
        </div> 
        </div>
        <img class="post-img" src=${post.post}>
        <div class="footer">
            <img id="heart" class="icons"src="images/icon-heart.png">
            <img id="comment" class="icons" src="images/icon-comment.png">
            <img id="share" class="icons" src="images/icon-dm.png">
            <h1>${post.likes} likes</h1>
            <h1>${post.username} <span id="descr"> ${post.comment}</span></h1>
        </div>`
    main.append(postDiv)
})

