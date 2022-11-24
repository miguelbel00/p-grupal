import React, { useState } from "react"
import { Table, Button, Modal,Alert,Menu,MenuProps,Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { getProducts, getUsers } from "../redux/actions/actionsAdmin"
import { DeleteOutlined,  AppstoreOutlined,ContainerOutlined,DesktopOutlined,MailOutlined,MenuFoldOutlined,MenuUnfoldOutlined,PieChartOutlined, } from '@ant-design/icons';
import '../adminStyles/AdminTestAntDesign.css'



export default function AdminTestAntDesign() {


    const {Text} = Typography;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<Alert message="Estas seguro de que deseas acceder a estos datos?" type="error" />);

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
    const productsSelector = useSelector((state) => state.reducerAdmin.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    console.log(productsSelector)
    const data = productsSelector






    const columns = [
        {
            title: 'Name',
            datIndex: 'name',
            key: 'nameTable',
            render: (value) => <Text strong>{value.name}</Text>
        },
        {
            title: 'Price',
            datIndex: 'price',
            key: 'priceTable',
            render: (value) => <Text strong>{value.price}</Text>
        },
        {
            title: 'Stock',
            datIndex: 'stock',
            key: 'stock',
            render: (value) =><Text type="success">{value.stock}</Text>,
            filters: [
                {
                    text: 'Stock',
                    value: productsSelector.stock,
                },
                {
                    text: 'noStock',
                    value:productsSelector.stock
                }

            ],
            onFilter: (value, record) => record.stock.includes(value.stock),
        },
        {
          
            title: 'Sold',
            datIndex: 'sold',
            key: 'sold',
            render: (value) =><Text type="danger">{value.sold}</Text>,

        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actionButon',
            render: () => {
                return <div>
                    <Button onClick={showModal} danger type="primary">Edit Product</Button>
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
            <Table key='adminProcuctTables' dataSource={data} columns={columns} />
        </div>
    )
}