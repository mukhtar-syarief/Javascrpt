class Biodata {
    constructor(nama, umur, jenis_kelamin, alamat) {
      this.nama = nama;
      this.umur = umur;
      this.jenis_kelamin = jenis_kelamin;
      this.alamat = alamat;
    }
  
    render(element) {
      let open = "<tbody><tr>";
      let close = "</tbody></tr>";
      let biodata = `<br>Nama : ${this.nama} <br> Umur : ${this.umur} <br> Jenis Kelamin : ${this.jenis_kelamin} <br> Alamat : ${this.alamat}`;
      element.innerHTML = biodata;
    }
  }
  
  export default Biodata;
  