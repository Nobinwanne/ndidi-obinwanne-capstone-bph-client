# Project Title

Ballpark Housing

## Overview

Ballpark Housing is an AI-powered web application that helps real estate developers and realtors.

- Developers can access and underwrite listings, Realtors can add listings and and professionals access, underwrite, and develop real estate projects.

### Problem Space

Canada is currently experiencing a housing crisis.
Renters are unable to find affordable homes because there's a supply gap.
This gap exists because Developers do not build as quickly as they should.

The bottleneck is caused by 3 major factors:

- Finding lots is an antiquated process that take months.
- Developers work with partial data because real estate development require domain knowledge that it is currently not cohesive and domiciled in one place.
- Building and Development permits are not streamlined and can take months to receive approvals.

This application aims to increase housing supply by helping real estate developers find lots, get into the right ballpark and build quicker.

### User Profile

Mom & Pop Developers

- looking for lots/deals that suit their development profile and risk appetite.
- do not have the resources that big firms have to hire multiple analysts to find and underwrite deals.
- are not knowledgebale about city plans, permitting processes and requirements.

Boutique Real Estate firms

- have some resources and want to find lots faster in order to develop more projects.
- spend months analysing and underwriting deals and so take several months to develop a project.

Realtors

- spend several weeks finding lots and brokering deals

### Features

- As a Developer, I want to be able to find available lot listings within a city of interest
- As a Developer, I want to be able to see zoning information and learn about real estate development
- As a Developer, I want to be able to underwrite attractive deals quickly so that I have a good idea of project costs
- As a Realtor, I want to learn about real estate so that I can continually update my knowledge of the field
- As a Realtor, I want to be able search for vacant lots in a given city
- As a Realtor, I want to be able to be able to add listings

## Implementation

### Tech Stack

- React
- Javascript
- Heroku
- Mysql
- Client libraries:
  - React
  - React-router
  - Node.js
  - Axios
  - Tailwindcss
  - HeadlessUi
- Server libraries:
  - Knex
  - Express

### APIs

Open ai
Overpass api
Leaflet

### Sitemap

- the site will be a single page application with a chatgpt user interface
- ths system will provide direct prompts for users to carry out their queries
- the site will link to relevant pages based on user queries

### Mockups

### SPA UI

![](./public/images/BpH.png)

### Data

- Data consists of free, publicly available real estate listings from Zillow and Realtor.ca
- Data has already been scraped using the Python library - Beautiful Soup
- Data was in json format but was migrated into 4 tables in a Mysql database
- Data tables include - city, category, zone and commercial listings
- Data consists:
  - lot addresses
  - zoning information
  - images of the lots
  - pricing
  - amenities
  - listing description
  - longitude
  - latitude

### DataBase Schema

![](./public/images/BpH_Db_Schema.png)

### Endpoints

.Get/listings

- this will get all available lot listings within a specified city

.Delete/listings/:id

- this will enable the deletion of a listing using dynamic parameters such as a listing id

.Post/listing

- this will enable the creation of a new listing and post it to the database

## Roadmap

- Preprocess data, create tables and migrate data into all 4 tables
- build server side
  - create mysql db with knex
  - create endpoints and test all endpoints on thunder client
- build client side
  - utilize Tailwindcss and its components
  - utilize healessui and its components
  - develop front end functionality
- connect front end and backend
- deploy app

---

## Future Implementations

- develop RAG-architecture to enable personalization of chat messages from the chatbot
- develop heatmap to show users additional relevant data
  - areas with high development activity
  - areas with high permitting and approvals
  - city nodes
  - future city expansion plans
  - traffic data
  - population growth
- enhance UI and UX
- develop ML model to scan site plans and pre-assess permitting application documents

### How to Run Ballpark Housing App

- set up backend with env variables
- run backend server - npm run start
- set up frontend with env variables
- run frontend - npm run dev
