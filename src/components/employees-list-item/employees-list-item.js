import './employees-list-item.css';

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  onToggleProp,
  increase,
  rise,
  id,
  changeInputItemValue
}) => {
  let classNames = 'list-group-item d-flex justify-content-between';

  increase && (classNames += ' increase');
  rise && (classNames += ' like');

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        data-toggle="rise"
        onClick={e => onToggleProp(e)}
      >
        {name}
      </span>
      <input
        data-id={id}
        onChange={changeInputItemValue}
        type="text"
        className="list-group-item-input"
        value={`${salary}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          data-toggle="increase"
          onClick={e => onToggleProp(e)}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
