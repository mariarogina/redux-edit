import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { selectEditService, deleteService } from "../actions/actionCreators";
import EditIcon from "../assets/edit.png";
import DeleteIcon from "../assets/delete.png";

const ServiceList = () => {
  const list = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const item = list.items.find((service) => service.id === id);
    dispatch(selectEditService(item));
  };

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <ul className="service-list">
      {list.items.map((item) => (
        <li
          key={item.id}
          className={classNames("service-item", {
            "service-item_active": item.id === list.editing,
          })}
        >
          <span className="service-item__name">{item.name}</span>
          <span className="service-item__price">{item.price}</span>
          <button className="icon-btn" onClick={() => handleEdit(item.id)}>
            <img src={EditIcon} />
          </button>
          <button className="icon-btn" onClick={() => handleDelete(item.id)}>
            <img src={DeleteIcon} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
