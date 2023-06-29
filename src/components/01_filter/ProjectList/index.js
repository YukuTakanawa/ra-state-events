import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function ProjectList({ projects }) {
  // разбиваем портфолио на колонки
  const columnSize = Math.ceil(projects.length / 3);
  const projectColumns = [];
  for (let i = 0; i < Math.ceil(projects.length / columnSize); i++) {
    projectColumns[i] = projects.slice(
      i * columnSize,
      i * columnSize + columnSize
    );
  }

  return (
    <div className={styles.projects}>
      {projectColumns.map((column, cIdx) => {
        return (
          <div className={styles.projects__column} key={cIdx}>
            {column.map((project, pIdx) => {
              return (
                <div className={styles.projects__item} key={`${cIdx}-${pIdx}`}>
                  <img src={project.img} alt={project.category} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};