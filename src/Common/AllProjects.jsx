import React from 'react';
import './AllProjects.css';

const AllProjects = (props) => {
    return (<>

      <div className="d1_s3_wb">
        <h1 className="h_all_wb">{props.title}</h1>

        <div className="d_btns_wb_filtr">
            <img src={props.img} alt='img1' />

            <div className="extra_filter_div">
            <p className="my_wrk_p">My work flow</p>
            <p>{props.title1}</p>
            <p>{props.title2}</p>
            <p>{props.title3}</p>
            <p>{props.title4}</p>
            </div>

        </div>

      </div>

      <div className="d2_s3_wb">

        <div className="d2_s3_d1">

            <div className="div_all_wb_px1">
            <img src={props.img1} alt='graph5' className="all_wb_px1" />
            </div>

            <div className="div_all_wb_px1">
            <img src={props.img2} alt='graph6' className="all_wb_px1" />
            </div>
            
        </div>

      </div>

     </>);
}
 
export default AllProjects;