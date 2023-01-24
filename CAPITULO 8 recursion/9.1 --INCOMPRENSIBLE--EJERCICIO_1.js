

/* function cambiarBase(num){
    var numeroBinario = ''

    function base_10_a_base_2(num){

        if(num < 2){
            numeroBinario += num
            return;
        }else{

        }
    }
} */

function base10ToBinary(n) {
    var binaryString = "";

    function base10ToBinaryHelper(n) {
        if (n < 2) {
            binaryString += n;
            return;

        } else {   
            base10ToBinaryHelper(Math.floor(n / 2));
            base10ToBinaryHelper(n % 2);
            
        }
        
    }
    base10ToBinaryHelper(n);

    return binaryString;
}

console.log(base10ToBinary(25));     // 11101000    232