// if else
let nilai = 75;

if (nilai >= 70) {
  console.log("Selamat! Anda lulus.");
} else {
  console.log("Maaf, Anda tidak lulus. Silakan coba lagi.");
}

// nested if
let skor = 95;

if (skor >= 70) {
  console.log("Anda lulus dengan nilai minimal.");

  if (skor >= 90) {
    console.log("Anda mendapatkan nilai A.");
  } else if (skor >= 80) {
    console.log("Anda mendapatkan nilai B.");
  } else {
    console.log("Anda mendapatkan nilai C.");
  }

} else {
  console.log("Maaf, Anda tidak lulus. Silakan coba lagi.");
}

// switch case
let hari = "Jumat";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah awal pekan.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari kedua dalam seminggu.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari pertengahan minggu.");
    break;
  case "Kamis":
    console.log("Hari ini hampir akhir pekan.");
    break;
  case "Jumat":
    console.log("Hari ini adalah hari terakhir dalam seminggu kerja.");
    break;
  default:
    console.log("Ini bukan hari dalam seminggu yang valid.");
}

// for statement
for (let i = 0; i < 10; i++) {
  console.log("ini tulisan ke-" + (i + 1));
}

// while
let counter = 4;

while (counter < 5) {
  console.log("tulisan ke-" + (counter + 1));
  counter++;
}

// do while
let belajar = 7;

do {
  console.log("pembelajaran ke-" + (belajar + 1));
  belajar++;
} while (belajar < 5);

// function
function panggil(nama) {
  console.log("Halo, " + nama + "!");
}

panggil("John");
panggil("Jane");