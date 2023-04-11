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
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = str => {
    this.setState({ term: str });
  };

  filterData = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'rise':
        return items.filter(item => item.rise);
      case 'salary':
        return items.filter(item => item.salary > 1000);
      default:
        break;
    }
  };

  onFilter = e => {
    this.setState({ filter: e.target.dataset.filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.searchEmp(data, term);
    const visibleFilteredData = this.filterData(visibleData, filter);
    const totalEmployees = data.length;
    const increasedEmployees = data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          totalEmployees={totalEmployees}
          increasedEmployees={increasedEmployees}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilter={this.onFilter} filter={filter} />
        </div>

        <EmployeesList
          data={visibleFilteredData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onCreateItem={this.createItem} />
      </div>
    );
  }
}

export default App;
