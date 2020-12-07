# ECG Recorder for Polar H10 on iOS

This is a general overview over the app.

## How does this app work?

This App records three types of data from a Polar H10 hear rate sensor: electrocardiogram (ECG), heart rate (HR) and the R-R interval (RR).

All data is saved to the ECG Recorder App's directory in the Files app, the file name being the timestamp when the recording started. All data is saved as an ascii text file, which seems to be the most versatile format to use. The text files contain one value per line and should be easily imported into other software for data processing.

ECG data: According to specifications ECG data is collected at a rate of 130 Hz (my device works at 130.061 Hz) in microvolts (µV). That means that there is one value every 7.692 milliseconds (ms). For 10 minutes recording that is 78000 values. When importing the data into e.g. Microsoft Excel, you will receive one long column of µV values. You can divide all values by 1000 to receive millivolts (mV). You will need to create yourself a time column as well to be able to properly plot the data. If the time column shall be in seconds, it should have as values 0.007692, 0.015385, 0.023077, 0.030769, …. With that time column as X and the mV as Y you can plot a mV vs. seconds ECG.

HR data: There is about one value for HR (average beats per minute, bpm) recorded per second. In case you want to plot the data you will need to create a time column with 1, 2, 3, 4, … seconds and so forth.

RR data: The RR interval is the time elapsed between two successive R-waves of the QRS signal on the electrocardiogram (the reciprocal is the HR). The RR intervals are recorded in ms.

If useful and requested by users I might be able to write timestamps to the text files in a future version of the app. Possibly then as comma separated values (csv).

## Why did I make this app?

I am a passionate runner and was looking for a heart rate monitor for sports application. I came across the Polar H10 and was intrigued by the possibility to obtain real ECG data from this device. To my surprise in late 2019 there was no iOS app on the App Store which offered recording or displaying of the data. There was one exception, but it was quite costly and not clear what was offered. Since I saw no other options and Polar provides a very good SDK vor the H10, I decided to develop my own app.

## Why an app with subscriptions?

It turned out very soon that development of this app will consume a significant amount of time and in the end also costed money. I hope that the small fee asked will compensate a little bit for the invested time and money. I found that a model of several lengths subscriptions with a one week free trial will be the most fair, rather than having a one time payment where you don’t know what you will get.

This App uses the excellent Purchase and PolarBle SDKs.

## Ideas for future versions

* Realize a button that sets a marker in the ECG data, to find a particular point in the recording. could be done by adding a value of 9999 or 0 or similar, since the data array is Int32 iirc. Maybe realize this marker button as a widget, so the phone does not need to be unlocked.
* Realize a running window. Fill the array with e.g. 30 minutes of data, then, when adding the latest data to the end, strip the oldest data from the beginning. Like this, there will be always X minutes of data in the array. Limits data size.
* Or: When pressing a button save the last minute of data and the coming minute of data or so... Need to think about that.
* Add something as a live graph, but how?
* Save data as CSV, having a time stamp for X and the collected data for Y.
* Maybe some sort of long-time mode would be useful. Reducing resolution and reducing the amount of data.
