---
title: "EKG Recorder für Polar H10"
subtitle: "Speichert Daten — zeigt Live-Diagramm an."
description: "Exportiert EKG-, HR- und RR-Daten als Textdateien und zeigt ein Live-Diagramm an."
lang: de
permalink: /de/
---

{% include screenshots.html %}

## App-Support und Kontakt

Bitte senden Sie alle Fragen und Kommentare per E-Mail an **ecg-recorder [ a t ] cmdline [ d o t ] net**. Alternativ können Sie ein Issue auf [GitHub](https://github.com/poml88/ecg-recorder-ios) eröffnen.

## Hinweis zur minimalen H10-Firmwareversion

Damit das EKG-Streaming funktioniert, benötigen Sie auf Ihrem H10 eine *Mindest-Firmwareversion 3.0.35*. Sie können Ihr H10 mit den Apps Polar Beat und Polar Flow aktualisieren.

## Demo-Videos

Sehen Sie sich die Demo-Videos an, die zeigen, wie die Daten in Numbers oder mit EDFbrowser konvertiert werden.

* [Demo: txt-ASCII-EKG-Datei auf dem iPhone in Numbers öffnen](https://youtu.be/N58LFXaAeIQ)
* [Demo: txt-Datei mit EDFbrowser konvertieren](https://youtu.be/dLscFwdWxSE)

## Wie funktioniert diese App?

Diese App zeichnet drei Datentypen von einem Polar H10 Herzfrequenzsensor auf: Elektrokardiogramm (EKG), Herzfrequenz (HR) und das R-R-Intervall (RR). Für das EKG ist eine Mindest-Firmware des H10 von 3.0.35 erforderlich. Jeder Datentyp kann außerdem in einem Echtzeit-Diagramm angezeigt werden. Bildschirmfotos des Echtzeit-Diagramms können über die Schaltfläche „save to photos“ aufgenommen werden. Ein Video des Live-Diagramms kann mit der iOS-Bildschirmaufnahme-Schaltfläche aus dem iOS Kontrollzentrum aufgenommen werden (möglicherweise muss diese Funktion zunächst unter Einstellungen → Kontrollzentrum aktiviert werden).

Wenn der Nutzer ein aktives Abonnement „Enable premium features“ (In-App-Kauf) hat, werden alle Daten im Verzeichnis der ECG Recorder App in der „Dateien“-App gespeichert; der Dateiname ist der Zeitstempel, zu dem die Aufzeichnung begonnen hat. Alle Daten werden als ASCII-Textdatei gespeichert. Die Textdateien enthalten einen Wert pro Zeile und sollten sich leicht in andere Software zur Datenverarbeitung importieren lassen. Zusätzlich beinhalten die Premium-Funktionen Live-/Echtzeit-Diagramme für EKG, HR und RR.

### EKG-DATEN

Gemäß den Spezifikationen werden EKG-Daten mit einer Rate von 130 Hz gesammelt (mein Gerät arbeitet bei 130.061 Hz) in Mikrovolt (µV). Das bedeutet, dass alle 7,692 Millisekunden (ms) ein Wert vorliegt. Für eine 10-minütige Aufzeichnung sind das 78.000 Werte. Beim Import der Daten in z. B. Microsoft Excel oder Apple Numbers erhalten Sie eine lange Spalte mit µV-Werten. Sie können alle Werte durch 1000 teilen, um Millivolt (mV) zu erhalten. Sie müssen außerdem selbst eine Zeitspalte erstellen, um die Daten korrekt zu plotten. Soll die Zeitspalte in Sekunden sein, sollte sie die Werte 0.007692, 0.015385, 0.023077, 0.030769, … enthalten. Mit dieser Zeitspalte als X-Achse und den mV-Werten als Y-Achse können Sie ein mV vs. Sekunden-EKG plotten.
Die Schaltfläche „Set marker“ im EKG-Live-Diagramm fügt den Daten einen Wert von 2000 µV hinzu. Dieser Wert ist in einem Diagramm leicht zu erkennen oder durch Suchen in den Daten zu finden.

Die Open-Source-Software [EDFbrowser](https://www.teuniz.net/edfbrowser) kann die ASCII-Textdateien in .edf-Dateien konvertieren, die sich mit der Software bequem durchsuchen lassen. Einige [Beispiel-EKG-Daten](/ecg-recorder-ios/ecg-examples/examples.html) und [Demo-Videos](/ecg-recorder-ios/demo-video/videos.html) für den Import in Apple Numbers und EDFBrowser sind verfügbar.

### HR-DATEN

Für HR (durchschnittliche Schläge pro Minute, bpm) wird ungefähr ein Wert pro Sekunde aufgezeichnet. Wenn Sie die Daten plotten möchten, müssen Sie eine Zeitspalte mit 1, 2, 3, 4, … Sekunden usw. erstellen.

### RR-DATEN

Das RR-Intervall ist die Zeitspanne zwischen zwei aufeinanderfolgenden R-Wellen des QRS-Signals im Elektrokardiogramm (der Kehrwert ist die Herzfrequenz). Die RR-Intervalle werden in ms aufgezeichnet.

## NUTZUNGSBEDINGUNGEN

Bitte beachten Sie: Diese App dient ausschließlich Informationszwecken. Die Nutzung der App und der Website soll keinen Ersatz für professionelle medizinische Beratung darstellen. Bei medizinischen Beschwerden oder Fragen sollten Sie umgehend Ihren Arzt oder medizinischen Dienstleister kontaktieren. DIE APP UND DIE WEBSEITE BIETEN KEINE MEDIZINISCHE BERATUNG, UND NICHTS IM INHALT IST DAZU GEDACHT, ALS PROFESSIONALLE EMPFEHLUNG FÜR DIAGNOSE ODER BEHANDLUNG ZU DIENEN.

## Warum habe ich diese App erstellt?

Ich bin leidenschaftlicher Läufer und auf der Suche nach einer Herzfrequenz-Monitor-App für den Sport gewesen. Ich stieß auf den Polar H10 und war fasziniert von der Möglichkeit, echte EKG-Daten aus diesem Gerät zu erhalten. Zu meiner Überraschung gab es Ende 2019 im App Store keine iOS-App, die das Aufzeichnen oder Anzeigen dieser Daten anbot. Es gab eine Ausnahme, die jedoch relativ kostspielig war und nicht klar war, was genau angeboten wurde. Da ich keine anderen Optionen sah und Polar ein sehr gutes SDK für den H10 bereitstellt, entschied ich mich, meine eigene App zu entwickeln.

## Warum eine App mit Abonnements?

Bald stellte sich heraus, dass die Entwicklung dieser App erhebliche Zeit in Anspruch nimmt und am Ende auch Geld gekostet hat. Ich hoffe, die kleine Gebühr kompensiert ein wenig die investierte Zeit und die Kosten.
Die App ist kostenlos zum Herunterladen, um einen ersten Eindruck zu gewinnen und eine Verbindung zu einem Gerät herzustellen. Es ist möglich, einige Sekunden der Live-Diagramme zu sehen. Um die Premium-Funktionen zu aktivieren, tätigen Sie bitte einen der verfügbaren In-App-Käufe. Jedes Abonnement bietet eine einwöchige kostenlose Testphase, sodass alle Funktionen unverbindlich ausprobiert werden können. Ich fand, dass ein Modell mit Abonnements unterschiedlicher Laufzeit und einer einwöchigen Testphase am fairsten ist. Es ist auch möglich, eine einmalige Zahlung ohne wiederkehrendes Abonnement zu tätigen.

Diese App verwendet die hervorragenden Purchase- und PolarBle-SDKs.

> **Hinweis:** Rechtlich bindend sind die deutschen Versionen von [Impressum]({{ site.de_impressum_path | relative_url }}) und [Datenschutzerklärung]({{ site.de_privacy_path | relative_url }}).
