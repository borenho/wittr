self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
	// url ending in ".jpg"

	// let url = '/imgs/dr-evil.gif'

	// if ((/\.(gif)$/i).test(url)) {
	// 	event.respondWith(
	// 		fetch(url)
	// 	);
	// } else {
	// 	console.log('Invalid URL that is!');
	// }

	if (event.request.url.endsWith('.jpg')) {
		event.respondWith(
			fetch('/imgs/dr-evil.gif')
		);
	}
});