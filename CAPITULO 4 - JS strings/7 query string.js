

//MI EJEMPLO
function extraerInformacionDeLaURL(url){

  const expresionRegular = new RegExp(/\?[\w]+=([\w$|\d$]*)&[\w]+=([\w$|\d$]*)/,'g')
  const resultado = expresionRegular.exec(url)
  return resultado? resultado[1]:null

}
console.log(extraerInformacionDeLaURL('http://another-example.com?example=26&data=1996'))


//EJEMPLO WEB PARA EXTRAER INFORMACION DE LA URL
const getQueryParams = ( params, url ) => {
  
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp( '[?&]' + params + '=([^$#]*)', 'i' );
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };
  
 console.log( getQueryParams('data','http://another-example.com?example=something&data=13'));




//EJEMPLO LIBRO
var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv' ;
var queryString = {};

uri.replace(
  new RegExp ("([^?=&]+)(=([^&]*))?" , "g" ),
  function ($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id' ]); // ID: 2140
console.log('Name: ' + queryString['product_name' ]); // Name: undefined
console.log('Category: ' + queryString['category' ]); // Category: 4
queryString
 