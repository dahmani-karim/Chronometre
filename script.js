//Déclarations des variables utiles
var sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonction pour initialiser les variables au chargement de la page
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

//fonction de compteur pour incrémenter le timer
function update_chrono() {
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    //insertion des valeurs dans les spans
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;

}

//fonction du bouton start pour démarrer le chronomètre
function start(){
    //remise à zéro de l'interval t
    clearInterval(t);

    //cette ligne de code execute la function update_chrono() toutes les 1ms
    t = setInterval(update_chrono,100);
}

//fonction du bouton stop pour arrêter le chronomètre
function stop(){
    //supprime l'interval t créer précédemment
    clearInterval(t);
}

//fonction de remise à zero
function reset(){
    //supprime l'interval t créer précédemment
    clearInterval(t);

    //remise à zéro les valeurs des variables
    ms = 0, s = 0, mn = 0, h = 0;

    //insérer les nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}