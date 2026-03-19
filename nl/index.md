---
title: "ECG Recorder-app voor Polar H10 (iOS)"
title_tagline: "Exporteer ECG-, HR-, RR- en HRV-data"
subtitle: "Neem ECG-, HR-, RR- en HRV-data op en exporteer die vanaf de Polar H10 Bluetooth-hartslagmeter, en bekijk live grafieken op iPhone en iPad."
description: "Neem ECG op met Polar H10. Exporteer ECG-, hartslag- (HR), RR-interval- en HRV-data als CSV-, EDF-, PDF- en legacy tekstbestanden, en bekijk live grafieken op iPhone en iPad."
screenshots_string: "Schermafbeeldingen"
screenshots_intro: "Twee belangrijke momenten van de app: het hoofdscherm voor opnames en de live ECG-grafiek."
lang: nl
permalink: /nl/
---

<section class="landing-intro">
  <p class="eyebrow">Gemaakt voor Polar H10-gebruikers die hun data op iPhone en iPad willen gebruiken</p>
  <p class="lead">Neem ECG, hartslag, RR-intervallen en HRV op met de Polar H10. Bekijk live grafieken in realtime en exporteer sessies als CSV, EDF, PDF en legacy tekstbestanden.</p>

  <div class="value-grid">
    <div class="value-card">
      <h3>Leg volledige sessies vast</h3>
      <p>Neem ECG-, HR-, RR- en HRV-data van de Polar H10 op met tijdstempels en verstreken tijd.</p>
    </div>
    <div class="value-card">
      <h3>Bekijk alles live</h3>
      <p>Volg live ECG-, HR-, RR- en HRV-grafieken direct op iPhone en iPad tijdens het opnemen.</p>
    </div>
    <div class="value-card">
      <h3>Exporteer in bruikbare formaten</h3>
      <p>Open opnames in Numbers, Excel of EDFbrowser, of exporteer een PDF-snapshot van de laatste 30 seconden van de live ECG-weergave.</p>
    </div>
  </div>

  <div class="trust-strip" aria-label="Belangrijkste functies">
    <span>130 Hz ECG-opname</span>
    <span>CSV-, EDF- en PDF-export</span>
    <span>Apple Health voor HR, RR en HRV</span>
    <span>Live grafieken op iPhone en iPad</span>
  </div>
</section>

{% include screenshots.html %}

## Waarom mensen deze app gebruiken
- ECG opnemen van de Polar H10 zonder Mac of PC.
- Data exporteren in formaten die handig zijn voor analyse, delen of archiveren.
- Live trends van ECG, HR, RR en HRV bekijken tijdens een sessie.
- Screenshots opslaan in Foto’s en indien nodig een PDF van de ECG-grafiek maken.

## Hoe het werkt
Verbind de Polar H10 via Bluetooth, start een opname en bekijk de binnenkomende data live op iPhone of iPad. De app registreert ECG-, hartslag- (HR) en R-R-intervaldata (RR) en kan HRV berekenen op basis van geaccepteerde RR-intervallen. **De minimale H10-firmware voor ECG is 3.0.35.**

Als de gebruiker een actief abonnement "Enable premium features" heeft (in-app aankoop), worden opnames opgeslagen in de map van ECG Recorder in de app "Bestanden", met een bestandsnaam op basis van de starttijd van de opname. ECG wordt geëxporteerd als `.csv`, `.edf` en een legacy ASCII-tekstbestand. HR en RR worden geëxporteerd als `.csv` plus legacy ASCII-tekstbestanden. HRV wordt geëxporteerd als `.csv`. De CSV-bestanden bevatten lokale tijdstempels en verstreken seconden, waardoor het in de meeste gevallen niet nodig is om handmatig een aparte tijdkolom te maken. Premiumfuncties omvatten ook live grafieken van ECG, HR, RR en HRV, plus PDF-export van de live ECG-weergave.

## Export en analyse
- `ECG`: bemonsterd op ongeveer 130 Hz in microvolt (`uV`), geëxporteerd als `.csv`, `.edf` en legacy ASCII-tekst.
- `HR`: ongeveer één waarde per seconde, geëxporteerd als `.csv` en legacy ASCII-tekst.
- `RR`: slag-tot-slag-timing in milliseconden, geëxporteerd als `.csv` en legacy ASCII-tekst.
- `HRV`: berekend uit geaccepteerde RR-intervallen en geëxporteerd als `.csv` met RMSSD en SDNN.

De ECG CSV-export bevat tijdstempels en verstreken seconden. ECG-opnames kunnen ook als `.edf`-bestanden worden geopend in [EDFbrowser](https://www.teuniz.net/edfbrowser). Daarnaast kan de live ECG-grafiek worden geëxporteerd als een PDF-snapshot op een A4-ECG-raster (25 mm/s, 10 mm/mV), die de laatste 30 seconden van het ECG toont in plaats van een lange export van een volledige sessie. Er zijn ook [voorbeeld-ECG-data](/ecg-examples/examples.html) en [demo-video’s](/demo-video/videos.html) beschikbaar voor import in Apple Numbers en EDFbrowser.

## App-ondersteuning en contact
Stuur een e-mail naar **ecg-recorder [ a t ] cmdline [ d o t ] net** voor alle vragen en opmerkingen. Of open een issue op [GitHub](https://github.com/poml88/ecg-recorder-ios).

## Opmerking over Apple Health-ondersteuning
Apple staat niet toe dat apps van derden ECG-golfvormen naar Apple Health schrijven, behalve ECG’s die met Apple Watch zijn opgenomen. Deze app kan echter wel drie andere datatypen naar Apple Health exporteren wanneer dit in de instellingen is ingeschakeld: hartslag, slag-tot-slag-timing en HRV (SDNN).

## Demo-video’s
Bekijk de demo-video’s en voorbeelddata voor het openen van opnames in Apple Numbers of EDFbrowser.
- [Demo: txt ascii ECG-databestand openen in Numbers op iPhone](https://youtu.be/N58LFXaAeIQ)
- [Demo: txt-bestand converteren met EDFbrowser](https://youtu.be/dLscFwdWxSE)

### ECG-DATA
Volgens de specificaties wordt ECG-data verzameld met een snelheid van 130 Hz (mijn apparaat werkt op 130.061 Hz) in microvolt (µV). Dat betekent dat er elke 7,692 milliseconde (ms) één waarde is. Voor een opname van 10 minuten zijn dat ongeveer 78000 waarden. Bij het importeren van de data in bijvoorbeeld Microsoft Excel of Apple Numbers kun je alle ECG-waarden door 1000 delen om millivolt (mV) te krijgen. De ECG CSV-export bevat al de kolommen `timestamp` en `elapsed_seconds`.
De knop "Set marker" in de live ECG-grafiek voegt een waarde van 2000 µV toe aan de data. Die waarde is eenvoudig zichtbaar in een grafiek of terug te vinden door de data te doorzoeken.

ECG-opnames worden ook direct geëxporteerd als `.edf`-bestanden, die kunnen worden geopend in de open source software [EDFbrowser](https://www.teuniz.net/edfbrowser). Daarnaast kan de live ECG-grafiek worden geëxporteerd als een PDF op een A4-raster in ECG-stijl (25 mm/s, 10 mm/mV), wat handig is voor het bekijken, delen of afdrukken van de laatste 30 seconden ECG. Er zijn ook [voorbeeld-ECG-data](/ecg-examples/examples.html) en [demo-video’s](/demo-video/videos.html) beschikbaar voor import in Apple Numbers en EDFbrowser.

### HR-DATA
Er wordt ongeveer één HR-waarde (gemiddelde slagen per minuut, bpm) per seconde opgenomen. HR CSV-exporten bevatten lokale tijdstempels en verstreken seconden.

### RR-DATA
Het RR-interval is de tijd tussen twee opeenvolgende R-toppen van het QRS-signaal op het elektrocardiogram (het omgekeerde hiervan is de HR). RR-intervallen worden vastgelegd in ms. RR CSV-exporten bevatten lokale tijdstempels en verstreken seconden.

### HRV-DATA
HRV wordt berekend uit geaccepteerde RR-intervallen en geëxporteerd als RMSSD en SDNN in milliseconden. Om duidelijke artefacten te verminderen, worden RR-intervallen buiten 300-2000 ms genegeerd, worden intervallen die meer dan 200 ms verschillen van het vorige geaccepteerde interval afgewezen, en zodra er een korte basislijn beschikbaar is, moeten intervallen binnen 20% van de recente mediaan blijven. HRV CSV-exporten bevatten lokale tijdstempels, verstreken seconden, vensterlengte, RR-aantal, RMSSD en SDNN.

## GEBRUIKSVOORWAARDEN
Let op: deze app is alleen bedoeld voor informatieve doeleinden. Het gebruik van de app en website is niet bedoeld als vervanging van professioneel medisch advies en je moet bij medische aandoeningen of vragen altijd tijdig contact opnemen met je eigen arts of zorgverlener. DE APP EN DE WEBSITE GEVEN GEEN MEDISCH ADVIES, EN NIETS IN DE INHOUD IS BEDOELD ALS PROFESSIONEEL ADVIES VOOR MEDISCHE DIAGNOSE OF BEHANDELING.

## Waarom heb ik deze app gemaakt?
Ik ben een gepassioneerde hardloper en was op zoek naar een hartslagmeter voor sporttoepassingen. Ik kwam de Polar H10 tegen en was geïntrigeerd door de mogelijkheid om echte ECG-data van dit apparaat te verkrijgen. Tot mijn verrassing was er eind 2019 geen iOS-app in de App Store die het opnemen of weergeven van die data aanbood. Er was één uitzondering, maar die was vrij duur en het was onduidelijk wat precies werd aangeboden. Omdat ik geen andere opties zag en Polar een zeer goede SDK voor de H10 levert, besloot ik mijn eigen app te ontwikkelen.

## Waarom een app met abonnementen?
Al snel werd duidelijk dat de ontwikkeling van deze app veel tijd zou kosten en uiteindelijk ook geld. Ik hoop dat de kleine vergoeding die wordt gevraagd een beetje compenseert voor de geïnvesteerde tijd en kosten.\
De app is gratis te downloaden om een eerste indruk te krijgen en verbinding te maken met een apparaat. Het is mogelijk om een paar seconden van de live grafieken te zien. Om de premiumfuncties te activeren, kun je een van de beschikbare in-app aankopen doen. Elk abonnement bevat een gratis proefperiode van één week, zodat alle functies kosteloos kunnen worden uitgeprobeerd. Ik vond een model met abonnementen van verschillende duur en een gratis proefweek het eerlijkst. Het is ook mogelijk om een eenmalige betaling te doen zonder terugkerend abonnement.

Deze app gebruikt de uitstekende Purchase- en PolarBle-SDK’s.

> **Opmerking:** De Duitse versies van het [Impressum]({{ site.de_impressum_path | relative_url }}) en het [privacybeleid]({{ site.de_privacy_path | relative_url }}) zijn de juridisch bindende versies.
