

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
  - Resource Note: there's also **react-mapbox-gl** which is a react wrapper for mapbox-gl.  Two sets of docs as examples: https://uber.github.io/react-map-gl/docs https://github.com/alex3165/react-mapbox-gla

- Deployment
  - AWS via Serverless stack (https://www.serverless.com) (or similar serverless lambda frameworks)
  - Resource Note: This is a good intro to AWS Serverless stack deployment of full stack ReactJS/Nodejs apps https://serverless-stack.com/chapters/why-create-serverless-apps.html


### UI Views -- Seeking ReactJS Developers & UI DesignersOhI'm sorry
Views -- (Feel free to draw up or code up your own versions and new UI ideas for viewing Farm Supplier related data- just a quick sketch with placeholder text & images/empty rectangles, then post them here so we can compare ideas)
#. Name - StageOfDev - WorkingNameForUi 
1. Paul - Sketch - "Food Finder Form?"
2. Paul - Sketch - "Farm Map Overview w/ Rightside bar filter" <-- perhaps Patrick can build the react-data-table2 tables into this view, under the map.  And we could put a news feed above it, that would take care of View #3-- Just merge it with View #2
3. Patrick - Sketch - "Farms Aggregate View" based on proximity entered into search/from panning map -- from view of Wholesale Buyer, General Public, FEMA Purchasing Food Rep, etc.
4. Patrick - Bad Sketch - "Farm individual view" --  Subview of #3. Aggregate view.
5. <No one currently> -  Idea, as written here--> - "Internal Farmer Dashboard" -- Where farmers can configure their profile, supplies, and setup. It is comprised of 3 visual sections, "blocks", "tabs", etc.-- some separate visual sections for separate concerns.
   5.A. "Map & Sales Model Config" General Sales Setup: User configures Level of Display on Map & Contact Info -- How do they want to be displayed on the map, and who is allowed to see their contact info? (They will toggle some selection of (better defined than this) --> consumers, general public, wholesale purchasers, certain business types, etc.) 
   5.B. "Marketing Support Config & Help Requests" Preclisely who the Supplier is looking for-- User explains what part of the business stack and upstream/downstream section of the market they are involved in.   Who would they like us to help them market/sell to? And Who they are willing to sell to-- [This needs to be: Categories of potential wholesale purchasers, including LastResortWholesale Purchaser (such as Zoo, Animal Food Mfg, etc on the last day or 2 of spoilage? I dont know if anyone in the industry cares about this, just an)]  --> for "help requests" this could evolve into  a ticketing system, where a PM or someone in marketing can receive marketing help requests or suggestions from suppliers in need.
   5.C. "Supply Stock Dashboard" -- Supplies Integration and/or manual upload as .csv & .kson, and/or manual entry into an admin panel where they can enter text/numbers into inputs directly)

Re: View #5 "Internal Farmer Dashboard" -- Having a qualitative and quantitative profile on the supplier's C. available product volume, B. urgency to ship it, and C. their marketing needs will be important as we design out and craft this app.  We should keep A,B,C above in mind as we build out View 5-- the "Internal Farmer Dashboard", where we intake the farmer's qualitative & quantitative data to build an basic data engine to better chart out where and when food resources are available.

### This is v0.0.1-(CRA)
(CRA is short for create-react-app, which is the reactjs dev environment which this version of the app runs on)

Note: Food-Supplier-App v0.0.2-(react-webpack) differs from v0.0.1-(CRA)that v0.0.2-(react-webpack) is configured & compiled via webpack, and it has a slightly different project structure.  In v0.0.2-(react-webpack) the main directory hosts the reactjs & webpack node_modules, and the reactjs components are in ./src/client/reactComponents.  Whereas v0.0.1-(CRA) uses create-react-app's built in compiling functionality to bundle components.  And, it features the clienside reactjsapp directory adjacent to the serverside directory.

In the case of vappv0.0.2-(react-webpack), its mostly just for tweaking the compilation of the reactjs component packages to prep them for production, and bundling UI use cases separately so they can be displayed to different categories of users (Such as adminstrators, employees, customers, etc.).
