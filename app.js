console.log('A számológép használatra kész.');

// Amiket ki kell számolnom:
// fuelToOffload:
    // Az az üzemanyagmennyiség, amit leeresztve a súlylimit alá kerülünk, de még haza tudunk jutni.
    // fuelToOffload = tankCapacity - requiredFuel
// tankCapacity: Az űrsikló üzemanyagtartályának űrtartalma.
    // requiredFuel: Minimális üzemanyag-mennyiség, amivel visszajutunk a Földre.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

// 1) Kérdezz rá a „totalDistanceToTravel” értékére, és mentsd el a választ egy változóba.
// 2) Kérdezz rá az „averageLitersOverHundred” értékére, és mentsd el a választ egy változóba.
// 3) Kérdezz rá a „tankCapacity” értékére, és mentsd el a választ egy változóba.
// 4) Végezd el a számítást (hívd meg a „calculateFuelToOffload” függvényt).


// 4)
function calculateFuelToOffload() {
  // 1)
  var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
  // 2)
  var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
  // 3)
  var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!'); 


  // Számolja ki a szükséges üzemanyag-mennyiséget.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);

  // Számolja ki a lecsapolandó üzemanyagot.
  var fuelToOffload = tankCapacity - requiredFuel;

  
  alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();
// 5) Írd ki az eredményt a felhasználónak.

