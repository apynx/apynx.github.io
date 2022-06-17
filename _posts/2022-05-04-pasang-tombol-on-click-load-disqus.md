---
layout      : post
title       : Pasang Tombol On-Click Load Komentar Disqus
author      : Aping
date        : 2022-05-04 18:54:00 +0700
categories  : [Framework]
tags        : [sembunyikan disqus, show hide disqus, tombol on click load disqus]
comments    : true
---
Mumpung masih inget keburu lupa, sekarang saya akan bagikan cara memasang tombol *on-click load* komentar Disqus di situs static seperti Jekyll. Saya sudah mencari kemana-mana dan akhirnya menemukan caranya. Hasil dari implementasi script dapat dilihat pada bagian bawah tulisan ini.

### Kenapa Pasang Komentar Disqus?

Sebenarnya saya lebih suka kalau sebuah situs tanpa fitur komentar. Berasa lebih bersih. Tapi apa hendak dikata, bukan 'blog' namanya kalau cuma satu arah. Blog menjadi tren justru karena *commenting system*-nya, adanya interaksi antara penulis dan pengunjung. Itu yang saya pelajari belasan tahun lalu mengenai kenapa blog menjadi sebuah gaya hidup baru. Sumbernya lupa.

Dan untuk static web seperti Hugo, Jekyll, Gatsby, dan sebagainya Disqus adalah platform layanan komentar paling populer. Disqus dipuji karena fleksibilitas dan keluwesannya untuk dapat tampil di beragam jenis situs web. Dari berbasis CMS seperti Blogger, Wordpress, Joomla, hingga ke *static-site generator* (SSG).

### Menyembunyikan Kolom Komentar Disqus

Dibalik fleksibilitas dan kemampuannya dalam memanajemen komentar yang masuk, Disqus tergolong sangat berat dijalankan. Disqus me-load banyak *external request* dari baris-baris perintah agar dapat menampilkan komentar. Itu sudah termasuk banyak request ke aplikasi pihak ketiga dan situs tracker. Akibatnya, komentar Disqus dapat membuat situs web menjadi lebih lambat dibuka dan mengganggu kenyamanan pembaca.

Solusinya gampang, **hapus saja Disqusnya**. Tapi nanti jadi tidak sesuai tema tulisan ini. Hehehe.

Itu memang cara paling mudah. Tapi sebenarnya ada kok cara lain, yakni dengan menyembunyikan kolom komentar Disqus sebelum dipanggil atau dengan cara menunda pemuatan (*lazy-load*) script Disqus. Untuk cara terakhir, saya belum menemukan cara yang ampuh untuk dipasang di Jekyll. Kalo buat Blogger atau WP *mah* banyakk.

Lalu bagaimana cara menymbunyikan komentar Disqus di Jekyll dan *static-site generator* lain? kamu cukup memasang script berikut ini di '_layouts/post.html' atau di bagian manapun yang kamu pakai untuk menampilkan komentar Disqus:

{% highlight html %}
<div class="comments-block">
    <button id="show-comments" onclick="disqus();return false;">Tampilkan Komentar</button>
</div>

<div id="disqus_thread"></div>

<script>
var disqus_loaded = false;
var disqus_shortname = 'xxxxx'; //Ganti dengan username Disqus kamu

function disqus() {

    if (!disqus_loaded)  {
        disqus_loaded = true;

        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
        (document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0])
        .appendChild(e);

        //Sembunyikan tombol setelah diklik
        document.getElementById("show-comments").style.display = "none";
    }
}

//Buka komentar sesaat setelah diklik
var hash = window.location.hash.substr(1);
if (hash.length > 8) {
    if (hash.substring(0, 8) == "comment-") {
        disqus();
    }
}

//Hapus baris ini untuk mencegah crawling dari search engine
if(/bot|google|baidu|bing|msn|duckduckgo|slurp|yandex/i.test(navigator.userAgent)) {
   disqus();
}
</script>
{% endhighlight %}

Jangan lupa ganti '**xxxxx**' dengan akun Disqus kamu lalu klik tombol simpan. Oh iya, jika kamu menemukan script berikut di 'post.html' bisa dihapus saja agar tidak bentrok:

```    {% if page.comments %}
        {% include disqus.html %}
    {% endif %}```

Sekarang script sudah bisa berjalan dengan baik, tapi tampilan tombolnya terlihat tidak bagus. Kamu bisa mempercantiknya dengan CSS berikut:

{% highlight css %}
#show-comments {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 20px;
    margin: 0px 0px;
    width: 100%;
}
{% endhighlight %}

Sampai disini sih seharusnya komentar Disqus sudah bisa disembunyikan. Silahkan dicoba.
