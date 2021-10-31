import React, { useState, useEffect } from "react";

const ALLfILE = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch("https://gory-village-18910.herokuapp.com/formdata")
      .then((response) => response.json())
      .then((json) => {
        setdata(json)
        setloading(false)
      }

      );

  }, []);

  const deleteform = (id) => {
    fetch(`https://gory-village-18910.herokuapp.com/deleteForm/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        alert("succefully deleted");
        window.location.reload();
      });
  };



  const omyGod = (id) => {
    fetch(`https://gory-village-18910.herokuapp.com/process/${id}`, {
      method: 'PATCH',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        window.location.reload();


      });
  }

  return (
    <div>

      {loading ? <div className="text-center mt-5 pt-5">  <div class="spinner-border text-info " role="status">
        <span class="sr-only">Loading...</span>
      </div></div> : <div>
        {data.map((v) => (
          <div className="mt-5 ">
            <div className="row offset-lg-1 offset-md-0 offset-sm-0">
              <div className="col-lg-3 col-md-12 col-sm-12">{v.email}</div>
              <div className="col-lg-2 col-md-12 col-sm-12">{v.usernumber}</div>
              <div className="col-lg-2 col-md-12 col-sm-12">{v.resort}</div>
              <div className="col-lg-2 col-md-12 col-sm-12"><p className="text-danger" onClick={() => omyGod(v._id)}><button className="btn btn-danger">{v.value} </button></p></div>
              




              <div className="col-lg-2 col-md-12 col-sm-12">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteform(v._id)}
                >
                  delete
                </button>
              </div>
              
            </div>
          </div>
        ))}

      </div>}
      
    </div>
  );
};

export default ALLfILE;
