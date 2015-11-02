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

This idea started as a [Python/Flask web application](https://github.com/ewilson/tournament).
It was written because I wanted to learn how to write a web app in Python.
This application was first used on 12/31/13 for some
ping-pong round-robin tournaments. The original app was a bit lacking in the area of user experience,
but it successfully demonstrated that boys love tournaments and standings.

Having a well-received but limited prototype, I decided to rewrite the application with an architecture that
better fit my vision. In particular, I choose to build a Single Page App using ember.js.

### Technologies

The entire stack.

- [AWS S3](http://aws.amazon.com/S3)
- [Bootstrap](http://getbootstrap.com)
- [Ember](http://emberjs.com)
- [Django](https://www.djangoproject.com)
- [Postgres](http://www.postgresql.org)
- [Heroku](http://heroku.com)

Most of these choices don't change much. This is an Ember.js application, first and foremost.

Both the client and server apps are deployed by Travis upon changes to master in GitHub. In both cases I have chosen
a simple and affordable option that saves me the trouble of managing a production server, with S3
for the Ember-CLI app, and Heroku for the Django/Postgres API.

### Local development setup

Local deployment requires running the [TitleMatch API](https://github.com/ewilson/titlematch_api) locally,
which requires Postgres.

Other than that, TitleMatch Web works like a typical ember/ember-cli app.
