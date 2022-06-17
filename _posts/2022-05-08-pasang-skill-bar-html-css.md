---
layout      : post
title       : Cara Pasang Skill Bar Sederhana dengan HTML dan CSS
author      : Aping
date        : 2022-05-08 15:04:00 +0700
categories  : [Pemrograman]
tags        : [skill bar, progress bar, script skill bar tanpa javascript]
comments    : true
---
Dari kemarin saya kepikiran ingin memasang *skill bar* (atau *progress bar*) karena terinspirasi dari situs-situs portofolio yang dibuat dengan Hugo. Kok kesannya keren dan profesional gitu daripada cuma menampilkan *badge*. Rencananya mau saya pasang di halaman '[Tentang Saya]({{ base.url }}/tentang-saya/ "Halaman Tentang Saya")'.

Akhirnya mulailah ~~pengembaraan~~ pencarian saya pada script-script dan artikel yang membahas tentang desain skill bar. Rata-rata mereka memakai tambahan Javascript, bahkan ada yang memanfaatkan Bootstrap dan jQuery. Saya sih maunya yang simpel aja, cukup dengan HTML dan CSS biar tidak mempengaruhi performa blog secara signifikan.

Hampir semua code dan script yang bertebaran di internet saya coba. Mencari mana yang paling mudah diterapkan di blog berbasis Jekyll ini. Peringatan error yang muncul sudah tak terhitung berapa kali nongol di layar laptop.

Saya menemukan blog menarik dari mas/mbak [Thai Nhat](https://us.niemvuilaptrinh.com/article/15-examples-of-html5-progress-bar "33 Examples Of Progress Bar Javascript"){:target="_blank"}{:rel="nofollow noopener noreferrer"}. Ada yang bagus dan cocok, tapi ternyata perlu banyak perubahan untuk diterapkan di tema blog ini. Sebenarnya ada juga yang sederhana dan rapi tampilannya seperti pada tutorial W3 schools tentang [How TO - CSS Skill Bar](https://www.w3schools.com/howto/howto_css_skill_bar.asp "How TO - CSS Skill Bar"){:target="_blank"}{:rel="nofollow noopener noreferrer"} dan dari [Shantanu Jana](https://dev.to/shantanu_jana/animated-skills-bar-html-and-css-1fbl "Animated Skills Bar using HTML and CSS"){:target="_blank"}{:rel="nofollow noopener noreferrer"}, hanya saja daftar skill-nya justru memiliki rules-nya sendiri-sendiri pada CSS. Itu yang saya tidak suka. Kode CSS akan jadi panjaaang sekali.

Akhirnya setelah *trial-error* saya mendapatkan script yang bisa berjalan dengan efektif dan efisien. Jadi buat kamu yang sedang mencari cara memasang skill bar yang mudah, sederhana, dan tanpa menggunakan Javascript, jQuery, atau Bootstrap maka posting ini memang buat kamu.

### Cara Pasang Skill Bar Hanya dengan HTML dan CSS

Yuk, mula-mula tambahkan CSS berikut ya ke template blog kamu :

{% highlight css %}
.skill-container {
	padding: 20px;
	box-sizing: border-box;
	box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}
.skill {
	box-sizing: border-box;
	background: #fff;
	border-radius: 8px;	
}
.level {
	width: 100%;
	height: 15px;
	border-radius: 8px;
}
.skillbox {
	box-sizing: border-box;
	width: 100%;
	margin: 20px 0;
}
.skillbox p {
	padding: 0;
	letter-spacing: 1px;
	margin: 0 0 15px;
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;
}
.skillbox p:nth-child(2) {
	float: right;
	position: relative;
	top: -25px;
}
{% endhighlight %}

Kemudian tambahkan script berikut untuk memasang skill bar di halaman atau di postingan blog kamu :

{% highlight html %}
<div class="skill-container">
	<h3>Skills Bar</h3>
	<div class="skillbox">
		<p>HTML</p>
		<p>90%</p>
		<div class="skill">
		<div class="level" style="width: 90%; background: #2fc4b2;"></div>
		</div>
	</div>
	<div class="skillbox">
		<p>CSS</p>
		<p>80%</p>
		<div class="skill">
		<div class="level" style="width: 80%; background: #d32626;"></div>
		</div>
	</div>
	<div class="skillbox">
		<p>JavaScript</p>
		<p>85%</p>
		<div class="skill">
		<div class="level" style="width: 85%; background: #79d70f;"></div>
		</div>
	</div>
</div>
{% endhighlight %}

Seperti yang kamu lihat, ukuran bar tak lagi diatur dari *rules* CSS atau Javascript, melainkan dari *value* yang diatur oleh properti 'style:width' pada *class* 'level'. Disini akan tampak sekali betapa efisien script di atas untuk diimplementasikan.

Kalau kamu tidak suka pengaturan bar level yang berwarna-warni, hapus aja seluruh properti 'background' yang ada pada CSS inline di atas dan tambahkan properti tersebut ke CSS 'level' sebelumnya.

Contoh implementasi dari script di atas bisa kamu lihat pada Codepen di bawah ini :
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ePXqZe" data-user="apynx" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/apynx/pen/ePXqZe">
  Skill Bar Hanya dengan HTML dan CSS</a> by Mas Aping (<a href="https://codepen.io/apynx">@apynx</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Udah, gitu aja. Gampang kaan? Tentu saja kamu bisa mengubah properti dari masing-masing script di atas sesuai dengan kebutuhan kamu. Karena hanya menggunakan script HTML dan CSS aja maka script di atas bisa juga kamu terapkan di platform lain seperti Hugo, Gatsby, bahkan Blogger atau Wordpress. Semoga bermanfaat.
