import Portfolio from './components/01_filter/Portfolio';
import Store from './components/02_layouts/Store';
import Dropdown from './components/03_dropdown/Dropdown';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Portfolio />
      <Store />
      <Dropdown />
    </div>
  );
}

export default App;
