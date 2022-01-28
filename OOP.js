import Biodata from "./module1";
class mahasiswa extends Biodata {
  constructor(nama, umur, jenis_kelamin, alamat) {
    super(nama, umur, jenis_kelamin, alamat);
  }
}

class dosen extends Biodata {
  constructor(nama, umur, jenis_kelamin, alamat) {
    super(nama, umur, jenis_kelamin, alamat);
  }
}

const bio_dosen1 = new dosen("Sugandi", 56, "Laki-Laki", "Karanganyar");
const bio_dosen2 = new dosen("Sri Rahayu", 34, "Perempuan", "Bogor");
const mahasiswa1 = new mahasiswa("Mahsusi", 21, "Perempuan", "Cimahi");
const mahasiswa2 = new mahasiswa("Tjahyo Kumolo", 19, "Laki-laki", "Pacitan");
const bio1 = document.getElementById("dosen1");
bio_dosen1.render(bio1);
const bio2 = document.getElementById("dosen2");
bio_dosen2.render(bio2);
const bio3 = document.getElementById("mahasiswa1");
mahasiswa1.render(bio3);
const bio4 = document.getElementById("mahasiswa2");
mahasiswa2.render(bio4);
