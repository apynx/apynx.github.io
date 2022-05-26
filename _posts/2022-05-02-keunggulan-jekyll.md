---
layout      : post
title       : Keunggulan Jekyll
author      : Aping
date        : 2022-05-02 19:39:06 +0700
last_modified_at:   2022-05-25 13:52:00 +0700
categories  : Jekyll
tags        : [jekyll, keunggulan jekyll, kelebihan jekyll, kenapa memilih jekyll]
comments    : true
---
Di postingan ini saya akan menuliskan apa yang menjadi keunggulan Jekyll jika dibandingkan dengan platform blogging lain seperti Blogger, Wordpress, Joomla, dan sebagainya. Tentunya jika dilihat dari sudut pandang saya sendiri yaa.

### Jekyll itu Ringan

Poin yang menjadi daya tarik utama Jekyll sebagai platform blogging yang mumpuni adalah sangat ringan. Saking ringannya, Jekyll dapat di-host di penyedia hosting Git gratisan seperti GitHub, GitLab, dan sebagainya. Kenapa bisa seperti itu? Karena Jekyll sangat minim *resources* dan tidak menggunakan pengolahan data di sisi server seperti database.

Buat pemula atau orang yang baru belajar bikin situs web, Jekyll cukup nyaman. Kamu bisa sepenuhnya fokus pada konten yang akan dibuat. Kekurangannya yang paling dasar adalah tidak adanya tampilan GUI untuk mengatur layout konten; meskipun kamu bisa menggunakan layanan [Forestry](https://forestry.io "Forestry").

Tapi secara umum kamu harus menghapal syntax-syntax Markdown untuk membuat efek tulisan *miring*, **tebal**, [membuat link](#), dan sebagainya. Jadi kamu bakal akrab sama tools-tools seperti Notepad++, Vim, Sublime Text, atau VS Code.

Di balik ringannya Jekyll dan SSG lainnya, kamu harus membayar dengan prosesnya yang cukup ribet. Ada beberapa proses yang perlu dilewati sebelum konten yang kamu buat dapat tampil di internet. Hal ini sangat jauh berbeda kalau kamu memakai CMS popular seperti Blogger atau Wordpress yang tinggal klik '*Publish*' aja.

### Super Ngebut

Memang sih performa Jekyll tidak sebaik Hugo apalagi Gatsby yang hampir tanpa loading. Tapi buat saya pribadi jika dibandingkan dengan CMS populer seperti Blogger, Wordpress, Joomla, apalagi CMS e-Commerce seperti OpenCart, dll maka performa Jekyll SUPER NGEBUT!

Liat aja hasil performa dari GTmetrix berikut ini, rasanya sudah mewakilkan pernyataan saya soal kecepatan loading blog Jekyll yang mengagumkan:

![Performa GTMetrix Aping.my.id 1](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWTXeNcFNtdolsnXAr-2xGL93ozbAOiXSlnBIgiBFD3y2EffeAFdjD7pM0VCMW8UcZXW2VhNqorRX8qkVMnrvjcXcqn5u7MOhJWppugGjBHVOL_uYzQjQXzD5hCM7Z3mzrL5wXjE5XUpsjom-NkRQjNsOpHUdVjWKyCDQ9W8M3DdVQhYlEl4m-13c0GQ/s812/performa-gtmetrix-aping-my-id-1.png "Performa GTMetrix Aping.my.id 1"){:width="812" height="550" .center}

![Performa GTMetrix Aping.my.id 2](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvabC9qoLSKBExYNcCwplXjCjbMI36vGFKNVxgw00nKrHtmM8N--CNAdkxsx4Y7t1tmVVyED5sGW2kexHqAp0ZGl_nVZ9IeAeyv3hnMSsPnJP1DasiuIrQ72JEH4TL0ga2OCOLpMeIP54WSDpBsOPoTdsQXWnZvTo_qHdVM5sUsDSbV6iZzx5VzlgNgg/s693/performa-gtmetrix-aping-my-id-2.png "Performa GTMetrix Aping.my.id 2"){:width="691" height="693" .center}

Memang sih, performa yang sama pernah saya capai dengan Blogger. Tapi butuh banyak sekali optimasi dan penerapan *lazy-load* yang hampir '*gila-gilaan*'. Sedangkan di Jekyll, performa setinggi itu bisa didapatkan dari setting default aja.

![Performa GTmetrix Blogger Old](https://1.bp.blogspot.com/-mjb2jsydNZA/XUza2XMTqoI/AAAAAAAABkE/GzvESCwpt10nZTthhbjVCdsihkNJxwT_QCLcBGAs/s1600/pickmypics.jpg "Performa GTmetrix Blogger Old"){:width="629" height="480" .center}

### Bisa Posting dan Edit secara Offline

Salah satu keunggulan *static-site generator* macam Jekyll ini adalah kemampuan untuk melakukan posting, edit, hingga hapus posting secara offline alias tidak membutuhkan koneksi internet. Tapi tentu saja, agar 'versi web' bisa ikut berubah/terupdate maka kita harus melakukan *push/commit* secara manual dengan koneksi internet.

Hal ini sangat berbeda dengan Blogger atau Wordpress yang mewajibkan kamu harus selalu online saat membuat posting baru, mengedit tulisan, ataupun saat ingin menghapus sebuah postingan.

Meskipun kesannya ribet, buat saya inilah cara paling nyaman. Saya tetap bisa fokus membuat konten saat tidak ada koneksi internet. Dan melakukan '*push*' ke GitHub saat koneksi sudah tersedia agar situs blog bisa terupdate.

### Update Dimana Aja

Saya paling suka sih sama fitur ini. Kalau dulu saya harus mengetik posting di Google Keep baru di-upload ke CMS seperti Blogger/WP sewaktu tidak ada PC/laptop. Maka dengan static-site begini saya jadi lebih mudah. Ada banyak sekali aplikasi yang bisa digunakan untuk bikin posting baru lewat aplikasi android/apple.

Saya pribadi pakai aplikasi android 'QuickEdit' versi gratis untuk sekedar menulis posting baru ataupun melakukan editing pada file-file yang sudah ada.

