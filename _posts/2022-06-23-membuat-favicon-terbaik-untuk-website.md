---
layout          : post
title           : Membuat Favicon Terbaik untuk Website
author          : Aping
date            : 2022-06-23 12:18:00 +0700
categories      : [Blogging]
tags            : [favicon terbaik, favicon terbaik untuk website, membuat favicon, membuat favicon online, membuat logo favicon online, membuat favicon html, membuat favicon di html, membuat favicon di web]
comments        : true
---
Membuat favicon itu gampang! Kamu hanya perlu menyiapkan sebuah gambar yang menunjukkan 'brand' website/blog kamu dalam bentuk persegi dan ukuran yang kecil seperti 16px, 32px, 48px, sampai maksimal 512px. Tapi bagaimana cara membuat favicon terbaik untuk website kamu?

### Apa itu Favicon?

Buat yang belum tahu, favicon adalah ikon utama atau logo yang muncul di samping URL website/blog. Beberapa orang menyebut favicon sebagai shortcut icon, website icon, URL icon, atau bookmark icon. Umumnya, file favicon memiliki nama ```favicon.ico``` meski ada juga yang menggunakan format PNG, GIF, bahkan JPG.

### Standar Favicon menurut Google

Dalam dokumentasi resminya, Google memberikan sebuah guideline atau aturan yang mnejadi standarisasi format favicon di search engine mereka. Berikut adalah syarat-syaratnya:

* Kamu hanya bisa memiliki 1 favicon untuk website/blog kamu sesuai dengan domain/hostname yang digunakan. Contoh, [https://aping.my.id](https://aping.my.id) dan [https://demo.aping.my.id](https://demo.aping.my.id) adalah 2 situs yang berbeda, maka kamu bisa menggunakan favicon sendiri-sendiri. Sedangkan [https://aping.my.id/kategori](https://aping.my.id/kategori) adalah subdirektori dari situs utama [https://aping.my.id](https://aping.my.id), maka kamu hanya bisa menggunakan 1 favicon saja.

* File favicon harus bisa diakses oleh engine crawler dari mesin pencari, kamu dilarang mengecualikan pengindeksan untuk file tersebut.

* Agar dapat memudahkan orang unutk mengenal situs kamu, pastikan favicon bisa merepresentasikan merk atau ciri khas situs kamu.

* Ukuran favicon harus persegi dengan resolusi minimal 48px, 96px, sampai 512px. Google tidak menerima favicon dalam format SVG karena tidak punya ukuran spesifik. Google akan melakukan rescale/resize favicon secara otomatis ke ukuran 16px pada halaman hasil pencarian, jadi kamu tidak perlu upload banyak file dalam beragam ukuran yang berbeda.

* Alamat URL favicon harus selalu tetap dan tidak pernah berubah.

* Sistem Google akan secara otomatis mengubah favicon kamu ke tampilan default jika kamu menggunakan material yang dianggap berkaitan dengan pornografi atau mengungkapkan ujaran kebencian.

### Cara Pasang Favicon di Website

File favicon biasanya diletakkan di bagian utama situs (root) dan dipanggil melalui script yang disimpan dalam tag ```<head>```. Berikut adalah beberapa contoh script untuk pemasangan favicon di website:

{% highlight html %}
<link rel="shortcut icon" href="http://example.com/favicon.ico" />
<link rel="icon" type="image/vnd.microsoft.icon" href="http://example.com/favicon.ico" />
<link rel="icon" type="image/png" href="http://example.com/favicon.png" />
<link rel="icon" type="image/gif" href="http://example.com/favicon.gif" />
{% endhighlight %}

Aplikasi-aplikasi editing gambar standar biasanya agak kesulitan untuk mengubah gambar biasa menjadi favicon. Tapi kamu tidak perlu khawatir, ada banyak kok sistus-situs online yang menyediakan layanan konversi gambar biasa menjadi favicon secara gratis. Saya menemukan situs yang bisa menghasilkan favicon terbaik. Yakni **FavIcon.pro**.

Cara pakainya sngat mudah. Kamu cukup mengunjungi situs [Favicon Pro](http://www.favicon.pro/ "Favicon Pro") kemudian upload file gambar yang akan diubah mnejadi favicon dengan cara klik tombol 'Choose File'. File gambar boleh dalam ukuran atau format apa saja asalkan berbentuk persegi. Kalau bukan persegi? Di-crop dulu yaa..

![Cara Membuat Favicon Terbaik](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoI7RPzG2UQJjcYSLxrTQid-yJybFhFKEqtIkSXWE8_DmXDs2SsWqHmxcFv5Eo78ehBKxujx1QibjgSKjgQuip070FKW0O5OPxOfQuUKoCnW1wuzgRPyrLiBCnihdUSmkPtILaCaYacvpJ9UkCOEVD3lyHCd8Fxef9KqW4ftV31pSG9MGEdYXXFe85zA/s1600/favicon.-pro.png "Cara Membuat Favicon di Website"){:width="348" height="133" loading:"lazy" .center}

Langkah berikutnya, tentukan ukuran file favicon yang akan di-*generate* ke 48px x 48px lalu klik tombol **Submit**. Taraa!! File favicon sudah langsung dihasilkan secara otomatis dan tersimpan di komputer kamu. Upload file tersebut ke direktori root website/blog kamu.

Terakhir, tambahkan script berikut di bagian header terutama setelah ```<head>``` :

{% highlight html %}
<link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">
{% endhighlight %}

Simpan, lalu lihat hasilnya. Semoga membantu.
