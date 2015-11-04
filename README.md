[![Build Status](https://travis-ci.org/ewilson/titlematch_web.svg?branch=travis)](https://travis-ci.org/ewilson/titlematch_web)

TitleMatch Web App
==================

This is an Ember app for scheduling and playing of tournaments. It requires the
[TitleMatch API](https://github.com/ewilson/titlematch_api). Currently it can only manage round-robin tournaments, but
new and useful features will be added regularly ... except when it sits dormant for months.

The current deployed version is [here](http://titlematch.s3-website-us-east-1.amazonaws.com/).

### Future plans

The goal is to have an application that would manage recreational tournaments in a way that as easy as drawing
brackets on a whiteboard, but more satisfying. Towards this end, a significant goal is that the
application would manage Olympic / World Cup style tournaments with a good user experience on various devices.

### The past

This idea started as a [Python/Flask web application](https://github.com/ewilson/tournament),
which was first used on 12/31/13 for some ping-pong round-robin tournaments.
The original app was well-received despite a rough user experience, which
motivated me to rewrite the application as a Single Page App using Ember.js.

### Technologies

The front-end is a Bootstrap/Ember application that is deployed in an
AWS S3 bucket. This Ember application manages all business logic, in
addition to the user interface.

The back-end is a Django/Postgres RESTful API deployed in Heroku.
The API is straightforward, handling persistence and serialization of data.

Deployment to production -- for both applications -- is automated by Travis-CI.
Just merge to master, wait for tests to pass, and code is pushed to production.

### Local development setup

Local deployment requires running the [TitleMatch API](https://github.com/ewilson/titlematch_api) locally,
which requires Postgres.

Other than that, TitleMatch Web works like a typical ember/ember-cli app.
