import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { orederOption } from '../functions/functions';
import { orderByPrice, filterCategory, orderMostSold, addCategorieFilter, deleteFilter, orderProducts } from "../redux/actions/actionsFilter";
import { getAllProducts } from "../redux/actions/actionsPetitions";
import Styles from "../styles/filters.module.css"


export default function Filters({ setOption, setPage }) {
    const dispatch = useDispatch()

    const [categories, setCategories] = useState([])
    const stateCategories = useSelector(state => state.filterReducer.categoriesSelected)


    function handleOrder(e) {
       dispatch(orderProducts(e.target.value))
        setPage(1)
    }

    function state(value) {
        setCategories(value)
    }

    function handleFilterCategory(e) {
        e.preventDefault();
        if(!categories.includes(e.target.value) && e.target.value !==  "Categorias"){
        state([...categories, e.target.value])

        console.log([...categories, e.target.value])

        dispatch(addCategorieFilter([...categories, e.target.value]))


        dispatch(filterCategory())
        }
    }

    function deleteCategory(e) {
        dispatch(deleteFilter(e.target.name))
        setCategories([...categories.filter(cat => cat !== e.target.name)])
        dispatch(filterCategory())
       
        
    }

    function handleOrderMostSeller(e) {
        e.preventDefault()
        if (e.target.value === 'All') {
            dispatch(getAllProducts())

        } else {
            dispatch(orderMostSold(e.target.value))
            setOption(e.target.value)

        }
        setPage(1)
    }



    return (
        <div>
            <div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => handleOrder(e)}>
                    <option value='All'>Price</option>
                    <option value='Min'>Min-Price</option>
                    <option value='Max'>Max-Price</option>
                </select>
            </div>
            <div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => handleOrder(e)}>
                    <option value='All'>Sold</option>
                    <option value='Less Sold'>Less Sold</option>
                    <option value='Best Seller'>Best Seller</option>
                </select>
            </div>
            <div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e => handleFilterCategory(e)}>
                    <option selected>Categorias</option>
                    <option value="Computadores">Computadores</option>
                    <option value="Perifericos">Perifericos</option>
                    <option value="Componentes">Componentes</option>
                    <option value="Amd">Amd</option>
                    <option value="Intel">Intel</option>
                    <option value="Gamer">Gamer</option>
                    <option value="Trabajo">Trabajo</option>
                    <option value="Estudio">Estudio</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Procesador">Procesador</option>
                    <option value="Disco Duro">Disco Duro</option>
                    <option value="Disco SSD">Disco SSD</option>
                    <option value="Memoria Ram">Memoria Ram</option>
                    <option value="Fuentes">Fuentes</option>
                    <option value="Refrigeracion">Refrigeracion</option>
                    <option value="Placas de video">Placas de video</option>
                    <option value="Gabinet">Gabinet</option>
                    <option value="Teclad">Teclad</option>
                    <option value="Auricular">Auricular</option>
                    <option value="Mouse">Mouse</option>
                </select>
            </div>
            <div className={Styles.containerFilters}>
                {stateCategories.length > 0 && stateCategories.map(categ => {
                    return <button className={Styles.categButton} name={categ} onClick={deleteCategory}>{categ}</button>
                }
                )}
            </div>
        </div>
    )
}