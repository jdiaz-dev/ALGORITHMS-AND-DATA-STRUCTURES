function memory(){
    return '';
}
var foo = {
    bar1: memory(), // 5kb
    bar2: memory() // 5kb
}

//podemos creer que lo funcion "clickEvent()" esta utilizando 5kb ebido a que solo se refiere a bar1 del objeto foo
//pero la verdad es que esta utilizando 10kb de memoria debido a que esta cargando todo el objeto dentro de la funcion para acceder a "bar1"
function clickEvent(){
    alert(foo.bar1[0]);
}
