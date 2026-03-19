---
title: "Application d’enregistrement ECG pour Polar H10 (iOS)"
title_tagline: "Export des données ECG, HR, RR et HRV"
subtitle: "Enregistrez et exportez les données ECG, HR, RR et HRV avec le capteur de fréquence cardiaque Bluetooth Polar H10 et affichez des graphiques en direct sur iPhone et iPad."
description: "Enregistrez un ECG avec le Polar H10. Exportez les données ECG, fréquence cardiaque (HR), intervalles RR et HRV en fichiers CSV, EDF, PDF et texte legacy, et visualisez des graphiques en direct sur iPhone et iPad."
screenshots_string: "Captures d’écran"
lang: fr
permalink: /fr/
---

{% include screenshots.html %}

## Support et contact de l'application

Veuillez envoyer un courriel à **ecg-recorder [ a t ] cmdline [ d o t ] net** pour toute question ou remarque. Vous pouvez également ouvrir une issue sur [GitHub](https://github.com/poml88/ecg-recorder-ios).

## Remarque concernant la prise en charge d'Apple Health
Apple n'autorise pas les applications tierces à écrire les tracés ECG dans Apple Health, sauf pour les ECG enregistrés par l'Apple Watch. Cette application peut toutefois exporter trois autres types de données vers Apple Health lorsque l'option est activée dans les réglages : la fréquence cardiaque, la chronologie battement par battement et la HRV (SDNN).

## Vidéos de démonstration

Regardez les vidéos de démonstration et les données d'exemple pour ouvrir les enregistrements dans Apple Numbers ou EDFbrowser.

* [Démo : comment ouvrir un fichier de données ECG txt ascii dans Numbers sur iPhone](https://youtu.be/N58LFXaAeIQ)
* [Démo : convertir un fichier txt avec EDFbrowser](https://youtu.be/dLscFwdWxSE)

## Comment fonctionne cette application ?

Cette application enregistre les données ECG, la fréquence cardiaque (HR) et les intervalles R-R (RR) provenant d'un capteur de fréquence cardiaque Polar H10. Elle peut aussi calculer la variabilité de la fréquence cardiaque (HRV) à partir des intervalles RR enregistrés et afficher des graphiques en direct pour l'ECG, la HR, le RR et la HRV. **La version minimale du firmware du H10 pour que l'ECG fonctionne est 3.0.35.** Des captures d'écran du graphique en direct peuvent être prises via le bouton « save to photos ». Une vidéo de la vue en direct peut être enregistrée avec le bouton d'enregistrement d'écran iOS depuis le Centre de contrôle (il peut être nécessaire de l'activer d'abord dans Réglages -> Centre de contrôle).

Si l'utilisateur dispose d'un abonnement actif « Enable premium features » (achat intégré), les enregistrements sont sauvegardés dans le dossier de l'application ECG Recorder dans l'app « Fichiers », avec un nom basé sur l'heure de début de l'enregistrement. L'ECG est exporté en `.csv`, `.edf` et en fichier texte ASCII legacy. La HR et le RR sont exportés en `.csv` ainsi qu'en fichiers texte ASCII legacy. La HRV est exportée en `.csv`. Les fichiers CSV incluent maintenant des horodatages locaux et les secondes écoulées, de sorte qu'il n'est généralement plus nécessaire de créer manuellement une colonne de temps séparée. Les fonctionnalités premium incluent aussi des graphiques en direct / en temps réel pour l'ECG, la HR, le RR et la HRV, ainsi que l'export PDF de la vue ECG en direct.

### DONNÉES ECG

Conformément aux spécifications, les données ECG sont enregistrées à une fréquence de 130 Hz (mon appareil fonctionne à 130.061 Hz) en microvolts (µV). Cela signifie qu'il y a une valeur toutes les 7,692 millisecondes (ms). Un enregistrement de 10 minutes contient environ 78000 valeurs. Lors de l'importation des données dans, par exemple, Microsoft Excel ou Apple Numbers, vous pouvez diviser toutes les valeurs ECG par 1000 pour obtenir des millivolts (mV). L'export CSV ECG contient déjà les colonnes `timestamp` et `elapsed_seconds`.
Le bouton « Set marker » dans le graphique ECG en direct ajoute une valeur de 2000 µV aux données. Cette valeur est facilement visible sur un graphe ou trouvable en recherchant dans les données.

Les enregistrements ECG sont également exportés directement en fichiers `.edf`, qui peuvent être ouverts dans le logiciel open source [EDFbrowser](https://www.teuniz.net/edfbrowser). En outre, le graphique ECG en direct peut être exporté en PDF sur une grille ECG de format A4 (25 mm/s, 10 mm/mV), pratique pour l'affichage, le partage ou l'impression. Quelques [exemples de données ECG](/ecg-examples/examples.html) et des [vidéos de démonstration](/demo-video/videos.html) pour l'importation dans Apple Numbers et EDFbrowser sont disponibles.

### DONNÉES HR

Il y a environ une valeur HR (battements moyens par minute, bpm) enregistrée par seconde. Les exports CSV HR incluent des horodatages locaux et les secondes écoulées.

### DONNÉES RR

L'intervalle RR est le temps écoulé entre deux ondes R successives du signal QRS sur l'électrocardiogramme (la réciproque donne la fréquence cardiaque). Les intervalles RR sont enregistrés en ms. Les exports CSV RR incluent des horodatages locaux et les secondes écoulées.

### DONNEES HRV

La HRV est calculée à partir des intervalles RR acceptés et exportée sous forme de RMSSD et de SDNN en millisecondes. Pour réduire les artefacts évidents, les intervalles RR en dehors de 300-2000 ms sont ignorés, les intervalles qui diffèrent de plus de 200 ms de l'intervalle accepté précédent sont rejetés, et une fois qu'une courte ligne de base est disponible, les intervalles doivent rester dans une plage de 20 % autour de la médiane récente. Les exports CSV HRV incluent des horodatages locaux, les secondes écoulées, la longueur de fenêtre, le nombre de RR, le RMSSD et le SDNN.

## CONDITIONS D'UTILISATION

Veuillez noter : cette application a uniquement un but informatif. L'utilisation de l'application et du site ne doit pas se substituer à un avis médical professionnel et vous devriez contacter rapidement votre prestataire de soins en cas de problèmes médicaux ou de questions médicales. L'APPLICATION ET LE SITE WEB NE FOURNISSENT PAS DE CONSEILS MÉDICAUX, ET RIEN DANS LE CONTENU N'EST DESTINÉ À CONSTITUER UN AVIS PROFESSIONNEL POUR UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL.

## Pourquoi ai-je créé cette application ?

Je suis un coureur passionné et je recherchais un moniteur de fréquence cardiaque pour les applications sportives. Je suis tombé sur le Polar H10 et j'ai été intrigué par la possibilité d'obtenir de véritables données ECG à partir de cet appareil. À ma surprise, fin 2019 il n'y avait pas d'application iOS sur l'App Store offrant l'enregistrement ou l'affichage de ces données. Il y avait une exception, mais elle était assez coûteuse et peu claire quant à l'offre. Comme je ne voyais pas d'autres options et que Polar fournit un très bon SDK pour le H10, j'ai décidé de développer ma propre application.

## Pourquoi une application avec abonnements ?

Il est vite apparu que le développement de cette application allait demander beaucoup de temps et, au final, coûter de l'argent. J'espère que la petite somme demandée compensera un peu le temps et l'argent investis.
L'application est gratuite à télécharger pour se faire une première impression et se connecter à un appareil. Il est possible de voir quelques secondes des graphiques en direct. Pour activer les fonctionnalités premium, veuillez effectuer un des achats intégrés disponibles. Chaque abonnement comporte une période d'essai gratuite d'une semaine, de sorte que toutes les fonctionnalités peuvent être testées gratuitement. J'ai constaté qu'un modèle d'abonnements de diverses durées avec une semaine d'essai gratuit était le plus équitable. Il est aussi possible d'effectuer un paiement unique sans abonnement récurrent.

Cette application utilise les excellents SDK Purchase et PolarBle.

> **Remarque :** Les versions allemandes de l'[Impressum]({{ site.de_impressum_path | relative_url }}) et de la [Politique de confidentialité]({{ site.de_privacy_path | relative_url }}) sont les versions légalement contraignantes.
