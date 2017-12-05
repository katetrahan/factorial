
$(document).ready(function() {
  $("#factorialInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    console.log(number);
    if (number < 0){
      $(".output").text("-1");
    } else if (number === 0) {
      $(".output").text("1");
    }
    var tmp = number;
      while (number-- > 2) {
        tmp *= number;
      }
      $(".output").text(tmp);
  });
});
