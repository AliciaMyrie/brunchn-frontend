import { Card } from 'antd';
import img from '../assets/logo192.png';
import { useNavigate } from "react-router-dom"
import AddLike from './AddLIke';
import "../Styles/RestaurantCard.css";



const { Meta } = Card;

export default function RestaurantCard({ restaurant, restaurantId }) {
  const navigate = useNavigate()
  
  return (
    <div className='restaurantCardContainer'>
      <Card className='restaurantCard'
      onClick={() => navigate("/restaurant/"+ restaurant._id)}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className="restaurant-card-image"   alt="example" src={restaurant.photo} />}
      >
        {/* Some stuff can go here */}
        <Meta title={restaurant.name} description={restaurant.cuisine} /> 
        {/* {restaurant ? <AddLike restaurant = {restaurant} /> : ""} */}
      </Card>
      
    </div>
  )
}


