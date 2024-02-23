const React = require('react')
const Def = require('../layouts/default')


function Show (data) {
  let comments = (
    <h3 className = "inactive"> No comments yet!</h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className="card">
              <div className="card-header">
                <h1>{data.place.name}</h1>
              </div>
                <div className="card-body">
                  <img src={data.place.pic} alt={data.place.name} />
                  <h5 className="card-title"> Located in {data.place.city}, {data.place.state} </h5> 
                  <h3 className="card-title"><u>Description</u></h3> <p>{data.place.showEstablished()}</p>
                  <p><b>Serving:</b> {data.place.cuisines}</p>
                </div>
                <div className='button-flex'>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>        
                </form>    
                </div> 
              <div className="card-footer text-body-secondary">
                <h3><b>Comments</b></h3>
                {comments}
             </div>
         </div>
          </main>
        </Def>
    )
}

module.exports = Show

   


