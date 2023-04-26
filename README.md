# Planeteers

Captain Planet needs our help! With everything that's going on in the world
today, a new generation of Planeteers has risen up. However, Captain Planet is
too busy fighting eco-terrorists to implement a React application of their own
and it is our job to help their organize their data!

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8003`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

In our React application, the data about the new generation of Planeteers is in
the `db.json` file. This file will mimic an API that follows RESTful
conventions.

Make sure to open
[http://localhost:8003/planeteers](http://localhost:8003/planeteers) in the
browser to verify that your backend is working before you proceed!

## What You Already Have

The `App` component holds four children: `Header`, `SearchBar`, `RandomButton`,
and `PlaneteersContainer`. `Header`, `SearchBar`, and `RandomButton` have some
starter code in them already. The `PlaneteersContainer` component will render
all `Planeteer` components.

All of the code to style the page has been written for you, meaning that you
should be adding to the code rather than editing it; however, if your finished
product has some styling issues, don't worry too much about it.

## Core Deliverables

As a user, I should be able to:

- See list of planeteers on the page, using the `Planeteer` component. The
  `Planeteer` component should display the planeteer's image, name, bio, Twitter
  handle, and conditionally render where they are based. If they are from the
  USA, the component should say "USA-based", otherwise it should say "Working
  overseas".
- Click on the image of the planeteer in the `Planeteer` component and see the
  quote for that planeteer in place of the bio. If I click on the image again,
  the quote should again be replaced with the bio. If I click on another
  planeteer's image, it toggles that planeteer's bio independent of any other
  planeteer's.
- Type in the `SearchBar` component and see the list of planeteers whose name or
  bio match the text in the search bar. If there's no text in the search bar,
  all the planeteers should be rendered.

![Planeteers core deliverables](demos/planeteers-core-deliverables.gif)

### Endpoints for Core Deliverables

#### GET /planeteers

Example Response:

```json
[
  {
    "id": 1,
    "name": "Xiuhtezcatl Martinez",
    "fromUSA": true,
    "born": 2000,
    "bio": "While Xiuhtezcatl started ...",
    "quote": "My father taught me ...",
    "pictureUrl": "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/XMartinez.gif",
    "twitter": "@xiuhtezcatl"
  },
  {
    "id": 2,
    "name": "Vic Barrett",
    "fromUSA": true,
    "born": 2000,
    "bio": "Vic is from low-lying land ...",
    "quote": "The journey of looking at ...",
    "pictureUrl": "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/vic.jpg",
    "twitter": "@vict_barrett"
  }
]
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- See the age of the planeteer in the `Planeteer` component (To calculate the
  age, first figure out how to get the current year in JavaScript and then
  subtract the planeteer's birth year from it.)
- Click the `RandomButton` to render a random planeteer to the list of
  planeteers on the page. Additionally, the new random planeteer should be
  persisted to the database.
- Click on a checkbox in the `SearchBar` component that, when checked, sorts the
  planeteers in the `PlaneteersContainer` from youngest to oldest. When
  unchecked, the planeteers should be sorted by ID. When viewing a filtered list
  of planeteers, the sort should only sort the filtered list.

![Planeteers advanced deliverables](demos/planeteers-advanced-deliverables.gif)

### Endpoints for Advanced Deliverables

#### POST `/planeteers`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "fromUSA": boolean,
  "born": number,
  "bio": "string",
  "quote": "string",
  "pictureUrl": "string",
  "twitter": "string"
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Xiuhtezcatl Martinez",
  "fromUSA": true,
  "born": 2000,
  "bio": "While Xiuhtezcatl started speaking about the environment at just age 6, he is now a 19-year-old indigenous activist, musician, and the youth director of Earth Guardians, an organization that trains youth across the world to use civic engagement and the arts to help solve environmental issues. As a hip-hop artist, Xiuhtezcatl also often uses music to convey powerful environmental messages. He is also not afraid to confront the government head-on, as he was one of the 21 plaintiffs that sued the federal government for their lack of action on climate change.",
  "quote": "My father taught me to see the magic in everything. Growing up, magic was in the sunrise and the rainfall. In every expression of life, no matter how small. I think that that was one of the most valuable wisdom that shaped who I was as a young boy. It gave me the perspective to see what was behind the dysfunction of our society, of our broken world, our dying ecosystems and corrupt leaders.",
  "pictureUrl": "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/XMartinez.gif",
  "twitter": "@xiuhtezcatl"
}
```
