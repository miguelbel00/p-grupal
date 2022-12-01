import React, { useRef, useState } from "react"
import { Table, Button, Modal,Alert,Typography,Input, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import {   deleteReview, getReviews, getUsers } from "../redux/actions/actionsAdmin"
import { SearchOutlined } from '@ant-design/icons';
import '../adminStyles/AdminTestAntDesign.css'



export default function AdminTestAntDesign() {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const { Text} = Typography;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<Alert message="Estas seguro de que deseas acceder a estos datos?" type="error" />);
    const [selectedReview,setSelectedReview] = useState({})


    const showModal = (value) => {
        setOpen(true);
        setSelectedReview(value.id)
    };

    const handleOk = () => {
        setModalText(<Alert message="Please wait a few seconds..." type="success" />);
        setConfirmLoading(true);
        dispatch(deleteReview(selectedReview))
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText(<Alert message="Are you sure you want to access this data?" type="error" />)
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };




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





    const dispatch = useDispatch()
    const reviewsSelector = useSelector((state) => state.reducerAdmin.reviews)

    useEffect(() => {
        dispatch(getReviews())
    }, [])

    const data = reviewsSelector

    let productsIds =[... new Set (data.map(r => {
        return r.productId
    }))]

    let filtros = productsIds.map(productID => {

        return {text:`${productID}`,value:productID}
    })



    const columns = [
        {
            title: 'Review Id',
            datIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            render: (value) => <Text strong>{value.id}</Text>,
        },
        {
          title: 'Comment',
          datIndex:'comment',
          key: 'comment',
          ...getColumnSearchProps('comment'),
          render: (value) => <Text strong>{value.comment}</Text>,
        },
        {
            title: 'Product ID',
            datIndex: 'productId',
            key: 'productId',
            sorter: (a, b) => a.productId - b.productId,
            filters: filtros,
            onFilter: (value, record) => (record.productId == value),
            render: (value) => <Text strong>{value.productId}</Text>,
        },
        {
            title: 'User ID',
            datIndex: 'userId',
            key: 'userId',
            sorter: (a, b) => a.userId.localeCompare(b.userId),
            render: (value) => <Text strong>{value.userId}</Text>,
        },

        {
          title:'Rating',
          datIndex:'rating',
          key:'rating',
          sorter: (a, b) => a.rating - b.rating,
          render:(value)=><Text strong>{value.rating}</Text>,
        },
        
        {
            title: 'Actions',
            datIndex: '',
            key: 'actionButon',
            render: (value) => {
                return <div>
                    <Button onClick={()=>showModal(value)} danger type="primary">Delete Review</Button>
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


            }
        }
    ]

    return (
        <div>
            <Table key='adminReviewsTables' dataSource={data} columns={columns} />
        </div>
    )
}