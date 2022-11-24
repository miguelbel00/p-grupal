
import { useSelector } from "react-redux";
import Sidebar from "../componets/Sidebar";
import UserAdmin from '../AdminPage/UserAdmin'
import ProductsAdmin from '../AdminPage/ProductsAdmin'
import ReviewsAdmin from '../AdminPage/ReviewsAdmin'
import CategoryAdmin from '../AdminPage/CategoryAdmin'
import TransactionAdmin from '../AdminPage/TransactionAdmin'
import '../adminStyles/admin.css'
import AdminTestAntDesign from "../Pages/AdminTestAntDesign";

export default function AdminPage() {

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