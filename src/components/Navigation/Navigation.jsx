import tags from "../../data/tags.json"
// console.log(tags)

function Navigation() {
  return (
    <>
     <section className="tags">
    <h3 className="tags__header">Filters</h3>
    <ul className="tags__list">
      {tags.map((tag, index) => {
          return (
            <li key={index}>
              {tag}
            </li>
          );
        })}
    </ul>
  </section>
    </>
   )
  }

export default Navigation


