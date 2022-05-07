---
layout      : post
title       : Kenapa Pindah ke Jekyll
author      : Aping
date        : 2022-05-03 21:00:00 +0700
categories  : Jekyll
tags        : [jekyll, pindah ke jekyll, migrasi jekyll]
comments    : true
---
Alasan saya beralih dari platform CMS populer seperti Blogger dan Wordpress cuma satu, *Bosan*. Rasa-rasanya sudah terlalu mainstream dan jenuh.

Blogger itu sederhana, simple, dan mudah digunakan. Hampir sempurna buat saya. Tapi banyaknya batasan dalam mendesain halaman karena hanya menyediakan 1 buah file XML yang bisa diedit membuat saya malas. Yang paling membuat tidak 'sreg' adadlah soal permalink yang tidak bisa diubah sama sekali. Pakem. Mau mengikuti format standar, oke. Tidak mau ya sudah, silahkan minggat.

Kalau Wordpress jangan ditanya, fiturnya komplit! ***Palugada***, *Apa Lu Mau Gua Ada*. Theme-nya bejibun. Plugin-nya seabreg. Fitur kustomisasinya luar biasa. Tapi akhirnya jadi bingung sendiri.

Coba aja kalau kamu mau modifikasi WP theme yang sudah ada. Para pemula pasti langsung pusing tujuh keliling. Banyak sekali yang perlu diubah. Ujung-ujungnya waktu terbuang cuma untuk gonta-ganti atau memodifikasi template. Atau malah jadi galau gara-gara bingung memilih mau pakai plugin A atau B?

Tapi yang pasti, waktu pemuatan (*load time*) halaman pada semua CMS termasuk lambat. Itu wajar karena rata-rata CMS akan meminta banyak sekali request eksternal. Memanggil script-script eksternal seperti jQuery, Bootstrap, FontAwesome, Adsense, Google Analytic, HitCounter, dll.

Sedangkan SSG seperti Jekyll dan Hugo rata-rata bisa tampil dibawah 1 detik, alias cuma dalam hitungan milidetik aja situs/blog kamu sudah bisa terbuka. Kan **wow banget** gituu.

Tapi kan Wordpress bisa cepat tuh sampai dibawah 1 detik? Iya, asalkan memasang plugin cache yang bagus. Toh ujung-ujungnya yang di-*generate* juga HTML statis. Lalu kenapa tidak dari awal aja bikin static web sekalian?

Saya tergolong orang yang terobsesi pada *loading time* ini. Banyak situs web dan blog yang saya handle memiliki waktu pemuatan kurang dari 1 detik, tentunya dengan banyak sekali optimasi di sana-sini. 

Makanya kehadiran platform Static-Site Generator seperti Jekyll ibarat membuka cara pandang baru buat saya. Rasanya, ibarat menemukan kendi emas di bawah kaki pelangi.

Sebagai seorang Front-End Developer selama bertahun-tahun, urusan modifikasi theme website sudah jadi makanan sehari-hari. Adaaa aja yang perlu diubah atau diperbaiki. Alhasil konten blognya stagnan hanya itu-itu aja. Tidak ada perkembangan.

Karena keseringan edit-edit template, akhirnya bosan dan ditinggalkan. Begitulah siklus yang terjadi selama bertahun-tahun pada blog dan situs yang saya buat. Poin plusnya sih, saya jadi semakin paham dan mendapat banyak pengalaman untuk modifikasi atau redesign template situs web. Poin minusnya, konten blognya kagak nambah-nambah :D

### Kenapa Memilih Jekyll?

Lalu kenapa saya memilih Jekyll daripada *static-site generator* lainnya seperti Next.js, Hugo, atau Gatsby? Sejujurnya sih, Jekyll dan Gatsby itu yang pertama kali saya tahu dan pelajari. Next.js terlalu rumit jika hanya sekedar membuat blog sederhana. Sedangkan Hugo memang saya sudah tertarik untuk mencoba, mungkin di lain waktu.

Dari semuanya, yang paling simple sih memang Jekyll. Buat kamu yang awam atau pemula sekalipun bisa langsung punya situs atau blog sendiri dalam hitungan menit. Tinggal daftar GitHub, pilih theme yang sekiranya cocok dan klik tombol '**Fork**'. Voilaaa, theme itu sudah langsung masuk ke repositori kamu. Atur GitHub Pages, dan situs kamu langsung tampil di internet. Semudah itu.

Pilihan temanya juga lumayan banyak, dari yang gratis sampai berbayar juga ada. Kamu bisa memilih tema yang paling sederhana agar bisa fokus pada konten, atau memilih tema dengan tampilan yang mewah dan *eye-catching* juga ada. Sesuai selera lah yaa.

Saat posting ini dibuat, saya memakai tema [Ockham](https://github.com/zivong/ockham "Ockham is a content-first minimalist Jekyll blog theme") buatan Song-Zi Vong. Tema yang sangat sederhana tapi sudah cukup memenuhi kebutuhan saya untuk urusan blogging. Tema ini sudah dilengkapi dengan mode terang dan gelap (*dark mode*) secara otomatis yang menyesuaikan dengan setting perangkat. Temanya juga sudah responsive, mendukung SEO, sitemap, dan menerapkan *color scheme* Open Color.

Sayang tema sebagus ini belum dilanjutkan lagi pengembangannya jadi saya harus melakukan redesign pada beberapa bagian dan menambah plugin agar bisa seperti sekarang ini. Namun apapun yang terjadi semoga aja dengan blog baru ini saya lebih bersemangat dalam menulis. Salam.
