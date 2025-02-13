import { useState } from "react";
import vodkaImg from '../assets/vodka.png';
import whiskyImg from '../assets/whiskey.png';
import ginImg from '../assets/gin.png';
import beerImg from '../assets/beer.png';

const menu = [
    {
        imgUrl: vodkaImg,
        name: 'Vodka',
        price: 100,
        quantity: 20
    },
    {
        imgUrl: whiskyImg,
        name: 'Whiskey',
        price: 250,
        quantity: 20
    },
    {
        imgUrl: ginImg,
        name: 'Gin',
        price: 270,
        quantity: 20
    },
    {
        imgUrl: beerImg,
        name: 'Beer',
        price: 20,
        quantity: 60
    }
]

const shoppingCart = [];



const showMenu = (menu) => {
    return (
    <div className="menuContainer">
        <ul className="menu">
            {menu.map((item, index) => (
                <li key={index} style={{
                    padding:'5px',
                    width: '25%',
                    height: '45%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'aquamarine',
                    listStyle: 'none',
                    fontFamily: 'arial',
                    fontSize:'10px',
                    borderRadius:'10px',
                    }}>

                    <div className="itemTextContainer">
                        <p className="itemText">
                            {item.name} - ${item.price} (Quantity: {item.quantity})
                        </p>
                        <button className="buyBtn" key={index} onClick={() => updateShoppingCart(shoppingCart, item)}>Buy</button>
                        <img src={item.imgUrl} alt={item.name} />
                    </div>
                </li>
            ))}
        </ul>
    </div>
    )
}

const showSoppingCart = (shoppingCart) => {
    const calculateTotal = () => {
        let total = 0;
        for(let i=0;i<shoppingCart.length;i++){
            total += shoppingCart[i].price;
        }
        return total;
    }
    
    return (
        <div className="shoppingCartContainer">
            <ul className="shoppingCart">
                {shoppingCart.map((item, index) => (
                    <li key={index}>
                       {item.name} - {item.price} 
                    </li>        
                ))}
            </ul>
            <p className="shoppingCartTotal">
                Total: {calculateTotal()} $
            </p>
            <button>CheckOut</button>
        </div>
    )
}

const updateShoppingCart = (shoppingCart, item) => {
    shoppingCart.push(item);
    console.log(shoppingCart)
    return shoppingCart;
}

const Barman = () => {
    console.log(shoppingCart);
    const [notShowing, setShowMenu] = useState(true);
    const [shoppingCartClosed, setShoppingCartclosed] = useState(true)


    return (
        <div className="barContainer">
            {/* <button onClick={()=> setTakeOrder(!notOrdering)}>Take order</button> */}
            <button onClick={() => setShowMenu(!notShowing)}>
                {notShowing ? "Show Menu" : "Hide Menu"}
            </button>
            <button onClick={() => setShoppingCartclosed(!shoppingCartClosed)}>
                {shoppingCartClosed ? "Open Shopping Cart" : "Close Shopping Cart"};
            </button>
            {!notShowing && showMenu(menu)}
            {!shoppingCartClosed && showSoppingCart(shoppingCart)}
            {/* {!notOrdering && takeOrder()} */}
        </div>
    );
}

export default Barman