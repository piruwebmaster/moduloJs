var MyLibrary = {};
(function() {

  var oculta1, oculta2;
 

  function unMetodoPrivado() {
    console.log("nunca podras llamar a este metodo desde fuera, es util cuando se utiliza un patron de creacion");
  }
 
    MyLibrary = {
    publicMethod: function () {
      return "este metodo puede ser visto";

    }, 
    anotherPublicMethod:function () {
      return "este otro metodo puede ser visto tambien";
    }
  }
  console.log("modulo autoejecutado al estilo JQuery");
  return MyLibrary;

}());