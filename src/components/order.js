// Файл з компонентою кожного товару який вже знаходиться в корзині
import React, { Component } from 'react'
// Імпорт інонки корзини яка буде видаляти товар із корзини
import {FaTrash} from 'react-icons/fa';

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src = {"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price}</b>
        {/* Блок з інонкою видалення товару з корзини разом з слухачем події onClick який реагуватиме на натискання на цю кнопку */}
        <FaTrash className='delete-icon' onClick = {()=> this.props.onDelete(this.props.item.id)}/>
     </div>
    )
  }
}

export default Order