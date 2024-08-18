import React, { useState } from 'react';
import { Button, Modal, Spin } from 'antd';

const TaskModal = ({ title, onCancel, onOk, children, showLoading }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    if (showLoading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onOk();
      }, 2000);
    } else {
      onOk();
    }
  };

  return (
    <Modal
      title={title || 'Modal'}
      onCancel={onCancel}
      onOk={handleOk}
      confirmLoading={loading}
    >
      {loading ? <Spin /> : children}
    </Modal>
  );
};

export default TaskModal;
