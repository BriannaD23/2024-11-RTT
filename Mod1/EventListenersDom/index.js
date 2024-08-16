const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");


function addComment(){
    const newComment = cInput.value;

    console.log('clicked')


    if(newComment === '')return

    cList.appendChild(document.createElement('li')).textContent = newComment;
    //reseting the input to an
    cInput.value = ''
}

cBtn.addEventListener('click', addComment)