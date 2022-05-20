---
layout      : post
title       : Pilih Mana? Jekyll vs Hugo
author      : Aping
date        : 2022-05-20 15:08:00 +0700
categories  : [Jekyll, Hugo]
tags        : [static site generator, hugo, jekyll, github]
comments    : true
---
Jekyll dan Hugo adalah 2 framework Static Site Generator yang populer. Berbeda dengan dulu saat saya baru mulai belajar bikin situs web sekira tahun 2004, framework situs statis memungkinkan kamu untuk menggunakan kembali (*reuse*) kode-kode tertentu dan memanfaatkan '*assets*' untuk semua halaman HTML.

### Kenapa Pakai Halaman HTML Statis?

Static site generator jadi menarik karena bisa membuat situs yang aman dan minim perawatan. Pada situs web dinamis, framework yang terpasang pada server menghasilkan halaman untuk dilihat pengguna. Ketika seorang membuka situs web, dia akan membuat request ke server, server meminta query ke database untuk mencari informasi yang ingin dilihat, menggabungkan data itu ke dalam halaman HTML, lalu menampilkan halaman itu ke layar.

Dengan halaman HTML statis, halaman sudah dirender sebelumnya sehingga server tidak melakukan apapun untuk menampilkan halaman. Ini berarti halaman HTML statis lebih cepat dibuka dan resource server jauh lebih kecil; suatu keuntungan kalau kamu memakai layanan cloud yang dikenakan biaya untuk setiap daya komputasi (*computing power*).

Halaman statis memangkas waktu pembuatan halaman sehingga dapat memuat halaman lebih cepat. Risiko keamanan juga lebih kecil karena minim disusupi dan dieksploitasi oleh hacker. Halaman HTML statis mudah di-*cache* jadi bisa disajikan dari layanan CDN (*Content Delivery Networks*), membuat waktu respon menjadi lebih cepat lagi.

Karena halaman statis tidak butuh server untuk melakukan query database, kamu bisa memasangnya di hosting yang paling murah seperti Amazon S3 atau di GitHub Pages.

### Static Site Generator

Saya dulu membuat halaman web statis di Frontpage atau Dreamweaver, menyimpannya di disket lalu upload ke hosting gratisan seperti Geocities atau 000webhost. Kalau ada 1 halaman web diubah layoutnya, maka semua halaman harus diubah satu per satu secara manual. Sungguh repot dan melelahkan.

Tapi sekarang dengan hadirnya static site generator, semuanya jadi jauh lebih mudah dan cepat. Kamu bisamembuat halaman baru dengan template yang sudah ada atau memodifikasi semua halaman sekaligus.

Jekyll menjadi salah satu pioneer static site generator, Hugo baru muncul 5 tahun setelahnya. Itu sebabnya Jekyll punya lebih banyak pengguna dan dokumentasi yang ada juga super lengkap. Rata-rata, apapun pertanyaanmu soal Jekyll pasti ada jawabannya di internet.

### Hugo vs Jekyll

Dengan static site generator Jekyll atau Hugo, kamu bisa punya situs web dalam waktu kurang dari 30 menit. Kalau kamu benar-benar awam dan mulai dari nol, Hugo lebih gampang dipasang. Di Jekyll, kamu harus menginstall beberapa prasyarat seperti Ruby terlebih dahulu. Sedangkan Go yang jadi syarat instalasi Hugo sudah di-bundle secara default.

Setelah terpasang, kamu bisa mulai membuat konten seperti posting artikel dengan HTML atau Markdown. Konten yang ada akan digabung dengan template HTML untuk membungkus dan menatanya sehingga menghasilkan halaman HTML statis untuk ditampilkan di web.

Baik Jekyll maupun Hugo memungkinkan kamu untuk menambahkan variabel ke konten dengan menggunakan markup YAML atau TOML, dan menggunakan file data dalam format umum seperti JSON dan CSV. Yang paling asyik, keduanya juga bersifat open source, jadi kamu setidaknya dapat merasakan kemampuannya dalam jangka panjang plus bisa ikut berkontribusi ke dalam pengembangan ke depannya.

Lalu apa yang menjadi pembeda? Perbedaan paling mendasar diantara kedua framework itu adalah bahasa pemrograman di belakangnya. Jekyll ditulis dalam **Ruby**, bahasa pemrograman populer yang merupakan salah satu bahasa pertama yang datang dengan framework mandiri. Hugo ditulis dalam bahasa pemrograman **Go** yang dikembangkan oleh Google dengan fokus pada kemampuan multi-eksekusi, sangat optimal untuk diterapkan di lingkungan cloud dimana daya komputasi didistribusikan ke banyak perangkat.

Setiap framework memiliki setting berbeda tergantung bahasa pemrograman yang mendasarinya. Jekyll menawarkan dukungan untuk CoffeeScript dan SASS/SCSS. Hugo mendukung TOML dan Markdown JSON dalam file konten, meskipun sebenarnya juga mendukung SASS dan SCSS meski kamu harus menyiapkan beberapa syarat tambahan.

### Dukungan Template

Salah satu keunggulan Jekyll adalah kemudahan penggunaannya, dokumentasi yang dikembangkan dengan baik, dan dukungan kuat dari organisasi besar seperti GitHub. Jekyll dirilis pertama kali pada tahun 2008 dan memulai tren baru pada situs HTML statis. Hugo dirilis pada tahun 2013 tapi kurang populer sehingga memiliki ekosistem plug-in dan template yang kurang berkembang; setidaknya sampai tulisan ini dibuat.

Sebagai contoh, GitHub menawarkan sekurangnya 1.200 tema kekalahan untuk Jekyll yang bisa kamu pilih, sementara Hugo hanya memiliki 370 saja. Dengan ini saja kamu pasti bisa membayangkan akan mudah menemukan tema dengan tampilan sesuai dengan keinginan jika kamu memakai Jekyll. Jekyll didukung oleh GitHub, jadi kalau kamu ingin gampang dan gratis tinggal gunakan saja Jekyll di GitHub Pages.

Perbedaan lain antara Jekyll dan Hugo adalah pada setup awal. Dengan perintah dasar ```jekyll new situs-baru-saya``` Jekyll akan membuatkan kamu situs baru dengan theme dasar. Sedangkan Hugo dengan perintah ```hugo new site situs-baru-saya``` hanya akan menghasilkan struktur folder dan file archetype (pola dasar). Sederhanya, dengan Jekyll kamu bisa langsung bekerja tapi dengan Hugo kamu hanya melihat layar kosong menunggu yang untuk menambahkan theme atau template.

Memang sih, Hugo bisa jadi sangat cocok untuk kamu yang benar-benar ingin memulai semuanya dari awal (*scratch*) dan tidak ingin ada tambahan file/plug-in yang 'tidak penting'. Tapi Jekyll jelas memiliki cara yang jauh lebih cepat untuk kamu melihat konten yang bisa dikerjakan.

### Soal Kecepatan

Salah satu fitur menonjol dari Hugo adalah kecepatannya. Berfokus pada konkurensi (multi-proses pada saat yang bersamaan) dari bahasa pemrograman Go yang efisien membuat sebuah blog dengan ribuan posting dan gambar akan dapat menghasilkan halaman HTML statis yang lebih cepat.

Ini berbeda dengan Jekyll dimana semakin banyak jumlah posting atau gambar yang kamu miliki seiring waktu maka akan membuat performanya semakin melambat.

Hugo dapat me-render perubahan yang dibuat pada template atau konten dengan lebih cepat. Perbedaan kecepatan ini terlihat bahkan jika jumlah halaman kamu sedikit, dan jadi signifikan saat kamu sudah membuat lebih banyak halaman konten.

### Keunggulan Hugo

Kelebihan Hugo yang membuatnya banyak digunakan orang dari seluruh dunia adalah dukungannya terhadap multi-bahasa (*internationalization*). Dengan begitu, kamu bisa membuat konten untuk setiap bahasa yang berbeda di dunia. Hugo juga menawarkan pemrosesan gambar yang canggih, menu bawaan, site mapping, dan live reloading setiap kamu selesai melakukan penyimpanan file.

Kamu memang bisa mendapatkan hasil yang sama di Jekyll, tapi tentu butuh lebih banyak *effort* untuk menyiapkannya. Di Jekyll, fitur-fitur unggulan Hugo hanya bisa didapat dari plug-in. Jadi kalau kamu membuat halaman situs yang rumit, sebenarnya akan lebih baik kalau sudah tersedia secara built-in.

### Hosting

Cara hosting Jekyll dan Hugo sangat gampang. Tapi dalam hal ini Jekyll menjadi pemenang. Jekyll dan GitHub Pages memiliki hubungan yang erat dan lama. itu berarti menerapkan proyek Jekyll ke GitHub Pages menjadi sangat sederhana dan cepat, cocok untuk kamu yang baru belajar atau sekedar coba-coba.

Tapi secara umum, kamu punya dua opsi untuk meletakkan file di hosting:
1. Kamu bisa menjalankan framework secara lokal lalu mengunggah hasilnya ke server. Bisa dengan cara manual atau menginstruksikan beberapa layanan untuk mengambil HTML Anda yang sudah diperbarui.
2. Kamu bisa menginstall static site generator di komputer cloud, menjalankan perintah untuk pembuatan konten, lalu menyajikan file yang sudah dibuat. Ini cara kerja layanan seperti Amazon Amplify, CloudCannon, dan Netlify.

### Mana yang Harus Dipilih?

Jekyll dan Hugo keduanya cocok untuk blog, situs portofolio, portal berita, dan sebagainya. Keduanya dapat menghasilkan halaman HTML statis dengan menggabungkan konten yang ditulis dalam bahasa Markdown template HTML.

Jekyll memiliki proses penyiapan tercepat, lebih banyak pilihan template, dan menawarkan pengalaman yang menyenangkan saat baru memulai. Tetapi Jekyll bisa mulai terasa lambat setelah kamu memiliki jauh lebih banyak konten. Pengaturan awal Hugo lebih rumit, tetapi dapat menangani situs yang memiliki konten lebih besar dengan kecepatan lebih tinggi.

Kalau kamu ingin segera mulai menulis blog atau bikin situs, Jekyll sangat cocok. Tapi kalau kamu mengantisipasi akan menulis banyak konten, menyukai kecepatan dan fitur lebih banyak, Hugo akan membuat pengalamanmu lebih menyenangkan.