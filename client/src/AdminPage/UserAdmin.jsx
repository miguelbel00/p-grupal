import React, { useRef, useState } from "react";
import { Table, Button, Modal, Alert, Typography, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { deleteUser, getUsers } from "../redux/actions/actionsAdmin";
import "../adminStyles/AdminTestAntDesign.css";
import { SearchOutlined } from "@ant-design/icons";

export default function AdminTestAntDesign() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const history = useHistory();
  const searchInput = useRef(null);
  const [userValue, setUserValue] = useState({});

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.reducerAdmin.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const data = userSelector;

  const createHandle = (value) => {
    console.log(value);
  };
  const editHandle = (value) => {
    history.push(`/admin/edituser/${value.id}`);
  };
  const { Text } = Typography;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    <Alert
      message="Are you sure you want to access this data?"
      type="error"
    />
  );

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });
  const showModal = (value) => {
    setUserValue(value);
    setOpen(true);
  };

  const handleOk = () => {
    setModalText(<Alert message="Wait a few seconds..." type="success" />);
    setConfirmLoading(true);
    dispatch(deleteUser(userValue.id));
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setModalText(
        <Alert
          message="Are you sure you want to access this data?"
          type="error"
        />
      );
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "User Id",
      datIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      render: (value) => <Text strong>{value.id}</Text>,
    },
    {
      title: "FullName",
      datIndex: "fullName",
      key: "fullName",
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("fullName"),
      render: (value) => <Text strong>{value.fullName}</Text>,
    },
    {
      title: "Email",
      datIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (value) => <Text strong>{value.email}</Text>,
    },
    {
      title: "Rol",
      datIndex: "isAdmin",
      key: "isAdmin",
      filters: [
        {
          text: "Admin",
          value: true,
        },
        {
          text: "User",
          value: false,
        },
      ],
      onFilter: (value, record) => record.isAdmin == value,
      render: (value) => {
        if (value.isAdmin === true) {
          return <Text type="success">Admin</Text>;
        } else {
          return <Text type="danger">User</Text>;
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actionButon",
      render: (value) => {
        return (
          <div>
            <Button onClick={() => editHandle(value)} success type="primary">
              Edit Account
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => showModal(value)} danger type="primary">
              Delete Account
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        title="Cuidado!"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <div>
        <Table key="adminUserTables" dataSource={data} columns={columns} />
      </div>
    </>
  );
}
