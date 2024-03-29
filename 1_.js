function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setitem(player1_name)
    localStorage.setitem(player2_name)

      window.location = "2_html";
  }
  