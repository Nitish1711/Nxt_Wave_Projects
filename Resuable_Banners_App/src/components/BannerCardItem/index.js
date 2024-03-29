import './index.css'

const Banner = ({bannercard}) => {
  const {id, headerText, description, className} = bannercard

  return (
    <div className="container">
      <li className={`card ${className}`} key={id}>
        <h2 className="heading">
          <b>{headerText}</b>
        </h2>
        <p className="para">{description}</p>
        <button className="btn">
          <b>Show More</b>
        </button>
      </li>
    </div>
  )
}

export default Banner
