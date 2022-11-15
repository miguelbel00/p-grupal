export default function ItemCart ({name, price, image}) {
    return(
        <div className="card">
            <h2 className="text-decoration-none ">{name}</h2>
            <h3>{price}</h3>
            <img src={image} alt={name} />
        </div>
    )
}