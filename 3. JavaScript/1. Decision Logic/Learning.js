// let isTrue= 5==5;
// console.log(isTrue);

// let isFalse= 5==='5';
// console.log(isFalse);

// let isFalse2= 10!=='10';
// console.log(isFalse2);

// // prompt
// console.warn('warn');
// console.error('error');
// alert('Completed !');
// prompt('input your number');

// // If statement
// const age = 20
// let Number = Math.random();
// const Day = prompt('Isikan Hari !').toLowerCase();

// if(age >= 20){
//     console.log('Silahkan Masuk');
// }
// else{
//     console.log('Anda Belum Bisa Masuk');
// }

// console.log('sebelum pembanding');
// if (1 + 1 === 3){
//     console.log('ini true');
// }
// console.log('setelah pembanding');

// console.log('angka anda adalah : ', Number);
// if (Number >= 0.5){
//     console.log('anda menang');
// }
// else{
//     console.log('anda kalah');
// }

// if(Day === 'senin'){
//     console.log('Hari ini hari senin');
// }
// else if (Day === 'selasa'){
//     console.log('Hari ini hari selasa');
// }
// else {
//     console.log('Hari ini bukan hari senin dan selasa');
// }

// // Nested if (password validation example)
// const password = prompt('Buat Password');

// // password harus sepanjang 8 karakter
// if (password.length >= 6){
//     if(password.indexOf(' ') === -1) {
//         console.log('Valid');
//     } 
//     else {
//         console.log('Password tidak boleh ada spasi');
//     }
// }
// else{
//     console.log('Password kurang dari 6 karakter')
// }

// Using Logical Operator
// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('Valid');
// } else{
//     console.log('password tidak memenuhi syarat')
// }

// // role checker using ||
// const role = prompt('masukkan role akun').toLocaleLowerCase();
// if (role === 'admin' || role === 'spv'){
//     console.log('akses diterima');
// }else{
//     console.log('akses ditolak');
// 

// switch case
const day = prompt('Masukkan hari :').toLocaleLowerCase();
switch (day){
    case 'senin':
        console.log('Hari ini hari senin');
        break;
    case 'selasa':
        console.log('Hari ini hari selasa');
        break;
    case 'rabu':
        console.log('Hari ini hari rabu');
        break;
    case 'kamis':
        console.log('Hari ini hari kamis');
        break;
    case 'jumat':
        console.log('Hari ini hari jumat');
        break;
    case 'sabtu':
        console.log('Hari ini hari sabtu');
        break;
    case 'minggu':
        console.log('Hari ini hari minggu');
        break;
    default:
        console.log('Hari tidak ditemukan');
}