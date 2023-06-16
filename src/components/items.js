// Файл з компонентою для відображення всіх товарів
import React, { Component } from 'react'
import Item from './item'


// Команда rce - дозволяє створини зразу цілий клас який буде наслідувати властивості компонента

// Клас(компонента) в якому буде рендеритись окремо кожна одиниця товару та його властивості
export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el=>(
        <Item key = {el.id} item = {el} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem}/>))}
      </main>)
        }
    }

export default Items