---
layout      : post
title       : Membuat Gambar di Tengah Postingan pada Jekyll
author      : Aping
date        : 2022-05-26 14:08:00 +0700
categories  : [Framework]
tags        : [tips jekyll, gambar jekyll, jekyll framework]
comments    : true
---
Hari ini saya akan posting tips sederhana bagaimana cara membuat posisi gambar ada tengah tulisan pada Jekyll. Dari kemarin saya sudah utak-atik segala cara selalu gagal. Akhirnya setelah cari info sana-sini saya mendapatkan caranya.

Untuk membuat posisi gambar ada di tengah postingan sebenarnya cukup mudah. Salah satu solusinya, kamu bisa menggunakan tag HTML biasa ```<img src="gambar.jpg" style="text-align: center">``` tapi repotnya itu kalo kamu benar-benar ingin pure Markdown. Ternyata solusinya cukup gampang. Yuk dicoba!

Pertama, tambahkan gambar ke dalam postingan dengan kode berikut:

```
![Alt Gambar](/gambarmu.jpg "Gambar Title")
```

Biasanya gambar yang muncul akan berada di sebelah kiri seperti ini:

![Aping Blog](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiguR3zEEjaLHBHO0EvX4GuYpiFM1q2yA3llsmg2MjOlZQsOddOddxBS7BbMzdCx7DA6Jn-HoFSPIuKe3NwtYbweE49_fEcTwFBTlWYt8NaMYsiL2t5aeLTJY86Itu3Vc61OkkUmLLl1Y3nkmrSO5_y7c--KCOyzZ2Uv8UuM6Ezq7GCs0vcJPI4Q7f-2Q/w200-h200/avatar.png "Aping Blog"){:width="200" height="200" loading:"lazy"}

Lalu tambahkan kode berikut pada akhir baris kode di atas:

```
{: .center}
```

Jadi lengkapnya akan jadi seperti ini:

```
![Alt Gambar](/gambarmu.jpg "Gambar Title") {: .center}
```

Sekarang tambahkan CSS berikut:

{% highlight css %}
.center {
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
  float: none !important;
}
{% endhighlight %}

Simpan, lalu lihat perubahannya. Sekarang gambar kamu akan berada di tengah-tengah postingan seperti yang diharapkan. Selamat mencoba!

![Aping Blog](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiguR3zEEjaLHBHO0EvX4GuYpiFM1q2yA3llsmg2MjOlZQsOddOddxBS7BbMzdCx7DA6Jn-HoFSPIuKe3NwtYbweE49_fEcTwFBTlWYt8NaMYsiL2t5aeLTJY86Itu3Vc61OkkUmLLl1Y3nkmrSO5_y7c--KCOyzZ2Uv8UuM6Ezq7GCs0vcJPI4Q7f-2Q/w200-h200/avatar.png "Aping Blog"){:width="200" height="200" loading:"lazy" .center}

