# Command Center Challenge
We're getting the green light! Voltus is building a command center dashboard for organizations with multiple facilities enrolled in our demand response partnership(s). Think HQ for a regional franchise, like a chain of coffee shops or a series of rock quarries. Using this dashboard we'd like to be able to get a list of facilities belonging to a given organization's, and plot them visually on a map.

## The Task

![org 1](/screenshot-org-1.png?raw=true "Screenshot for organization id 1")

Write a simple browser based app (with whatever technologies you prefer) that does the following:

1. Given a parameter provided on page request (e.g. either as a route, querystring, etc.) issues an HTTP GET request against this web api: `http://challenge.voltus.co/facilities/<organization_id: int>`. The response of this is a json object that might look something like this:
```json
{
  "name": "Singleton Corp",
  "id":0,
  "facilities":[
    {
      "name":"Atlanta",
      "coord":[33.749,-84.388],
      "id":1
    }
  ]
}
```

Where the top-level `name` is the name of the organization, and `facilities` is a json array of facilities belonging to the organization. The `coord` array in each facility is the latitude and longitude where they it is located.

Some known organization id's are 1, 2, 3

So, for example if the entrypoint of our app is through index.html, and we're using query strings, `index.html?organization_id=1` should render the dashboard for organization 1.

2. Render a map with some sort of visual cue or marker corresponding to the location of each facility. Don't worry too much about setting the zoom level such that each facility is visible (ballpark is good enough). This map should take up the height of the window, and about 65-75% of the width.

3. Add a side panel to the left of the map. This panel should should be divided horizontally into two further sections:
   1. The top part should just have placeholder text, centered in the middle.
   2. The bottom part should display a simple table that has the following columns: `Facility, Reading, Last Update`
   The facility column should just contain the name of the facility. For now the reading column can just be defaulted to 0 or 0kW or random values. And the Last Updated can be defaulted to any value.

4. The header should read the name of the organization

![org 2](/screenshot-org-3.png?raw=true "Screenshot for organization id 3")

## The Goal
Try to duplicate the screenshots provided as closely as you can, but feel free to deviate wherever you feel necessary. The goal of this exercise is not to pixel-push through a full-fledged webapp, but rather to provide a scaffolding for possible pair programming in the future (hint: it might be pragmatic to be mindful of state changes that might manifest in future iterations). Try to get through as many as these as you can!
