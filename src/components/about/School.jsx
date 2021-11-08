import React from 'react'

const School = (props) => {

    const { schoolName , department ,  degree , grade , imgUrl , date} = props
    return (
        <div className="card-flush d-flex flex-row align-items-center justify-content-start row">
            <div className="card-img-left col-lg-3 col-sm-6 d-flex justify-content-center">
            <img src={imgUrl} style={{height:"100px"}} loading="lazy"/>
            </div>
        
       
        <div className="card-body col-lg-9 col-sm-6">
          <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="card-title fw-normal">{schoolName}</div>
          <div className="card-text fw-light"> {date}</div>

          </div>
          <div className="card-text fw-light"> {department}</div>
          <div className="card-text fw-light">{degree} Degree</div>
          <div className="card-text fw-light"> {grade} over 4,00</div>
        </div>
      </div>
      
    )
}

export default School
