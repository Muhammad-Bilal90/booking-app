import MyBookingsClient from "@/components/booking/MyBookingsClient";
import { getBookingsByHotelOwnerId } from "../../../actions/getBookingsByHotelOwnerId";
import { getBookingsByuserId } from "../../../actions/getBookingsByUserId";

const Page = async () => {
  const bookingsFromVisitors = await getBookingsByHotelOwnerId();
  const bookingsIHaveMade = await getBookingsByuserId();

  if (!bookingsFromVisitors || !bookingsIHaveMade)
    return <div>No bookings found</div>;

  return (
    <div className="flex flex-col gap-10">
      {!!bookingsIHaveMade?.length && (
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 mt-2">
            Here are bookings you have made
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {bookingsIHaveMade.map((booking) => (
              <MyBookingsClient key={booking.id} bookings={booking} />
            ))}
          </div>
        </div>
      )}
      {!!bookingsFromVisitors?.length && (
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 mt-2">
            Here are bookings from visitors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {bookingsFromVisitors.map((booking) => (
              <MyBookingsClient key={booking.id} bookings={booking} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
