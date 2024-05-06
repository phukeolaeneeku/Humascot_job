import "./css/productHome.css";
import job from "../../../img/job.png";
import logo from "../../../img/logo.jpg";
import avatar from "../../../img/avatar.png";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const ProductHome = () => {
  return (
    <div>
      <Header />
      <section id="product1">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Suggest
          </h1>
        </div>
        <div className="contentImageProducts1">
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={logo} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={avatar} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={job} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
        </div>


        <div className="productHead_contents">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>All User
          </h1>
        </div>
        <div className="contentImageProducts1">
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={logo} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={avatar} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
          <div className="group_itemBox">
            <div className="containner_box_image">
              <div className="img">
                <img src={job} alt="image" />
              </div>
              <div className="txtOFproduct">
                <h4>Name: </h4>
                <p>Age: </p>
                <p>Major: </p>
                <p>Position:</p>
              </div>
            </div>
            <div className="btn_button_see">
              <FormControlLabel
                control={<Checkbox />}
              />
              <Link to="/productdetails" className="button_see">
                PDF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHome;
