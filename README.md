[![Build Status](https://travis-ci.org/ewilson/titlematch_web.svg?branch=travis)](https://travis-ci.org/ewilson/titlematch_web)

TitleMatch Web App
==================

This is an Ember app for scheduling and playing of tournaments. It requires the
[TitleMatch API](https://github.com/ewilson/titlematch_api). Currently it can only deal with round-robin tournaments,
but I continue to have big plans. Progress will be slow and sporatic, but I believe that
I will have an interesting and fun web application by the end of 2018.

The current deployed version is [here](titlematch.s3-website-us-east-1.amazonaws.com/). I'll probably get a nicer
domain name in a year or so.

### The story

Why does this application exist? Why is it as it is? What might it become? Read on if you are curious.

#### The future

The goal is to have an application that would 

- Manage Olympic or World Cup style tournaments without the user needing to think
- Be dead simple to use on a phone
- Thus killing the notion of a double-elimination tournament

Double elimination is better than single elimination, but it is kludgy and ugly, and is only used because managing 
pools is hard. Tournaments with pools are fun, and create the feeling of regular season/playoffs without too many games.

#### The past

This idea started as a [Python/Flask web application](https://github.com/ewilson/tournament).
It was written because I wanted to learn how to write a web app in Python.
This application was first used on 12/31/13 for some
ping-pong round-robin tournaments. The original app had no JavaScript or even CSS, and was made in a few months.

That prototype was very successful in demonstrating that:

- Kids love tournaments
- Usability wasn't so great

This was enough to motivate me to continue. I was convinced that if I made the app I had imagined, 
it would be very enjoyable to my sons and nephews, and likely others.

While I was very interested in adding the features that I really wanted, I chose first to redesign the 
application with AJAX, using jQuery & Handlebars. This was better, but not quite what I wanted. I 
realized that I wanted a single page app.

After some struggles to find the right approach, I realized that the way to a well-designed app wasn't to slowly
grow the primitive prototype, but to rewrite the application with an architecture that fit my current vision. 
With this realization, I rewrote the app with Ember and Django.

The move from jQuery/Flask to Ember/Django was a learning experience for me about the nature of simplicity, and
the value of tools. I still value simple tools for simple tasks, but I'm not eager to use simple tools to build
an incomplete, undocumented, buggy version of the complex tool.

### Technologies

I've commented on some of the choices involved. I'll go ahead and list the entire stack.

- [Bootstrap](http://getbootstrap.com)
- [Ember](http://emberjs.com)
- [Django](https://www.djangoproject.com)
- [Postgres](http://www.postgresql.org)
- [Heroku](http://heroku.com)
- [AWS S3](http://aws.amazon.com/S3)

#### Frameworks

Bootstrap was a natural choice for a frontend framework, as it has the largest community. 
A frontend fromwork is essential for this project, as this application has little value
without a good experience on mobile devices. Also, I'm not very good at CSS.

Ember is not as popular as Angular for the JavaScript framework, but I found it preferable for several reasons:
- A more complete solution -- not a toolset for building a framework
- Not managed by Google
- Strongly recommended by the JS experts that I know

Django (along with Django-rest-framework) was an easy choice for the API, as it is the most popular web framework for Python.
Rails is probably a more common choice in the Ember world, but I prefer Python to Ruby.

#### Architecure and deployment

Both the client and server apps are deployed by Travis upon changes to master in GitHub. In both cases I have chosen
a simple and affordable option that saves me the trouble of managing a production server, with S3 
for the Ember-CLI app, and Heroku for the Django/Postgres API.

Postgres was chosen for convenience with Heroku, which doesn't allow for the file based SQLite. 
It feels like overkill given the small-data / low-traffic nature of this application, but it is a small price to pay 
for the tremendous convenience of deploying to Heroku.

### Local development setup

TitleMatch uses ember 1.13.1/ember-cli

Local deployment requires running the [TitleMatch API](https://github.com/ewilson/titlematch_api) locally,
the Python/Django backend.

To install dependencies:

    $ npm install
    $ bower install

To run locally:

    $ ember s

To run tests:

    $ ember t

To deply, just merge into master, Travis will handle deployment if tests pass.
