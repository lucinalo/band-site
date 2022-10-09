var post = document.getElementById("comment");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;
    var commentorNameValue = document.getElementById("name-box").value;

    var userComment = document.createElement("div");
    userComment.classList.add('user-comment');


    var commentDate = document.createElement("div");


    var textBoxIcon = document.createElement("div");

    var commentor = document.createTextNode(commentorNameValue);
    var comment = document.createTextNode(commentBoxValue);

    var image = document.createElement("img");
    image.classList.add("text__box--icon");
    image.src = "assets/images/Mohan-muruge.jpg";
    image.alt = "Mohan Muruge";
    textBoxIcon.appendChild(image);
    userComment.appendChild(textBoxIcon);

    userComment.appendChild(commentor);
    userComment.appendChild(document.createElement("br"));
    userComment.appendChild(comment);
    commentDate.classList.add('commentor-date');
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementsByClassName("commentor-date").innerHTML = m + "/" + d + "/" + y;
    
    userComment.appendChild(commentDate);
    document.getElementById("unordered").appendChild(userComment);


    

});