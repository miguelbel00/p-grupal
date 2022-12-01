import React, { useRef, useState } from "react"
import { Table, Button, Modal,Alert,Space,Input,Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { deleteCategory, getCategory } from "../redux/actions/actionsAdmin"
import '../adminStyles/AdminTestAntDesign.css'
import { SearchOutlined } from '@ant-design/icons';



export default function AdminTestAntDesign() {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const { Text} = Typography;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<Alert message="Are you sure you want to delete this data?" type="error" />);
    const [selectCategory,setSelectCategory] = useState({})

    const showModal = (value) => {
        setOpen(true);
        setSelectCategory(value.id)
    };

    const handleOk = () => {
        setModalText(<Alert message="Please wait a seconds..." type="success" />);
        setConfirmLoading(true);
        dispatch(deleteCategory(selectCategory))
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(<Alert message="Are you sure you want to delete this data?" type="error" />)
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };




    const dispatch = useDispatch()
    const categorySelector = useSelector((state) => state.reducerAdmin.categories)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const data = categorySelector




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




    const columns = [
        {
            title: 'Id',
            datIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            render: (value) => <Text strong>{value.id}</Text>
        },
        {
            title: 'Name',
            datIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            render: (value) => <Text strong>{value.name}</Text>
        },

        
        {
            title: 'Actions',
            datIndex: '',
            key: 'actionButon',
            render: (value) => {
                return <div>
                    <Button onClick={()=>showModal(value)} danger type="primary">Delete Category</Button>
                    <Modal
                        title="Warning!"
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
            <Table key='adminCategoriesTables' dataSource={data} columns={columns} />
        </div>
    )
}