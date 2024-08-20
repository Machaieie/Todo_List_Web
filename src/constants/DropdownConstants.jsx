
import { SettingOutlined, DeleteOutlined } from '@ant-design/icons';

const constants = {
    statusDropdownItems: [
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
        },],
    priorityDropdownItems: [
        {
            label: 'Hight',
            key: 'HIGHT',
        },
        {
            label: 'Medium',
            key: 'MEDIUM',
        },
        {
            label: 'Low',
            key: 'LOW',
        },
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
    }

}

export default constants;

