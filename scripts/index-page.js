/* when the page loads, iterate over the comments and display them */
var allComments = fetch("https://project-1-api.herokuapp.com/comments?api_key=25c208d8-2e1f-42e4-997d-532d4e9eff86")
    .then((response) => response.json())
    .then((data) => {

        data = data.reverse();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            var commentBoxValue = data[i].name;
            var commentorNameValue = data[i].comment;
            var commentDateValue = data[i].timestamp;

            var n = new Date (commentDateValue);

            // console.log (n.toLocaleDateString("default"));

            // console.log (n);

            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();

            console.log (m);
            // document.getElementsByClassName("commentor-date").innerHTML = m + "/" + d + "/" + y;

            // console.log(commentorNameValue);

            // var commentorName = document.createTextNode(commentorNameValue);
            // var comment = document.createTextNode(commentBoxValue);



            var userComment = document.createElement("div");
            userComment.classList.add('user-comment');

            var userDisplay = document.createElement ("div");
            userDisplay.classList.add ("user__display-pic--grey");

            var commentText = document.createElement("div");
            commentText.classList.add('comment-text');

            var commentDetails = document.createElement("div");
            commentDetails.classList.add('commentor-details');

            var commentorName = document.createElement("div");
            commentorName.classList.add('commentor-name');

            var commentorDate = document.createElement("div");
            commentorDate.classList.add('commentor-date');

            var commentContent = document.createElement("div");
            commentContent.classList.add('comment-content');

            // commentorName.appendChild ();
            
            var commentorName1 = document.createTextNode(commentorNameValue);
            var tabs = document.createTextNode (" ");
            var commentorDate1 = document.createTextNode (`${m}/${d}/${y}`);
            var commentContent1 = document.createTextNode(commentBoxValue);



            commentDetails.appendChild(commentorName1);



            commentText.appendChild (commentContent1);
            commentText.appendChild (tabs);
            
            commentText.appendChild(commentorDate1);

            commentText.appendChild (commentDetails);


            userComment.appendChild (userDisplay);
            userComment.appendChild (commentText);
            




            // var textBoxIcon = document.createElement("div");
            // var image = document.createElement("div");
            // image.classList.add("user__display-pic--grey");
            // // image.src = "assets/images/Mohan-muruge.jpg";
            // // image.alt = "Mohan Muruge";
            // textBoxIcon.appendChild(image);
            // userComment.appendChild(textBoxIcon);

            // commentText.appendChild(commentDetails);

            // userComment.appendChild(commentText);

            
            // commentText.appendChild(commentContent);

            // commentDetails.appendChild(commentor);
            // commentDetails.appendChild(document.createElement("br"));
            // commentDetails.appendChild(comment);

            // commentDate.classList.add('commentor-date');


            // userComment.appendChild(commentDate);

            document.getElementById("unordered").appendChild(userComment);
        }
    });

var post = document.getElementById("comment");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;
    var commentorNameValue = document.getElementById("name-box").value;
    var commentor = document.createTextNode(commentorNameValue);
    var comment = document.createTextNode(commentBoxValue);

    var jsonObject = {
        name: commentor.data,
        comment: comment.data
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(jsonObject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://project-1-api.herokuapp.com/comments?api_key=25c208d8-2e1f-42e4-997d-532d4e9eff86", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .then(() => {
            fetch("https://project-1-api.herokuapp.com/comments?api_key=25c208d8-2e1f-42e4-997d-532d4e9eff86")
                .then((response) => response.json())
                .then((data) => console.log(data));
        });





    var userComment = document.createElement("div");
    userComment.classList.add('user-comment');

    var userDisplay = document.createElement("div");
    userDisplay.classList.add("user__display-pic--grey");

    var commentText = document.createElement("div");
    commentText.classList.add('comment-text');

    var commentDetails = document.createElement("div");
    commentDetails.classList.add('commentor-details');

    var commentorName = document.createElement("div");
    commentorName.classList.add('commentor-name');

    var commentContent = document.createElement("div");
    commentContent.classList.add('comment-content');

    commentText.appendChild(commentDetails);
    userComment.appendChild(commentText);
    commentDetails.appendChild(commentorName);
    commentText.appendChild(commentContent);


    var commentDate = document.createElement("div");

    var textBoxIcon = document.createElement("div");
    var image = document.createElement("div");
    image.classList.add("user__display-pic--grey");
    // image.src = "assets/images/Mohan-muruge.jpg";
    // image.alt = "Mohan Muruge";
    textBoxIcon.appendChild(image);
    userComment.appendChild(textBoxIcon);

    commentText.appendChild(commentDetails);
    commentDetails.appendChild(commentorName);
    userComment.appendChild(commentText);

    commentText.appendChild(commentContent);

    commentDetails.appendChild(commentor);
    commentDetails.appendChild(document.createElement("br"));
    commentDetails.appendChild(comment);

    commentDate.classList.add('commentor-date');
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementsByClassName("commentor-date").innerHTML = m + "/" + d + "/" + y;

    userComment.appendChild(commentDate);

    document.getElementById("unordered").prepend(userComment);

});