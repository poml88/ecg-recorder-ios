---
title: "适用于 Polar H10 的 ECG 记录应用 (iOS)"
title_tagline: "导出 ECG、HR、RR 和 HRV 数据"
subtitle: "通过 Polar H10 蓝牙心率传感器记录和导出 ECG、HR、RR 与 HRV 数据，并在 iPhone 和 iPad 上显示实时图表。"
description: "使用 Polar H10 记录 ECG。将 ECG、心率 (HR)、RR 间期和 HRV 数据导出为 CSV、EDF、PDF 和旧版文本文件，并在 iPhone 和 iPad 上查看实时图表。"
screenshots_string: "屏幕截图"
lang: zh-Hans
permalink: /zh-Hans/
---

{% include screenshots.html %}

## 应用支持与联系方式

如有任何问题或反馈，请发送电子邮件至 **ecg-recorder [ a t ] cmdline [ d o t ] net**。或在 [GitHub](https://github.com/poml88/ecg-recorder-ios) 上打开 issue。

## 关于苹果健康支持的说明
除 Apple Watch 记录的心电图外，Apple 不允许第三方应用将 ECG 波形写入 Apple Health。不过，本应用在“设置”中启用后，可以将另外三种数据类型导出到 Apple Health：心率、逐搏时间数据以及 HRV（SDNN）。

## 演示视频

请查看演示视频和示例数据，了解如何在 Apple Numbers 或 EDFbrowser 中打开录制结果。

* [在 iPhone 的 Numbers 中打开 txt ascii ECG 数据文件的演示](https://youtu.be/N58LFXaAeIQ)
* [使用 EDFbrowser 转换 txt 文件的演示](https://youtu.be/dLscFwdWxSE)

## 这个应用如何工作？

本应用可从 Polar H10 心率传感器记录 ECG、心率（HR）和 R-R 间期（RR）数据，还可以根据记录到的 RR 间期计算心率变异性（HRV），并显示 ECG、HR、RR 和 HRV 的实时图表。ECG 功能要求 H10 固件版本至少为 3.0.35。可以通过“save to photos”按钮保存实时图表截图，也可以使用 iOS 控制中心中的屏幕录制按钮录制实时视图视频（可能需要先在“设置 -> 控制中心”中启用）。

如果用户拥有有效的“Enable premium features”订阅（应用内购买），录制文件会保存到“文件”应用中 ECG Recorder 的文件夹内，文件名基于录制开始时间。ECG 可导出为 `.csv`、`.edf` 和旧版 ASCII 文本文件；HR 和 RR 可导出为 `.csv` 以及旧版 ASCII 文本文件；HRV 可导出为 `.csv`。CSV 文件现在包含本地时间戳和已过秒数，因此大多数情况下不再需要手动创建单独的时间列。高级功能还包括 ECG、HR、RR 和 HRV 的实时图表，以及实时 ECG 视图的 PDF 导出。

### ECG 数据

根据规格，ECG 数据以 130 Hz 的采样率采集（我的设备实测为 130.061 Hz），单位为微伏（µV）。这意味着每 7.692 毫秒（ms）记录一个数值。10 分钟录制大约会产生 78000 个采样点。将数据导入 Microsoft Excel 或 Apple Numbers 等软件后，您可以将所有 ECG 数值除以 1000 转换为毫伏（mV）。ECG 的 CSV 导出已经包含 `timestamp` 和 `elapsed_seconds` 列。
ECG 实时图表中的 “设置标记（Set marker）” 按钮会向数据中加入一个 2000 µV 的值。该值在图表中很容易看到，也可以通过在数据中搜索找到。

ECG 录制结果还会直接导出为 `.edf` 文件，可在开源软件 [EDFbrowser](https://www.teuniz.net/edfbrowser) 中打开。此外，实时 ECG 图表还可以导出为带有 ECG 样式 A4 网格的 PDF（25 mm/s，10 mm/mV），方便查看、分享或打印。一些可用于导入 Apple Numbers 和 EDFbrowser 的 [示例 ECG 数据](/ecg-examples/examples.html) 与 [演示视频](/demo-video/videos.html) 也可供参考。

### HR 数据

HR（平均每分钟心跳，bpm）大约每秒记录一个数值。HR 的 CSV 导出包含本地时间戳和已过秒数。

### RR 数据

RR 间期是指心电图中连续两个 R 波（QRS 波群）之间经过的时间（其倒数即为心率）。RR 间期以毫秒（ms）记录。RR 的 CSV 导出包含本地时间戳和已过秒数。

### HRV 数据

HRV 基于被接受的 RR 间期计算，并以毫秒为单位导出 RMSSD 和 SDNN。为减少明显伪影，300-2000 ms 之外的 RR 间期会被忽略；与前一个已接受间期相差超过 200 ms 的间期会被剔除；在建立起一个简短基线后，后续间期还必须保持在近期中位数的 20% 范围内。HRV 的 CSV 导出包含本地时间戳、已过秒数、窗口长度、RR 数量、RMSSD 和 SDNN。

## 服务条款

请注意：本应用仅用于提供信息参考。应用与网站的使用并不旨在替代专业的医疗建议，如您有任何医疗状况或医疗问题，应及时联系您的医疗保健提供者。应用与网站**不提供医学建议**，内容中没有任何部分旨在构成医学诊断或治疗的专业建议。

## 我为什么制作此应用？

我是一个热衷跑步的人，正在寻找一款适用于运动的心率监测应用。我遇到了 Polar H10，并对从该设备获取真实 ECG 数据的可能性产生了兴趣。令我惊讶的是，截至 2019 年末，App Store 上没有哪个 iOS 应用能够同时提供数据记录与显示（有一个例外，但价格偏高且功能不明确）。鉴于当时没有其他选项，而 Polar 为 H10 提供了很好的 SDK，我决定自己开发这款应用。

## 为什么采用订阅模式？

很快我发现，开发这款应用会消耗大量时间并产生实际费用。我希望收取的小额费用能够部分补偿投入的时间与成本。
该应用免费下载以便用户先行了解并连接设备，可查看几秒钟的实时图表。要激活高级功能，请购买可用的应用内购买（IN-APP 购买）之一。每个订阅均包含一周免费试用，因此所有功能都可先免费试用。我认为提供多种期限并包含一周免费试用的订阅模式是最公平的方式。也可以选择一次性付费而不使用任何循环订阅。

本应用使用优秀的 Purchase 和 PolarBle SDKs。

> **注意：** [Impressum]({{ site.de_impressum_path | relative_url }}) 与 [隐私政策]({{ site.de_privacy_path | relative_url }}) 的德文版本为具有法律约束力的版本。
