let input = prompt("add amount of order");
let order = parseInt(input);
let total = order*5;
let endirimMiqdari=0;


if (isNaN(order)) {
    alert("Add a number");
}
    else if (order>0 && order<=20) {
        endirimMiqdari=5;
   
    }
    else if(order>20 && order<=50){
        endirimMiqdari=10;
    }
    else if(order>50 && order<=100){
        endirimMiqdari=15;
    }
    else if(100<order){
        endirimMiqdari=25;
    }
    else{
        alert("Add number more than 0");
    }
    let endirim=(total*endirimMiqdari)/100;
let payment=total-endirim;
alert(
    `Sipariş Adedi: ${order}\n`+
    `Birim Fiyat: ${5}\n`+
    `Toplam Tutar: ${total}\n`+
    `Toplam Tutar: ${endirimMiqdari}%\n`+
    `İndirim Tutarı: ${endirim}\n`+
    `Ödenecek Tutar: ${payment}\n`
);