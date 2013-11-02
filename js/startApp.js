$( "img" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
    alert("whaddaup");
  }
);