import React from 'react';
import { products } from './store-data';
import IconSwitch from '../IconSwitch';
import CardsView from '../CardsView';
import ItemsView from '../ItemsView';
import styles from './index.module.css';

export default class Store extends React.Component {
  state = {
    icon: 'list',
  };
  constructor() {
    super();
    this.view = <ItemsView products={products} />;
  }

  handleSwitch = () => {
    if (this.state.icon === 'list') {
      this.setState({ icon: 'module' });
      this.view = <CardsView products={products} />;
    } else if (this.state.icon === 'module') {
      this.setState({ icon: 'list' });
      this.view = <ItemsView products={products} />;
    } else {
      return;
    }
  };

  render() {
    return (
      <div className={styles.store}>
        <div className={styles.store__header}>
          <IconSwitch icon={this.state.icon} onSwitch={this.handleSwitch} />
        </div>
        {this.view}
      </div>
    );
  }
}