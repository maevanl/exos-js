macalc();
function macalc(){

var premier = prompt("Choisis un premier nombre");
var deuxieme = prompt("Choisis un second nombre");
var ope = prompt("Choisis un opérateur (+, -, *, /)");
var total;

switch (ope){
 	case '+':
   total = parseInt(premier) + parseInt(deuxieme);
   break;
 	case '-':
   total = premier - deuxieme;
   break;
 	case '*':
   total = premier * deuxieme;
   break;
 	case '/':
   total = premier / deuxieme;
   break;
 	default:
   total = "Problème d'opérateur";
   break;
 }
  alert(total)
}
