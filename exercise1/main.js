// deyishkenleri daxil et
var counter=0, horizantal, vertical;
// id'si object olan elementi sech
 var obj=document.querySelector('#object');
// mouse button'un uzerine geldikde button yerini random olaraq deyishecek
obj.onmouseover=function(){
    // buttoun'un uzerine click ede bilmedikde saygac bir vahid artsin
    counter++;
// button x ve y oxu uzre random yerini deyishsin
    horizantal=parseInt(Math.random()*1000);
    vertical=parseInt(Math.random()*800);
    object.style.left=horizantal+"px";
    object.style.top=vertical+"px";
}
// onclick etdikde alert ile  nechenci defede qalib geldiyinizi ekrana chixarsin
obj.onclick=function(){

    alert(counter);
    counter=0;
}