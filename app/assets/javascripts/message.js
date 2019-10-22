// $(function(){
//   function buildHTML(message){
//     var html = `<div class="message">
//                   ${message.text}
//                 </div>`
//     return html;
//   }
$('.js-form').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html)
    $('.form_message').val('')
    // ここにajaxの仕様で連続投稿できるように書く
     // $('#form-submit').attr('disabled',false);
    //  $('#form-submit').removeAttr('data-disable-with');
     // autoScroll();
  })
  .fail(function(){
    alert('error');
  })
})
});