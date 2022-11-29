
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../componets/Sidebar";
import UserAdmin from '../AdminPage/UserAdmin'
import ProductsAdmin from '../AdminPage/ProductsAdmin'
import ReviewsAdmin from '../AdminPage/ReviewsAdmin'
import CategoryAdmin from '../AdminPage/CategoryAdmin'
import TransactionAdmin from '../AdminPage/TransactionAdmin'
import '../adminStyles/admin.css'
import { getUser } from "../redux/actions/actionsPetitions";
const jwt = require('jsonwebtoken');

export default function AdminPage() {
    const userJWT = useSelector(state => state.petitionsReducer.user);
    const dispatch = useDispatch()
    if(userJWT){
        try {
            const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token :userJWT, process.env.REACT_APP_JWT_SECRETO);
            dispatch(getUser(decoded?.id ?decoded.id :decoded.user.id  ))
        } catch (error) {}
    }

    const adminListState = useSelector(state => state.reducerAdmin.adminList)
    
    return (
        <div className="admin">
            <Sidebar />
            <div className="adminContainer">
                <div className="selected-component">
                    {adminListState === 'user' ? <UserAdmin/> :
                        adminListState === 'product' ? <ProductsAdmin /> :
                            adminListState === 'review' ? <ReviewsAdmin /> :
                                adminListState === 'category' ? <CategoryAdmin /> :
                                    <TransactionAdmin />}
                </div>
                <div className="listContainer">
                    <div className="listTitle"></div>
                </div>
            </div>
        </div>
    )
}