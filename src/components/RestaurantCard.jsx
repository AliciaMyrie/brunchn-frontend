import { Card } from 'antd';
import img from '../assets/logo192.png';
import { useNavigate } from "react-router-dom"


const { Meta } = Card;

export default function RestaurantCard({ restaurant, restaurantId }) {
  const navigate = useNavigate()
  
  return (
    <>
      <Card
      onClick={() => navigate("/restaurant/"+ restaurant._id)}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={restaurant.photo} />}
      >
        {/* Some stuff can go here */}
        <Meta title={restaurant.name} description={restaurant.cuisine} />
      </Card>
    </>
  );
}
