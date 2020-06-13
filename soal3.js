let catAges = prompt('Masukkan umur kucing');
const ageConversion = (catAges) => {
    if (catAges == 1){
        return `Usia ${catAges} tahun kucing adalah 15 kali usia manusia`;
    }else if (catAges == 2){
        return `Usia ${catAges} tahun kucing adalah 24 kali usia manusia`;
    }else if (catAges >= 3){
        catAges2 = (catAges - 2) * 4 +24;
        return `Usia ${catAges} tahun kucing adalah ${catAges2} kali usia manusia`;
    }
    alert('Usia kucing tidak boleh nol dan harus berupa angka ')
    location.reload()
    return ''
};
document.write(ageConversion(catAges));
