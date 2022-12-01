import React, { useRef, useState } from "react";
import { Table, Button, Modal, Alert, Typography, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteTransaction,
  getTransactions,
} from "../redux/actions/actionsAdmin";
import { SearchOutlined } from "@ant-design/icons";
import "../adminStyles/AdminTestAntDesign.css";
import { useHistory } from "react-router-dom";

export default function AdminTestAntDesign() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const { Text } = Typography;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    <Alert
      message="Are you sure you want to access this data?"
      type="error"
    />
  );
  const [seletedTransaction,setSeletedTransaction] = useState({})
  const history = useHistory();
  const editHandle = (value) => {
    history.push(`admin/editTransaction/${value.id}`);
  };

  const showModal = (value) => {
    setOpen(true);
    setSeletedTransaction(value.id)
  };

  const handleOk = () => {
    setModalText(<Alert message="Please wait a few seconds..." type="success" />);
    setConfirmLoading(true);
    dispatch(deleteTransaction(seletedTransaction));
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

  const dispatch = useDispatch();
  const transactionsSelector = useSelector(
    (state) => state.reducerAdmin.transactions
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const data = transactionsSelector;

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

  const columns = [
    {
      title: "Id",
      datIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      render: (value) => <Text strong>{value.id}</Text>,
    },
    {
      title: "Value",
      datIndex: "value",
      key: "value",
      sorter: (a, b) => a.value - b.value,
      render: (value) => <Text strong>{value.value}</Text>,
    },
    {
      title: "Description",
      datIndex: "description",
      key: "description",
      render: (value) => <Text strong>{value.description}</Text>,
    },
    {
      title: "Status",
      datIndex: "status",
      key: "status",
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "Canceled", value: "Canceled" },
        { text: "Pending", value: "Pending" },
      ],
      onFilter: (value, record) => record.status == value,
      render: (value) => <Text strong>{value.status}</Text>,
    },
    {
      title: "User ID",
      datIndex: "userId",
      key: "userId",
      sorter: (a, b) => a.userId.localeCompare(b.userId),
      render: (value) => <Text strong>{value.userId}</Text>,
    },

    {
      title: "Actions",
      datIndex: "",
      key: "actionButon",
      render: (value) => {
        return (
          <div>
            <Button onClick={() => editHandle(value)} success type="primary">
              Edit Transaction
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => showModal(value)} danger type="primary">
              Delete Transaction
            </Button>
            <Modal
              title="Watch out!"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table key="adminTransactionTables" dataSource={data} columns={columns} />
    </div>
  );
}
