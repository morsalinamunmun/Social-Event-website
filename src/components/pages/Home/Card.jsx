import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({category}) => {
    const {id, image, title, btn_color, category_name} = category;
    return (
        <div className="card card-compact  bg-base-100 ">
        <div className=""><img className="h-52 w-full" src={image} alt="Shoes" /></div>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button className="btn text-white" style={{backgroundColor: btn_color}}><Link to={`/details/${id}`}>Details</Link></button>
          </div>
        </div>
      </div>
    );
};
Card.propTypes={
    category: PropTypes.node
}
export default Card;
