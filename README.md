

### Project description

A project to provide an opensource food supplier portal to help our ranchers, fishers, farmers get through COVID-19 and beyond.

Our first MVP Goal is to inform customers where they can buy locally grown food. 

[HelpWithCovid Project Page](https://helpwithcovid.com/projects/43)

### Tech stack

- App Clientside: ReactJS
  - Clientside Design: [Ant Design](https://ant.design/components/grid/) for frontend design components, 
  - Clientside maps: [react-map-gl](https://github.com/visgl/react-map-gl) for mapping

- Deployment
  - AWS S3 with Cloudfront and Route 53 
  - Resource Note: This is a good intro to AWS Serverless stack deployment of full stack ReactJS/Nodejs apps https://serverless-stack.com/chapters/why-create-serverless-apps.html

#. Current basis - WorkingNameForUi 

1. Paul's sketch - **"Food Finder Form/Landing Page/Intro page"**
2. Paul's sketch - **"Main Map Page: Map Overview w/ Search Filter Bar"** 
3. Patrick's sketch - **"Local Farms Aggregate View: Local Food Supplies news feed, Local Minimap of nearby farms, Data table"** based on proximity entered into search/from panning map -- from view of Wholesale Buyer, General Public, FEMA Purchasing Food Rep, etc.
4. Patrick's sketch - **"Farm individual view"** --  Subview of #3. When you click a farm in the datatable of #3, you are taken to their "farm individual view", to see a few more details about their farm (i.e. food supplier)


- 5. Just an Idea currently - "Internal Farmer Dashboard" -- Where farmers can configure their profile, supplies, and setup. It is comprised of 3 visual sections, "blocks", "tabs", etc.-- some separate visual sections for separate concerns.
  - 5.A. "Map & Sales Model Config" General Sales Setup: User configures Level of Display on Map & Contact Info -- How do they want to be displayed on the map, and who is allowed to see their contact info? (They will toggle some selection of (better defined than this) --> consumers, general public, wholesale purchasers, certain business types, etc.) 
  - 5.B. "Marketing Support Config & Help Requests" Preclisely who the Supplier is looking for-- User explains what part of the business stack and upstream/downstream section of the market they are involved in.   Who would they like us to help them market/sell to? And Who they are willing to sell to-- [This needs to be: Categories of potential wholesale purchasers, including LastResortWholesale Purchaser (such as Zoo, Animal Food Mfg, etc on the last day or 2 of spoilage? I dont know if anyone in the industry cares about this, just an)]  --> for "help requests" this could evolve into  a ticketing system, where a PM or someone in marketing can receive marketing help requests or suggestions from suppliers in need.
  - 5.C. "Supply Stock Dashboard" -- Supplies Integration and/or manual upload as .csv & .kson, and/or manual entry into an admin panel where they can enter text/numbers into inputs directly)

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

As of 3/25/2020 we are putting together a few UI Views, developing in ReactJS.  So, our only current relevant version info is for the reactjs app.  Working version name: v0.0.1-(CRA).

(CRA is short for create-react-app, which is the reactjs dev environment which this version of the app runs on)