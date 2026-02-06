export interface BlogPost {
    id: number;
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
}


export const blogs: BlogPost[] = [
    {
      id: 1,
      image: 'assets/img/blog/vl-blg-1.1.png',
      title: 'Découvrir les métiers du numérique',
      description:
        'Explorez les nouvelles opportunités offertes par le numérique et comment les jeunes peuvent y contribuer activement.',
      author: 'Équipe Logo',
      date: '16 octobre 2025',
    },
    {
      id: 2,
      image: 'assets/img/blog/vl-blog-inner-1.2.png',
      title: 'Protéger sa vie privée en ligne',
      description:
        'Apprenez à sécuriser vos données personnelles et à adopter les bons réflexes sur les réseaux sociaux.',
      author: 'Mariam Konaté',
      date: '16 octobre 2025',
    },
    {
      id: 3,
      image: 'assets/img/blog/vl-blg-1.3.png',
      title: 'Jeunes et citoyenneté numérique',
      description:
        'Découvrez comment les outils numériques renforcent la participation citoyenne et la voix des jeunes.',
      author: 'Equipe Logo',
      date: '16 octobre 2025',
    },
    {
      id: 4,
      image: 'assets/img/blog/vl-blog-inner-1.3.png',
      title: 'Créer son premier site web',
      description:
        'Un guide simple et pratique pour concevoir votre premier site web grâce aux outils modernes comme Angular.',
      author: 'Amadou Traoré',
      date: '16 octobre 2025',
    },
    {
      id: 5,
      image: 'assets/img/blog/vl-blog-inner-1.5.png',
      title: 'Intelligence artificielle pour débutants',
      description:
        'Découvrez les bases de l’intelligence artificielle et comment elle transforme notre quotidien.',
      author: 'Fatou Diarra',
      date: '16 octobre 2025',
    },
    {
      id: 6,
      image: 'assets/img/blog/vl-blog-inner-1.6.png',
      title: 'Cybersécurité : les bons réflexes à adopter',
      description:
        'Sensibilisation à la sécurité numérique et aux bonnes pratiques pour naviguer sur Internet en toute confiance.',
      author: 'Oumar Coulibaly',
      date: '16 octobre 2025',
    },
  ];
  