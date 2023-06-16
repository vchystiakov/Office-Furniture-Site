import React, { useState } from 'react'
// Імпорт іконки
import { FaShoppingCart} from "react-icons/fa";
// Імпот функції яка відобрає одну одиницю товару в корзині
import Order from './order';


// Функція яка показує товари в корзині у випадку якщо кількість одинииць товару більше 0
const showOrders = (props) => {
  // Змінна в якій знаходиться сума всіх товарів
  let sum = 0 ;
  // Логіка яка реалізовує суму всіх замовлених товарів, метод parseFloat - перетворює текстовий тип ціни товару в чисельний(текстові типи не добавляться як арифметична сума)
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <div>
      {/* Метод map перебери всі orders з props та сформує новий масив який складатиметься з компонент order які будуть мати свої унікальні ключі */}
      {props.orders.map(el=> (
        <Order onDelete = {props.onDelete} key = {el.id} item = {el} />
      ))}
      {/* Блок з текстом який буде виводити всю вартість товарів в корзині, Intl.NumberFormat()/format(sum) - формат який завкругляє число до двох знаків після коми*/}
      <p className='summary'>Sum:{new Intl.NumberFormat().format(sum)}$</p>
    </div>
  )
}

// Функція яка показує товари в корзині у випадку якщо кількість одиниць рівна 0
const showNothing = () => {
  return (
    <div className='empty'>
      <h2> There are no goods in the cart. </h2>
    </div>
  )
}



const Header = (props)=> {
  // Для того щоб добавити клас, який буде відслідковувати нажимання на кнопку корзини потрібно скористатись хуком стану useState
  // В якості параметрів цей хук приймає два значення: 1.Поточний стан 2.Функція яка буде міняти цей стан.
  let [cartOpen,setCartOpen] = useState(false); //false - значення по замовчуванню

  return (
    <header>
        <div>
            <span className='logo'>House staff</span>
        </div>
        {/* Блок з навігаційними ссилками */}
        <ul className = 'nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
        </ul>
        {/* Слухачу події onClick привласнюється анонімна функція яка буде викликати callback функцію setCartOpen з хуку useState, яка в свою чергу буде міняти стан іконки на протилежну */}
        <FaShoppingCart onClick = {()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {/* Двойний амперсанд $$ - знак провірки на true */}
        {/* У випадку якщо відкриття корзини активне в неї добавлятиметься один елемент  */}
        {cartOpen && (
          <div className='shoping-cart'>
            {/* Тернарний оператор який провірятиме кількість елементів і у випадку більше 0 виконуватиме метод showOrders, у випадку рівному 0 - метод showNothing */}
            {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
          </div>
        )} 
        <div class = 'presentation'>
        </div>
    </header>
  )
}

export default Header;