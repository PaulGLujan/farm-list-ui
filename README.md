

### Project description

A project to provide an informal/non-bureaucratic, opensource food supplier portal to help our ranchers, fishers, farmers get through COVID-19 and beyond.

Our first MVP Goal is a visual & data platform which allow suppliers and wholesale purchasers to identify each other, connect, communicate, receive real time qual/quant updates, and fulfill their own transactions & logistics.

[HelpWithCovid Project Page](https://helpwithcovid.com/projects/43)

### Tech stack
- Server: NodeJS  
  - V0/Dev Testing - Initially, with ExpressJS Dev Environments + A test server on Linux/Nginx.  
  - v1 - However, soon we will deploy to AWS-- we will probably move the expressJS routes into individual Lambdas, usign AWS Lambda REST API.
  - DB: Airtable


- App Clientside: ReactJS
  - Clientside Design: [Ant Design](https://ant.design/components/grid/) for frontend design components, 
  - Clientside Datatables: [react-bootstrap-table2](https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html) for frontend data tables (unless there are better suggestions)
  - Clientside maps: [Mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/) for mapping -- Example in our repo:  https://gitlab.com/pmeaney/food-supplier-mkt-app/-/blob/master/food-supplier-mkt-app/clientside-reactjs/src/Mapbox.js
  - Resource Note: there's also react-mapbox-gl which is a react wrapper for mapbox-gl.  Two sets of docs as examples: https://uber.github.io/react-map-gl/docs https://github.com/alex3165/react-mapbox-gla


- Deployment
  - AWS via Serverless stack (https://www.serverless.com) (or similar serverless lambda frameworks)
  - Resource Note: This is a good intro to AWS Serverless stack deployment of full stack ReactJS/Nodejs apps https://serverless-stack.com/chapters/why-create-serverless-apps.html



### UI Views -- Seeking ReactJS Developers & UI Designers

- For Mapping -- Talk to Bobby if you're interested in working on map related stuff, just to get an intro to the plan there with web-gl, as he has experience with Mapping technology, GeoJson, web-gl, etc.

Views -- (Feel free to code up your own version, we then we can compare ideas) (note: "Farm" is short for "Food Supplier")

#. Current basis - WorkingNameForUi 

1. Paul's sketch - **"Food Finder Form/Landing Page/Intro page"**
2. Paul's sketch - **"Main Map Page: Map Overview w/ Search Filter Bar"** 
3. Patrick's sketch - **"Farms Aggregate View: Local Food Supplies news feed, Local Minimap of nearby farms, Data table"** based on proximity entered into search/from panning map -- from view of Wholesale Buyer, General Public, FEMA Purchasing Food Rep, etc.
4. Patrick's sketch - **"Farm individual view"** --  Subview of #3. When you click a farm in the datatable of #3, you are taken to their "farm individual view", to see a few more details about their farm (i.e. food supplier)


5. Just an Idea currently - "Internal Farmer Dashboard" -- Where farmers can configure their profile, supplies, and setup. It is comprised of 3 visual sections, "blocks", "tabs", etc.-- some separate visual sections for separate concerns.
   5.A. "Map & Sales Model Config" General Sales Setup: User configures Level of Display on Map & Contact Info -- How do they want to be displayed on the map, and who is allowed to see their contact info? (They will toggle some selection of (better defined than this) --> consumers, general public, wholesale purchasers, certain business types, etc.) 
   5.B. "Marketing Support Config & Help Requests" Preclisely who the Supplier is looking for-- User explains what part of the business stack and upstream/downstream section of the market they are involved in.   Who would they like us to help them market/sell to? And Who they are willing to sell to-- [This needs to be: Categories of potential wholesale purchasers, including LastResortWholesale Purchaser (such as Zoo, Animal Food Mfg, etc on the last day or 2 of spoilage? I dont know if anyone in the industry cares about this, just an)]  --> for "help requests" this could evolve into  a ticketing system, where a PM or someone in marketing can receive marketing help requests or suggestions from suppliers in need.
   5.C. "Supply Stock Dashboard" -- Supplies Integration and/or manual upload as .csv & .kson, and/or manual entry into an admin panel where they can enter text/numbers into inputs directly)

_____
Re: View #5 "Internal Farmer Dashboard" -- Having a qualitative and quantitative profile on the supplier's:

- **A. available (and upcoming) product volume**
- **B. urgency to ship it**, and 
- **C. their marketing needs** will be important as we design out and craft this app.  

We should **keep A,B,C above in mind as we design and build out all views**, and specifically View 5-- the "Internal Farmer Dashboard", where we intake the farmer's qualitative & quantitative data to build an basic data engine to better chart out where and when food resources are available.  And also an overall view.
____
**Re: Visualizing Time constraints on supply & time since update by supplier** in general, such as via a Main Map, or a Main Data Table (the "Aggregate Farms in Proximity" UI View)--

- We might need a "time til spoilage" meter for each product, so we can see the urgency to get the product to an end consumer & get some sort of revenue for supplier
- If a supplier hasn't updated our database recently (via our REST API or a form), then we need to some how make it fade out-- So that it's understood that the supplies numbers they provided are outdated and haven't been updated recently.

________

### Version info
#### Version: This is v0.0.1-(CRA)
As of 3/25/2020 we are putting together a few UI Views, so, since we are developing in ReactJS, here is some version info on this particular project:

(CRA is short for create-react-app, which is the reactjs dev environment which this version of the app runs on)