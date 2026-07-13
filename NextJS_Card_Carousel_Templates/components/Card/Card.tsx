import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

export default function Card({
  image,
  title,
  description,
  buttonText = "Learn More",
}: CardProps) {
  return (
    <div className="card">

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-body">

        <h3>{title}</h3>

        <p>{description}</p>

        <button>{buttonText}</button>

      </div>

    </div>
  );
}