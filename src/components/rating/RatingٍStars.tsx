import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number;
  className?: string;
};

const RatingStars: React.FC<Props> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center text-yellow-400 ${className || ""}`}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={"full-" + i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={"empty-" + i} />
      ))}
    </div>
  );
};

export default RatingStars;