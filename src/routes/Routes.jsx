import { AppstoreOutlined, FileAddOutlined, UnorderedListOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const RouteItems = () => {
    const routeItems = [
      {
        key: 1,
        label: "Dashboard",
        link: "/admin/dashboard",
        icon: <AppstoreOutlined />,
      },
      {
        key: 2,
        label: "Task",
        link: "/admin/tasks",
        icon: <FileAddOutlined />,
      },
      {
        key: 3,
        label: "Colaborators",
        link: "/admin/colaborators",
        icon: <UsergroupAddOutlined />,
      }
    ];
    return routeItems;
  }
  
  export default RouteItems;