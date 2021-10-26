//buat variabel
let btn = document.getElementsByTagName('button')[0];
let h1 = document.getElementsByTagName('h1')[0];

//ketika tombol di klik
btn.addEventListener('click', function(){
    
    //buat sebuah object literal
let dataKu = {
    
    //buat sebuah properti
    namaDepan: "galih",
    namaBelakang: "anggoro prasetya",
    citaCita: "pemrogram",
    
    //buat method agar bisa menjalankan ataupun melakukan sesuatu pada object
    panggilDataku: function(){
        
        //buat return agar bisa mengembalikan sebuah nilai pada object
        return "halo nama saya " + this.namaDepan + " " + this.namaBelakang + " saya bercita cita ingin menjadi " + this.citaCita;
    }
};
    //tampilkan data object dataKu pada tag HTML h1
 h1.innerHTML = dataKu.panggilDataku();   
});
