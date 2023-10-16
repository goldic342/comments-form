const commentsForm = document.getElementById("comments-form");
const buttonForm = document.querySelector("#comments-form button");

let commentsCounter = 0;
let commentID = 0;

const deleteComm = function (comment_id) {
  document.getElementById("comment-" + comment_id).remove();
  commentsCounter--;
  document.getElementById("comments-counter").innerHTML = commentsCounter;
  if (commentsCounter == 0) {
    document.getElementById("comments-display").innerHTML = "No comments yet";
  }
};

const addComment = function () {
  const commentsDisplay = document.getElementById("comments-display");
  commentID++;
  if (commentsCounter == 0) {
    commentsDisplay.innerHTML = "";
  }
  commentsCounter++;
  document.getElementById("comments-counter").innerHTML = commentsCounter;
  const commentStucture =
    "<div class='comment' id='comment-" +
    commentID +
    "'>" +
    "<span class='delete' onclick='deleteComm(" +
    commentID +
    ")'>&times;</span>" +
    "<h3 class='userCreatedCommentName'>" +
    commentsForm.userCommentName.value +
    "</h3>" +
    "<p class='userCreatedCommentContent'>" +
    commentsForm.commetContent.value +
    "</p>" +
    "</div>";

  commentsDisplay.insertAdjacentHTML("afterbegin", commentStucture);

  commentsForm.commetContent.value = "";
};
const validateForm = function () {
  const validateErrorName = document.getElementById("error-commet-name");
  const validateErrorContent = document.getElementById("error-commet-content");

  let errorStatusName = false;
  let errorStatusContent = false;
  // переделать так чтобы высвечивались обе ошибки
  if (!commentsForm.commetContent.value) {
    validateErrorContent.innerHTML = "Content can not be null";
    errorStatusContent = true;
  } else {
    validateErrorContent.innerHTML = ""; //Если нет ошибок
  }
  if (!commentsForm.userCommentName.value) {
    validateErrorName.innerHTML = "Name can not be null";
    errorStatusName = true;
  } else {
    validateErrorName.innerHTML = ""; //Если нет ошибок
  }
  if (errorStatusContent || errorStatusName) {
    return false;
  }

  validateErrorContent.innerHTML = "";
  return true;
};

const mainComment = function () {
  let isError = validateForm();
  if (!isError) {
    return false;
  }

  addComment();
};
buttonForm.addEventListener("click", mainComment);
