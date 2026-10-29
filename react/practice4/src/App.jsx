import { getImageUrl } from "./utils.jsx";

function Gallery({
  name,
  imageId,
  profession,
  awardCount,
  awardList,
  discovered,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardCount} </b>
          {awardList}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Gallery
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awardCount={4}
        awardList="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
      />
      <Gallery
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awardCount={2}
        awardList="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
