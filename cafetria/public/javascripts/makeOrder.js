
var selectedProducts =[];
 $(function () {

   $(".product").click(function(){
      $("#selected-products").append($(this).clone());

      var u = {
          img :this.children[0].attributes["src"].value,
          id:this.children[1].innerText,
          name:this.children[2].innerText,
          price:this.children[3].innerText,
      }
      selectedProducts.push(u);
      var s = "<div class='order-item'>"+
        "<p class=''>"+u.name+"</p>"+
        "<input class='' name='"+u.id+"' type='number' min='1' max='40' onchange='total()' value='1'/>"+
        "<p class=''>EGP "+u.price+"</p>"+
        "<button class='btn-cancel' type='button' name='button'>X</button>"+
        "</div>";
       $("#order-items").append(s);
       total();
   });


   $("#order-items").click(function(event){
     if(event.target.name=="button"){
        event.target.parentNode.remove();
        total();
     }
   });

   $("#submit-order").click(function(event){
      alert("submite ");
      //event.preventDefault();
      //send request;

   });



});

var total=function(){
      var total = 0;
    $(".order-item").each(function(e,product){

          var y = new Number($(product.children[1]).val());
          var x = new Number(product.children[2].innerText.split(" ")[1]);
          if(y < 0) y = y*-1;
          total +=y*x;
          $("#total-order").text("EGP "+total);

    })
}
