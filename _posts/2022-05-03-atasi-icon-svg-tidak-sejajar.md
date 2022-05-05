---
layout      : post
title       : Mengatasi Icon SVG Tidak Sejajar
author      : Aping
date        : 2022-05-03 15:32:06 +0700
categories  : CSS
tags        : [svg, svg inline, svg agar sejajar, cara pasang svg, ganti fontawesome dengan svg]
comments    : true
---
Ketika saya mengutak-atik theme Jekyll dari Ockham ini saya menyadari bahwa theme ini menggunakan icon dari Font-Awesome. Padahal saya paling anti karena beban *load* dan *resource* yang tinggi dari CSS eksternal. Solusinya ya menghapus script Font Awesome dan mengganti icon dengan jenis SVG.

Beruntung Font Awesome berbaik hati menyediakan varian SVG dari setiap icon-nya sehingga saya tinggal *copy-paste* aja. Tapi masalah muncul yakni posisi icon SVG tidak sejajar (*inline*) dengan teks. Jadi apabila ada icon SVG yang berada di tengah-tengah teks seperti ini <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18px" height="18px" fill="var(--body-color)"><path d="M15 1C13.3-.7 6 5 6 5H2L0 7l2 2 1 1-2 2 3 3 2-2 1 1 2 2 2-2v-4s5.7-7.3 4-9zM2.7 8.3L1.4 7l1-1H5L2.7 8.3zm7.3 5.3l-1 1-1.3-1.3L10 11v2.6zm.3-4.3L7 12.6l-.3-.3-.7-.7-.7.7L4 13.6 2.4 12l1.3-1.3.7-.7-.7-.7-.3-.3 3.3-3.3c2-1.6 5.8-4.1 7.4-4.1h.2c.4.7-1.2 4.2-4 7.7z"/><path d="M11 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM1 15H0v1h1v-1zM2 14H1v1h1v-1zM1 13H0v1h1v-1zM3 15H2v1h1v-1z"/></svg> maka biasanya posisi icon akan lebih naik ke atas alias mengambang.

Buat para master dan yang sudah biasa dengan CSS ini bukan masalah, tapi saya yakin banyak pemula yang kelabakan bagaimana cara mengatasinya. Padahal solusinya gampang kok. Cukup tambahkan script berikut pada CSS utama theme kamu :

{% highlight css %}
svg {
    vertical-align: -3px;
}
{% endhighlight %}

Kamu bisa mengubah *value* dari vertical align untuk disesuaikan dengan theme yang kamu pakai. Gampang kaaann...
