import { Card } from 'antd';
import img from '../assets/logo192.png';
import { useNavigate } from 'react-router-dom';
import '../Styles/RestaurantCard.css';

const { Meta } = Card;

export default function RestaurantCard({ restaurant, restaurantId }) {
  const navigate = useNavigate();

  return (
    <div
      className="restaurantCardContainer"
      onClick={(e) => {
        e.stopPropagation();
        navigate('/restaurant/' + restaurant._id);
      }}
    >
      <div className="card-content-container">
        <div className="restaurant-name">{restaurant.name}</div>
        <div className="restaurant-cuisine">{restaurant.cuisine}</div>
      </div>
      <img
        className="restaurant-card-image"
        alt={`${restaurant.name} food`}
        src={restaurant.photo}
      />

    </div>
    // <div className='restaurantCardContainer'>
    //   <Card className='restaurantCard'
    //   onClick={(e) => {e.stopPropagation(); navigate("/restaurant/"+ restaurant._id)}}
    //     hoverable
    //     style={{
    //       width: 240,
    //     }}
    //     cover={<img className="restaurant-card-image"   alt="example" src={restaurant.photo} />}
    //   >
    //     {/* Some stuff can go here */}
    //     <Meta title={restaurant.name} description={restaurant.cuisine} />
    //   </Card>

    // </div>
  );
}
