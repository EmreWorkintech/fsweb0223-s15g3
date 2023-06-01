function Human (isim,yas) {
    this.isim = isim;
    this.yas = yas;
    this.enerji = 50;
    this.mide = 50;
    this.ye = (miktar)=>{
        this.mide = this.mide+miktar>100 ? 100 : this.mide + miktar;
        this.enerji += miktar/2;
    }
    this.hareket = (type, dakika)=> {
        if(type === "Koşu") {
            this.enerji -= dakika*2;
        } else if(type == "Yürüme") {
            this.enerji -= dakika/2;
        } else if(type == "Spor") {
            this.enerji -= dakika*1.5;
        }
        this.enerji = this.enerji < 0 ? 0 : this.enerji;
        this.mide = this.mide - dakika < 0 ? 0: this.mide - dakika;
    }
    this.uyu = (saat)=>{
        let newEnerji = this.enerji+saat*25;
        this.enerji = newEnerji > 100 ? 100: newEnerji;
        this.mide = (this.mide - saat*10) < 0 ? 0 : (this.mide - saat*10);
    }
}

module.exports = Human;