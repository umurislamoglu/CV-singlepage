import React from 'react'

const Company = (props) => {

    const {companyName , title , date , imgUrl ,responsibilities } = props

    const definitions = JSON.parse(responsibilities)

    return (
        <div className="card-flush d-flex flex-row align-items-center justify-content-start row">
            <div className="card-img-left col-lg-3 col-sm-6 d-flex justify-content-center"> 
                <img src={imgUrl} alt={companyName}  style={{"height":"100px"}} loading="lazy"/>
            </div>
            <div className="card-body col-lg-9 col-sm-6">
                <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="card-title fw-normal fs-5"> {companyName}</div>
                <div className="card-text fw-light"> {date}</div>
                    
                </div>
                <div className="card-text fw-light">{title}</div>
                <div className="list-group fw-light ">

                    {
                    definitions.map((definiton , idx)=>{
                      return <div className="list-group-item border-0" key={idx} ><span className="fw-light">- </span>{definiton}</div>
                    })
                    }
                    
                </div>

            </div>
            
        </div>
  
    )
}

export default Company
