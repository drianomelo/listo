import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MediaList } from "./components/MediaList";

function App() {
  const medias = [
    {
      id: 1,
      titulo: "Meu Amigo Totoro",
      tipo: "Filme",
      autor: "Hayao Miyazaki",
      status: "Assistido",
      descricao:
        "As irmãs Satsuki e Mei se mudam para o campo para ficar mais perto do hospital onde sua mãe está internada. Lá conhecem os Totoros, adoráveis criaturas místicas e alegres, que só podem ser vistas pelas crianças. Com eles, as duas irmãs viverão mágicas aventuras no campo.",
      nota: 10,
      faixa: "L",
      categoria: "Aventura",
      link: "https://myanimelist.net/anime/416/Movie",
      favorito: true,
    },
    {
      id: 2,
      titulo: "One Piece",
      tipo: "Anime",
      autor: "Eiichiro Oda",
      status: "Assistindo",
      descricao:
        "Monkey D. Luffy e sua tripulação exploram os mares em busca do lendário tesouro One Piece.",
      nota: 9.5,
      faixa: "12",
      categoria: "Ação",
      link: "https://myanimelist.net/anime/21/One_Piece",
      favorito: true,
    },
    {
      id: 3,
      titulo: "A Voz do Silêncio",
      tipo: "Filme",
      autor: "Naoko Yamada",
      status: "Assistido",
      descricao:
        "Um ex-bully tenta se redimir ao reencontrar a garota surda que intimidou durante a infância.",
      nota: 9,
      faixa: "12",
      categoria: "Drama",
      link: "https://myanimelist.net/anime/28851/Koe_no_Katachi",
      favorito: true,
    },
    {
      id: 4,
      titulo: "Death Note",
      tipo: "Anime",
      autor: "Tsugumi Ohba",
      status: "Assistido",
      descricao:
        "Um estudante encontra um caderno sobrenatural que mata qualquer um cujo nome seja escrito nele.",
      nota: 9,
      faixa: "16",
      categoria: "Suspense",
      link: "https://myanimelist.net/anime/1535/Death_Note",
      favorito: false,
    },
    {
      id: 5,
      titulo: "O Castelo Animado",
      tipo: "Filme",
      autor: "Hayao Miyazaki",
      status: "Assistido",
      descricao:
        "Sophie é amaldiçoada por uma bruxa e acaba conhecendo Howl, um mago excêntrico que vive em um castelo mágico.",
      nota: 10,
      faixa: "L",
      categoria: "Fantasia",
      link: "https://myanimelist.net/anime/431/Howl_no_Ugoku_Shiro",
      favorito: true,
    },
    {
      id: 6,
      titulo: "Attack on Titan",
      tipo: "Anime",
      autor: "Hajime Isayama",
      status: "Assistindo",
      descricao:
        "A humanidade luta por sobrevivência em um mundo dominado por titãs gigantes e misteriosos.",
      nota: 9.8,
      faixa: "18",
      categoria: "Ação",
      link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
      favorito: true,
    },
    {
      id: 7,
      titulo: "Your Name",
      tipo: "Filme",
      autor: "Makoto Shinkai",
      status: "Assistido",
      descricao:
        "Dois jovens que nunca se viram começam a trocar de corpo misteriosamente, cruzando destinos em uma jornada emocionante.",
      nota: 9.7,
      faixa: "10",
      categoria: "Romance",
      link: "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
      favorito: true,
    },
    {
      id: 8,
      titulo: "Mob Psycho 100",
      tipo: "Anime",
      autor: "ONE",
      status: "Pausado",
      descricao:
        "Mob é um garoto com poderes psíquicos incríveis, mas tudo o que ele quer é levar uma vida normal.",
      nota: 8.5,
      faixa: "14",
      categoria: "Comédia",
      link: "https://myanimelist.net/anime/32182/Mob_Psycho_100",
      favorito: false,
    },
    {
      id: 9,
      titulo: "A Viagem de Chihiro",
      tipo: "Filme",
      autor: "Hayao Miyazaki",
      status: "Assistido",
      descricao:
        "Chihiro entra em um mundo mágico dominado por deuses e espíritos, e precisa encontrar uma forma de salvar seus pais.",
      nota: 10,
      faixa: "L",
      categoria: "Fantasia",
      link: "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi",
      favorito: true,
    },
    {
      id: 10,
      titulo: "Naruto",
      tipo: "Anime",
      autor: "Masashi Kishimoto",
      status: "Concluído",
      descricao:
        "Naruto Uzumaki, um jovem ninja, sonha em se tornar o maior Hokage de todos os tempos.",
      nota: 9,
      faixa: "12",
      categoria: "Aventura",
      link: "https://myanimelist.net/anime/20/Naruto",
      favorito: false,
    },
  ];

  return (
    <div className="font-inter w-full h-screen bg-zinc-950">
      <Header />

      <Hero media={medias[0]} />

      <div className="w-full bg-slate-950">
        <MediaList title="Meus Favoritos" medias={medias} />
      </div>
    </div>
  );
}

export default App;
