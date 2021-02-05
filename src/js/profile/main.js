$(function () {
  $(".btn-pass").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".change-pass").removeClass("hide");
  });
  $(".btn-edit").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".edit-profile").removeClass("hide");
  });
  $(".btn-delete").on("click", () => {
    $(".profile-info").addClass("hide");
    $(".delete-profile").removeClass("hide");
  });
  $(".btn-edit");
  $(".cancel-btn").on("click", () => {
    $(".profile-info").removeClass("hide");
    $(".change-pass, .edit-profile,.delete-profile").addClass("hide");
  });
});
