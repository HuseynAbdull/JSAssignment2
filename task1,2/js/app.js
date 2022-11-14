

let text;
if (!confirm("Sayta daxil olmaga eminsiz?!") == true) {
  text = "Siz Oku Secdiz!";
  document.body.style.display = 'none'
} else {
    alert('Xos Gelmisiz');
   
}

var age = prompt("Yasinizi qeyd edin?");

if (age >= 18)
{
    alert("Xos gelmisiniz");
}
else
{
    alert("Yasiniz cox da uygun deyil e");
}