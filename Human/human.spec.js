/*
Brief: gerçek hayat similasyonu oyunu

SPEC:

1- yeni karakter oluşturduğumuzda isim ve yaş bilgisini verilecek
2- yeni karakterin bazı özellikleri olmalı:
    -enerjisi: başlangıç enerji: 50
    -mideKapasitesi: başlangıç 50
3- bazı yapabilecekleri
    -yemek yer
    -hareket eder
        -koşar
        -spor yapar
        -yürür
    - uyur

4- sınırları olabilir
    * enerjisi 100 üzerine çıkamaz, 0 altına inemez
    * midesi 100 üzerine çıkamaz, 0 altına inemez

Rules:
1- her yediği yemek enerjisini yediğinin yarısı kadar artırsın:
    Örn: 50 birim yedi 25 birtim enerji artacak
2- koştuğu her 10 dakika için enerjisi x2 azalsın
3- yürüdüğünde her 10 dakika için enerjisi 5 birim azalsın. midesi 10 birim azalsın.
4- spor için her 10 dakikada 15 birim harcatsın.
5- uyduğunda her saat için enerjisi 25 birim artsın.


v2:
uyuyunca enerjisi artar, acıkır

*/

const Human = require('./human');

let cem;
beforeEach(()=>{
    cem = new Human("Cem", 40)
})


describe('Yeni bir insan karakteri', ()=>{

    test('[1] verilen değerler ile başarı ile oluşuyor', ()=>{
        expect(cem).toHaveProperty('isim', "Cem");
        expect(cem).toHaveProperty('yas', 40);
    })

    test('[2] default değerler ile doğru  oluşuyor', ()=>{
        expect(cem).toHaveProperty('enerji', 50);
        expect(cem).toHaveProperty('mide', 50);
    })

})

describe('İnsan Karakterinin yapabilecekleri', ()=>{

    test('[3] yemek yiyebiliyor', ()=>{
        cem.ye(50);
        expect(cem.mide).toBe(100);
    })

    test('[4] yemek yeyince enerjisi artar', ()=>{
        cem.ye(50);
        expect(cem.enerji).toBe(75);
    })

    test('[5] koşabiliyor', ()=>{
        cem.hareket("Koşu", 20);
        expect(cem.enerji).toBe(10);
    })

    test('[6] yüyebiliyor', ()=>{
        cem.hareket("Yürüme", 30);
        expect(cem.enerji).toBe(35);
    })

    test('[7] spor yapabiliyor', ()=>{
        cem.hareket("Spor", 30);
        expect(cem.enerji).toBe(5);
    })

})

describe('İnsan Karakterinin sınırları', ()=>{

    test('[8] midesi 100\'ü geçemez', ()=>{
        cem.ye(100);
        expect(cem.mide).toBe(100);
    })

    test('[9] enerjisi 100\'ü geçemez', ()=>{
        cem.uyu(3);
        expect(cem.enerji).toBe(100);
    })

    test('[10] midesi 0 altında olamaz', ()=>{
        cem.uyu(2);
        cem.hareket("Yürüme", 60);
        expect(cem.mide).toBe(0);
    })

    test('[11] enerjisi 0\'ın altında olmaz', ()=>{
        cem.hareket("Koşu", 30);
        expect(cem.enerji).toBe(0);
    })

    test('[12] uyuyunca acıkır', ()=>{
        cem.uyu(4);
        expect(cem.mide).toBe(10);
    })

    test('[12] uyuyunca acıkır ama mide 0 altına inmez', ()=>{
        cem.uyu(10);
        expect(cem.mide).toBe(0);
    })

})


