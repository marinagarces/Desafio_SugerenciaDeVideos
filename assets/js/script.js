

const btnHeadingOne = document.getElementById("headingOne");
btnHeadingOne.addEventListener("click", function (){
    return reproducirMusica.playMultimedia()
})

const btnHeadingTwo = document.getElementById("headingTwo");
btnHeadingTwo.addEventListener("click", function (){
    return reproducirPeliculas.playMultimedia()
})

const btnHeadingThree = document.getElementById("headingThree");
btnHeadingThree.addEventListener("click", function (){
    return reproducirSeries.playMultimedia()
})


let runMusica = (function(){
  return reproducirMusica.playMultimedia()
})();

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;

    }

    playMultimedia() {
        const confIframe = document.getElementById(this.id)
        confIframe.setAttribute("src", this.url)
    }
    setInicio(time) {
        this._url += `?start=${time}`
    }
}

const reproducirMusica = new Reproductor("https://www.youtube.com/embed/5Ens7TZzgG0", "iframeMusica")
const reproducirPeliculas = new Reproductor("https://www.youtube.com/embed/3GJp6p_mgPo", "iframePeliculas")
const reproducirSeries = new Reproductor("https://www.youtube.com/embed/fKnjYdxlG38", "iframeSeries")

reproducirMusica.setInicio(26);
reproducirPeliculas.setInicio(25);
reproducirSeries.setInicio(90);
