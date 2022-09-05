import { Card } from 'antd';
import img from '../assets/logo192.png';

const { Meta } = Card;

export default function RestaurantCard({ restaurant }) {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={img} />}
      >
        Some stuff can go here
        <Meta title={restaurant.name} description={restaurant.cuisine} />
      </Card>
    </>
  );
}
