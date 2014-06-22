ember-rails-auth-blog
============================

A blog application with authentication to a Rails/Devise server from an Ember CLI frontend app with [Bootstrap](http://getbootstrap.com/) styling. 

Original base project comes from [givanse/ember-cli-simple-auth-devise](https://github.com/givanse/ember-cli-simple-auth-devise)

## Build
```bash
git clone git@github.com:givanse/ember-cli-simple-auth-devise.git
```

```bash
cd my-backend
bundle update
rake db:migrate
rake db:seed
rails server
```
You can sign up and log in from the server pages.

```bash
cd my-frontend
npm install
bower update
ember init
# say no to every prompt (don't overwrite anything)
ember server --proxy http://0.0.0.0:3000
```
You can only log in from the ember app.

Two accounts will be already available for log in:
```
green@mail.com // 12345678
 pink@mail.com // 12345678
```
