import { v4 as uuid } from 'uuid';

export const contacts_data = [
   {
      id: uuid(),
      description: { 'кыр': 'Дежурный номер приемной комиссии.', 'ру': 'Тандоо комиссиясынын кароолчу номери.' },
      link: 'tel:+996 700 327 420',
      link_title: '+996 (700) 327 420',
      media: '/static/contacts_fotos/whatsapp.jpg',
      title: 'WHATSAPP',
   },
   {
      id: uuid(),
      description: { 'кыр': 'Прослеживайти актуальное и новости вуза.', 'ру': 'Учурдагы маалыматтарга жана университет жаңылыктарына көз салыңыз.' },
      link: 'https://www.facebook.com/iksu.kg',
      link_title: 'https://www.facebook.com/iksu.kg',
      media: '/static/contacts_fotos/facebook.jpg',
      title: 'FACEBOOK',
   },
   {
      id: uuid(),
      description: {
         'кыр': 'Свежая подборка событий и людей теперь в вузовском инстаграм канале.', 'ру': 'Окуялардын жана адамдардын жаңы тандоосу азыр университеттин Instagram каналында.'
      },
      link: 'https://www.instagram.com/priemisu/',
      link_title: '@priemisu',
      media: '/static/contacts_fotos/instagram.jpg',
      title: 'INSTAGRAM',
   },
   {
      id: uuid(),
      description: {
         'кыр': 'Просмотр нормативных актов вуза и нпа Министерства образования КР и многое полезное.', 'ру': 'Кыргыз Республикасынын Билим берүү министрлигинин, университеттин актыларын көрүү жана дагы бир топ пайдалуу.'
      },
      link: 'http://www.iksu.kg',
      link_title: 'www.iksu.kg',
      media: '/static/contacts_fotos/website.jpg',
      title: 'WEBSITE',
   },
   {
      id: uuid(),
      description: {
         'кыр': 'Отпраляйте письма с интересующими вопросами на почту ИГУ и. К. Тыныстанова', 'ру': 'К.Тыныстанов атындагы ЫМУнун кутусуна кызыккан суроолор менен каттарды жөнөтүү.'
      },
      link: 'mailto:interiksu@gmail.com',
      link_title: 'interiksu@gmail.com',
      media: '/static/contacts_fotos/gmail.jpg',
      title: 'GMAIL',
   },
   {
      id: uuid(),
      description: {
         'кыр': 'Факс ИГУ и. К. Тыныстанова для ведения международных и внутренних сообщений с юр. лицами', 'ру': 'Юридикалык жактар ​​менен эл аралык жана ички байланыш үчүн К.Тыныстанов атындагы ЫМУ факсы'
      },
      link: '+996 (3922) 5 01 23',
      link_title: '+996 (3922) 5 01 23',
      media: '/static/contacts_fotos/fax.jpg',
      title: 'FAX',
   },
];
