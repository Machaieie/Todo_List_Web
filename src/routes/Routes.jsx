import { AppstoreOutlined, FileAddOutlined, UnorderedListOutlined, UsergroupAddOutlined } from "@ant-design/icons";


const Routes = () => {
    const routeItems = [
        {
            key: 1,
            label: "Dashboard",
            link: "dashboard",
            icon: <AppstoreOutlined />,
        },
        {
            key: 2,
            label: "Add Task",
            link: "addTask",
            icon: <FileAddOutlined />,
        },
        {
            key: 3,
            label: "List Tasks",
            link: "listTasks",
            icon: <UnorderedListOutlined />,
        },
        {
            key: 4,
            label: "Colaborators",
            link: "colaborators",
            icon: <UsergroupAddOutlined />,
        }

    ];
    return routeItems;
}

export default Routes;