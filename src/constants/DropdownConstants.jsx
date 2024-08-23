
import { SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';

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
        DONE: 'DONE',
        CANCELED: 'CANCELED',
        INPROGRESS: 'INPROGRESS',
    },
    PriorityStatus:{
        HIGTH:"HIGTH",
        MEDIUM: "MEDIUM",
        LOW: "LOW"
    },

     collaboratorsHeaderTable : [
        {
            title: 'Collaborator Name',
            dataIndex: 'collaboratorName',
            key: 'collaboratorName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Task Title',
            dataIndex: 'taskTitle',
            key: 'taskTitle',
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy',
            key: 'createdBy',
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