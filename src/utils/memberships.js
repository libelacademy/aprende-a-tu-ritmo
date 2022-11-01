/** @format */

import image1 from '../images/memberships/Enmascarar grupo 7.png';
import image2 from '../images/memberships/Enmascarar grupo 4.png';

const results = [
  // {
  //   id: 2,
  //   technology: '5 Cursos',
  //   project: 'Personajes Cartoon',
  //   student: 'Luis Duarte',
  //   image: image3,
  //   imageWebp: webpImage3,
  //   price: 29.99,
  //   priceBefore: 399,
  //   url: {
	// 		paypal: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NCC8XZYDXZAGU',
	// 		card: 'https://payco.link/1711539',
	// 	}
  // },
  {
    id: 0,
    image: image1,
    title: 'MEMBRESÍA',
    subtitle: 'Libel Año',
    description: null,
    price: '89',
    price_before: '189',
    items: [
      {
        item: 'Acceso a 1 estudiante',
        more: null,
      },
      {
        item: 'Contenido especializado.',
        more: null,
      },
      {
        item: 'Acceso un año.',
        more: null,
        highlight: true
      },
      {
        item: 'Aprende desde cero.',
        more: null,
      },
    ],
    urls: [
      {
        name: 'Pagar con PayPal',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=52QRBA7565KW2',
      },
      {
        name: 'Pagar con Tarjeta',
        url: 'https://payco.link/1711573',
      },
    ],
  },
  {
    id: 0,
    image: image2,
    title: 'MEMBRESÍA',
    subtitle: 'Libel 6 meses',
    description: null,
    price: '59',
    price_before: '189',
    items: [
      {
        item: 'Acceso a 1 estudiante',
        more: null,
      },
      {
        item: 'Contenido especializado.',
        more: null,
      },
      {
        item: 'Acceso a 6 meses.',
        more: null,
        highlight: true
      },
      {
        item: 'Aprende desde cero.',
        more: null,
      },
    ],
    urls: [
      {
        name: 'Pagar con PayPal',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QGL8SD6UAMCEW',
      },
      {
        name: 'Pagar con Tarjeta',
        url: 'https://payco.link/1711577',
      },
    ],
  },
];

export default results;
