import React from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../contexts/FilterContext";
//IMPORTS ARQUITETURA
import img1 from "../assets/photos/ARQUITETURA/C&ARIOSUL-00.jpg";
import img2 from "../assets/photos/ARQUITETURA/C&ARIOSUL-01.jpg";
import img3 from "../assets/photos/ARQUITETURA/C&ARIOSUL-02.jpg";
import img4 from "../assets/photos/ARQUITETURA/CAFE CARIOCA-00.jpg";
import img5 from "../assets/photos/ARQUITETURA/CAFE CARIOCA-01.jpg";
import img6 from "../assets/photos/ARQUITETURA/CAFE CARIOCA-02.jpg";
import img7 from "../assets/photos/ARQUITETURA/COPA-00.jpg";
import img8 from "../assets/photos/ARQUITETURA/COPA-01.jpg";
import img9 from "../assets/photos/ARQUITETURA/COPA-02.jpg";
import img10 from "../assets/photos/ARQUITETURA/HABITACULO-00.jpg";
import img11 from "../assets/photos/ARQUITETURA/HABITACULO-01.jpg";
import img12 from "../assets/photos/ARQUITETURA/HABITACULO-02.jpg";
import img13 from "../assets/photos/ARQUITETURA/JOÃOLEME-00.jpg";
import img14 from "../assets/photos/ARQUITETURA/JOÃOLEME-01.jpg";
import img15 from "../assets/photos/ARQUITETURA/JOÃOLEME-02.jpg";
import img16 from "../assets/photos/ARQUITETURA/JOÃOLEME-03.jpg";
import img17 from "../assets/photos/ARQUITETURA/JOÃOLEME-04.jpg";
import img18 from "../assets/photos/ARQUITETURA/LOUNGE-00.jpg";
import img19 from "../assets/photos/ARQUITETURA/LOUNGE-01.jpg";
import img20 from "../assets/photos/ARQUITETURA/LOUNGE-02.jpg";
import img21 from "../assets/photos/ARQUITETURA/MODELO-00.jpg";
import img22 from "../assets/photos/ARQUITETURA/MODELO-01.jpg";
import img23 from "../assets/photos/ARQUITETURA/MODELO-02.jpg";
import img24 from "../assets/photos/ARQUITETURA/MULTISTUDIOS-00.jpg";
import img25 from "../assets/photos/ARQUITETURA/MULTISTUDIOS-02.jpg";
import img26 from "../assets/photos/ARQUITETURA/RAPHAEL-00.jpg";
import img27 from "../assets/photos/ARQUITETURA/RAPHAEL-01.jpg";
import img28 from "../assets/photos/ARQUITETURA/RAPHAEL-02.jpg";
import img29 from "../assets/photos/ARQUITETURA/RAPHAEL-03.jpg";
import img30 from "../assets/photos/ARQUITETURA/REPRESA-00.jpg";
import img31 from "../assets/photos/ARQUITETURA/REPRESA-01.jpg";
import img32 from "../assets/photos/ARQUITETURA/REPRESA-02.jpg";
import img33 from "../assets/photos/ARQUITETURA/SEAFLOOR-00.jpg";
import img34 from "../assets/photos/ARQUITETURA/SEAFLOOR-01.jpg";
// IMPORTS CORPORATIVO
import BEATLES_00 from "../assets/photos/CORPORATIVO/BEATLES-00.jpg";
import BEATLES_01 from "../assets/photos/CORPORATIVO/BEATLES-01.jpg";
import BEATLES_02 from "../assets/photos/CORPORATIVO/BEATLES-02.jpg";
import CADIVEU_00 from "../assets/photos/CORPORATIVO/CADIVEU-00.jpg";
import CADIVEU_01 from "../assets/photos/CORPORATIVO/CADIVEU-01.jpg";
import CADIVEU_02 from "../assets/photos/CORPORATIVO/CADIVEU-02.jpg";
import CADIVEU_03 from "../assets/photos/CORPORATIVO/CADIVEU-03.jpg";
import CADIVEU_04 from "../assets/photos/CORPORATIVO/CADIVEU-04.jpg";
import CADIVEU_05 from "../assets/photos/CORPORATIVO/CADIVEU-05.jpg";
import BRADESCO_00 from "../assets/photos/CORPORATIVO/BRADESCO-00.jpg";
import BRADESCO_01 from "../assets/photos/CORPORATIVO/BRADESCO-01.jpg";
import BRADESCO_02 from "../assets/photos/CORPORATIVO/BRADESCO-02.jpg";
import BRADESCOSEGUROS_00 from "../assets/photos/CORPORATIVO/BRADESCO SEGUROS-00.jpg";
import BRADESCOSEGUROS_01 from "../assets/photos/CORPORATIVO/BRADESCO SEGUROS-01.jpg";
import BRADESCOSEGUROS_02 from "../assets/photos/CORPORATIVO/BRADESCO SEGUROS-02.jpg";
import JOE_00 from "../assets/photos/CORPORATIVO/JOE-00.jpg";
import JOE_01 from "../assets/photos/CORPORATIVO/JOE-01.jpg";
import JOE_02 from "../assets/photos/CORPORATIVO/JOE-02.jpg";
import CORTABONITO_00 from "../assets/photos/CORPORATIVO/CORTA BONITO-00.jpg";
import CORTABONITO_01 from "../assets/photos/CORPORATIVO/CORTA BONITO01.jpg";
import CORTABONITO_02 from "../assets/photos/CORPORATIVO/CORTA BONITO-02.jpg";
import CADIVEUPROF_00 from "../assets/photos/CORPORATIVO/CADIVEUPROF-00.jpg";
import CADIVEUPROF_01 from "../assets/photos/CORPORATIVO/CADIVEUPROF-01.jpg";
import CADIVEUPROF_02 from "../assets/photos/CORPORATIVO/CADIVEUPROF-02.jpg";
import PREMIOJK_00 from "../assets/photos/CORPORATIVO/PREMIOJK-00.jpg";
import PREMIOJK_01 from "../assets/photos/CORPORATIVO/PREMIOJK-01.jpg";
import PREMIOJK_02 from "../assets/photos/CORPORATIVO/PREMIOJK-02.jpg";
import PREMIOJK_03 from "../assets/photos/CORPORATIVO/PREMIOJK-03.jpg";
import PREMIOJK_04 from "../assets/photos/CORPORATIVO/PREMIOJK-04.jpg";
import PREMIOJK_05 from "../assets/photos/CORPORATIVO/PREMIOJK-05.jpg";
import PREMIOJK_06 from "../assets/photos/CORPORATIVO/PREMIOJK-06.jpg";
import LOREAL_00 from "../assets/photos/CORPORATIVO/LOREAL-00.jpg";
import LOREAL_01 from "../assets/photos/CORPORATIVO/LOREAL-01.jpg";
import LOREAL_02 from "../assets/photos/CORPORATIVO/LOREAL-02.jpg";
import RIOOPEN_00 from "../assets/photos/CORPORATIVO/RIO OPEN-00.jpg";
import RIOOPEN_01 from "../assets/photos/CORPORATIVO/RIO OPEN-01.jpg";
import RIOOPEN_02 from "../assets/photos/CORPORATIVO/RIO OPEN-02.jpg";
import RIOOPEN_03 from "../assets/photos/CORPORATIVO/RIO OPEN-03.jpg";
import RIOOPEN_04 from "../assets/photos/CORPORATIVO/RIO OPEN-04.jpg";
import RIOOPEN_05 from "../assets/photos/STANDS/RIOOPEN-00.jpg";
// IMPORTS DESIGN
import RELOGIO_00 from "../assets/photos/DESIGN/RELOGIO-00.jpg";
import INOA_00 from "../assets/photos/DESIGN/INOA-00.jpg";
import MESA_MEDICO_00 from "../assets/photos/DESIGN/MESA MEDICO-00.jpg";
import WELLA_00 from "../assets/photos/DESIGN/WELLA-00.jpg";
import PIRA_JMI_00 from "../assets/photos/DESIGN/PIRA JMI-00.jpg";
import PIRA_JMI_01 from "../assets/photos/DESIGN/PIRA JMI-01.jpg";
import TORRE_00 from "../assets/photos/DESIGN/TORRE-00.jpg";
import RELOGIO_OLIMPICO_00 from "../assets/photos/DESIGN/RELOGIO OLIMPICO-00.jpg";
import RELOGIO_OLIMPICO_01 from "../assets/photos/DESIGN/RELOGIO OLIMPICO-01.jpg";
// IMPORTS STANDS
import ARTE_RIO_00 from "../assets/photos/STANDS/ARTE RIO - RIO GALEÃO -00.jpg";
import ARTE_RIO_01 from "../assets/photos/STANDS/ARTE RIO - RIO GALEÃO -01.jpg";
import ARTE_RIO_02 from "../assets/photos/STANDS/ARTE RIO - RIO GALEÃO -02.jpg";
import ARTE_RIO_03 from "../assets/photos/STANDS/ARTE RIO - RIO GALEÃO -03.jpg";
import BOCA_ROSA_00 from "../assets/photos/STANDS/BOCA ROSA-00.jpg";
import BOCA_ROSA_01 from "../assets/photos/STANDS/BOCA ROSA-01.jpg";
import GOVRIO_00 from "../assets/photos/STANDS/GOVRIO-00.jpg";
import GOVRIO_01 from "../assets/photos/STANDS/GOVRIO-01.jpg";
import BECKMAN_00 from "../assets/photos/STANDS/BECKMAN-00.jpg";
import BECKMAN_01 from "../assets/photos/STANDS/BECKMAN-01.jpg";
import LOUNGE_00 from "../assets/photos/STANDS/LOUNGE-00.jpg";
import LOUNGE_01 from "../assets/photos/STANDS/LOUNGE-01.jpg";
import LOUNGE_02 from "../assets/photos/STANDS/LOUNGE-02.jpg";
import REDLEY_KENNER_00 from "../assets/photos/STANDS/REDLEY-KENNER-00.jpg";
import REDLEY_KENNER_01 from "../assets/photos/STANDS/REDLEY-KENNER-01.jpg";
import REDLEY_KENNER_02 from "../assets/photos/STANDS/REDLEY-KENNER-02.jpg";
import REDLEY_KENNER_03 from "../assets/photos/STANDS/REDLEY-KENNER-03.jpg";
import STAND_CHEVRON_00 from "../assets/photos/STANDS/STAND CHEVRON-00.jpg";
import STAND_CHEVRON_01 from "../assets/photos/STANDS/STAND CHEVRON-01.jpg";
import GINOBY_00 from "../assets/photos/STANDS/GINOBY-00.jpg";
import GINOBY_01 from "../assets/photos/STANDS/GINOBY-01.jpg";
import DRPEANUT_00 from "../assets/photos/STANDS/DR.PEANUT00.jpg";
import DRPEANUT_01 from "../assets/photos/STANDS/DR.PEANUT01.jpg";
import DRPEANUT_02 from "../assets/photos/STANDS/DR.PEANUT02.jpg";
import NEWERA_00 from "../assets/photos/STANDS/NEWERA-00.jpg";
import EQUINOR_00 from "../assets/photos/STANDS/EQUINOR-00.jpg";
import EQUINOR_01 from "../assets/photos/STANDS/EQUINOR-01.jpg";
import EQUINOR_02 from "../assets/photos/STANDS/EQUINOR-02.jpg";
import HUSKY_00 from "../assets/photos/STANDS/HUSKY-00.jpg";
import STANLEY_00 from "../assets/photos/STANDS/STANLEY-00.jpg";
import RIOGALEAO_00 from "../assets/photos/STANDS/RIOGALEÃO-00.jpg";
import RIOGALEAO_01 from "../assets/photos/STANDS/RIOGALEÃO-01.jpg";
import LOREAL_03 from "../assets/photos/STANDS/LOREAL-03.jpg";
import STAND_BP_00 from "../assets/photos/STANDS/STANDBP-00.jpg";
import STAND_BP_01 from "../assets/photos/STANDS/STANDBP-01.jpg";
import STAND_BP_02 from "../assets/photos/STANDS/STANDBP-02.jpg";
import ELETRONET_00 from "../assets/photos/STANDS/ELETRONET-00.jpg";
import MAYBELLINE_00 from "../assets/photos/STANDS/MAYBELLINE-00.jpg";
import MAYBELLINE_01 from "../assets/photos/STANDS/MAYBELLINE-01.jpg";
import MAYBELLINE_02 from "../assets/photos/STANDS/MAYBELLINE-02.jpg";
import NYX_00 from "../assets/photos/STANDS/NYX-00.jpg";
import NYX_01 from "../assets/photos/STANDS/NYX-01.jpg";
import NYX_02 from "../assets/photos/STANDS/NYX-02.jpg";
import PFIZER_00 from "../assets/photos/STANDS/PFIZER-00.jpg";
import PFIZER_01 from "../assets/photos/STANDS/PFIZER-01.jpg";
import PFIZER_02 from "../assets/photos/STANDS/PFIZER-02.jpg";
// IMPORTS NATAL
import RIOSUL_NATAL_00 from "../assets/photos/NATAL/RIOSUL-NATAL-00.jpg";
import RIOSUL_NATAL_01 from "../assets/photos/NATAL/RIOSUL-NATAL-01.jpg";
import NATAL_PRACA_MAUA_00 from "../assets/photos/NATAL/NATAL PRAÇA MAUÁ-00.jpg";
import NATAL_PRACA_MAUA_01 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-01.jpg";
import NATAL_PRACA_MAUA_02 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-02.jpg";
import NATAL_PRACA_MAUA_03 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-03.jpg";
import NATAL_PRACA_MAUA_04 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-04.jpg";
import NATAL_PRACA_MAUA_05 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-05.jpg";
import NATAL_PRACA_MAUA_06 from "../assets/photos/NATAL/NATAL PRAÇA MAUA-06.jpg";
import PASSARELA_00 from "../assets/photos/NATAL/PASSARELA-00.jpg";
import PASSARELA_01 from "../assets/photos/NATAL/PASSARELA-01.jpg";
import ARVORE_MARANHAO_00 from "../assets/photos/NATAL/ARVORE MARANHÃO-00.jpg";
import ARVORE_LAGOA_00 from "../assets/photos/NATAL/ARVORE LAGOA-00.jpg";
// IMPORTS EVENTOS
import MUTISHOW_ROCKINRIO2022_00 from "../assets/photos/EVENTOS/MUTISHOW-ROCKINRIO2022-00.jpg";
import MUTISHOW_ROCKINRIO2022_01 from "../assets/photos/EVENTOS/MUTISHOW-ROCKINRIO2022-01.jpg";
import SUNSET_INSTRUMENTAL_00 from "../assets/photos/EVENTOS/SUNSET INSTRUMENTAL-00.jpg";
import SUNSET_INSTRUMENTAL_01 from "../assets/photos/EVENTOS/SUNSET INSTRUMENTAL-01.jpg";
import SUNSET_INSTRUMENTAL_02 from "../assets/photos/EVENTOS/SUNSET INSTRUMENTAL-02.jpg";
import SUNSET_INSTRUMENTAL_03 from "../assets/photos/EVENTOS/SUNSET INSTRUMENTAL-03.jpg";
import SUNSET_INSTRUMENTAL_04 from "../assets/photos/EVENTOS/SUNSET INSTRUMENTAL-04.jpg";
import EXPOSICAO_JORGE_ARAGAO_00 from "../assets/photos/EVENTOS/EXPOSIÇÃO JORGE ARAGÃO-00.jpg";
import EXPOSICAO_JORGE_ARAGAO_01 from "../assets/photos/EVENTOS/EXPOSIÇÃO JORGE ARAGÃO-01.jpg";
import COCRIADOR_2024_002 from "../assets/photos/EVENTOS/COCRIADOR-2024-002.jpg";
import COCRIADOR_2024_PALCO00 from "../assets/photos/EVENTOS/COCRIADOR-2024-PALCO00.jpg";
import COCRIADOR_2024_PALCO01 from "../assets/photos/EVENTOS/COCRIADOR-2024-PALCO01.jpg";
import COCRIADOR_2024_PALCO02 from "../assets/photos/EVENTOS/COCRIADOR-2024-PALCO02.jpg";
import SAIL_GP_00 from "../assets/photos/EVENTOS/SAIL-GP-00.jpg";
import SAIL_GP_01 from "../assets/photos/EVENTOS/SAIL-GP-01.jpg";
import SAIL_GP_02 from "../assets/photos/EVENTOS/SAIL-GP-02.jpg";
import SAIL_GP_03 from "../assets/photos/EVENTOS/SAIL-GP-03.jpg";
import SAIL_GP_04 from "../assets/photos/EVENTOS/SAIL-GP-04.jpg";
import GAUCHA_00 from "../assets/photos/EVENTOS/GAUCHA-00.jpg";
import GAUCHA_01 from "../assets/photos/EVENTOS/GAUCHA-01.jpg";
import GAUCHA_02 from "../assets/photos/EVENTOS/GAUCHA-02.jpg";
import GAUCHA_03 from "../assets/photos/EVENTOS/GAUCHA-03.jpg";
import ARTEEDUCACAO_00 from "../assets/photos/EVENTOS/ARTEEDUCAÇÃO-00.jpg";
import ARTEEDUCACAO_01 from "../assets/photos/EVENTOS/ARTEEDUCAÇÃO-01.jpg";
import ARTEEDUCACAO_02 from "../assets/photos/EVENTOS/ARTEEDUCAÇÃO-02.jpg";
import VINHOS_00 from "../assets/photos/EVENTOS/VINHOS-00.jpg";
import VINHOS_01 from "../assets/photos/EVENTOS/VINHOS-01.jpg";
import VINHOS_02 from "../assets/photos/EVENTOS/VINHOS-02.jpg";
import SPANTA2023_00 from "../assets/photos/EVENTOS/SPANTA2023-00.jpg";
import SPANTA2023_01 from "../assets/photos/EVENTOS/SPANTA2023-01.jpg";
import SPANTA2023_02 from "../assets/photos/EVENTOS/SPANTA2023-02.jpg";
import DOMINGAO_00 from "../assets/photos/EVENTOS/DOMINGÃO-00.jpg";
import DOMINGAO_01 from "../assets/photos/EVENTOS/DOMINGÃO-01.jpg";
import DOMINGAO_02 from "../assets/photos/EVENTOS/DOMINGÃO-02.jpg";
import ARTRIO_00 from "../assets/photos/EVENTOS/ARTRIO-00.jpg";
import ARTRIO_01 from "../assets/photos/EVENTOS/ARTRIO-01.jpg";
import ARTRIO_03 from "../assets/photos/EVENTOS/ARTRIO-03.jpg";
import INDEPENDENCIA_00 from "../assets/photos/EVENTOS/INDEPENDENCIA-00.jpg";
import INDEPENDENCIA_01 from "../assets/photos/EVENTOS/INDEPENDENCIA-01.jpg";
import INDEPENDENCIA_02 from "../assets/photos/EVENTOS/INDEPENDENCIA-02.jpg";
import CHAMPIONS_00 from "../assets/photos/EVENTOS/CHAMPIONS-00.jpg";
import CHAMPIONS_01 from "../assets/photos/EVENTOS/CHAMPIONS-01.jpg";
import CASA_QATAR_00 from "../assets/photos/EVENTOS/CASA QATAR-00.jpg";
import CASA_QATAR_01 from "../assets/photos/EVENTOS/CASA QATAR-01.jpg";
import CASA_QATAR_02 from "../assets/photos/EVENTOS/CASA QATAR-02.jpg";
import CASA_QATAR_03 from "../assets/photos/EVENTOS/CASA QATAR-03.jpg";
import CASA_QATAR_04 from "../assets/photos/EVENTOS/CASA QATAR-04.jpg";
import CASA_QATAR_05 from "../assets/photos/EVENTOS/CASA QATAR-05.jpg";
import CASA_QATAR_06 from "../assets/photos/EVENTOS/CASA QATAR-06.jpg";
import ROBERTO_CARLOS_00 from "../assets/photos/EVENTOS/ROBERTO CARLOS-00.jpg";
import ROBERTO_CARLOS_01 from "../assets/photos/EVENTOS/ROBERTO CARLOS-01.jpg";
import ROBERTO_CARLOS_02 from "../assets/photos/EVENTOS/ROBERTO CARLOS-02.jpg";
import CC2016_00 from "../assets/photos/EVENTOS/CC2016-00.jpg";
import CC2016_01 from "../assets/photos/EVENTOS/CC2016-01.jpg";
import CC2016_02 from "../assets/photos/EVENTOS/CC2016-02.jpg";
import CC2016_03 from "../assets/photos/EVENTOS/CC2016-03.jpg";
import PROJETO_AQUARIUS_00 from "../assets/photos/EVENTOS/PROJETO AQUARIUS-00.jpg";
import RIO20_00 from "../assets/photos/EVENTOS/RIO+20=00.jpg";
import "./galeria.css";

// Estrutura de projetos com múltiplas fotos
const projetos = [
  // PROJETOS Arquitetura
  {
    id: 1,
    titulo: "C&A Rio Sul",
    categoria: "Arquitetura",
    descricao:
      "Projeto completo de cenografia para evento corporativo da CAEX. Inclui design de palco, iluminação e elementos decorativos personalizados.",
    ano: 2023,
    fotos: [
      { src: img1, alt: "C&A RIOSUL frente", altura: 500 },
      { src: img2, alt: "C&A RIOSUL perfumaria", altura: 320 },
      { src: img3, alt: "C&A RIOSUL loja", altura: 260 },
    ],
    fotoPrincipal: img1,
    alturaPrincipal: 500,
  },
  {
    id: 2,
    titulo: "Perfil Carioca",
    categoria: "Arquitetura",
    descricao:
      "Desenvolvimento arquitetônico para stand da Beckman. Foco em funcionalidade e estética moderna para exposição de produtos.",
    ano: 2023,
    fotos: [
      { src: img4, alt: "Frente da loja", altura: 450 },
      { src: img5, alt: "Frente da loja inteira", altura: 370 },
      { src: img6, alt: "Visao distante", altura: 280 },
    ],
    fotoPrincipal: img4,
    alturaPrincipal: 450,
  },
  {
    id: 3,
    titulo: "Copa",
    categoria: "Arquitetura",
    descricao:
      "Projeto de modelagem 3D para apresentação de conceitos. Renderizações realistas para aprovação de clientes.",
    ano: 2023,
    fotos: [
      { src: img7, alt: "Principal 1", altura: 550 },
      { src: img8, alt: "Principal 2", altura: 290 },
      { src: img9, alt: "Cozinha", altura: 650 },
    ],
    fotoPrincipal: img7,
    alturaPrincipal: 550,
  },
  {
    id: 4,
    titulo: "Habitáculo",
    categoria: "Categoria",
    descricao:
      "Desenvolvimento de projeto BIM para área de lounge. Integração de sistemas e coordenação de disciplinas.",
    ano: 2023,
    fotos: [
      { src: img10, alt: "Visao de fora", altura: 280 },
      { src: img11, alt: "Dentro do habitáculo", altura: 810 },
      {
        src: img12,
        alt: "Visao de dentro para fora do habitáculo",
        altura: 380,
      },
    ],
    fotoPrincipal: img10,
    alturaPrincipal: 280,
  },
  {
    id: 5,
    titulo: "Apartamento João",
    categoria: "Arquitetura",
    descricao:
      "Projeto arquitetônico para evento Showbol 2025. Estrutura temporária com foco em experiência do usuário.",
    ano: 2025,
    fotos: [
      { src: img13, alt: "Cozinha", altura: 340 },
      { src: img14, alt: "Sala de jantar", altura: 420 },
      { src: img15, alt: "Sala de estar", altura: 300 },
      { src: img16, alt: "Quarto", altura: 300 },
      { src: img17, alt: "Banheiro", altura: 300 },
    ],
    fotoPrincipal: img13,
    alturaPrincipal: 340,
  },
  {
    id: 6,
    titulo: "Lounge",
    categoria: "Arquitetura",
    descricao:
      "Projeto arquitetônico para evento Showbol 2025. Estrutura temporária com foco em experiência do usuário.",
    ano: 2025,
    fotos: [
      { src: img18, alt: "Frente", altura: 420 },
      { src: img19, alt: "Meio", altura: 340 },
      { src: img20, alt: "Atrás", altura: 300 },
    ],
    fotoPrincipal: img18,
    alturaPrincipal: 340,
  },
  {
    id: 7,
    titulo: "Galeria TBT",
    categoria: "Arquitetura",
    descricao:
      "Cenografia completa para evento da Redley Kenner. Design inovador com materiais sustentáveis.",
    ano: 2023,
    fotos: [
      { src: img21, alt: "Visao Frente Direita", altura: 320 },
      { src: img22, alt: "Visao frente esquerda", altura: 700 },
      { src: img23, alt: "Construido", altura: 360 },
    ],
    fotoPrincipal: img21,
    alturaPrincipal: 320,
  },
  {
    id: 8,
    titulo: "Multiplan Studios",
    categoria: "Arquitetura",
    descricao:
      "Cenografia completa para evento da Redley Kenner. Design inovador com materiais sustentáveis.",
    ano: 2023,
    fotos: [
      { src: img24, alt: "Visao Frente", altura: 320 },
      { src: img25, alt: "Visao Dentro", altura: 700 },
    ],
    fotoPrincipal: img24,
    alturaPrincipal: 320,
  },
  {
    id: 9,
    titulo: "Apartamento Raphael",
    categoria: "Arquitetura",
    descricao:
      "Cenografia completa para evento da Redley Kenner. Design inovador com materiais sustentáveis.",
    ano: 2023,
    fotos: [
      { src: img26, alt: "Sala de estar da varanda", altura: 320 },
      { src: img27, alt: "Sala de Estar", altura: 700 },
      { src: img28, alt: "Adegas", altura: 700 },
      { src: img29, alt: "Sofa e televisao", altura: 700 },
    ],
    fotoPrincipal: img26,
    alturaPrincipal: 320,
  },
  {
    id: 10,
    titulo: "Represa",
    categoria: "Arquitetura",
    descricao:
      "Cenografia completa para evento da Redley Kenner. Design inovador com materiais sustentáveis.",
    ano: 2023,
    fotos: [
      { src: img30, alt: "Sala de estar da varanda", altura: 320 },
      { src: img31, alt: "Sala de Estar", altura: 700 },
      { src: img32, alt: "Adegas", altura: 700 },
    ],
    fotoPrincipal: img30,
    alturaPrincipal: 320,
  },
  {
    id: 11,
    titulo: "Seafloor",
    categoria: "Arquitetura",
    descricao:
      "Cenografia completa para evento da Redley Kenner. Design inovador com materiais sustentáveis.",
    ano: 2023,
    fotos: [
      { src: img33, alt: "Sala de estar da varanda", altura: 320 },
      { src: img34, alt: "Sala de Estar", altura: 700 },
    ],
    fotoPrincipal: img33,
    alturaPrincipal: 320,
  },
  // PROJETOS CORPORATIVO
  {
    id: 12,
    titulo: "Projeto Beatles",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Beatles.",
    ano: 2023,
    fotos: [
      { src: BEATLES_00, alt: "Projeto Beatles 00" },
      { src: BEATLES_01, alt: "Projeto Beatles 01" },
      { src: BEATLES_02, alt: "Projeto Beatles 02" },
    ],
    fotoPrincipal: BEATLES_00,
    alturaPrincipal: 500,
  },
  {
    id: 13,
    titulo: "Projeto Cadiveu",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Cadiveu.",
    ano: 2023,
    fotos: [
      { src: CADIVEU_00, alt: "Projeto Cadiveu 00" },
      { src: CADIVEU_01, alt: "Projeto Cadiveu 01" },
      { src: CADIVEU_02, alt: "Projeto Cadiveu 02" },
      { src: CADIVEU_03, alt: "Projeto Cadiveu 03" },
      { src: CADIVEU_04, alt: "Projeto Cadiveu 04" },
      { src: CADIVEU_05, alt: "Projeto Cadiveu 05" },
    ],
    fotoPrincipal: CADIVEU_00,
    alturaPrincipal: 500,
  },
  {
    id: 14,
    titulo: "Projeto Bradesco Seguros",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Bradesco Seguros.",
    ano: 2023,
    fotos: [
      { src: BRADESCOSEGUROS_00, alt: "Projeto Bradesco Seguros 00" },
      { src: BRADESCOSEGUROS_01, alt: "Projeto Bradesco Seguros 01" },
      { src: BRADESCOSEGUROS_02, alt: "Projeto Bradesco Seguros 02" },
    ],
    fotoPrincipal: BRADESCOSEGUROS_00,
    alturaPrincipal: 500,
  },
  {
    id: 15,
    titulo: "Projeto Bradesco",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Bradesco.",
    ano: 2023,
    fotos: [
      { src: BRADESCO_00, alt: "Projeto Bradesco 00" },
      { src: BRADESCO_01, alt: "Projeto Bradesco 01" },
      { src: BRADESCO_02, alt: "Projeto Bradesco 02" },
    ],
    fotoPrincipal: BRADESCO_00,
    alturaPrincipal: 500,
  },
  {
    id: 16,
    titulo: "Projeto Joe",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Joe.",
    ano: 2023,
    fotos: [
      { src: JOE_00, alt: "Projeto Joe 00" },
      { src: JOE_01, alt: "Projeto Joe 01" },
      { src: JOE_02, alt: "Projeto Joe 02" },
    ],
    fotoPrincipal: JOE_00,
    alturaPrincipal: 500,
  },
  {
    id: 17,
    titulo: "Projeto Corta Bonito",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Corta Bonito.",
    ano: 2023,
    fotos: [
      { src: CORTABONITO_00, alt: "Projeto Corta Bonito 00" },
      { src: CORTABONITO_01, alt: "Projeto Corta Bonito 01" },
      { src: CORTABONITO_02, alt: "Projeto Corta Bonito 02" },
    ],
    fotoPrincipal: CORTABONITO_00,
    alturaPrincipal: 500,
  },
  {
    id: 18,
    titulo: "Projeto Cadiveu Profissional",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Cadiveu Profissional.",
    ano: 2023,
    fotos: [
      { src: CADIVEUPROF_00, alt: "Projeto Cadiveu Profissional 00" },
      { src: CADIVEUPROF_01, alt: "Projeto Cadiveu Profissional 01" },
      { src: CADIVEUPROF_02, alt: "Projeto Cadiveu Profissional 02" },
    ],
    fotoPrincipal: CADIVEUPROF_00,
    alturaPrincipal: 500,
  },
  {
    id: 19,
    titulo: "Projeto Prêmio JK",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Prêmio JK.",
    ano: 2023,
    fotos: [
      { src: PREMIOJK_00, alt: "Projeto Prêmio JK 00" },
      { src: PREMIOJK_01, alt: "Projeto Prêmio JK 01" },
      { src: PREMIOJK_02, alt: "Projeto Prêmio JK 02" },
      { src: PREMIOJK_03, alt: "Projeto Prêmio JK 03" },
      { src: PREMIOJK_04, alt: "Projeto Prêmio JK 04" },
      { src: PREMIOJK_05, alt: "Projeto Prêmio JK 05" },
      { src: PREMIOJK_06, alt: "Projeto Prêmio JK 06" },
    ],
    fotoPrincipal: PREMIOJK_00,
    alturaPrincipal: 500,
  },
  {
    id: 20,
    titulo: "Projeto L'Oréal",
    categoria: "Corporativo",
    descricao: "Projeto corporativo L'Oréal.",
    ano: 2023,
    fotos: [
      { src: LOREAL_00, alt: "Projeto L'Oréal 00" },
      { src: LOREAL_01, alt: "Projeto L'Oréal 01" },
      { src: LOREAL_02, alt: "Projeto L'Oréal 02" },
    ],
    fotoPrincipal: LOREAL_00,
    alturaPrincipal: 500,
  },
  {
    id: 21,
    titulo: "Projeto Rio Open",
    categoria: "Corporativo",
    descricao: "Projeto corporativo Rio Open.",
    ano: 2023,
    fotos: [
      { src: RIOOPEN_00, alt: "Projeto Rio Open 00" },
      { src: RIOOPEN_01, alt: "Projeto Rio Open 01" },
      { src: RIOOPEN_02, alt: "Projeto Rio Open 02" },
      { src: RIOOPEN_03, alt: "Projeto Rio Open 03" },
      { src: RIOOPEN_04, alt: "Projeto Rio Open 04" },
      { src: RIOOPEN_05, alt: "Projeto Rio Open 05" },
    ],
    fotoPrincipal: RIOOPEN_00,
    alturaPrincipal: 500,
  },
  // PROJETOS DESIGN
  {
    id: 22,
    titulo: "Projeto Relógio",
    categoria: "Design",
    descricao: "Projeto de design Relógio.",
    ano: 2023,
    fotos: [{ src: RELOGIO_00, alt: "Projeto Relógio 00" }],
    fotoPrincipal: RELOGIO_00,
    alturaPrincipal: 500,
  },
  {
    id: 23,
    titulo: "Projeto Inoa",
    categoria: "Design",
    descricao: "Projeto de design Inoa.",
    ano: 2023,
    fotos: [{ src: INOA_00, alt: "Projeto Inoa 00" }],
    fotoPrincipal: INOA_00,
    alturaPrincipal: 500,
  },
  {
    id: 24,
    titulo: "Projeto Mesa Médico",
    categoria: "Design",
    descricao: "Projeto de design Mesa Médico.",
    ano: 2023,
    fotos: [{ src: MESA_MEDICO_00, alt: "Projeto Mesa Médico 00" }],
    fotoPrincipal: MESA_MEDICO_00,
    alturaPrincipal: 500,
  },
  {
    id: 25,
    titulo: "Projeto Wella",
    categoria: "Design",
    descricao: "Projeto de design Wella.",
    ano: 2023,
    fotos: [{ src: WELLA_00, alt: "Projeto Wella 00" }],
    fotoPrincipal: WELLA_00,
    alturaPrincipal: 500,
  },
  {
    id: 26,
    titulo: "Projeto Pira JMI",
    categoria: "Design",
    descricao: "Projeto de design Pira JMI.",
    ano: 2023,
    fotos: [
      { src: PIRA_JMI_00, alt: "Projeto Pira JMI 00" },
      { src: PIRA_JMI_01, alt: "Projeto Pira JMI 01" },
    ],
    fotoPrincipal: PIRA_JMI_00,
    alturaPrincipal: 500,
  },
  {
    id: 27,
    titulo: "Projeto Torre",
    categoria: "Design",
    descricao: "Projeto de design Torre.",
    ano: 2023,
    fotos: [{ src: TORRE_00, alt: "Projeto Torre 00" }],
    fotoPrincipal: TORRE_00,
    alturaPrincipal: 500,
  },
  {
    id: 28,
    titulo: "Projeto Relógio Olímpico",
    categoria: "Design",
    descricao: "Projeto de design Relógio Olímpico.",
    ano: 2023,
    fotos: [
      { src: RELOGIO_OLIMPICO_00, alt: "Projeto Relógio Olímpico 00" },
      { src: RELOGIO_OLIMPICO_01, alt: "Projeto Relógio Olímpico 01" },
    ],
    fotoPrincipal: RELOGIO_OLIMPICO_00,
    alturaPrincipal: 500,
  },
  // PROJETOS STANDS
  {
    id: 29,
    titulo: "Projeto Arte Rio - Rio Galeão",
    categoria: "Stands",
    descricao: "Projeto de stand Arte Rio - Rio Galeão.",
    ano: 2023,
    fotos: [
      { src: ARTE_RIO_00, alt: "Projeto Arte Rio - Rio Galeão 00" },
      { src: ARTE_RIO_01, alt: "Projeto Arte Rio - Rio Galeão 01" },
      { src: ARTE_RIO_02, alt: "Projeto Arte Rio - Rio Galeão 02" },
      { src: ARTE_RIO_03, alt: "Projeto Arte Rio - Rio Galeão 03" },
    ],
    fotoPrincipal: ARTE_RIO_00,
    alturaPrincipal: 500,
  },
  {
    id: 30,
    titulo: "Projeto Boca Rosa",
    categoria: "Stands",
    descricao: "Projeto de stand Boca Rosa.",
    ano: 2023,
    fotos: [
      { src: BOCA_ROSA_00, alt: "Projeto Boca Rosa 00" },
      { src: BOCA_ROSA_01, alt: "Projeto Boca Rosa 01" },
    ],
    fotoPrincipal: BOCA_ROSA_00,
    alturaPrincipal: 500,
  },
  {
    id: 31,
    titulo: "Projeto Beckman",
    categoria: "Stands",
    descricao: "Projeto de stand Beckman.",
    ano: 2023,
    fotos: [
      { src: BECKMAN_00, alt: "Projeto Beckman 00" },
      { src: BECKMAN_01, alt: "Projeto Beckman 01" },
    ],
    fotoPrincipal: BECKMAN_00,
    alturaPrincipal: 500,
  },
  {
    id: 32,
    titulo: "Projeto Lounge",
    categoria: "Stands",
    descricao: "Projeto de stand Lounge.",
    ano: 2023,
    fotos: [
      { src: LOUNGE_00, alt: "Projeto Lounge 00" },
      { src: LOUNGE_01, alt: "Projeto Lounge 01" },
      { src: LOUNGE_02, alt: "Projeto Lounge 02" },
    ],
    fotoPrincipal: LOUNGE_00,
    alturaPrincipal: 500,
  },
  {
    id: 33,
    titulo: "Projeto Redley Kenner",
    categoria: "Stands",
    descricao: "Projeto de stand Redley Kenner.",
    ano: 2023,
    fotos: [
      { src: REDLEY_KENNER_00, alt: "Projeto Redley Kenner 00" },
      { src: REDLEY_KENNER_01, alt: "Projeto Redley Kenner 01" },
      { src: REDLEY_KENNER_02, alt: "Projeto Redley Kenner 02" },
      { src: REDLEY_KENNER_03, alt: "Projeto Redley Kenner 03" },
    ],
    fotoPrincipal: REDLEY_KENNER_00,
    alturaPrincipal: 500,
  },
  {
    id: 34,
    titulo: "Projeto Stand Chevron",
    categoria: "Stands",
    descricao: "Projeto de stand Chevron.",
    ano: 2023,
    fotos: [
      { src: STAND_CHEVRON_00, alt: "Projeto Stand Chevron 00" },
      { src: STAND_CHEVRON_01, alt: "Projeto Stand Chevron 01" },
    ],
    fotoPrincipal: STAND_CHEVRON_00,
    alturaPrincipal: 500,
  },
  {
    id: 35,
    titulo: "Projeto Ginoby",
    categoria: "Stands",
    descricao: "Projeto de stand Ginoby.",
    ano: 2023,
    fotos: [
      { src: GINOBY_00, alt: "Projeto Ginoby 00" },
      { src: GINOBY_01, alt: "Projeto Ginoby 01" },
    ],
    fotoPrincipal: GINOBY_00,
    alturaPrincipal: 500,
  },
  {
    id: 36,
    titulo: "Projeto Dr. Peanut",
    categoria: "Stands",
    descricao: "Projeto de stand Dr. Peanut.",
    ano: 2023,
    fotos: [
      { src: DRPEANUT_00, alt: "Projeto Dr. Peanut 00" },
      { src: DRPEANUT_01, alt: "Projeto Dr. Peanut 01" },
      { src: DRPEANUT_02, alt: "Projeto Dr. Peanut 02" },
    ],
    fotoPrincipal: DRPEANUT_00,
    alturaPrincipal: 500,
  },
  {
    id: 37,
    titulo: "Projeto New Era",
    categoria: "Stands",
    descricao: "Projeto de stand New Era.",
    ano: 2023,
    fotos: [{ src: NEWERA_00, alt: "Projeto New Era 00" }],
    fotoPrincipal: NEWERA_00,
    alturaPrincipal: 500,
  },
  {
    id: 38,
    titulo: "Projeto Equinor",
    categoria: "Stands",
    descricao: "Projeto de stand Equinor.",
    ano: 2023,
    fotos: [
      { src: EQUINOR_00, alt: "Projeto Equinor 00" },
      { src: EQUINOR_01, alt: "Projeto Equinor 01" },
      { src: EQUINOR_02, alt: "Projeto Equinor 02" },
    ],
    fotoPrincipal: EQUINOR_00,
    alturaPrincipal: 500,
  },
  {
    id: 39,
    titulo: "Projeto Husky",
    categoria: "Stands",
    descricao: "Projeto de stand Husky.",
    ano: 2023,
    fotos: [{ src: HUSKY_00, alt: "Projeto Husky 00" }],
    fotoPrincipal: HUSKY_00,
    alturaPrincipal: 500,
  },
  {
    id: 40,
    titulo: "Projeto Stanley",
    categoria: "Stands",
    descricao: "Projeto de stand Stanley.",
    ano: 2023,
    fotos: [{ src: STANLEY_00, alt: "Projeto Stanley 00" }],
    fotoPrincipal: STANLEY_00,
    alturaPrincipal: 500,
  },
  {
    id: 41,
    titulo: "Projeto Rio Galeão",
    categoria: "Stands",
    descricao: "Projeto de stand Rio Galeão.",
    ano: 2023,
    fotos: [
      { src: RIOGALEAO_00, alt: "Projeto Rio Galeão 00" },
      { src: RIOGALEAO_01, alt: "Projeto Rio Galeão 01" },
    ],
    fotoPrincipal: RIOGALEAO_00,
    alturaPrincipal: 500,
  },
  {
    id: 42,
    titulo: "Projeto L'Oréal",
    categoria: "Stands",
    descricao: "Projeto de stand L'Oréal.",
    ano: 2023,
    fotos: [{ src: LOREAL_03, alt: "Projeto L'Oréal 03" }],
    fotoPrincipal: LOREAL_03,
    alturaPrincipal: 500,
  },
  {
    id: 43,
    titulo: "Projeto Stand BP",
    categoria: "Stands",
    descricao: "Projeto de stand BP.",
    ano: 2023,
    fotos: [
      { src: STAND_BP_00, alt: "Projeto Stand BP 00" },
      { src: STAND_BP_01, alt: "Projeto Stand BP 01" },
      { src: STAND_BP_02, alt: "Projeto Stand BP 02" },
    ],
    fotoPrincipal: STAND_BP_00,
    alturaPrincipal: 500,
  },
  {
    id: 44,
    titulo: "Projeto Eletrônica",
    categoria: "Stands",
    descricao: "Projeto de stand Eletrônica.",
    ano: 2023,
    fotos: [{ src: ELETRONET_00, alt: "Projeto Eletrônica 00" }],
    fotoPrincipal: ELETRONET_00,
    alturaPrincipal: 500,
  },
  {
    id: 45,
    titulo: "Projeto Maybelline",
    categoria: "Stands",
    descricao: "Projeto de stand Maybelline.",
    ano: 2023,
    fotos: [
      { src: MAYBELLINE_00, alt: "Projeto Maybelline 00" },
      { src: MAYBELLINE_01, alt: "Projeto Maybelline 01" },
      { src: MAYBELLINE_02, alt: "Projeto Maybelline 02" },
    ],
    fotoPrincipal: MAYBELLINE_00,
    alturaPrincipal: 500,
  },
  {
    id: 46,
    titulo: "Projeto NYX",
    categoria: "Stands",
    descricao: "Projeto de stand NYX.",
    ano: 2023,
    fotos: [
      { src: NYX_00, alt: "Projeto NYX 00" },
      { src: NYX_01, alt: "Projeto NYX 01" },
      { src: NYX_02, alt: "Projeto NYX 02" },
    ],
    fotoPrincipal: NYX_00,
    alturaPrincipal: 500,
  },
  {
    id: 47,
    titulo: "Projeto Pfizer",
    categoria: "Stands",
    descricao: "Projeto de stand Pfizer.",
    ano: 2023,
    fotos: [
      { src: PFIZER_00, alt: "Projeto Pfizer 00" },
      { src: PFIZER_01, alt: "Projeto Pfizer 01" },
      { src: PFIZER_02, alt: "Projeto Pfizer 02" },
    ],
    fotoPrincipal: PFIZER_00,
    alturaPrincipal: 500,
  },
  {
    id: 48,
    titulo: "Projeto GovRio",
    categoria: "Stands",
    descricao: "Projeto de stand GovRio.",
    ano: 2023,
    fotos: [
      { src: GOVRIO_00, alt: "Projeto GovRio 00" },
      { src: GOVRIO_01, alt: "Projeto GovRio 01" },
    ],
    fotoPrincipal: GOVRIO_00,
    alturaPrincipal: 500,
  },
  // PROJETOS NATAL
  {
    id: 49,
    titulo: "Projeto Riosul Natal",
    categoria: "Natal",
    descricao: "Projeto de Natal Riosul.",
    ano: 2023,
    fotos: [
      { src: RIOSUL_NATAL_00, alt: "Projeto Riosul Natal 00" },
      { src: RIOSUL_NATAL_01, alt: "Projeto Riosul Natal 01" },
    ],
    fotoPrincipal: RIOSUL_NATAL_00,
    alturaPrincipal: 500,
  },
  {
    id: 50,
    titulo: "Projeto Natal Praça Mauá",
    categoria: "Natal",
    descricao: "Projeto de Natal Praça Mauá.",
    ano: 2023,
    fotos: [
      { src: NATAL_PRACA_MAUA_00, alt: "Projeto Natal Praça Mauá 00" },
      { src: NATAL_PRACA_MAUA_01, alt: "Projeto Natal Praça Mauá 01" },
      { src: NATAL_PRACA_MAUA_02, alt: "Projeto Natal Praça Mauá 02" },
      { src: NATAL_PRACA_MAUA_03, alt: "Projeto Natal Praça Mauá 03" },
      { src: NATAL_PRACA_MAUA_04, alt: "Projeto Natal Praça Mauá 04" },
      { src: NATAL_PRACA_MAUA_05, alt: "Projeto Natal Praça Mauá 05" },
      { src: NATAL_PRACA_MAUA_06, alt: "Projeto Natal Praça Mauá 06" },
    ],
    fotoPrincipal: NATAL_PRACA_MAUA_00,
    alturaPrincipal: 500,
  },
  {
    id: 51,
    titulo: "Projeto Passarela",
    categoria: "Natal",
    descricao: "Projeto de Natal Passarela.",
    ano: 2023,
    fotos: [
      { src: PASSARELA_00, alt: "Projeto Passarela 00" },
      { src: PASSARELA_01, alt: "Projeto Passarela 01" },
    ],
    fotoPrincipal: PASSARELA_00,
    alturaPrincipal: 500,
  },
  {
    id: 52,
    titulo: "Projeto Árvore Maranhão",
    categoria: "Natal",
    descricao: "Projeto de Natal Árvore Maranhão.",
    ano: 2023,
    fotos: [{ src: ARVORE_MARANHAO_00, alt: "Projeto Árvore Maranhão 00" }],
    fotoPrincipal: ARVORE_MARANHAO_00,
    alturaPrincipal: 500,
  },
  {
    id: 53,
    titulo: "Projeto Árvore Lagoa",
    categoria: "Natal",
    descricao: "Projeto de Natal Árvore Lagoa.",
    ano: 2023,
    fotos: [{ src: ARVORE_LAGOA_00, alt: "Projeto Árvore Lagoa 00" }],
    fotoPrincipal: ARVORE_LAGOA_00,
    alturaPrincipal: 500,
  },
  // PROJETOS EVENTOS
  {
    id: 54,
    titulo: "Projeto Multishow Rock in Rio 2022",
    categoria: "Eventos",
    descricao: "Projeto de evento Multishow Rock in Rio 2022.",
    ano: 2022,
    fotos: [
      {
        src: MUTISHOW_ROCKINRIO2022_00,
        alt: "Projeto Multishow Rock in Rio 2022 00",
      },
      {
        src: MUTISHOW_ROCKINRIO2022_01,
        alt: "Projeto Multishow Rock in Rio 2022 01",
      },
    ],
    fotoPrincipal: MUTISHOW_ROCKINRIO2022_00,
    alturaPrincipal: 500,
  },
  {
    id: 55,
    titulo: "Projeto Sunset Instrumental",
    categoria: "Eventos",
    descricao: "Projeto de evento Sunset Instrumental.",
    ano: 2022,
    fotos: [
      { src: SUNSET_INSTRUMENTAL_00, alt: "Projeto Sunset Instrumental 00" },
      { src: SUNSET_INSTRUMENTAL_01, alt: "Projeto Sunset Instrumental 01" },
      { src: SUNSET_INSTRUMENTAL_02, alt: "Projeto Sunset Instrumental 02" },
      { src: SUNSET_INSTRUMENTAL_03, alt: "Projeto Sunset Instrumental 03" },
      { src: SUNSET_INSTRUMENTAL_04, alt: "Projeto Sunset Instrumental 04" },
    ],
    fotoPrincipal: SUNSET_INSTRUMENTAL_00,
    alturaPrincipal: 500,
  },
  {
    id: 56,
    titulo: "Projeto Exposição Jorge Aragão",
    categoria: "Eventos",
    descricao: "Projeto de evento Exposição Jorge Aragão.",
    ano: 2023,
    fotos: [
      {
        src: EXPOSICAO_JORGE_ARAGAO_00,
        alt: "Projeto Exposição Jorge Aragão 00",
      },
      {
        src: EXPOSICAO_JORGE_ARAGAO_01,
        alt: "Projeto Exposição Jorge Aragão 01",
      },
    ],
    fotoPrincipal: EXPOSICAO_JORGE_ARAGAO_00,
    alturaPrincipal: 500,
  },
  {
    id: 57,
    titulo: "Projeto Cocriação 2024",
    categoria: "Eventos",
    descricao: "Projeto de evento Cocriação 2024.",
    ano: 2024,
    fotos: [
      { src: COCRIADOR_2024_002, alt: "Projeto Cocriação 2024 002" },
      { src: COCRIADOR_2024_PALCO00, alt: "Projeto Cocriação 2024 Palco 00" },
      { src: COCRIADOR_2024_PALCO01, alt: "Projeto Cocriação 2024 Palco 01" },
      { src: COCRIADOR_2024_PALCO02, alt: "Projeto Cocriação 2024 Palco 02" },
    ],
    fotoPrincipal: COCRIADOR_2024_002,
    alturaPrincipal: 500,
  },
  {
    id: 58,
    titulo: "Projeto Sail GP",
    categoria: "Eventos",
    descricao: "Projeto de evento Sail GP.",
    ano: 2023,
    fotos: [
      { src: SAIL_GP_00, alt: "Projeto Sail GP 00" },
      { src: SAIL_GP_01, alt: "Projeto Sail GP 01" },
      { src: SAIL_GP_02, alt: "Projeto Sail GP 02" },
      { src: SAIL_GP_03, alt: "Projeto Sail GP 03" },
      { src: SAIL_GP_04, alt: "Projeto Sail GP 04" },
    ],
    fotoPrincipal: SAIL_GP_00,
    alturaPrincipal: 500,
  },
  {
    id: 59,
    titulo: "Projeto Gaúcha",
    categoria: "Eventos",
    descricao: "Projeto de evento Gaúcha.",
    ano: 2023,
    fotos: [
      { src: GAUCHA_00, alt: "Projeto Gaúcha 00" },
      { src: GAUCHA_01, alt: "Projeto Gaúcha 01" },
      { src: GAUCHA_02, alt: "Projeto Gaúcha 02" },
      { src: GAUCHA_03, alt: "Projeto Gaúcha 03" },
    ],
    fotoPrincipal: GAUCHA_00,
    alturaPrincipal: 500,
  },
  {
    id: 60,
    titulo: "Projeto ArteEducação",
    categoria: "Eventos",
    descricao: "Projeto de evento ArteEducação.",
    ano: 2023,
    fotos: [
      { src: ARTEEDUCACAO_00, alt: "Projeto ArteEducação 00" },
      { src: ARTEEDUCACAO_01, alt: "Projeto ArteEducação 01" },
      { src: ARTEEDUCACAO_02, alt: "Projeto ArteEducação 02" },
    ],
    fotoPrincipal: ARTEEDUCACAO_00,
    alturaPrincipal: 500,
  },
  {
    id: 61,
    titulo: "Projeto Vinhos",
    categoria: "Eventos",
    descricao: "Projeto de evento Vinhos.",
    ano: 2023,
    fotos: [
      { src: VINHOS_00, alt: "Projeto Vinhos 00" },
      { src: VINHOS_01, alt: "Projeto Vinhos 01" },
      { src: VINHOS_02, alt: "Projeto Vinhos 02" },
    ],
    fotoPrincipal: VINHOS_00,
    alturaPrincipal: 500,
  },
  {
    id: 62,
    titulo: "Projeto Spanta 2023",
    categoria: "Eventos",
    descricao: "Projeto de evento Spanta 2023.",
    ano: 2023,
    fotos: [
      { src: SPANTA2023_00, alt: "Projeto Spanta 2023 00" },
      { src: SPANTA2023_01, alt: "Projeto Spanta 2023 01" },
      { src: SPANTA2023_02, alt: "Projeto Spanta 2023 02" },
    ],
    fotoPrincipal: SPANTA2023_00,
    alturaPrincipal: 500,
  },
  {
    id: 63,
    titulo: "Projeto Domingão",
    categoria: "Eventos",
    descricao: "Projeto de evento Domingão.",
    ano: 2023,
    fotos: [
      { src: DOMINGAO_00, alt: "Projeto Domingão 00" },
      { src: DOMINGAO_01, alt: "Projeto Domingão 01" },
      { src: DOMINGAO_02, alt: "Projeto Domingão 02" },
    ],
    fotoPrincipal: DOMINGAO_00,
    alturaPrincipal: 500,
  },
  {
    id: 64,
    titulo: "Projeto ArtRio",
    categoria: "Eventos",
    descricao: "Projeto de evento ArtRio.",
    ano: 2023,
    fotos: [
      { src: ARTRIO_00, alt: "Projeto ArtRio 00" },
      { src: ARTRIO_01, alt: "Projeto ArtRio 01" },
      { src: ARTRIO_03, alt: "Projeto ArtRio 03" },
    ],
    fotoPrincipal: ARTRIO_00,
    alturaPrincipal: 500,
  },
  {
    id: 65,
    titulo: "Projeto Independência",
    categoria: "Eventos",
    descricao: "Projeto de evento Independência.",
    ano: 2023,
    fotos: [
      { src: INDEPENDENCIA_00, alt: "Projeto Independência 00" },
      { src: INDEPENDENCIA_01, alt: "Projeto Independência 01" },
      { src: INDEPENDENCIA_02, alt: "Projeto Independência 02" },
    ],
    fotoPrincipal: INDEPENDENCIA_00,
    alturaPrincipal: 500,
  },
  {
    id: 66,
    titulo: "Projeto Champions",
    categoria: "Eventos",
    descricao: "Projeto de evento Champions.",
    ano: 2023,
    fotos: [
      { src: CHAMPIONS_00, alt: "Projeto Champions 00" },
      { src: CHAMPIONS_01, alt: "Projeto Champions 01" },
    ],
    fotoPrincipal: CHAMPIONS_00,
    alturaPrincipal: 500,
  },
  {
    id: 67,
    titulo: "Projeto Casa Qatar",
    categoria: "Eventos",
    descricao: "Projeto de evento Casa Qatar.",
    ano: 2023,
    fotos: [
      { src: CASA_QATAR_00, alt: "Projeto Casa Qatar 00" },
      { src: CASA_QATAR_01, alt: "Projeto Casa Qatar 01" },
      { src: CASA_QATAR_02, alt: "Projeto Casa Qatar 02" },
      { src: CASA_QATAR_03, alt: "Projeto Casa Qatar 03" },
      { src: CASA_QATAR_04, alt: "Projeto Casa Qatar 04" },
      { src: CASA_QATAR_05, alt: "Projeto Casa Qatar 05" },
      { src: CASA_QATAR_06, alt: "Projeto Casa Qatar 06" },
    ],
    fotoPrincipal: CASA_QATAR_00,
    alturaPrincipal: 500,
  },
  {
    id: 68,
    titulo: "Projeto Roberto Carlos",
    categoria: "Eventos",
    descricao: "Projeto de evento Roberto Carlos.",
    ano: 2023,
    fotos: [
      { src: ROBERTO_CARLOS_00, alt: "Projeto Roberto Carlos 00" },
      { src: ROBERTO_CARLOS_01, alt: "Projeto Roberto Carlos 01" },
      { src: ROBERTO_CARLOS_02, alt: "Projeto Roberto Carlos 02" },
    ],
    fotoPrincipal: ROBERTO_CARLOS_00,
    alturaPrincipal: 500,
  },
  {
    id: 69,
    titulo: "Projeto CC2016",
    categoria: "Eventos",
    descricao: "Projeto de evento CC2016.",
    ano: 2016,
    fotos: [
      { src: CC2016_00, alt: "Projeto CC2016 00" },
      { src: CC2016_01, alt: "Projeto CC2016 01" },
      { src: CC2016_02, alt: "Projeto CC2016 02" },
      { src: CC2016_03, alt: "Projeto CC2016 03" },
    ],
    fotoPrincipal: CC2016_00,
    alturaPrincipal: 500,
  },
  {
    id: 70,
    titulo: "Projeto Aquarius",
    categoria: "Eventos",
    descricao: "Projeto de evento Aquarius.",
    ano: 2023,
    fotos: [{ src: PROJETO_AQUARIUS_00, alt: "Projeto Aquarius 00" }],
    fotoPrincipal: PROJETO_AQUARIUS_00,
    alturaPrincipal: 500,
  },
  {
    id: 71,
    titulo: "Projeto Rio+20",
    categoria: "Eventos",
    descricao: "Projeto de evento Rio+20.",
    ano: 2023,
    fotos: [{ src: RIO20_00, alt: "Projeto Rio+20 00" }],
    fotoPrincipal: RIO20_00,
    alturaPrincipal: 500,
  },
];

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  900: 2,
  600: 1,
};

export default function Galeria() {
  const navigate = useNavigate();
  const { selectedCategory } = useFilter();

  const handleProjetoClick = (projeto) => {
    navigate("/projeto", { state: { projeto } });
  };

  // Filtra os projetos baseado na categoria selecionada
  const filteredProjetos = selectedCategory
    ? projetos.filter((projeto) => projeto.categoria === selectedCategory)
    : projetos;

  return (
    <div className="w-100 p-0">
      <h1 className="gallery-title">
        {selectedCategory ? `Projetos - ${selectedCategory}` : "Projetos"}
      </h1>
      {selectedCategory && (
        <div className="filter-info mb-4">
          <span className="badge bg-success fs-6">
            <i className="bi bi-funnel me-2"></i>
            Filtrado por: {selectedCategory}
          </span>
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid-react"
        columnClassName="masonry-grid-column"
      >
        {filteredProjetos.map((projeto, idx) => (
          <div
            key={projeto.id}
            className="masonry-item-react position-relative"
            onClick={() => handleProjetoClick(projeto)}
          >
            <div className="masonry-img-wrapper-react">
              <img
                src={projeto.fotoPrincipal}
                alt={projeto.titulo}
                onClick={() => handleProjetoClick(projeto)}
                className="rounded shadow-sm galeria-img"
                style={{ height: `${projeto.alturaPrincipal}px` }}
              />
              <div className="masonry-hover-overlay-react d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <span className="masonry-title-react">{projeto.titulo}</span>
                  <div className="mt-2">
                    <span className="badge bg-light text-dark">
                      {projeto.fotos.length} foto
                      {projeto.fotos.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
      {filteredProjetos.length === 0 && (
        <div className="text-center py-5">
          <i className="bi bi-images fs-1 text-muted mb-3"></i>
          <h3 className="text-muted">Nenhum projeto encontrado</h3>
          <p className="text-muted">
            Não há projetos na categoria selecionada.
          </p>
        </div>
      )}
    </div>
  );
}
