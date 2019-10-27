$(function(){

  function  addUser(user){
    let html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザー名</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
              </div>
              `;
    $("#user-search-field").append(html)
  }
  function  addNouser(){
    let html = `
               <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
               </div>
               `;
    $("#user-search-field").append(html)
  }
  function addDeleteUser(name, id) {
    let html = `
              <div class="ChatMember clearfix" id="${id}">
                <p class="ChatMember__name">${name}</p>
                <div class="ChatMember__remove ChatMember__button" data-user-id="${id}" data-user-name="${name}">削除</div>
              </div>
              `;
    $(".ChatMembers").append(html);
  }

  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();  
    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-field").empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
      })
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
});


// # %input#user-search-field.chat-group-form__input{placeholder: "追加したいユーザー名を入力してください", type: "text"}/