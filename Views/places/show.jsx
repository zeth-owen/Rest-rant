const React = require('react')
const Def = require('../layouts/default')


function Show (data) {
  let comments = (
    <h3 className = "inactive"> No comments yet!</h3>
  )

  let rating = (
    <h6 className="inactive">
      Not yet rated 
    </h6>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce ((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++ ) {
      stars +='⭐️'
    }
    rating = (
      <h3> {stars} stars </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 😁'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>{c.author}</stong>
          </h3>
          <h4>Rating:{c.stars}</h4>
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
              {rating}
                <div className="card-body">
                  <img src={data.place.pic} alt={data.place.name} />
                  <h5 className="card-title"> Located in {data.place.city}, {data.place.state} </h5> 
                  <h3 className="card-title"><u>Description</u></h3> <p>{data.place.showEstablished()}</p>
                  <p><b>Serving:</b> {data.place.cuisines}</p>
                </div>
                <div className='button-flex'>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>        
                </form>    
                </div> 
               <div className="card-footer text-body-secondary">
                <h3><b>Comments</b></h3>
                {comments}
                </div>  
                </div>
                <h1>Rant or Rave?</h1>       
              <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div class="mb-3">
                      <label htmlFor="content" class="form-label">Content</label>
                      <textarea class="form-control" id="content" name='content' rows="3" defaultValue="I love it!" ></textarea>
                    </div>
                    <div className='row'>
                    <div className="form-group col-sm-4">
                      <label htmlFor="author">Author</label>
                      <input className="form-control" id="author" name="author"required />
                    </div>  
                    <div className="form-group col-sm-3">
                      <label htmlFor="stars">Star Rating (1-5)</label>
                     
                      <input type="number" className="form-control" id="stars" name="stars" min="1" max="5" required />
                    </div> 
                    <div className="form-check col-sm-1">
                      <input className="form-check-input" type="checkbox" id="rant"/>
                      <label className="form-check-label" htmlFor="rant" name="rant"  >Rant?</label>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-info">Add Comment</button>
              </form>  
          </main>
        </Def>
    )
}

module.exports = Show








