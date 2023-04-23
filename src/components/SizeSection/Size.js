import "./Size.css";
import $ from "jquery";



const Size = () => {

  $(document).on('click','ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
  } )

  return (
    <div className="size-container">
        <nav className="container">
        <h4 className="size-header">Size</h4>
        <ul className="label">
          <li className="active">
            <a href="#">16</a>
          </li>
          <li>
            <a href="#">24</a>
          </li>
          <li>
            <a href="#">32</a>
          </li>
        </ul>
        </nav>
        <nav>
        <h4 className="size-header">Stroke</h4>
        <ul className="label">
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1.5</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
        </ul>
        </nav>
    </div>
    
  );
}

export default Size;