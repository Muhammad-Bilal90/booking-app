import HotelDetailsClient from "@/components/hotel/HotelDetailsClient";
import { getHotelById } from "../../../../actions/getHotelById";
import { getBooking } from "../../../../actions/getBookings";

const Page = async ({ params }: { params: { hotelId: string } }) => {
  const { hotelId } = params;
  const hotel = await getHotelById(hotelId);
  if (!hotel) return <div>Oops! Not hotel found.</div>;

  const bookings = await getBooking(hotel.id);
  return (
    <div>
      <HotelDetailsClient hotel={hotel} bookings={bookings} />
    </div>
  );
};

export default Page;
