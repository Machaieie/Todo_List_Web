
import { SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const constants ={
    statusItems:[
        {
            label:"Done",
            key:"DONE"
        },
        {
            label:"Canceled",
            key:"CANCELED"
        },
        {
            label:"In Progress",
            key:"INPROGRESS"
        }
    ],
    priorityItems:[
        {
            label:"Higth",
            key:"HIGTH"
        },
        {
            label:"Medium",
            key:"MEDIUM"
        },
        {
            label:"Low",
            key:"LOW"
        }
    ],
    menuItems: [
        {
            label: 'Remove',
            key: 'remove',
            icon: <DeleteOutlined />,
            danger: true,
        },
        {
            label: 'Status',
            key: 'status',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Done',
                    key: 'DONE',
                },
                {
                    label: 'Canceled',
                    key: 'CANCELED',
                },
                {
                    label: 'In Progress',
                    key: 'INPROGRESS',
                },]
        },
    ],
    TaskStatus: {
        DONE: 'Done',
        CANCELED: 'Canceled',
        INPROGRESS: 'In Progress',
    },
    PriorityStatus:{
        HIGTH:"Higth",
        MEDIUM: "Medium",
        LOW: "Low"
    },

     collaboratorsHeaderTable : [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Task',
          dataIndex: 'task',
          key: 'task',
        },
        {
          title: 'Admin Task',
          dataIndex: 'admin',
          key: 'admin',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
             
              Delete
            </Space>
          ),
        },
      ]
}

export default constants;