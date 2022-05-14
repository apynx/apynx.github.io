---
layout      : post
title       : Ngicipin Hugo, Static Site Framework yang Lagi Naik Daun
author      : Aping
date        : 2022-05-14 09:46:00 +0700
categories  : [GitHub]
tags        : [static site generator, hugo, jekyll, gitlab, github]
comments    : true
---
Karena urusan kerjaan, kali ini saya 'terpaksa' memakai platform Hugo untuk salah satu tugas akhir latsar CPNS. Jadi di posting ini saya bagikan keluh kesah (sementara ini) pakai Hugo untuk blogging.

Salah satu kegiatan kreatif untuk laporan aktualisasi latsar CPNS saya adalah "Membuat Buku Panduan Penggunaan Aplikasi SIPTERA secara Online". Kalo sudah berbau 'online' gini pasti ujung-ujungnya bikin situs web 😆 Memang niatnya mau bikin semacam situs *landing page*, atau dokumentasi online (*online documentation*) saja.

Setelah berpikir keras, saya memilih untuk bikin "online docs". Langkah berikutnya tentu mencari referensi desain yang sekiranya cocok. Dalam hal ini saya mengesampingkan pembuatan situs dengan Wordpress karena terlalu ribet dan mainstream, belum lagi soal hosting dan domainnya. Blogger? Bosen laah, *masak* domainnya nanti *.blogspot.com? Gak seru banget!

Pilihannya tentu jatuh ke (lagi-lagi) framework static-site. Dan Jekyll akan selalu ada di urutan pertama. Mulai lah saya mencari theme/template yang relevan. Maklum, lagi males banget dan waktunya juga gak cukup kalo harus desain dari awal. Ternyata pilihan tema dokumentasi untuk Jekyll gak banyak. Ada yang bagus dan sesuai persepsi, tapi bayar (premium).

Akhirnya saya menemukan theme yang 'kayaknya' bagus, [Edition](https://long-pig.cloudvent.net "Jekyll Product Documentation Theme"). Mulailah pasang di local dulu pakai git. Setelah terpasang sempurna dan mulai mengisi kontennya, ternyata ada beberapa masalah. Yang paling menjengkelkan sih, tidak ada cara untuk mengatur urutan kategori (*sort order by category*) konten. Jadinya nama folder dikasih nama manual berdasarkan alfabet/numeric. Gak efisien banget.

Berhubung sudah mentok, ya cari lagi lah theme lain yang sekiranya cocok. Hingga ketemulah sama theme [learn](https://learn.netlify.app/en/ " Hugo Learn Theme"). Tampilannya cantik, meskipun agak kebanyakan fitur buat saya. Ya sudah sekalian nyobain pakai Hugo lah, kapan lagi ada niat belajar kalo gak sekarang?

Cara install Hugo sangat gampang ternyata. Dan ya, lebih gampang dari Jekyll. Setelah instalasi selesai, saya baru tahu kalo secara default Hugo tidak menyediakan template apapun. Blank canvas, putih bersih tanpa noda 😲 Mungkin ini salah satu kelemahan Hugo kalo dibandingkan dengan Jekyll. Bahkan Blogger yang sama-sama 'anaknya' Google aja sudah menyediakan template default meskipun standar bangettt.

Ya sudah coba download manual theme learn dan di-ekstrak ke folder si Hugo. Mirip-mirip cara pasang theme Wordpress sih rasanya.

> Disini saya tidak akan membagikan petunjuk teknis cara install Hugo, pasang tema, de el el. Saya cuma memberi review selama penggunaan aja yaa...

Theme terpasang, waktunya coba isi konten. Saya harus bolak-balik baca manual soal Hugo dulu karena ternyata mereka memiliki manajemen konten yang berbeda. Saya harus berkali-kali trial error hanya untuk masukkan gambar ke postingan. Masih awam rasanya soal sistem organizing konten macam ini.

Kalo boleh jujur, jauh lebih menyenangkan menulis posting pakai Jekyll. Rasanya lebih sederhana dan mudah dimengerti. Entah karena faktor kebiasaan belaka, atau memang saya aja yang gagal paham soal Hugo ini.

Tapi benar kata orang. Selama kita ada niat untuk bersungguh-sungguh mengerjakan, disitu pasti ada jalan. Pelan-pelan saya mulai mengerti alur kerja framework Hugo ini, meskipun tidak banyak. Dan proses pengisian konten pun berjalan dengan baik.

Selama penggunaan sih *everything looks good*, tidak ada masalah sama sekali. Saya coba jalankan pake `hugo serve` juga lancar tanpa kendala. Giliran mau 'push' ke Gitlab, baru deh ribetnya keluar.

Jujur, dokumentasi cara deploy Hugo ke Gitlab itu minim banget. Saya coba cara yang disediakan dari official-nya juga tetap gagal. Padahal saya tidak menemukan masalah ini selama pakai Jekyll. Repotnya sih soal SSH, yang ~~sialnya~~ kebetulan saya belum memahami betul konsep deploy Hugo ke Gitlab ini.

Faktor penghambat lainnya, rata-rata dokumentasi untuk masalah yang timbul hampir selalu memakai platform Linux. Ya jelas gak nyambung lah *wong* saya pakai Windows kok 😑 Terminal yang dipakai juga cuma lewat VS Code.

Gara-gara pusing pakai Gitlab, akhirnya saya nyerah dan coba push ke Github.

Kenapa gak dari awal aja pakai Github? Gara-gara saya baca artikel; entah dimana; yang mengatakan kalo Hugo gak bisa berjalan di Github. Semacam gak support, gitu katanya.

Sesat emang yang ngomong. Saya coba pake Github ternyata bisa kok 🤬 Cuma anehnya, repository yang di push ada 2, yang satu repo berisi konten dan satunya repo berisi theme-nya. Apa ini '*remote theme*'? Kayaknya saya aja yang masih belum paham soal konsep Hugo. Kalo di Jekyll sih lumayan paham.

Yah, yang penting si Hugo dah berhasil di-deploy dan tampil di internet. Masalah lain biar aja kapan-kapan dibetulin.

> Update : Setelah Hugo dipublish lewat Netlify, saya malah nemu theme baru yang lebih simpel dan kayaknya juga cocok buat dokumentasi online. Dan itu adalah theme Jekyll... 😖