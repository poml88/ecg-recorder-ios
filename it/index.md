---
title: "App ECG Recorder per Polar H10 (iOS)"
title_tagline: "Esporta dati ECG, HR, RR e HRV"
subtitle: "Registra ed esporta dati ECG, HR, RR e HRV dal cardiofrequenzimetro Bluetooth Polar H10 e visualizza grafici in tempo reale su iPhone e iPad."
description: "Registra ECG con Polar H10. Esporta dati ECG, frequenza cardiaca (HR), intervalli RR e HRV come file CSV, EDF, PDF e testo legacy, e visualizza grafici in tempo reale su iPhone e iPad."
screenshots_string: "Schermate"
screenshots_intro: "Due momenti chiave dell’app: la schermata principale di registrazione e il grafico ECG in tempo reale."
lang: it
permalink: /it/
---

<section class="landing-intro">
  <p class="eyebrow">Pensata per gli utenti Polar H10 che vogliono usare i propri dati su iPhone e iPad</p>
  <p class="lead">Registra ECG, frequenza cardiaca, intervalli RR e HRV dal Polar H10. Visualizza i dati in tempo reale ed esporta le sessioni in CSV, EDF, PDF e file di testo legacy.</p>

  <div class="value-grid">
    <div class="value-card">
      <h3>Registra sessioni complete</h3>
      <p>Acquisisci dati ECG, HR, RR e HRV dal Polar H10 con timestamp e tempo trascorso.</p>
    </div>
    <div class="value-card">
      <h3>Osserva i dati in diretta</h3>
      <p>Segui i grafici in tempo reale di ECG, HR, RR e HRV direttamente su iPhone e iPad durante la registrazione.</p>
    </div>
    <div class="value-card">
      <h3>Esporta in formati utili</h3>
      <p>Apri le registrazioni in Numbers, Excel o EDFbrowser, oppure esporta un’istantanea PDF degli ultimi 30 secondi della vista ECG live.</p>
    </div>
  </div>

  <div class="trust-strip" aria-label="Funzionalità principali">
    <span>Acquisizione ECG a 130 Hz</span>
    <span>Esportazione CSV, EDF, PDF</span>
    <span>Apple Health per HR, RR e HRV</span>
    <span>Grafici live su iPhone e iPad</span>
  </div>
</section>

{% include screenshots.html %}

## Perché le persone usano questa app
- Registrare ECG dal Polar H10 senza bisogno di Mac o PC.
- Esportare i dati in formati adatti all’analisi, alla condivisione o all’archiviazione.
- Controllare in tempo reale l’andamento di ECG, HR, RR e HRV durante una sessione.
- Salvare schermate in Foto e creare un PDF del grafico ECG quando serve.

## Come funziona
Collega il Polar H10 via Bluetooth, avvia una registrazione e visualizza i dati in arrivo in tempo reale su iPhone o iPad. L’app registra ECG, frequenza cardiaca (HR) e intervalli R-R (RR) e può calcolare l’HRV dagli intervalli RR accettati. **La versione minima del firmware H10 per l’ECG è 3.0.35.**

Se l’utente ha un abbonamento attivo "Enable premium features" (acquisto in-app), le registrazioni vengono salvate nella cartella dell’app ECG Recorder nell’app "File", con un nome basato sull’orario di avvio della registrazione. L’ECG viene esportato come `.csv`, `.edf` e file di testo ASCII legacy. HR e RR vengono esportati come `.csv` più file di testo ASCII legacy. L’HRV viene esportata come `.csv`. I file CSV includono timestamp locali e secondi trascorsi, quindi nella maggior parte dei casi non è necessario creare manualmente una colonna del tempo separata. Le funzioni premium includono anche grafici live di ECG, HR, RR e HRV, oltre all’esportazione PDF della vista ECG live.

## Esportazione e analisi
- `ECG`: campionato a circa 130 Hz in microvolt (`uV`), esportato come `.csv`, `.edf` e testo ASCII legacy.
- `HR`: circa un valore al secondo, esportato come `.csv` e testo ASCII legacy.
- `RR`: intervallo battito per battito in millisecondi, esportato come `.csv` e testo ASCII legacy.
- `HRV`: calcolata dagli intervalli RR accettati ed esportata come `.csv` con RMSSD e SDNN.

L’esportazione CSV dell’ECG contiene timestamp e secondi trascorsi. Le registrazioni ECG possono anche essere aperte come file `.edf` in [EDFbrowser](https://www.teuniz.net/edfbrowser). Inoltre, il grafico ECG live può essere esportato come istantanea PDF su una griglia ECG formato A4 (25 mm/s, 10 mm/mV), che mostra gli ultimi 30 secondi di ECG invece di una lunga esportazione dell’intera sessione. Sono disponibili alcuni [dati ECG di esempio](/ecg-examples/examples.html) e [video dimostrativi](/demo-video/videos.html) per l’importazione in Apple Numbers ed EDFbrowser.

## Supporto e contatti
Per domande o commenti, scrivi a **ecg-recorder [ a t ] cmdline [ d o t ] net**. In alternativa, apri una issue su [GitHub](https://github.com/poml88/ecg-recorder-ios).

## Nota sul supporto Apple Health
Apple non consente alle app di terze parti di scrivere tracciati ECG in Apple Health, fatta eccezione per gli ECG registrati con Apple Watch. Questa app può però esportare altri tre tipi di dati in Apple Health quando l’opzione è attivata nelle impostazioni: frequenza cardiaca, intervalli battito per battito e HRV (SDNN).

## Video dimostrativi
Dai un’occhiata ai video dimostrativi e ai dati di esempio per aprire le registrazioni in Apple Numbers o EDFbrowser.
- [Demo su come aprire un file ECG txt ascii in Numbers su iPhone](https://youtu.be/N58LFXaAeIQ)
- [Demo conversione di un file txt con EDFbrowser](https://youtu.be/dLscFwdWxSE)

### DATI ECG
Secondo le specifiche, i dati ECG vengono raccolti a una frequenza di 130 Hz (il mio dispositivo lavora a 130.061 Hz) in microvolt (µV). Ciò significa che c’è un valore ogni 7,692 millisecondi (ms). In una registrazione di 10 minuti si ottengono circa 78000 valori. Quando importi i dati in software come Microsoft Excel o Apple Numbers, puoi dividere tutti i valori ECG per 1000 per ottenere millivolt (mV). L’esportazione CSV dell’ECG contiene già le colonne `timestamp` ed `elapsed_seconds`.
Il pulsante "Set marker" nel grafico ECG live aggiunge un valore di 2000 µV ai dati. Questo valore è facilmente visibile in un grafico o individuabile cercando nei dati.

Le registrazioni ECG vengono esportate direttamente anche come file `.edf`, che possono essere aperti nel software open source [EDFbrowser](https://www.teuniz.net/edfbrowser). Inoltre, il grafico ECG live può essere esportato come PDF su una griglia ECG in stile A4 (25 mm/s, 10 mm/mV), utile per visualizzare, condividere o stampare gli ultimi 30 secondi di ECG. Sono disponibili anche alcuni [dati ECG di esempio](/ecg-examples/examples.html) e [video dimostrativi](/demo-video/videos.html) per l’importazione in Apple Numbers ed EDFbrowser.

### DATI HR
Viene registrato circa un valore HR (battiti medi al minuto, bpm) al secondo. Le esportazioni CSV HR includono timestamp locali e secondi trascorsi.

### DATI RR
L’intervallo RR è il tempo trascorso tra due onde R successive del segnale QRS sull’elettrocardiogramma (il reciproco è la frequenza cardiaca). Gli intervalli RR sono registrati in ms. Le esportazioni CSV RR includono timestamp locali e secondi trascorsi.

### DATI HRV
L’HRV viene calcolata dagli intervalli RR accettati ed esportata con RMSSD e SDNN in millisecondi. Per ridurre gli artefatti evidenti, gli intervalli RR fuori da 300-2000 ms vengono ignorati, gli intervalli che differiscono di oltre 200 ms dal precedente intervallo accettato vengono scartati e, una volta disponibile una breve baseline, gli intervalli devono restare entro il 20% della mediana recente. Le esportazioni CSV HRV includono timestamp locali, secondi trascorsi, lunghezza della finestra, conteggio RR, RMSSD e SDNN.

## TERMINI DI SERVIZIO
Nota: questa app è solo a scopo informativo. L’uso dell’app e del sito non intende sostituire il parere medico professionale e dovresti contattare tempestivamente il tuo medico o il tuo fornitore di assistenza sanitaria per qualsiasi condizione o domanda medica. L’APP E IL SITO WEB NON FORNISCONO CONSIGLI MEDICI E NULLA DI QUANTO CONTENUTO NEI CONTENUTI È INTESO COME CONSULENZA PROFESSIONALE PER DIAGNOSI O TRATTAMENTO MEDICO.

## Perché ho creato questa app?
Sono un appassionato di corsa e cercavo un cardiofrequenzimetro per uso sportivo. Mi sono imbattuto nel Polar H10 e sono rimasto incuriosito dalla possibilità di ottenere veri dati ECG da questo dispositivo. Con mia sorpresa, alla fine del 2019 non c’era nessuna app iOS sull’App Store che offrisse la registrazione o la visualizzazione di questi dati. C’era un’eccezione, ma era piuttosto costosa e non era chiaro cosa offrisse. Non vedendo altre opzioni e dato che Polar fornisce un ottimo SDK per l’H10, ho deciso di sviluppare la mia app.

## Perché un’app con abbonamenti?
È diventato subito chiaro che lo sviluppo di questa app avrebbe richiesto molto tempo e alla fine anche denaro. Spero che il piccolo costo richiesto compensi almeno in parte il tempo e i soldi investiti.\
L’app è gratuita da scaricare per farsi una prima idea e collegarsi a un dispositivo. È possibile vedere alcuni secondi dei grafici live. Per attivare le funzioni premium, effettua uno degli acquisti in-app disponibili. Ogni abbonamento include una prova gratuita di una settimana, così tutte le funzionalità possono essere provate senza costi. Ho ritenuto che un modello con abbonamenti di varie durate e una settimana di prova gratuita fosse il più equo. È anche possibile effettuare un pagamento una tantum senza abbonamenti ricorrenti.

Questa app utilizza gli eccellenti SDK Purchase e PolarBle.

> **Nota:** Le versioni tedesche di [Impressum]({{ site.de_impressum_path | relative_url }}) e [Informativa sulla privacy]({{ site.de_privacy_path | relative_url }}) sono le versioni legalmente vincolanti.
