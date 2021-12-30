import Header from "./Header";
import Image from "./Image";
import '../Card.css';

function Card({ title, content, url, alt }) {
  return (
    <section>
      <Header>{title}</Header>
      <p>{content}</p>
      <Image url={url} alt={alt} />
    </section>
  )
}

export default Card;
