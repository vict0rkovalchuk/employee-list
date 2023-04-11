import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({
  data,
  onDelete,
  onToggleProp,
  changeInputItemValue
}) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        id={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={e => onToggleProp(id, e.currentTarget.dataset.toggle)}
        changeInputItemValue={changeInputItemValue}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
