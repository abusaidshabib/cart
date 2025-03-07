import bookmark from "@/assets/home/offers/bookmark.png";
import FD from "@/assets/home/offers/FD.png";
import like from "@/assets/home/offers/like.png";
import rreverse from "@/assets/home/offers/rreverse.png";

const Whyus = () => {
  const reasons = [
    { id: 1, title: "Free Delivery", description: "From $50", icon: FD },
    { id: 2, title: "99% Positive", description: "Feedbacks", icon: like },
    { id: 3, title: "30 days Return", description: "Policies", icon: rreverse },
    { id: 3, title: "Only Best", description: "Brands", icon: bookmark },
  ];

  const Card = ({ value }) => (
    <div className="bg-neural3/50 rounded-lg p-6 text-center flex items-center justify-center gap-5">
      <img src={value?.icon} alt="" />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {value?.title}
        </h3>
        <p className="text-gray-600">{value?.description}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 w-5/6 mx-auto pt-0 p-5 gap-5">
      {reasons?.map((value) => (
        <Card value={value} key={value?.id} />
      ))}
    </div>
  );
};

export default Whyus;
