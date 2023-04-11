import './app-filter.css';

const AppFilter = ({ onFilter, filter }) => {
  const buttonsData = [
    { dataFilter: 'all', label: 'Все сотрудники' },
    { dataFilter: 'rise', label: 'На повышение' },
    { dataFilter: 'salary', label: 'З/П больше 1000$' }
  ];

  const buttons = buttonsData.map(({ dataFilter, label }, i) => {
    return (
      <button
        key={i}
        data-filter={dataFilter}
        type="button"
        onClick={onFilter}
        className={`btn ${
          dataFilter === filter ? 'btn-light' : 'btn-outline-light'
        }`}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
