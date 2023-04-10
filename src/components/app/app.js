import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { v4 as uuidv4 } from 'uuid';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: true, rise: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, rise: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
      ]
    };
  }

  deleteItem = id => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }));
  };

  createItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: uuidv4()
    };

    this.setState(({ data }) => ({
      data: [...data, newItem]
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        return item.id === id
          ? {
              ...item,
              [prop]: !item[prop]
            }
          : item;
      })
    }));
  };

  render() {
    const { data } = this.state;
    const totalEmployees = data.length;
    const increasedEmployees = data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          totalEmployees={totalEmployees}
          increasedEmployees={increasedEmployees}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onCreateItem={this.createItem} />
      </div>
    );
  }
}

export default App;
