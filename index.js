alert("Selamat datang dalam game tebak angka.!\nAnda akan bermain dengan menebak angka 1-3 dimana permainan terdiri dari 5 ronde. Pemain dengan skor paling tinggi adalah yang menang.")
let pemain = prompt("Masukkan Jumlah Pemain = ")
let ronde = prompt ("Masukkan Jumlah Ronde = ")
let poin = 0

function main () {

for (let i=1; i<=ronde; i++){
let answer = Math.floor(Math.random()*pemain+1);
alert("Round ke-"+i)

for (let j=1;j<=pemain;j++){
    let jawaban = prompt("Player " +j+ " Masukkan Tebakan Kamu = ")     
    if (jawaban==answer){
        alert("Selamat Jawaban anda Benar")

    } else {
        alert("Jawaban Anda Salah")
        poin=poin;
    }
}
}
}

console.log(main());

const again=confirm("Apakah ingin bermain lagi.?")
if(again==true){
main();
} else{
alert("Terimakasih telah bermain")
}
