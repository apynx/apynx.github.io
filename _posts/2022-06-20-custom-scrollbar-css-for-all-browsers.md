---
layout          : post
title           : Custom Scrollbar CSS for All Browsers
author          : Aping
date            : 2022-06-20 13:35:00 +0700
categories      : [Pemrograman]
tags            : [custom scrollbar css for all browsers, custom scroll bar, custom scrollbar tailwind, custom scrollbar css codepen, custom scrollbar react, custom scrollbar codepen, custom scrollbar css for div, custom scrollbar firefox, custom scrollbar in Jekyll]
comments        : true
---
Habis surfing di Youtube kok saya terpikat dengan desain scrollbarnya. Tampak minimalis, tapi juga modern seperti tampilan scrollbar halaman web di Android. Saya penasaran gimana hasilnya kalau diterapkan di blog ini? Yuk kita coba!

Untuk mengubah tampilan scrollbar halaman blog sebenarnya sangat gampang. Kenapa? Karena kita cuma menambah beberapa baris script CSS saja. Kamu tidak perlu pusing tentang script scrollbar JS. Script ini work di semua web browser, minimal pada versi terbaru, seperti pada Google Chrome dan Opera.

Saya menulis posting ini sekaligus buat catatan siapa tahu besok-besok mau ganti theme maka saya sudah punya backup-nya.

### Pasang Custom Scrollbar CSS untuk Semua Web Browser

Caranya sederhana, kamu cukup tambahkan baris script berikut pada file CSS web/blog kamu:

{% highlight css %}
/* Custom Scrollbar by Aping.my.id */

::-webkit-scrollbar {
  background: transparent;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  background: #606060;
  border-radius: 100px;
}
{% endhighlight %}

Sudah, gitu aja. Gampang kaan?

Tampilan scrollbar yang berubah bukan cuma untuk halaman web aja ya, tapi juga berlaku pada iframe, text box, sampai 'code' section jika kamu menonaktifkan fungsi wrap text. Selamat mencoba.
