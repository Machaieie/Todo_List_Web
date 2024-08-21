import React from 'react';
import { AutoComplete } from 'antd';

const TaskAutocomplete = ({ width, options, placeholder}) => {
  return (
    <AutoComplete
      style={{
        width: width,
      }}
      options={options}
      placeholder={placeholder}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }

    />


  );
};


export default TaskAutocomplete;