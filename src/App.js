import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '33.33'
        },
        {
          id: 2,
          title: 'Тумбочка белая',
          img: 'bedside-table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'betside-table',
          price: '66.66'
        },
        {
          id: 3,
          title: 'Стол черный',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'table',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Лампа настольная',
          img: 'lamp.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'lamp',
          price: '13.13'
        },
        {
          id: 5,
          title: 'Диван серый',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'sofa',
          price: '88.88'
        },
        {
          id: 6,
          title: 'Стул зеленый',
          img: 'chair-green.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '57.23'
        },
        {
          id: 7,
          title: 'Диван голубой',
          img: 'sofa-blue.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'sofa',
          price: '89.13'
        },
        {
          id: 8,
          title: 'Диван зеленый',
          img: 'sofa-green.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'sofa',
          price: '100.18'
        },
        {
          id: 9,
          title: 'Лампа напольная',
          img: 'lamp-floor.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'lamp',
          price: '43.38'
        },
        {
          id: 10,
          title: 'Стул черный',
          img: 'chair-black.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '88.88'
        },
        {
          id: 11,
          title: 'Тумбочка черная',
          img: 'betside-table-black.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'betside-table',
          price: '49.17'
        },
        {
          id: 12,
          title: 'Тумбочка голубая',
          img: 'betside-table-blue.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'betside-table',
          price: '98.11'
        },
        {
          id: 13,
          title: 'Стол коричневый',
          img: 'table-brown.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'table',
          price: '61.19'
        },
        {
          id: 14,
          title: 'Стол белый',
          img: 'table-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'table',
          price: '65.00'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
if (category === 'all') {
  this.setState({currentItems: this.state.items})
  return
}

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
