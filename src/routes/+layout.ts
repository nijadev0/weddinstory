export const load = () => {
	return {
		header: ['Beranda', 'Fitur', 'Katalog', 'Kontak'],
		footer: [
			{
				heading: 'Pages',
				menu: [
					{ label: 'About Us', href: 'about-us' },
					{ label: 'Privacy Policy', href: 'privacy-policy' }
				]
			},
			{
				heading: 'Kontak Kami',
				menu: [
					{ label: 'WhatsaApp', href: 'https://wa.me/6281227182500' },
					{ label: 'Instagram', href: 'https://www.instagram.com/weddinstory/' }
				]
			}
		]
	};
};
