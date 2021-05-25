console.log("working")
function add() {
  let name = document.getElementById('name');
  let fLett = name.value.trim().slice(0, 1);
  let letters = /^[a-zA-Z]+$/

  if (fLett.match(letters)) {
    document.getElementById('successmsg').innerHTML += '<div id="addAlert"><div class="alert alert-warning alert-dismissible fade show" id="addAlert2" role="alert"><strong>' + name.value + '</strong> has been added.<button type="button" class="close" data-dismiss="alert" aria-label="Close">      <span aria-hidden="true">&times;</span>    </button>  </div></div>';

  } else {
    document.getElementById('successmsg').innerHTML += '<div id="addAlert"><div class="alert alert-danger alert-dismissible fade show" id="addAlert2" role="alert">Invalid TV Show name.<button type="button" class="close" data-dismiss="alert" aria-label="Close">      <span aria-hidden="true">&times;</span>    </button>  </div></div>';

  }

}
