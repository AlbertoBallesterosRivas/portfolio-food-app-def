const express = require('express')
const cors = require('cors')
const app = express()

//app.use(express.static('build'))
app.use(cors())

const foodTypes = [
  { id: 1, type: "Hamburguesas", img: "/assets/hamburguers.png" },
  { id: 2, type: "Refrescos", img: "/assets/drinks.png" },
  { id: 3, type: "Complementos", img: "/assets/patatasFritas.png" },
  { id: 4, type: "Postres", img: "/assets/tartaChocolate.png" },
  { id: 5, type: "Helados", img: "/assets/heladoVainillaChocolate.png" },
  { id: 6, type: "Ensaladas", img: "/assets/ensaladaBurrata.jpeg" },
  { id: 7, type: "Desayunos", img: "/assets/tostadaAceite.png" },
  { id: 8, type: "Cafés", img: "/assets/cafeLeche.png" },
  { id: 9, type: "Batidos", img: "/assets/batidoChocolate.png" },
];

const products = [
  {
    id: 1,
    type: "Hamburguesas",
    name: "Hamburguesa de pollo",
    img: "/assets/hamburguesaPollo.png",
    price: "4.40€",
    description:
      "El ineludible bocado de pollo crujiente. Crujiente pollo con salsa fina y lechuga, en pan con semilla de sésamo.",
  },
  {
    id: 2,
    type: "Hamburguesas",
    name: "Hamburguesa con queso",
    img: "/assets/hamburguesaQueso.png",
    price: "4.10€",
    description:
      "Ahora más caliente, más jugosa y más sabrosa. Nuestra hamburguesa de queso con kétchup, mostaza, cebolla, pepinillo y queso fundido tipo Cheddar.",
  },
  {
    id: 3,
    type: "Hamburguesas",
    name: "Hamburguesa de pescado",
    img: "/assets/hamburguesaPescado.png",
    price: "3.50€",
    description:
      "¡Cuenta con el pescado para tu menú! Exquisito filete de bacalao rebozado, con queso Cheddar fundido y deliciosa salsa tártara.",
  },
  {
    id: 4,
    type: "Hamburguesas",
    name: "Hamburguesa con huevo",
    img: "/assets/hamburguesaHuevo.png",
    price: "4.50€",
    description:
      "¡Te dejará sin palabras! Prueba la nueva hamburguesa con huevo. Con doble carne 100% vacuno español, bacon, queso gouda, cebolla crispy, huevo, pan de semillas de amapola y una espectacular y cremosa salsa holandesa.",
  },
  {
    id: 5,
    type: "Refrescos",
    name: "Coca-Cola",
    img: "/assets/drinks.png",
    price: "1.95€",
    description:
      "Destapa la felicidad. Una Coca-Cola bien fría nos hace disfrutar de cada instante de nuestras vidas de una forma especial. Por su sabor único y su carácter refrescante y auténtico, Coca-Cola añade magia a cada momento, sobre todo cuando nos estamos divirtiendo con nuestros amigos.",
  },
  {
    id: 6,
    type: "Refrescos",
    name: "Fanta",
    img: "/assets/fanta.png",
    price: "1.95€",
    description:
      "Su sabor afrutado y refrescante hacen que sea completamente imposible aburrirse con una Fanta en la mano. Hay una variedad para cada ocasión, disfruta de su sabor, la hidratación ya está incluida.",
  },
  {
    id: 7,
    type: "Refrescos",
    name: "Aquarius Zero",
    img: "/assets/aquarius.png",
    price: "1.95€",
    description:
      "Vente arriba con Aquarius. Todo el sabor de Aquarius, en su versión sin azúcar. Una bebida refrescante sin nada de azúcar perfecta para acompañar tus comidas. Descubre la increíble sensación de venirse arriba con Aquarius Libre.",
  },
  {
    id: 8,
    type: "Refrescos",
    name: "Tropicana",
    img: "/assets/tropicana.png",
    price: "1.95€",
    description:
      "Zumo 100% naranja. Zumo elaborado a base de 100% fruta exprimida sin pulpa. No prodecente de concentrado.",
  },
  {
    id: 9,
    type: "Complementos",
    name: "Patatas fritas",
    img: "/assets/patatasFritas.png",
    price: "1.95€",
    description:
      "Acompañadas de salsa de queso y bacon, ¡no podrás resistirte a ellas! Disponibles con patatas fritas o Deluxe y en formato individual o para compartir. Valores nutricionales correspondientes a ración individual de patatas fritas.",
  },
  {
    id: 10,
    type: "Complementos",
    name: "Alitas de pollo",
    img: "/assets/alitasPollo.png",
    price: "2.95€",
    description:
      "¿Quien puede resistirse a las deliciosas alitas de pollo crujientes, con su inconfundible sabor barbacoa, para tomar solo o para compartir con quien tú quieras?. ¡No te resistirás! Valores nutricionales correspondientes a una ración de 4 unidades.",
  },
  {
    id: 11,
    type: "Complementos",
    name: "Gazpacho",
    img: "/assets/gazpacho.png",
    price: "2.50",
    description:
      "El sabor a verano que llega del Mediterráneo. Refrescante gazpacho listo para tomar. ¡Disfrútalo!",
  },
  {
    id: 12,
    type: "Complementos",
    name: "Nuggets de pollo",
    img: "/assets/nuggets.png",
    price: "2.95€",
    description:
      "Bocaditos de pollo rebozados. Disponible en 4, 6 y 9 piezas. Elige entre estas deliciosas salsas: Barbacoa, Agridulce, Mostaza, Buffalo y Deluxe.",
  },
  {
    id: 13,
    type: "Postres",
    name: "Pastel de manzana",
    img: "/assets/pastelManzana.png",
    price: "1.55€",
    description:
      "Transpórtate al pasado de un solo mordisco con un delicioso pastel de manzana caliente con canela envuelto en un hojaldre crujiente.",
  },
  {
    id: 14,
    type: "Postres",
    name: "Piña",
    img: "/assets/piña.png",
    price: "0.95€",
    description: "Un postre equilibrado para tu día más feliz.",
  },
  {
    id: 15,
    type: "Postres",
    name: "Tarta de chocolate",
    img: "/assets/tartaChocolate.png",
    price: "0.95€",
    description:
      "El pastel de chocolate, tarta de chocolate o torta de chocolate, es un postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas.",
  },
  {
    id: 16,
    type: "Helados",
    name: "Helado de vainilla y chocolate",
    img: "/assets/heladoVainillaChocolate.png",
    price: "2.95€",
    description:
      "¿Eres un fan de los clásicos? Riquísimo helado sabor vainilla combinado con topping de chocolate.",
  },
  {
    id: 17,
    type: "Helados",
    name: "Helado de vainilla y fresa",
    img: "/assets/heladoVainillaFresa.png",
    price: "2.95€",
    description:
      "¿Eres un fan de los clásicos? Riquísimo helado sabor vainilla combinado con topping de fresa.",
  },
  {
    id: 18,
    type: "Helados",
    name: "Helado de vainilla y caramelo",
    img: "/assets/heladoVainillaCaramelo.png",
    price: "2.95€",
    description:
      "¿Eres un fan de los clásicos? Riquísimo helado sabor vainilla combinado con topping de caramelo.",
  },
  {
    id: 19,
    type: "Helados",
    name: "Helado de vainilla y chocolate blanco",
    img: "/assets/heladoVainillaChocolateBlanco.png",
    price: "2.95€",
    description:
      "¿Eres un fan de los clásicos? Riquísimo helado sabor vainilla combinado con topping de chocolate blanco.",
  },
  {
    id: 20,
    type: "Ensaladas",
    name: "Ensalada de burrata",
    img: "/assets/ensaladaBurrata.jpeg",
    price: "5.95€",
    description:
      "Esta insalata di burrata, o ensalada de burrata es una ensalada típicamente del sur de Italia.",
  },
  {
    id: 21,
    type: "Ensaladas",
    name: "Ensalada César",
    img: "/assets/ensaladaCesar.jpg",
    price: "6.95€",
    description:
      "Una ensalada César es una ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra. La ensalada César original no contiene pollo, aunque se le suele agregar habitualmente.",
  },
  {
    id: 22,
    type: "Ensaladas",
    name: "Ensalada Guacamole",
    img: "/assets/ensaladaGuacamole.jpg",
    price: "6.95€",
    description:
      "El aguacate llegó a nuestras vidas hace pocos años, pero en seguida se hizo hueco y estableció entre nuestros alimentos favoritos. Su textura mantecosa y su sabor suave lo convierten en un ingrediente versátil que combina con casi todo, ya sea elaboraciones dulces o saladas.",
  },
  {
    id: 23,
    type: "Ensaladas",
    name: "Ensalada Cobb",
    img: "/assets/ensaladaCobb.jpg",
    price: "7.95€",
    description:
      "La ensalada Cobb es la ensalada americana por excelencia, cuyos principales ingredientes son lechuga, tomate, panceta o bacon, pechuga de pollo, huevo duro, aguacate y queso roquefort.",
  },
  {
    id: 24,
    type: "Desayunos",
    name: "Tostada con aceite y tomate",
    img: "/assets/tostadaAceite.png",
    price: "1.95€",
    description:
      "Disfrutar de una deliciosa tostada de tomate y aceite de oliva virgen extra es uno de los grandes placeres de nuestra gastronomía, y es que empezar el día con energía resulta realmente sencillo con esta receta.",
  },
  {
    id: 25,
    type: "Desayunos",
    name: "Tostada con jamón",
    img: "/assets/tostadaJamon.png",
    price: "2.45€",
    description:
      "No hay nada como un desayuno en compañía de una tostada de jamón. La tostada de jamón es típica en Andalucía, y esconde similitudes con el tradicional valenciano Pan Tumaca.",
  },
  {
    id: 26,
    type: "Desayunos",
    name: "Croissant de mantequilla",
    img: "/assets/croissant.png",
    price: "1.95€",
    description:
      "El croissant también se conoce en algunos países como medialuna, cachitos, cangrejos o cuernitos. Se trata de un bollo de origen austríaco elaborado con masa de hojaldre, levadura y mantequilla.",
  },
  {
    id: 27,
    type: "Desayunos",
    name: "Dónut",
    img: "/assets/donut.png",
    price: "0.95€",
    description:
      "Una dona, también llamada dónut​​​, rosquilla, rosquita, rosca, picarón, berlina o berlín, es un toro o rosca de pan dulce que tradicionalmente está frito en grasa de cerdo.",
  },
  {
    id: 28,
    type: "Desayunos",
    name: "Dónut de chocolate",
    img: "/assets/donutChocolate.png",
    price: "0.95€",
    description:
      "Estos donuts caseros de chocolate son estupendos para una merienda o desayuno junto a un buen vaso de leche, aunque sin duda también serán un éxito para una fiesta infantil.",
  },
  {
    id: 29,
    type: "Cafés",
    name: "Café con leche",
    img: "/assets/cafeLeche.png",
    price: "0.95€",
    description:
      "Para comenzar tu día, a media mañana o de postre, nuestro café con leche.",
  },
  {
    id: 30,
    type: "Cafés",
    name: "Capuccino",
    img: "/assets/capuccino.png",
    price: "0.95€",
    description:
      "El capuchino​ es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para darle cremosidad. Un capuchino se compone de 125 ml de leche y 25 ml de café expreso.",
  },
  {
    id: 31,
    type: "Cafés",
    name: "Café Vienés",
    img: "/assets/cafeVienes.png",
    price: "0.95€",
    description:
      "Un café vienés es una bebida que consta de café y nata montada. Es una bebida tan antigua como el cappuccino, muy popular en los cafés de Budapest y Viena.",
  },
  {
    id: 32,
    type: "Cafés",
    name: "Café Expresso",
    img: "/assets/cafeExpresso.png",
    price: "0.95€",
    description:
      "El Espresso es una forma de preparar el café. El café espresso se considera el café por antonomasia. Su cuerpo y sabor hacen de este café una verdadera delicia de la que participan todos los sentidos. El café espresso tiene su origen en Italia y su historia está ligada a las máquinas Express.",
  },
  {
    id: 33,
    type: "Batidos",
    name: "Batido de chocolate",
    img: "/assets/batidoChocolate.png",
    price: "0.95€",
    description:
      "No hay que renunciar a las cosas que nos gustan por estar sanos, simplemente hay que intentar prepararlas de la forma más saludable posible, como este batido de chocolate, que es realmente adictivo.",
  },
  {
    id: 34,
    type: "Batidos",
    name: "Batido de vainilla",
    img: "/assets/batidoVainilla.png",
    price: "0.95€",
    description:
      "No hay que renunciar a las cosas que nos gustan por estar sanos, simplemente hay que intentar prepararlas de la forma más saludable posible, como este batido de vainilla, que es realmente adictivo.",
  },
  {
    id: 35,
    type: "Batidos",
    name: "Batido de fresa",
    img: "/assets/batidoFresa.png",
    price: "0.95€",
    description:
      "No hay que renunciar a las cosas que nos gustan por estar sanos, simplemente hay que intentar prepararlas de la forma más saludable posible, como este batido de fresa, que es realmente adictivo.",
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/foodTypes', (request, response) => {
  response.json(foodTypes)
})

app.get('/api/products', (request, response) => {
  response.json(products)
})

const PORT = 8800
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})