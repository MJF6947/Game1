let RN = Math.round(Math.random()*10);
let F =0;

function A() {
    F++;
    Fer.innerHTML = "Versuche: "+ F;
    

    if(RN == Eingabe.value) {
        T.innerHTML ="Das ist richtig"
    }
    if(RN < Eingabe.value) {
        T.innerHTML ="Das ist zu Hoch"
    }
    if(RN > Eingabe.value) {
        T.innerHTML ="Das ist zu Tiff"
    }
}