import React from 'react';
import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';
import { projects } from './portfolio-data';
import styles from './index.module.css';

export default class Portfolio extends React.Component {
  state = {
    selected: 'All',
  };

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  filterProjects() {
    return this.state.selected === 'All'
      ? projects
      : projects.filter((pr) => pr.category === this.state.selected);
  }

  render() {
    const filtered = this.filterProjects();
    return (
      <div className={styles.portfolio}>
        <Toolbar
          filters={['All', 'Websites', 'Flayers', 'Business Cards']}
          selected={this.state.selected}
          onSelect={this.onSelectFilter}
        />
        <ProjectList projects={filtered} />
      </div>
    );
  }
}