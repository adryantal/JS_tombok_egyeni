
function ID(nev) {
    return document.getElementById(nev);
}

var tomb = [];
hiba = false;



function feltolt() {
    var kiir = ID("kiir");
    kiir.innerHTML = "";
    kiir.style.color = "purple";
    //var button = ID("gomb");
    var also = ID("also");
    var felso = ID("felso");
    var also_ertek = Number(also.value);
    var felso_ertek = Number(felso.value);
    var darab = ID("db");
    var db = Number(darab.value);
    tomb = [];


    if (felso_ertek < also_ertek) {  //ha véletlenül valaki felcserélné az alsó- ill. felső határt
        var seged;
        seged = felso_ertek;
        felso_ertek = also_ertek;
        also_ertek = seged;
    }

    if (isNaN(felso_ertek) || isNaN(also_ertek) || isNaN(db) || db < 0 || felso_ertek < 0 || also_ertek < 0 || (felso_ertek - also_ertek + 1 < db) || (db === 0) || (also_ertek === felso_ertek && db !== 1)) {
        hiba = true;


    } else {

        kiir.innerHTML = "Az intervallum és a számok darabszáma: ";
        kiir.innerHTML += "Intervallum: [" + also_ertek + ";" + felso_ertek + "], darabszám: " + db;

        for (var i = 0; i < db; i++) {
            var x = 0;
            x = Math.floor(Math.random() * (felso_ertek - also_ertek + 1)) + also_ertek; /*véletlen számok alsó határ és felső határ között, egész; Math.floor() -> lefele kerekít*/
            if (!tomb.includes(x))   /*egy szám ne forduljon elő többször, künönböző elemekből álljon a tömb*/
                tomb.push(x);
        }
        var tombelemei = ID("tombelemei");
        tombelemei.innerHTML = "A tömb elemei:<br>" + tomb.join(", ");
    }
}



function oldalformazas() {
    document.body.style.background = "lightblue";
    ID("focim").classList.add("szovegformazas1");
    ID("alcim").classList.add("szovegformazas1");
    ID("l_also").classList.add("szovegformazas2");
    ID("l_felso").classList.add("szovegformazas2");
    ID("l_db").classList.add("szovegformazas2");
    ID("kiir").classList.add("szovegformazas2");
    ID("tombelemei").classList.add("szovegformazas2");
    ID("osszeg").classList.add("szovegformazas2");
    ID("paros_elemek").classList.add("szovegformazas2");
    ID("forditott_sorrend").classList.add("szovegformazas2");
    ID("ottel_oszthatoak").classList.add("szovegformazas2");
    ID("legnagyobb").classList.add("szovegformazas2");
    ID("negyzetszam_e").classList.add("szovegformazas2");
    ID("negyz_osszeg").classList.add("szovegformazas2");
    ID("primek").classList.add("szovegformazas2");
    ID("hany_prim").classList.add("szovegformazas2");
    ID("kettoharom").classList.add("szovegformazas2");
}



function osszegzes() {
    /*tömb elemeinek összege*/
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    var osszegTxt = ID("osszeg");
    osszegTxt.innerHTML = "1. feladat: A tömb elemeinek összege:<br>" + osszeg;
}

function parosak() {
    var paroselemek = [];
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0 && !paroselemek.includes(tomb[i])) {
            paroselemek.push(tomb[i]);
        }
    }
    var paros_elemek = ID("paros_elemek");
    paros_elemek.innerHTML = "2. feladat: A páros elemek:<br>" + paroselemek.join(", ");

}

function forditva() {
    var forditott = ID("forditott_sorrend");
    forditott.innerHTML = "3. feladat: A tömb elemei fordított sorrendben:<br>";
    for (var i = tomb.length - 1; i > -1; i--) {
        if (i===0){
            forditott.innerHTML += tomb[i];
        }else{
        forditott.innerHTML += tomb[i] + ", ";
    }
    }
}


function ottel_o() {
    var ennyi = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            ennyi += 1;
        }
    }
    var ottel_o_sz = ID("ottel_oszthatoak");
    ottel_o_sz.innerHTML = "4. feladat: Az 5-tel osztható elemek száma:<br> " + ennyi;
}

function legnagyobb() {
    var max = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] > max) {
            max = tomb[i];
        }
    }

    var maximum = ID("legnagyobb");
    maximum.innerHTML = "5. feladat: A legnagyobb szám:<br> " + max;

}


function kh() {
    var kettoh = [];
    var van = false;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0 && tomb[i] % 3 === 0) {
            van = true;
            if (!kettoh.includes(tomb[i]))
                kettoh.push(tomb[i]);
        }
    }
    var keha = ID("kettoharom");
    if (van) {
        keha.innerHTML = "6. feladat: 2-vel és 3-mal is osztható számok:<br> " + kettoh.join(", ");
    } else {
        keha.innerHTML = "6. feladat: 2-vel és 3-mal is osztható számok:<br> Nincs ilyen szám!";
    }
}


function nsz() {
    var n = [];
    var van = false;
    for (var i = 0; i < tomb.length; i++) {
        seged = Math.sqrt(tomb[i]) % 1;
        if (seged === 0) {
            van = true;
            if (!n.includes(tomb[i]))
                n.push(tomb[i]);
        }
    }
    var negyzetsz = ID("negyzetszam_e");
    var n_osszeg = ID("negyz_osszeg");
    if (van) {
        negyzetsz.innerHTML = "7. feladat: Négyzetszámok:<br> " + n.join(", ");
        var n_ossz = 0;
        for (var j = 0; j < n.length; j++) {
            n_ossz += n[j];
        }
        n_osszeg.innerHTML = "8. feladat: Négyzetszámok összege:<br>" + n_ossz;

    } else {
        negyzetsz.innerHTML = "7. feladat: Négyzetszámok:<br> Nincs ilyen szám!";
        n_osszeg.innerHTML = "8. feladat: Négyzetszámok összege:<br> Négyzetszám hiányában összeg sincs!";
    }
}



function prim() {
    var p = [];
    var primszam = true;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] !== 0 && tomb[i] !== 1)
        {
            for (var j = 2; j <= Math.sqrt(tomb[i]); j++) {

                if (tomb[i] % j === 0) {
                    primszam = false;
                    break;
                }
            }
        } else {
            primszam = false;
        }
        if (primszam) {
            if (!p.includes(tomb[i]))
                p.push(tomb[i]);
        }
        primszam = true;
    }
    var pr = ID("primek");
    var h_pr = ID("hany_prim");
    if (p.length !== 0) {
        pr.innerHTML = "9. feladat: Prímszámok:<br> " + p.join(", ");
        var p_sz = 0;
        for (var k = 0; k < p.length; k++) {
            p_sz += 1;
        }
        h_pr.innerHTML = "10. feladat: Prímszámok száma:<br>" + p_sz;

    } else {
        pr.innerHTML = "9. feladat: Prímszámok:<br> Nincs ilyen szám!";
        h_pr.innerHTML = "10. feladat: Prímszámok száma:<br> Egyetlen prímszám sincs!";
    }
}



function dolgozz() {

    feltolt();
    if (hiba) {
        var kiir = ID("kiir");
        kiir.style.color = "violet";
        kiir.innerHTML = "Hiba! Lehetséges okok: darabszám = 0 | darabszám < (felső határ - alsó határ + 1) | negatív szám | nem numerikus adat | stb.";
    } else {
        osszegzes();
        parosak();
        forditva();
        ottel_o();
        legnagyobb();
        kh();
        nsz();
        prim();
    }
    hiba = false;

}



function init() {
    oldalformazas();
    var gomb = ID("gomb");
    gomb.addEventListener("click", dolgozz, false);
}


window.addEventListener("load", init);
