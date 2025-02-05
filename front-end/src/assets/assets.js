import add_icon from './add-icon.png'
import add_icon_white from './add-icon-white.png'
import app_store from './app-store.jpg'
import bag from './bag.png'
import bear from './bear.jpg'
import ceasar_salad from './cesar-salad.jpg'
import cheese_banitsa from './cheese-banitsa.jpg'
import chicken_soup from './chicken-soup.jpg'
import close from './close.png'
import coke from './coke.jpg'
import crem_caramel from './crem-caramel.jpg'
import facebook_app_symbol from './facebook-app-symbol.png'
import french_fries from './french-fries.jpg'
import fried_camember from './fried-camember.jpg'
import fried_cheese from './fried-cheese.jpg'
import fried_chicken from './fried-chicken.jpg'
import header from './header.jpeg'
import headerr from './headerr.jpeg'
import icon_minus from './icon-minus.png'
import icon_select from './icon-select.png'
import icons_linkedin from './icons-linkedin.png'
import icons_search from './icons-search.png'
import instagram from './instagram.png'
import kebapche from './kebapche.jpeg'
import kufte from './kufte.jpeg'
import logo from './logo.jpg'
import logout from './logout.png'
import medovik from './medovik.jpg'
import menu1 from './menu1.jpeg'
import menu2 from './menu2.jpeg'
import menu3 from './menu3.jpeg'
import menu4 from './menu4.jpeg'
import menu5 from './menu5.jpeg'
import menu6 from './menu6.jpeg'
import menu7 from './menu7.jpeg'
import menu8 from './menu8.jpeg'
import orange_juice from './orange-juice.jpg'
import parcel from './parcel.png'
import pasta_salad from './pasta-salad.jpg'
import pirjola from './pirjola.jpeg'
import play_store from './play-store.jpg'
import potato_salat from './potato-salat.jpg'
import rating from './rating.jpg'
import red_wine from './red-wine.jpeg'
import sacher from './sacher.jpg'
import shkembe_soup from './shkembe-soup.jpg'
import shopping_bascket from './shopping_bascket.png'
import shopska_salad from './shopska-salad.jpg'
import spinach_banitsa from './spinach-banitsa.jpeg'
import tharator from './tharator.jpeg'
import twitter from './twitter.png'
import user from './user.png'
import water from './water.jpg'
import white_wine from './white-wine.jpeg'
import whysky from './whysky.jpeg'

export const assets = {
    add_icon,
    add_icon_white,
    app_store,
    bag,
    bear,
    ceasar_salad,
    cheese_banitsa,
    chicken_soup,
    close,
    coke,
    crem_caramel,
    facebook_app_symbol,
    french_fries,
    fried_camember,
    fried_cheese,
    fried_chicken,
    header,
    headerr,
    icon_minus,
    icon_select,
    icons_linkedin,
    icons_search,
    instagram,
    kebapche,
    kufte,
    logo,
    logout,
    medovik,
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    orange_juice,
    parcel,
    pasta_salad,
    pirjola,
    play_store,
    potato_salat,
    rating,
    red_wine,
    sacher,
    shkembe_soup,
    shopping_bascket,
    shopska_salad,
    spinach_banitsa,
    tharator,
    twitter,
    user,
    water,
    white_wine,
    whysky
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu1
    },
    {
        menu_name: "Pastries",
        menu_image: menu2
    },
    {
        menu_name: "Deserts",
        menu_image: menu3
    },
    {
        menu_name: "Soups",
        menu_image: menu4
    },
    {
        menu_name: "BBQ",
        menu_image: menu5
    },
    {
        menu_name: "Fried",
        menu_image: menu6
    },
    {
        menu_name: "Drinks",
        menu_image: menu7
    },
    {
        menu_name: "Alcohols",
        menu_image: menu8
    }
]

export const food_list = [
    {
        _id: "1",
        name:"Салата Цезар",
        image: ceasar_salad,
        price: 16,
        description: "салата от маруля и крутони, гарнирани с пармезан, лимонов сок, зехтин, яйце, черен пипер и сос Уорчестър",
        category:"Salad"
    },
    {
        _id: "2",
        name:"Картофена салата",
        image: potato_salat,
        price: 9,
        description: "салата от варени картофи, цедено кисело мляко, копър и овкусени със зехтин и сол",
        category:"Salad"
    },
    {
        _id: "3",
        name:"Шопска салата",
        image: shopska_salad,
        price: 12,
        description: "салата от розови домати, краставица, лук, чушка, сирене и овкусени със зехтин и сол",
        category:"Salad"
    },
    {
        _id: "4",
        name:"Салата по италиански с макарони ",
        image: pasta_salad,
        price: 14,
        description: "салата от варени макарони, зеленчуци, пуешко филе и овкусени със зехтин и сол",
        category:"Salad"
    },
    {
        _id: "5",
        name:"Баница със сирене",
        image: cheese_banitsa,
        price: 12,
        description: "баница от ръчно точени кори с плънка от яйца, сирене и кисело мляко",
        category:"Pastries"
    },
    {
        _id: "6",
        name:"Баница със спанак",
        image: spinach_banitsa,
        price: 14,
        description: "баница от ръчно точени кори с плънка от яйца, сирене и спанак",
        category:"Pastries"
    },
    {
        _id: "7",
        name:"Крем карамел",
        image: crem_caramel,
        price: 6,
        description: "десерт от яйчен крем със слой от мек карамел",
        category:"Deserts"
    },
    {
        _id: "8",
        name:"Торта Cахер",
        image: sacher,
        price: 6,
        description: "десерт с наситен вкус на шоколадова сметана и сочни шоколадови блатове с парченца орехи и ароматно сладко от смокини",
        category:"Deserts"
    },
    {
        _id: "9",
        name:"Пилешка супа",
        image: chicken_soup,
        price: 8,
        description: "супа с пилешко месо, зеленчуци, фиде и застройка от кисело мляко и яйца",
        category:"Soups"
    },
    {
        _id: "10",
        name:"Картофена супа",
        image: shkembe_soup,
        price: 7,
        description: "супа с картофи, зеленчуци, фиде и застройка от кисело мляко и яйца",
        category:"Soups"
    },
    {
        _id: "11",
        name:"Таратор",
        image: tharator,
        price: 5,
        description: "кисело мляко с нарязани на кубчета краставица и копър",
        category:"Soups"
    },
    {
        _id: "12",
        name:"Кебапче",
        image: kebapche,
        price: 3,
        description: "от свинско месо с подправки",
        category:"BBQ"
    },
    {
        _id: "13",
        name:"Кюфте",
        image: kufte,
        price: 3,
        description: "от свинско месо с подправки",
        category:"BBQ"
    },
    {
        _id: "14",
        name:"Пирешка пържола",
        image: pirjola,
        price: 6,
        description: "пържола от бут овкусена с подправки",
        category:"BBQ"
    },
    {
        _id: "15",
        name:"Пържени картофи",
        image: french_fries,
        price: 7,
        description: "пържени картофи с гарнитура сос по избор",
        category:"Fried"
    },
    {
        _id: "16",
        name:"Паниран кашкавал",
        image: fried_cheese,
        price: 9,
        description: "пържени панирани резени кашкавал с гарнитура сос по избор",
        category:"Fried"
    },
    {
        _id: "17",
        name:"Панипан Камембер",
        image: fried_camember,
        price: 8,
        description: "пържени паниран Камембер със сладко от боровинки",
        category:"Fried"
    },
    {
        _id: "18",
        name:"Вода",
        image: water,
        price: 2,
        description: "вода",
        category:"Drinks"
    },
    {
        _id: "19",
        name:"Кола",
        image: coke,
        price: 3,
        description: "кола",
        category:"Drinks"
    },
    {
        _id: "20",
        name:"Портокалов сок",
        image: orange_juice,
        price: 3,
        description: "портокалов сок",
        category:"Drinks"
    },
    {
        _id: "21",
        name:"Уиски",
        image: whysky,
        price: 10,
        description: "Уиски",
        category:"Alcohols"
    },
    {
        _id: "22",
        name:"Бяло вино",
        image: white_wine,
        price: 7,
        description: "Бяло вино",
        category:"Alcohols"
    },
    {
        _id: "23",
        name:"Бира",
        image: bear,
        price: 7,
        description: "Бира",
        category:"Alcohols"
    }
]