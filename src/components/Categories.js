import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все'
        },
        {
          key: 'chairs',
          name: 'Стулья'
        },
        {
          key: 'betside-table',
          name: 'Прикроватные тумбы'
        },
        {
          key: 'table',
          name: 'Столы'
        },
        {
          key: 'lamp',
          name: 'Свет'
        },
        {
          key: 'sofa',
          name: 'Диваны'
        }
      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories