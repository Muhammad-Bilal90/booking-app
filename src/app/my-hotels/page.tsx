import HotelList from "@/components/hotel/HotelList";
import { getHotelsByUserId } from "../../../actions/getHotelsByUserId";

const Page = async () => {
  const hotels = await getHotelsByUserId();

  if (!hotels) return <div>No Hotels found!</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold">My Hotels</h2>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default Page;
