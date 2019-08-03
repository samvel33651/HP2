import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './itemsList.css';

class ItemsList  extends Component {

    onItemClicked = (event) =>  {
        const  { onItemClick } = this.props;
        const  id = event.target.dataset.id;
        console.log()
        onItemClick(id);
    }

    renderList() {
        const  { list, selectedItem } = this.props;
        return list.map((item)=> {
            const  clazz = +selectedItem === +item.id ? 'active': '';
            return (
                <li
                    data-id={item.id} 
                    key={item.id} 
                    className={`list-group-item ${clazz}`} 
                    onClick={this.onItemClicked}
                >
                    {item.name || item.title}
                </li>
            )
        }) 
    }

    render () {
        const  list = this.renderList();
        return (
            <ul className="list-group">
                {list}
            </ul>
        )
    }
}

ItemsList.propTypes = {
    list: PropTypes.array.isRequired,
    selectedItem: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired,
    onItemClick: PropTypes.func.isRequired,
}

export default ItemsList