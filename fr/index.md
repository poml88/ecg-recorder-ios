---
title: "Enregistreur ECG Polar H10"
subtitle: "Enregistre les données — affiche un graphique en direct."
description: "Exporte les données ECG, FC et RR au format texte et affiche un graphique en temps réel."
screenshots_string: "Captures d’écran"
lang: fr
permalink: /fr/
---

{% include screenshots.html %}

## Support et contact de l'application

Veuillez envoyer un courriel à **ecg-recorder [ a t ] cmdline [ d o t ] net** pour toute question ou remarque. Vous pouvez également ouvrir une issue sur [GitHub](https://github.com/poml88/ecg-recorder-ios).

## Remarque concernant la prise en charge d'Apple Health
Actuellement, Apple n'autorise pas l'écriture de données ECG dans Apple Health (à l'exception des données ECG enregistrées avec l'Apple Watch). Je ne suis donc pas en mesure d'ajouter cette fonctionnalité. Les données HR et RR peuvent être écrites dans Apple Health, je pourrais donc ajouter cette fonctionnalité à l'avenir sur demande.

## Vidéos de démonstration

Regardez les vidéos de démonstration montrant comment convertir les données dans Numbers ou avec EDFbrowser.

* [Démo : comment ouvrir un fichier de données ECG txt ascii dans Numbers sur iPhone](https://youtu.be/N58LFXaAeIQ)
* [Démo : convertir un fichier txt avec EDFbrowser](https://youtu.be/dLscFwdWxSE)

## Comment fonctionne cette application ?

Cette application enregistre trois types de données provenant d'un capteur de fréquence cardiaque Polar H10 : l'électrocardiogramme (ECG), la fréquence cardiaque (HR) et l'intervalle R-R (RR). **La version minimale du firmware du H10 pour que l'ECG fonctionne est 3.0.35.** Chaque type de donnée peut également être affiché sous forme de graphique en temps réel. Des captures d'écran du graphique en temps réel peuvent être prises via le bouton « save to photos ». Une vidéo du graphique en direct peut être enregistrée à l'aide du bouton d'enregistrement d'écran iOS depuis le Centre de contrôle iOS (peut nécessiter d'être activé via Réglages → Centre de contrôle).

Si l'utilisateur dispose d'un abonnement actif « Enable premium features » (achat intégré), toutes les données sont sauvegardées dans le répertoire de l'application ECG Recorder dans l'app « Fichiers », le nom de fichier étant l'horodatage du début de l'enregistrement. Toutes les données sont enregistrées sous forme de fichiers texte ASCII. Les fichiers texte contiennent une valeur par ligne et peuvent être facilement importés dans d'autres logiciels pour traitement des données. De plus, les fonctionnalités premium incluent des graphiques en direct / en temps réel pour l'ECG, la HR et le RR.

### DONNÉES ECG

Conformément aux spécifications, les données ECG sont collectées à une fréquence de 130 Hz (mon appareil fonctionne à 130.061 Hz) en microvolts (µV). Cela signifie qu'il y a une valeur toutes les 7,692 millisecondes (ms). Pour un enregistrement de 10 minutes, cela représente 78 000 valeurs. Lors de l'importation des données dans, par exemple, Microsoft Excel ou Apple Numbers, vous obtiendrez une longue colonne de valeurs en µV. Vous pouvez diviser toutes les valeurs par 1000 pour obtenir des millivolts (mV). Vous devrez aussi créer vous-même une colonne de temps pour pouvoir tracer correctement les données. Si la colonne de temps doit être en secondes, elle devrait contenir les valeurs 0.007692, 0.015385, 0.023077, 0.030769, …. Avec cette colonne de temps comme X et les mV comme Y, vous pouvez tracer un ECG mV vs. secondes.
Le bouton « Set marker » dans le graphique ECG en direct ajoute une valeur de 2000 µV aux données. Cette valeur est facilement visible sur un graphe ou trouvable en recherchant dans les données.

Le logiciel open source [EDFbrowser](https://www.teuniz.net/edfbrowser) peut convertir les fichiers texte ASCII en fichiers .edf, qui peuvent être parcourus aisément avec ce logiciel. Quelques [exemples de données ECG](/ecg-recorder-ios/ecg-examples/examples.html) et des [vidéos de démonstration](/ecg-recorder-ios/demo-video/videos.html) pour l'importation dans Apple Numbers et EDFBrowser sont disponibles.

### DONNÉES HR

Il y a environ une valeur pour la HR (battements moyens par minute, bpm) enregistrée par seconde. Si vous souhaitez tracer ces données, il faudra créer une colonne de temps avec 1, 2, 3, 4, … secondes, et ainsi de suite.

### DONNÉES RR

L'intervalle RR est le temps écoulé entre deux ondes R successives du signal QRS sur l'électrocardiogramme (la réciproque donne la fréquence cardiaque). Les intervalles RR sont enregistrés en ms.

## CONDITIONS D'UTILISATION

Veuillez noter : cette application a uniquement un but informatif. L'utilisation de l'application et du site ne doit pas se substituer à un avis médical professionnel et vous devriez contacter rapidement votre prestataire de soins en cas de problèmes médicaux ou de questions médicales. L'APPLICATION ET LE SITE WEB NE FOURNISSENT PAS DE CONSEILS MÉDICAUX, ET RIEN DANS LE CONTENU N'EST DESTINÉ À CONSTITUER UN AVIS PROFESSIONNEL POUR UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL.

## Pourquoi ai-je créé cette application ?

Je suis un coureur passionné et je recherchais un moniteur de fréquence cardiaque pour les applications sportives. Je suis tombé sur le Polar H10 et j'ai été intrigué par la possibilité d'obtenir de véritables données ECG à partir de cet appareil. À ma surprise, fin 2019 il n'y avait pas d'application iOS sur l'App Store offrant l'enregistrement ou l'affichage de ces données. Il y avait une exception, mais elle était assez coûteuse et peu claire quant à l'offre. Comme je ne voyais pas d'autres options et que Polar fournit un très bon SDK pour le H10, j'ai décidé de développer ma propre application.

## Pourquoi une application avec abonnements ?

Il est vite apparu que le développement de cette application allait demander beaucoup de temps et, au final, coûter de l'argent. J'espère que la petite somme demandée compensera un peu le temps et l'argent investis.
L'application est gratuite à télécharger pour se faire une première impression et se connecter à un appareil. Il est possible de voir quelques secondes des graphiques en direct. Pour activer les fonctionnalités premium, veuillez effectuer un des achats intégrés disponibles. Chaque abonnement comporte une période d'essai gratuite d'une semaine, de sorte que toutes les fonctionnalités peuvent être testées gratuitement. J'ai constaté qu'un modèle d'abonnements de diverses durées avec une semaine d'essai gratuit était le plus équitable. Il est aussi possible d'effectuer un paiement unique sans abonnement récurrent.

Cette application utilise les excellents SDK Purchase et PolarBle.

> **Remarque :** Les versions allemandes de l'[Impressum]({{ site.de_impressum_path | relative_url }}) et de la [Politique de confidentialité]({{ site.de_privacy_path | relative_url }}) sont les versions légalement contraignantes.
