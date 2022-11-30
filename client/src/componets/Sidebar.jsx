import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../adminStyles/sidebar.css"
import { useDispatch } from "react-redux";
import '../adminStyles/sidebar.css'
import { adminList } from "../redux/actions/actionsAdmin";
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined,WalletOutlined,SmileOutlined,ProfileOutlined,TransactionOutlined} from '@ant-design/icons';
import { Menu } from 'antd';

const Sidebar = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const onClick = (e) => {
    if (e.key == "createUser") {
      history.push('/admin/createuser')
    }else if(e.key == 'createProduct'){
      history.push('/admin/createproduct')
    }else if(e.key == 'createCategory'){
      history.push('/admin/createcategory')

    }
    dispatch(adminList(e.key))

  };

  return (
    <div className="sidebar">

      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <Menu
      onClick={onClick}
      style={{
        width: 256
      }}
      mode="inline"
      items={items}
    />
    </div>
  );
};

export default Sidebar;



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}
const items = [
  getItem("Users", "sub1", <UserOutlined />, [
    getItem("List Users", "user"),
    getItem("Create User", "createUser")
  ]),
  getItem("Products", "sub2", <WalletOutlined />, [
    getItem("List Products", "product"),
    getItem("Create Product", "createProduct")
  ]),
  getItem("Reviews", "sub3", <SmileOutlined />, [
    getItem("List Reviews", "review")
  ]),
  getItem("Categories", "sub4", <ProfileOutlined />, [
    getItem("List Categories", "category"),
    getItem("Create Category", "createCategory")
  ]),
  getItem("Transactions", "sub5", <TransactionOutlined />, [
    getItem("List Transactions", "transaction")
  ])
];

