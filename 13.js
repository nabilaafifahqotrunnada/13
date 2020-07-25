//Percabangan If.. Else if.. Else..

//mengisi variabel dengan data numerik
let nilai = 80

/*else if akan dieksekusi bila kondisi if bernilai false,
dan akan dilimpahkan kepada kondisi else if yang lain,
bila tidak ada kondisi yang terpenuhi maka dieksekusi kondisi else*/
if(nilai > 80){
    console.log("Excellent");
}else if(nilai <=80 && nilai > 70){
    console.log("Good");
}else if(nilai <=70 && nilai > 60){
    console.log("Not Bad");
}else{
    console.log("So Bad");
}
//80 tereksekusi bernilai true pada else if pertama