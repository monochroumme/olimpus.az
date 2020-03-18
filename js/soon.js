window.onload = () => {
	let soonDots = document.querySelector('.soon-dots'),
		dotter = () => {
			switch (soonDots.innerHTML.length) {
				case 0:
					soonDots.innerHTML = '.';
					break;
				case 1:
					soonDots.innerHTML = '..';
					break;
				case 2:
					soonDots.innerHTML = '...';
					break;
				case 3:
					soonDots.innerHTML = '';
			}
			setTimeout(() => {dotter()}, 1000);
		}

	dotter();
}