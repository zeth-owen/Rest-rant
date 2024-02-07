# Rest-rant
Example restaurant rating app

## API Routes

| Method | Path             | Purpose                                       |
|--------|------------------|-----------------------------------------------|
| GET    | /                | Home page                                     |
| GET    | /places          | Places index page                             |
| POST   | /places          | Create new place                              |
| GET    | /places/new      | Form page for creating a new place            |
| GET    | /places/:id      | Details about a particular place              |
| PUT    | /places/:id      | Update a particular place                     |
| GET    | /places/:id/edit | Form page for editing an existing place       |
| DELETE | /places/:id      | Delete a particular place                     |
| POST   | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                | 404 page (matches any route not defined above) |

## Data Model

### Places (Restaurants)

| Field     | Type   | Description                    |
|-----------|--------|--------------------------------|
| name      | String | The name of the restaurant.    |
| city      | String | The city where the restaurant is located. |
| state     | String | The state where the restaurant is located. |
| cuisines  | String | The types of cuisines offered by the restaurant. |
| pic       | String | The URL or file path of a picture of the restaurant. |
