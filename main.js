// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
// let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
// let mince, mineX, minceY, minceSirka, minceVyska;

let panacek = document.querySelector("#panacek");
let panacekX = 400; 
let panacekY = 400; 
// můžu určit pozici bez jednotek, protože jednotky si udávám ve funkci ve style.left/top

let panacekSirka = 64;
let panacekVyska = 70;
let mince = document.querySelector("#mince");
let minceX = 600;
let minceY = 600;
let minceSirka = 36;
let minceVyska = 36;
let score = 0;

let sirka = window.innerWidth;
let vyska = window.innerHeight;

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky

function priNacteniStranky() {
	panacek.style.left = "400px";
	panacek.style.top = "400px";
	
	novaMince();

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector

	// zjistíme šířku a výšku panáčka
	// a umístíme panáčka do středu okna
	// umístíme panáčka na startovní pozici
	// zjistíme šířku a výšku mince
	// a vygenerujeme první minci na náhodné pozici
}


// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
//function umistiPanacka() {
	// musíme to napsat :)
//}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice

function novaMince() {
	
	minceX = Math.floor(Math.random()*innerWidth);
	mince.style.left = minceX + "px";
	minceY = Math.floor(Math.random()*innerHeight);
	mince.style.top = minceY + "px";
				
	console.log("novaMince");

		//musím použít funkci Math.floor(Math.random()*šířka/výška okna prohlížeče+1), hodnoty randomu musí být max. velikosti plochy
		//zde musím použít score = jakmile se sebere mince, skore se zvětší o jedničku. Udělám si proměnnou pro skore. Do obsahu skore musím psát reálné skore
	}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
//function priStiskuKlavesy(udalost) {

	// šipka vlevo


	// šipka vpravo


	// šipka nahoru


	// šipka dolů


	// panáčka umistíme na nově vypočítanou pozici


	// otestujeme kolizi panáčka s mincí


//}

// fuknce pro otestování kolize panáčka s mincí

function krok(hop) {
	console.log(hop, "chuze");
		if (hop.key === "ArrowRight") {
			panacekX += 20; //+= je zkrácená varianta panacekX = panacekX + 20
			panacek.style.left = panacekX + "px"; //udává hodnotu nové pozice v pixelech
			console.log(panacek.style.left);
			panacek.src = "obrazky/panacek-vpravo.png"; //změna zdroje obrázku
		} else if (hop.key === "ArrowLeft") { 
			panacekX -= 20;
			panacek.style.left = panacekX + "px";
			console.log(panacek.style.left);
			panacek.src = "obrazky/panacek-vlevo.png";
		} else if (hop.key === "ArrowUp") {
			panacekY -=20;
			panacek.style.top = panacekY + "px";
			console.log(panacek.style.top);
			panacek.src = "obrazky/panacek-nahoru.png";
		} else if (hop.key === "ArrowDown") {
			panacekY +=20;
			panacek.style.top = panacekY + "px";
			console.log(panacek.style.top);
			panacek.src = "obrazky/panacek.png";
			
		} //v této funkci musím kontrolovat kolizi panáčka s mincí, v každém kroku if a else if a při každém kroku panáčka, musím volat funkci kolize = otestujKolizi() - je jedno, jestli je "otestuj kolizi" v každé podmínce nebo až pod nimi
		
		otestujKolizi();
	}

	function otestujKolizi() {
		console.log("otestujKolizi")
		if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) 
		{
			novaMince();
			document.querySelector("#score").textContent = score;
			score += 1;
			}
		}



		// panacek a mince se prekryvaji

// 	když se rovnají pozice panáčka a mince dojde ke kolizi, mince se přemístí na novou pozici = musím si zavolat funkci mince, kde mám random, zvuk a score