import AddHotelForm from "@/components/hotel/AddHotelForm";
import { getHotelById } from "../../../../actions/getHotelById";
import { auth } from "@clerk/nextjs";

interface Props {
  params: {
    hotelId: string;
  };
}

const Page = async ({ params }: Props) => {
  const hotel = await getHotelById(params.hotelId);
  const { userId } = auth();

  if (!userId) return <div>Not Authenticated...</div>;

  if (hotel && hotel.userId !== userId) return <div>Access Denied...</div>;

  return (
    <div>
      <AddHotelForm hotel={hotel} />
    </div>
  );
};

export default Page;
