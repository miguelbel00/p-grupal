import React, { useState } from "react"
import { Table, Button, Modal,Alert,Menu,MenuProps,Typography} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { getUsers } from "../redux/actions/actionsAdmin"
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
    const userSelector = useSelector((state) => state.reducerAdmin.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    console.log(userSelector)
    const data = userSelector






    const columns = [
        {
            title: 'Name',
            datIndex: 'name',
            key: 'nameTable',
            render: (value) => <Text strong>{value.fullName}</Text>,
        },
        {
            title: 'Email',
            datIndex: 'email',
            key: 'emailTable',
            render: (value) => <Text strong>{value.email}</Text>,
        },
        {
            title: 'Rol',
            datIndex: 'rol',
            key: 'rol',
            render: (value) => {
                if (value.isAdmin === true) { return <Text type="success">Admin</Text>} else { return <Text type="danger">User</Text>}
            },
            filters: [
                {
                    text: 'Admin',
                    value: 'admin',
                },
                {
                    text: 'User',
                    value: 'user'
                }

            ],
            onFilter: (value, record) => record.rol.includes(value.admin),
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