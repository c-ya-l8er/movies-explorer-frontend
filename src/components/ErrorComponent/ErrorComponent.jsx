// Пример компонента для вывода ошибок
import React from 'react';

const ErrorComponent = ({ error }) => (
  <div>
    <h2>Ошибка</h2>
    {error.message}
  </div>
);

export default ErrorComponent;