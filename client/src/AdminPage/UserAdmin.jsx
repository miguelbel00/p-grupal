import React, { useRef, useState } from "react"
import { Table, Button, Modal,Alert,Typography, Input, Space} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { getUsers } from "../redux/actions/actionsAdmin"
import '../adminStyles/AdminTestAntDesign.css'
import { SearchOutlined } from '@ant-design/icons';



export default function AdminTestAntDesign() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

  const {Text} = Typography;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<Alert message="Estas seguro de que deseas acceder a estos datos?" type="error" />);

    const handleSearch = (
        selectedKeys,
        confirm,
        dataIndex,
      ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };

      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
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
                  setSearchText((selectedKeys)[0]);
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
          <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>

    record[dataIndex]
            .toString()
            .toLowerCase()
            .includes((value).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) => text
      });
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText(<Alert message="Aguarde unos segundos..." type="success" />);
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(<Alert message="Estas seguro de que deseas acceder a estos datos?" type="error" />)
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };



    const dispatch = useDispatch()
    const userSelector = useSelector((state) => state.reducerAdmin.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const data = userSelector

    const columns = [
        {
            title: 'FullName',
            datIndex: 'fullName',
            key: 'fullName',
            sorter: (a, b) => a.email.localeCompare(b.email),
            ...getColumnSearchProps('fullName'),
            render: (value) => <Text strong>{value.fullName}</Text>,
        },
        {
            title: 'Email',
            datIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.localeCompare(b.email),
            render: (value) => <Text strong>{value.email}</Text>,
        },
        {
            title: 'Rol',
            datIndex: 'isAdmin',
            key: 'isAdmin',
            render: (value) => {
                if (value.isAdmin === true) { return <Text type="success">Admin</Text>} else { return <Text type="danger">User</Text>}
            },
            filters: [
                {
                    text: 'Admin',
                    value: true,
                },
                {
                    text: 'User',
                    value: false
                }

            ],
            onFilter: (value, record) => (record.isAdmin == value),
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actionButon',
            render: () => {
                return <div>
                    <Button onClick={showModal} danger type="primary">Edit Account</Button>
                    <Modal
                        title="Cuidado!"
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >
                        <p>{modalText}</p>
                    </Modal>
                </div>

            }
        }
    ]

    return (
        <div>
            <Table key='adminUserTables' dataSource={data} columns={columns} />
        </div>
    )
}