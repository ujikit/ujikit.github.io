  $(document).ready(function(){
    // index.html
    // Materialize
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();

    // ./Materialize
    // Effect Scroll
    // ./Effect Scroll
    function blink_text() {
        $('.button.home').fadeOut(500);
        $('.button.home').fadeIn(500);
    }
    setInterval(blink_text, 1000);
    // Event
    $("#input-name").keypress(function(e) {
      if(e.which == 13) {
        e.preventDefault();
        inputNama();
      }
    });
    $("#btn-input-name").on("click", function() {
      inputNama();
    })

    function inputNama () {
      var input_name = $("#input-name").val()
      var split = input_name.split(" ")
      var input_name_validation = split.filter(function(str) { return /\S/.test(str); });
      var input_name_validation = JSON.stringify(input_name_validation)
      var input_name_validation = JSON.stringify(input_name_validation).replace(/[^a-zA-Z ]/g, "")
      if (input_name_validation.length === 0) { alert('Nama tidak benar'); return 0; }
      else if (input_name_validation.match(/<[(\w+)(\s+(\w+)\s*\=\s*(\'|")(.*?)\\4\s*)*\s*(\/>|>)]+/gi)) { alert('Anda terindikasi XSS Attack'); return 0; }
      $("#content").load("page_chatbot_lanjut.html");
      setTimeout(function(){
        $('.chat-page-history').append('<img class="load-chat" src="frontend/img/chat-load.gif">');
      },100);
      setTimeout(function(){
        $('.load-chat').hide()
        $('.chat-page-history').append('<div class="sender"><p class="chat-sender">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ<br>Hey <b>'+input_name+'</b>, selamat datang di UjikitBot, senang bisa menyapamu. Mau tanya apa nih seputar informasi dariku?</p></div>');
        $('.chat-page-history').append('<div class="sender"><p class="chat-sender">Jawaban sistem tidak hanya satu lho, terus tanyakan supaya jawabannya ganti!</p></div>');
      },1000);
    }
    // ./index.html
  })
