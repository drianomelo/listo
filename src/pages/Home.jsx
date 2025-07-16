import { useReducer } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero";
import { MediaList } from "../components/MediaList";

const INITIAL_MEDIAS = [
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
    image: "/totoro.png",
    logo: "/logo_totoro.png",
    favorito: true,
  },
  {
    id: 2,
    titulo: "Hunter x Hunter (2011)",
    tipo: "Anime",
    autor: "Yoshihiro Togashi",
    status: "Assistido",
    descricao:
      "Para realizar o sonho de se tornar um lendário caçador, um garoto chamado Gon precisa passar por provas rigorosas e encontrar seu pai desaparecido. Em sua jornada, ele enfrenta perigos mortais e cria fortes laços de amizade com outros aventureiros.",
    nota: 10,
    faixa: "14",
    categoria: "Shounen",
    image: "/hxh.jpg",
    logo: "/logo_hxh.png",
    favorito: true,
  },
  {
    id: 3,
    titulo: "Abbott Elementary",
    tipo: "Série",
    autor: "Quinta Brunson",
    status: "Assistindo",
    descricao:
      "Uma equipe de documentários está gravando a vida de professores que trabalham em escolas subfinanciadas. Um dos lugares que eles decidiram documentar é a Willard R. Abbott Elementary School da Filadélfia, uma escola pública predominantemente negra da Filadélfia. As condições na escola são duras e a maioria dos professores não dura mais de dois anos. ",
    nota: 9,
    faixa: "12",
    categoria: "Comédia",
    image: "/abbot.jpg",
    logo: "/logo_abbot.png",
    favorito: true,
  },
  {
    id: 4,
    titulo: "Luca",
    tipo: "Filme",
    autor: "Pixar",
    status: "Assistido",
    descricao:
      "Luca vive aventuras com seu novo melhor amigo, mas a diversão é ameaçada por um segredo: seu amigo é um monstro marinho de outro mundo que fica abaixo da superfície da água.",
    nota: 10,
    faixa: "L",
    categoria: "Infantil",
    image: "/luca.jpg",
    logo: "/logo_luca.png",
    favorito: true,
  },
  {
    id: 5,
    titulo: "Haikyuu",
    tipo: "Anime",
    autor: "Haruichi Furudate",
    status: "Assistindo",
    descricao:
      "O estudante do ensino médio Shōyō Hinata se apega ao voleibol após ver um jogo do campeonato nacional na televisão. Embora não seja muito alto, ele se determina a seguir os passos do ídolo do campeonato, apelidado 'Pequeno Gigante', após ver os seus jogos. Ele cria um clube de voleibol e começa a praticar sozinho.",
    nota: 10,
    faixa: "12",
    categoria: "Shounen",
    image: "/haikyuu.png",
    logo: "/logo_haikyuu.png",
    favorito: true,
  },
  {
    id: 6,
    titulo: "House of the Dragon",
    tipo: "Série",
    autor: "George R. R. Martin",
    status: "Assistido",
    descricao:
      "Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em 'Game of Thrones'.",
    nota: 8.5,
    faixa: "16",
    categoria: "Fantasia",
    image: "/dragons.jpg",
    logo: "/logo_dragons.png",
    favorito: false,
  },
  {
    id: 7,
    titulo: "Interestelar",
    tipo: "Filme",
    autor: "Christopher Nolan",
    status: "Assistido",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. ",
    nota: 9.5,
    faixa: "12",
    categoria: "Ficção Científica",
    image: "/interestelar.jpg",
    logo: "/logo_interestelar.png",
    favorito: false,
  },
  {
    id: 8,
    titulo: "Vinland Saga",
    tipo: "Anime",
    autor: "Shuhei Yabuta",
    status: "Assistido",
    descricao:
      "Thorfinn é criado pelos vikings que assassinaram sua família e invadiram sua terra. Com o tempo, ele se torna um guerreiro aterrorizante que busca matar Askeladd, o líder do bando, para assim vingar seu pai.",
    nota: 9,
    faixa: "16",
    categoria: "Seinen",
    image: "/vinland.jpeg",
    logo: "/logo_vinland.png",
    favorito: true,
  },
  {
    id: 9,
    titulo: "Friends",
    tipo: "Série",
    autor: "David Crane & Marta Kauffman",
    status: "Assistido",
    descricao:
      "Rachel, Monica, Phoebe, Joey, Chandler e Ross são seis amigos que vivem em Nova York. Eles encaram problemas cotidianos e encontros e desencontros amorosos com bom humor. Nas horas vagas, adoram frequentar a cafeteria 'Central Perk'.",
    nota: 10,
    faixa: "12",
    categoria: "Comédia",
    image: "/friends.jpg",
    logo: "/logo_friends.png",
    favorito: true,
  },
  {
    id: 10,
    titulo: "Princesa Mononoke",
    tipo: "Filme",
    autor: "Hayao Miyazaki",
    status: "Assistido",
    descricao:
      "Um príncipe, em busca de uma cura, luta em uma guerra entre a mata e uma colônia mineira. Nesta aventura ele conhece Mononoke.",
    nota: 10,
    faixa: "14",
    categoria: "Fantasia",
    image: "/mononoke.jpg",
    logo: "/logo_mononoke.png",
    favorito: true,
  },
];

// const reducer = (medias, action) => {
//   switch (action) {
//     case "ADD_MEDIA":
//       return;
//   }
// };

export const Home = () => {
  // const [medias, dispatch] = useReducer(reducer, INITIAL_MEDIAS);

  return (
    <div className="font-inter w-full h-screen bg-slate-950">
      <Header variant="long" />

      {/* <Hero media={medias[0]} />

      <div className="w-full bg-slate-950">
        <MediaList title="Meus Favoritos" medias={medias} />
      </div> */}
    </div>
  );
};
