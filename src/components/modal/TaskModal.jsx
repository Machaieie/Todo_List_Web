import { Modal, Button } from 'antd';

const TaskModal = ({ title,  handleCancel, handleOk, isModalOpen,children }) => {
  return (
    <Modal
      title={title || 'Modal'}
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Back
        </Button>,
        <Button key="confirm" type="primary" onClick={handleOk}>
         Add
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default TaskModal;
