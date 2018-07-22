import React, { Component } from 'react';
// import './item.css';

class Item extends Component {
  render() {
    const { item, onRemove, onToggle } = this.props;
    return (
      <article className="mitem">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onToggle(item)}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="mitem-remove" onClick={onRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;