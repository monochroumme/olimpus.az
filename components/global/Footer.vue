<template>
	<footer class="footer">
		<div class="custom-container footer__content">
			<div class="footer__pic-info">
				<img class="footer__pic" src="~/static/pics/logo.png">
				<div class="footer__info-area">
					<nuxt-link to="/" class="footer__title-area">
						<!-- <span class="main-title footer__title">OLIMPUS</span> -->
						<img src="~/static/pics/logo-text.png" class="main-title">
						<span class="main-subtitle footer__subtitle">idman ayaqqabıları və idman tərzi geyimlər</span>
					</nuxt-link>
					<div class="footer__info">
						<div class="footer__info__item">
							<span class="footer__info__address">Ünvan:</span>
							<a target="_blank" :href="$store.state.mapData.googleMapsLink">
								<img src="~/static/svg/google-maps.svg" class="footer__info__google-map">
								<span>Bakı şəhəri, Bakıxanov qəsəbəsi, Sülh küçəsi 123 (Icra hakimiyyəti ilə üzbə-üz küçə)</span>
							</a>
						</div>
						<div class="footer__info__item">
							<span>Telefon nömrəsi / Whatsapp:</span>
							<a href="tel:+994777240011">+994 77 724 00 11</a>
							<a href="tel:+994517240011">+994 51 724 00 11</a>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__social">
				<a target="_blank" href="https://www.facebook.com/Olimpus-100434708248010/" class="footer__social__link">
					<img class="footer__social__icon" src="~/static/svg/facebook.svg" alt="facebook">
				</a>
				<a target="_blank" href="https://www.instagram.com/olimpus.az/" class="footer__social__link">
					<img class="footer__social__icon" src="~/static/svg/instagram.svg" alt="instagram">
				</a>
				<a target="_blank" href="https://wa.me/994777240011" class="footer__social__link">
					<img class="footer__social__icon" src="~/static/svg/whatsapp.svg" alt="whatsapp">
				</a>
			</div>
		</div>
	</footer>
</template>