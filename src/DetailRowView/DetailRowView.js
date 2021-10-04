import React from 'react';

export default ({customer}) => (
    <div>
    <p>Выбран покупатель <b>{customer.title}</b></p>
    <p>Дата заказа: <b>{customer.date}</b></p>
    <p>Количество, ед: <b>{customer.quantity}</b></p>
    <p>Расстояние, км: <b>{customer.distance}</b></p>
    </div>
)
