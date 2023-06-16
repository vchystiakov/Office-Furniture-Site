// Файл з компонентою яка фільтрує товари по категоріям
import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        // Стан  компоненти - масив в якому знаходяться категорії по яким фільтруються елементи
        this.state = {
            categories : [
                {
                    key: 'all',
                    name: 'all'
                },
                {
                    key: 'chairs',
                    name: 'chairs' 
                },
                {
                    key: 'tables',
                    name: 'tables'
                },
                {
                    key: 'sofas',
                    name: 'sofas' 
                },
                {
                    key: 'shelfs',
                    name: 'shelfs'
                },
                {
                    key: 'lamps',
                    name: 'lamps'
                }
            ]
        }
    }
  render() {
    return (
        // Блок з категоріями товару
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key = {el.key} onClick = {()=>this.props.chooseCategory(el.key)}> {el.name} </div>
        ))}
      </div>
    )
  }
}

export default Categories