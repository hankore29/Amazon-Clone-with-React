import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
    <div className="home">
        <div className="home__container">
        <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-ZDkyNTQ5OGMt-w1500._CB413865922_.jpg"
            alt=""
        />

        <div className="home__row">
            <Product
            id="12321341"
            title="CHUWI AeroBook Pro 13.3 inch 8th Intel Core M3-8100Y 8GB RAM 256GB SSD Laptop,Windows 10 Notebook,Thin and Lightweight Notebook with Backlit Keyboard Type-C"
            price={399.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Ay4-rgt6L._AC_SL1000_.jpg"
            />
            <Product
            id="49538094"
            title="BEZGAR Toy Grade 1:24 Scale Licensed Remote Control Car, Ferrari FXX K EVO Electric Sport Racing Hobby Toy Car Model Vehicle for Boys Kids Teens and Toddler..."
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81U92Kem5lL._AC_SL1500_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="4903850"
            title="Sadie Customizable Ergonomic High-Back Mesh Task Chair with Arms and Lumbar Support - Ergonomic Computer/Office Chair (HVST121)"
            price={200.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81WJIkvf3SL._AC_SL1500_.jpg"
            />
            <Product
            id="23445930"
            title="KingSo World Globe, 13'' Globe of Perfect Spinning Globe for Kids, Geography Students, Teachers, Easy Rotating Swivel"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61tfyLx%2B4iL._AC_SL1200_.jpg"
            />
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="90829332"
            title="Samsung QN75Q900RBFXZA Flat 75-Inch QLED 8K Q900 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={3599.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/9113rIxCA5L._AC_SL1500_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="4903859"
            title="Spalding NBA Zi/O Indoor-Outdoor 29.5'' Basketball"
            price={31.06}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/A1ser-udbFL._AC_SL1500_.jpg"
            />
            <Product
            id="23445937"
            title="Jackson JS Series Concert Bass Minion JS1X Bass Guitar (Satin Black)"
            price={179.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/616KbmyJS0L._AC_SL1500_.jpg"
            />
            <Product
            id="3254354344"
            title="Canon EOS 5D Mark IV Full Frame Digital SLR Camera with EF 24-105mm f/4L is II USM Lens Kit (Renewed)"
            price={3099.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/817VwYq8zkL._AC_SL1500_.jpg"
            />
        </div>

        </div>
    </div>
    );
    }

    export default Home;