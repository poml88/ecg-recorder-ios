---
title: "EKG Recorder App für Polar H10 (iOS)"
title_tagline: "Export von EKG-, HR-, RR- und HRV-Daten"
subtitle: "EKG-, HR-, RR- und HRV-Daten mit dem Polar H10 Bluetooth-Herzfrequenzsensor aufzeichnen und exportieren und Live-Diagramme auf iPhone und iPad anzeigen."
description: "EKG mit dem Polar H10 aufzeichnen. EKG-, Herzfrequenz- (HR)-, RR-Intervall- und HRV-Daten als CSV-, EDF-, PDF- und Legacy-Textdateien exportieren und Live-Diagramme auf iPhone und iPad anzeigen."
screenshots_string: "Bildschirmfotos"
screenshots_intro: "Zwei wichtige Ansichten der App: der Hauptbildschirm für die Aufzeichnung und das Live-EKG-Diagramm."
lang: de
permalink: /de/
---

<section class="landing-intro">
  <p class="eyebrow">Für Polar-H10-Nutzer, die ihre Daten auf iPhone und iPad verwenden möchten</p>
  <p class="lead">Zeichnen Sie EKG, Herzfrequenz, RR-Intervalle und HRV mit dem Polar H10 auf. Verfolgen Sie die Daten in Live-Diagrammen und exportieren Sie Sitzungen als CSV-, EDF-, PDF- und Legacy-Textdateien.</p>

  <div class="value-grid">
    <div class="value-card">
      <h3>Vollständige Sitzungen erfassen</h3>
      <p>Zeichnen Sie EKG-, HR-, RR- und HRV-Daten des Polar H10 mit Zeitstempeln und verstrichener Zeit auf.</p>
    </div>
    <div class="value-card">
      <h3>Daten live verfolgen</h3>
      <p>Beobachten Sie EKG-, HR-, RR- und HRV-Diagramme direkt auf iPhone und iPad während der Aufzeichnung.</p>
    </div>
    <div class="value-card">
      <h3>In nützliche Formate exportieren</h3>
      <p>Öffnen Sie Aufzeichnungen in Numbers, Excel oder EDFbrowser oder exportieren Sie einen PDF-Schnappschuss der letzten 30 Sekunden der Live-EKG-Ansicht.</p>
    </div>
  </div>

  <div class="trust-strip" aria-label="Wichtige Funktionen">
    <span>130-Hz-EKG-Aufzeichnung</span>
    <span>CSV-, EDF- und PDF-Export</span>
    <span>Apple Health für HR, RR und HRV</span>
    <span>Live-Diagramme auf iPhone und iPad</span>
  </div>
</section>

{% include screenshots.html %}

## Warum diese App verwendet wird

* EKG mit dem Polar H10 direkt aufzeichnen, ohne Mac oder PC.
* Daten in Formaten exportieren, die sich gut für Analyse, Weitergabe oder Archivierung eignen.
* Live-Trends für EKG, HR, RR und HRV während einer Sitzung verfolgen.
* Bildschirmfotos in Fotos sichern und die letzten 30 Sekunden des EKG als A4-PDF exportieren.

## So funktioniert die App

Verbinden Sie den Polar H10 per Bluetooth, starten Sie eine Aufzeichnung und verfolgen Sie die eingehenden Daten live auf iPhone oder iPad. Die App zeichnet EKG-, Herzfrequenz- (HR) und R-R-Intervall-Daten (RR) auf und kann aus akzeptierten RR-Intervallen außerdem HRV berechnen. **Für das EKG ist eine Mindest-Firmware-Version des H10 von 3.0.35 erforderlich.**

Wenn der Nutzer ein aktives Abonnement „Enable premium features“ (In-App-Kauf) hat, werden die Aufzeichnungen im Verzeichnis der ECG Recorder App in der App „Dateien“ gespeichert, wobei der Dateiname auf dem Startzeitpunkt der Aufzeichnung basiert. EKG wird als `.csv`, `.edf` und als Legacy-ASCII-Textdatei exportiert. HR und RR werden als `.csv` sowie als Legacy-ASCII-Textdateien exportiert. HRV wird als `.csv` exportiert. Die CSV-Dateien enthalten lokale Zeitstempel und verstrichene Sekunden, sodass in den meisten Fällen keine separate Zeitspalte mehr manuell erstellt werden muss. Zu den Premium-Funktionen gehören außerdem Live-Diagramme für EKG, HR, RR und HRV sowie der PDF-Export der Live-EKG-Ansicht.

## Export und Analyse

* `EKG`: mit etwa 130 Hz in Mikrovolt (`uV`) aufgezeichnet, Export als `.csv`, `.edf` und Legacy-ASCII-Text.
* `HR`: etwa ein Wert pro Sekunde, Export als `.csv` und Legacy-ASCII-Text.
* `RR`: Schlag-zu-Schlag-Intervalle in Millisekunden, Export als `.csv` und Legacy-ASCII-Text.
* `HRV`: aus akzeptierten RR-Intervallen berechnet, Export als `.csv` mit RMSSD und SDNN.

Der EKG-CSV-Export enthält Zeitstempel und verstrichene Sekunden. EKG-Aufzeichnungen können außerdem als `.edf`-Dateien in [EDFbrowser](https://www.teuniz.net/edfbrowser) geöffnet werden. Zusätzlich kann das Live-EKG-Diagramm als PDF-Schnappschuss auf einem A4-EKG-Raster (25 mm/s, 10 mm/mV) exportiert werden, das die letzten 30 Sekunden des EKG zeigt und nicht für den Export langer kompletter Sitzungen gedacht ist. Einige [Beispiel-EKG-Daten](/ecg-examples/examples.html) und [Demo-Videos](/demo-video/videos.html) für den Import in Apple Numbers und EDFbrowser sind verfügbar.

## App-Support und Kontakt

Bitte senden Sie alle Fragen und Kommentare per E-Mail an **ecg-recorder [ a t ] cmdline [ d o t ] net**. Alternativ können Sie ein Issue auf [GitHub](https://github.com/poml88/ecg-recorder-ios) eröffnen.

## Hinweis zur Apple Health-Unterstützung
Apple erlaubt Drittanbieter-Apps nicht, EKG-Kurven nach Apple Health zu schreiben, mit Ausnahme von EKGs, die mit der Apple Watch aufgezeichnet wurden. Diese App kann jedoch drei andere Datentypen nach Apple Health exportieren, wenn die Funktion in den Einstellungen aktiviert ist: Herzfrequenz, Schlag-zu-Schlag-Intervalle und HRV (SDNN).

## Demo-Videos

Sehen Sie sich die Demo-Videos und Beispieldaten an, um Aufzeichnungen in Apple Numbers oder EDFbrowser zu öffnen.

* [Demo: txt-ASCII-EKG-Datei auf dem iPhone in Numbers öffnen](https://youtu.be/N58LFXaAeIQ)
* [Demo: txt-Datei mit EDFbrowser konvertieren](https://youtu.be/dLscFwdWxSE)

### EKG-DATEN

Gemäß den Spezifikationen werden EKG-Daten mit einer Rate von 130 Hz erfasst (mein Gerät arbeitet mit 130.061 Hz) und in Mikrovolt (µV) gespeichert. Das bedeutet, dass alle 7,692 Millisekunden (ms) ein Wert vorliegt. Für eine 10-minütige Aufzeichnung sind das etwa 78000 Werte. Beim Import der Daten in z. B. Microsoft Excel oder Apple Numbers können Sie alle EKG-Werte durch 1000 teilen, um Millivolt (mV) zu erhalten. Der EKG-CSV-Export enthält bereits die Spalten `timestamp` und `elapsed_seconds`.
Die Schaltfläche „Set marker“ im EKG-Live-Diagramm fügt den Daten einen Wert von 2000 µV hinzu. Dieser Wert ist in einem Diagramm leicht zu erkennen oder durch Suchen in den Daten zu finden.

EKG-Aufzeichnungen werden außerdem direkt als `.edf`-Dateien exportiert und können in der Open-Source-Software [EDFbrowser](https://www.teuniz.net/edfbrowser) geöffnet werden. Zusätzlich kann das Live-EKG-Diagramm als PDF auf einem EKG-A4-Raster (25 mm/s, 10 mm/mV) exportiert werden, was praktisch zum Anzeigen, Teilen oder Drucken der letzten 30 Sekunden des EKG ist. Einige [Beispiel-EKG-Daten](/ecg-examples/examples.html) und [Demo-Videos](/demo-video/videos.html) für den Import in Apple Numbers und EDFbrowser sind verfügbar.

### HR-DATEN

Es wird etwa ein HR-Wert (durchschnittliche Schläge pro Minute, bpm) pro Sekunde aufgezeichnet. HR-CSV-Exporte enthalten lokale Zeitstempel und verstrichene Sekunden.

### RR-DATEN

Das RR-Intervall ist die Zeitspanne zwischen zwei aufeinanderfolgenden R-Wellen des QRS-Signals im Elektrokardiogramm (der Kehrwert ist die Herzfrequenz). RR-Intervalle werden in ms aufgezeichnet. RR-CSV-Exporte enthalten lokale Zeitstempel und verstrichene Sekunden.

### HRV-DATEN

Die HRV wird aus akzeptierten RR-Intervallen berechnet und als RMSSD und SDNN in Millisekunden exportiert. Um offensichtliche Artefakte zu reduzieren, werden RR-Intervalle außerhalb von 300-2000 ms ignoriert, Intervalle, die sich um mehr als 200 ms vom zuvor akzeptierten Intervall unterscheiden, verworfen, und sobald eine kurze Basislinie vorliegt, müssen die Intervalle innerhalb von 20 % des kürzlich bestimmten Medians bleiben. HRV-CSV-Exporte enthalten lokale Zeitstempel, verstrichene Sekunden, Fensterlänge, RR-Anzahl, RMSSD und SDNN.

## NUTZUNGSBEDINGUNGEN

Bitte beachten Sie: Diese App dient ausschließlich Informationszwecken. Die Nutzung der App und der Website soll keinen Ersatz für professionelle medizinische Beratung darstellen. Bei medizinischen Beschwerden oder Fragen sollten Sie umgehend Ihren Arzt oder medizinischen Dienstleister kontaktieren. DIE APP UND DIE WEBSEITE BIETEN KEINE MEDIZINISCHE BERATUNG, UND NICHTS IM INHALT IST DAZU GEDACHT, ALS PROFESSIONALLE EMPFEHLUNG FÜR DIAGNOSE ODER BEHANDLUNG ZU DIENEN.

## Warum habe ich diese App erstellt?

Ich bin leidenschaftlicher Läufer und auf der Suche nach einer Herzfrequenz-Monitor-App für den Sport gewesen. Ich stieß auf den Polar H10 und war fasziniert von der Möglichkeit, echte EKG-Daten aus diesem Gerät zu erhalten. Zu meiner Überraschung gab es Ende 2019 im App Store keine iOS-App, die das Aufzeichnen oder Anzeigen dieser Daten anbot. Es gab eine Ausnahme, die jedoch relativ kostspielig war und nicht klar war, was genau angeboten wurde. Da ich keine anderen Optionen sah und Polar ein sehr gutes SDK für den H10 bereitstellt, entschied ich mich, meine eigene App zu entwickeln.

## Warum eine App mit Abonnements?

Bald stellte sich heraus, dass die Entwicklung dieser App erhebliche Zeit in Anspruch nimmt und am Ende auch Geld gekostet hat. Ich hoffe, die kleine Gebühr kompensiert ein wenig die investierte Zeit und die Kosten.
Die App ist kostenlos zum Herunterladen, um einen ersten Eindruck zu gewinnen und eine Verbindung zu einem Gerät herzustellen. Es ist möglich, einige Sekunden der Live-Diagramme zu sehen. Um die Premium-Funktionen zu aktivieren, tätigen Sie bitte einen der verfügbaren In-App-Käufe. Jedes Abonnement bietet eine einwöchige kostenlose Testphase, sodass alle Funktionen unverbindlich ausprobiert werden können. Ich fand, dass ein Modell mit Abonnements unterschiedlicher Laufzeit und einer einwöchigen Testphase am fairsten ist. Es ist auch möglich, eine einmalige Zahlung ohne wiederkehrendes Abonnement zu tätigen.

Diese App verwendet die hervorragenden Purchase- und PolarBle-SDKs.

> **Hinweis:** Rechtlich bindend sind die deutschen Versionen von [Impressum]({{ site.de_impressum_path | relative_url }}) und [Datenschutzerklärung]({{ site.de_privacy_path | relative_url }}).
