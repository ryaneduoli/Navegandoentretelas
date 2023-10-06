import styled from 'styled-components/native'
export const DivHeader = styled.View`
width: 100%;
min-height: 100%;
max-height: auto;
background: #F5F5F5;
display: flex;
flex-direction: column;
`;
export const HeaderNav = styled.View`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 0.5rem;
padding: 0.5rem;
`
export const TituloUsuario = styled.Text`
font-size: 1rem;
font-weight: 700;
font-family: arial;
color: #1d1d1d;
`;
export const IconeHeader = styled.Image`
width: 34px;
height: 34px;
`
export const Input = styled.TextInput`
background: #4DBCA7 ;
padding: 1rem;
width: 70%;
height: 42px;
border-radius: 50px;
color: #ffff;

`;
export const Filtro = styled.TouchableOpacity`
width: 44px;
height: 44px;
border-radius: 100px;
background: #786CAC;
background-image: url('./img/Union.png');
display: flex;
justify-content: center;
align-items: center;
`
export const ConteudoBusca = styled.View`
display: flex;
margin: 0rem 2rem;
justify-content: space-between;
flex-direction: row;
`
export const ImagemFiltro = styled.Image`
width: 22px;
height: 22px;
object-fit: cover;


`

export const DivInput = styled.View`
background: #4DBCA7 ;
padding: 1rem;
width: 75%;
height: 42px;
border-radius: 50px;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 2rem;


`

export const DivCarrousel = styled.View`
width: 100%;
height: auto;
gap: 2rem;
object-fit: cover;
display: flex;

`
export const DivNav = styled.View`
width: 100%;
height: auto;
gap: 2rem;
flex-direction: column;
display: flex;

`


export const DivCard = styled.View`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


export const ImagemCard = styled.Image`
width: 250;
height: 200px;
border-radius: 20px;
resize: center;
`

export const FlatCarrousel = styled.FlatList`
display: flex;
flex-direction: row;
margin: 0 1rem;
padding-left: 5rem;
`

export const TextCarrosel = styled.Text`
color: black;
font-weight: 600;
font-size: 16px;
margin-left: 1.5rem;
`
export const CaixaTitulo = styled.TouchableOpacity`
width: 185px;
height: 88px;
flex-shrink: 0;
border-radius: 10px;
background-color: linear-gradient(0deg, rgba(75,173,172,0.4962359943977591) 70%, rgba(75,173,172,1) 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
bottom: 30px
`
export const TextoCard = styled.Text`
font-size: 18px;
color: #fff;
font-weight: 500;
`
export const TextoCardMin = styled.Text`
font-size: 16px;
color: #fff;
font-weight: 400;
`
export const ImageDog = styled.Image`
width: 350px;
height: 250px;
border-radius: 40px;

`
export const DivCardCorpo = styled.View`
width: 100vw;
height: 350px;
margin-top: 2.5rem;
display: flex;
justify-content: center;
align-items: center;

`
export const FlatCarrouselDogs = styled.View`
display: flex;
flex-direction: column;
width: 100vw;
align-items:center;
justify-content:center;
padding: 1rem 0;

`
export const CaixaTituloDogs = styled.TouchableOpacity`
width: 350px;
height: auto;
flex-shrink: 0;
border-radius: 50px;
background-color:white;
display: flex;
flex-direction: column;
align-items: start;
padding: 2rem 2rem;
position: relative;
bottom: 50px;
gap: 8px;
`
export const TextoCardDog = styled.Text`
font-size: 18px;
color: #000;
font-weight: 500;
`
export const TextoCardMinDOg = styled.Text`
font-size: 16px;
color: #000;
font-weight: 400;
`
export const TextoCardMinDOgTwo = styled.Text`
font-size: 16px;
color: #000;
font-weight: 300;
`
export const AlinhamentoCard = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const AlinhamentoCardItem = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 0.5rem;
align-items: center;
`
export const AlinhamentoCardItemFinal = styled.View`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
`
export const BtnItem = styled.View`
width: auto;
height: auto;
background: #d9d9d9;
padding: 5px 15px;
border-radius: 20px
`
export const ImageIcones = styled.Image`
width: 1.5rem;
height: 1.5rem;
`
export const ImageIconesCora = styled.Image`
width: 3rem;
height: 3rem;
`
//Detalhes

export const ImageDetails = styled.Image`
object-fit: cover;  
  width: 100vw;
  height: 50vh;
`
export const CorpoDetails = styled.View`
width: 100vw;
overflow-x: hidden;
min-height: 100vh;
max-height: auto;
background: #fff;
display: flex;
align-items: center;
`
export const InformationDetails = styled.View`
width: 100vw;
height: 50%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
`
export const GridDetails = styled.View`
width: 100vw;
height: auto;
display: grid;
grid-template-columns: 120px 120px 120px;
grid-template-rows: 40px 40px;
align-items: center;

`
export const ItemGridDetails = styled.View`
width: 100px;
height: 40px;
padding: 5px;
display: flex;
align-items: start;
justify-content: center;
`
export const ItemGridDetailsLaranja = styled.View`
width: 100px;
height: 30px;
padding: 5px;
margin-left: 3px;
display: flex;
align-items: start;
justify-content: center;
border-left-width: 3px;
border-left-style : solid;
border-left-color : #E27a3b;
`
export const ItemGridDetailsAzul = styled.View`
width: 100px;
height: 30px;
padding: 5px;
margin-left: 3px;
display: flex;
align-items: start;
justify-content: center;
border-left-width: 3px;
border-left-style : solid;
border-left-color : #4bafab;
`
export const ItemGridDetailsAmarelo = styled.View`
width: 100px;
height: 30px;
padding: 5px;
display: flex;
margin-left: 3px;
align-items: start;
justify-content: center;
border-left-width: 3px;
border-left-style : solid;
border-left-color : #f3bf38;
`
export const TituloInformation = styled.Text`
font-size: 40px;
color: #1d1d1d;
font-weight: 700;
`
export const TextoGrid = styled.Text`
font-size: 16px;
color: #1d1d1d;
font-weight: 400;
`
export const TituloGrid = styled.Text`
font-size: 16px;
color: #1d1d1d;
font-weight: 600;
`
export const PerfilArea = styled.View`
height: 70px;
width: auto;
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
justify-content: start;
border-top-width: 1.5px;
border-top-style : solid;
border-top-color : #f3bf38;
`
export const BotaoAdote = styled.TouchableOpacity`
width: 70%;
height: 90px;
background: #4badac;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 2rem;
`
export const TextAdote = styled.Text`
font-size: 30px;
color: #fff;
font-weight: 700;
`
export const IconAdote = styled.Image`
height: 32px;
width: 40px;
`
export const Bolhas = styled.Image`
height: 256px;
width: 256px;
position: absolute;
bottom: 0px;
right: -20px;
`