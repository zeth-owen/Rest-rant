const React = require('react')
const Def = require('../layouts/default')


function Show (data) {
    return (
        <Def>
          <main>
            <div className="card">
              <div className="card-header">
                <h1>{data.place.name}</h1>
              </div>
                <div className="card-body">
                  <img src={data.place.pic} alt="" />
                  <h5 className="card-title"><u>Description</u> <br /> {data.place.cuisines} <br />{data.place.city}{data.place.state}</h5>
                  <h5 className="card-title">Rating:</h5>
                </div>
                <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>
                </div> 
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              <div className="card-footer text-body-secondary">
                <h3>Comments</h3>
             </div>
         </div>
          </main>
        </Def>
    )
}

module.exports = Show

   


