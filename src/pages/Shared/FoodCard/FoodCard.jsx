

const FoodCard = ({item}) => {
    const {name,recipe,image}=item;
    return (
        <div className="card shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className='btn btn-outline border-0 border-b-2 bg-slate-50 text-[#BB8506] uppercase my-2'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;