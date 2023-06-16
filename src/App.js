import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    // super - функція яка викликає батьківський конктрустор , повинна викликатись перед вказівником this
    super(props) 
      this.state = {
        // Масив стану з обєктами(товарами) які знаходяться в корзині покупки
        orders: [],
        // Масив стану з елементами товарів які відображаються користувачу 
        currentItems: [],
        // Масив стану з обєктами(товарами) доступними для покупки
        items: [
          {
          id:1,
          title: 'Office Chair',
          img: 'office-chair.jpg',
          description: 'Nice comfortable office chair, made in England ',
          category: 'chairs',
          price: '49.99 USD'
          },
          {
            id:2,
            title: 'Office Table',
            img: 'office-table.webp',
            description: 'Wooden brown office table, made in Ukraine',
            category: 'tables',
            price: '59.99 USD'
          },
          {
            id:3,
            title: 'Office Sofa',
            img: 'office-sofa.jpg',
            description: 'Red metal sofa, made in USA',
            category: 'sofas',
            price: '59.99 USD'

          },
          {
            id:4,
            title: 'Office lamp',
            img: 'office-lamp.jpg',
            description: 'Office lamp, made in Ukraine',
            category: 'lamps',
            price: '15.99 USD',
          },
          {
            id:5,
            title: 'Office shelf',
            img: 'office-shelf.jpg',
            description: 'Wooden shelf foor books, made in Japan',
            category: 'shelfs',
            price: '39.99 USD'
          }

        ],
        // Масив стану з інформацією про товар
        showFullItem: false,
        // 
        fullItem: {}
      }

      // Привласнення масиву зі значеннями товарів які відображаються користувачу значення всіх товарів
      this.state.currentItems = this.state.items
      // Метод bind говорить про те що метод addToOrder зможе працювати зі станом компоненти
      this.addToOrder = this.addToOrder.bind(this)
      // Метод bind вказує на те що метод deleteOrder зможе працювати зі станом компоненти
      this.deleteOrder = this.deleteOrder.bind(this)
      // Метод bind вказує на те що метод chooseOrder зможе працювати зі станом компоненти
      this.chooseCategory = this.chooseCategory.bind(this)
      // Метод bind вказує на те що метод onShowItem має право використовувати стан компоненти
      this.onShowItem = this.onShowItem.bind(this)
    
    

  }
  // Метод render оприділяє що має відображатись на екрані у відповідь на зміни чи властивості елемента
  // Для використання стану компоненти у звичайній функції  застосовується хук useState
  render() {
  return (
    <div className="wrapper">
      {/* Компонента шапки з методом onDelete який видалятиме товар з корзини  */}
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
      {/* Компонента категорій товару */}
      <Categories chooseCategory={this.chooseCategory}/>
      {/* Компонента одиниць товару з методом onAdd який добавлятиме товар в корзину */}
      <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd = {this.addToOrder}/>
      {/* Якщо стан showFullItem = true тоді буде відображатись компонента ShowFullItem */}
      {this.state.showFullItem && <ShowFullItem item = {this.state.fullItem} onAdd = {this.addToOrder} onShowItem = {this.onShowItem}/>}
      <Footer/>
    </div>
  )
}


// Метод який  відоображає в спливаючому вікні товар та інформацію про нього
onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

// Метод прийому товару і перенесення його в корзину покупки - буде встановлювати новий стан для обєкта orders при добавленні товару в корзину
addToOrder(item) {
  // Змінна яка відповідає за присутність елементу(одиниці товару) в корзині
  let isInArray = false;
  //forEach - метод який викликає callback функцію для кожного елементу масиву в порядку зростання. 
  // Тут цей метод робитиме провірку для кожного елементу масива і звірятиме чи id товару не збігаються
  this.state.orders.forEach(el=>{
    if(el.id==-item.id)
      isInArray = true
  })
    if(!isInArray)
      this.setState({orders:[...this.state.orders, item]})
    
  }

// Метод видалення замовлення із корзини
deleteOrder(id) {
  // Логіка видалення товару -  встановлюєм новий стан для компоненти в якій буде формуватись новий масив елементів відфільтрованих методов filter, де елементи не будуть збігатись по id
  this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
}

// Метод який буде сортувати товар по категоріям
chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems:this.state.items})
    return
  }
  this.setState({currentItems: this.state.items.filter(el=>el.category === category)})
}

}






export default App;
