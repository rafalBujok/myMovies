## MyMovies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

#### Application is recruitment task, that uses:

- newest version of Angular
- angular material -[youtube API](https://developers.google.com/youtube/v3/getting-started)
- [vimeo API](https://developer.vimeo.com/api/guides/start)
- ES6

#### Applications task is to store users video in a page.

User can add movies via input by pasting:

URL:

- https://www.youtube.com/watch?v=4JOAqRS_lms
- https://youtu.be/vJ3a_AuEW18
- https://vimeo.com/138882294
  ID:

- vJ3a_AuEW18
- 138882294

#### Videos should be listed with data such as:

- number of plays (not avaliable in vimeo)
- number of likes
- movie title
- video thumbnail
- published date

#### and actions like:

- play(also after clicking thumbnail) open modal with video
- delete
- add to favorites

#### Listed videos should:

- have pagination
- switch display mode (tiles, list)
- be able to delete all movies
- load hardcoded list of movies
- only favorite filter
- sort by oldest/latest
- stay in application after closeing and re-opening

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Get started

### Clone the repo

```shell
git clone https://github.com/rafalBujok/myMovies.git myMovies
cd myMovies
```

### Install npm packages

Install the `npm` packages described in the `package.json`:

```shell
npm i
```

### Getting access tokens

Get your access tokens by creating account on those:

https://developers.google.com/youtube/v3/getting-started
https://developer.vimeo.com/api/guides/start

and update

```shell
/environment/environment.prod.ts
export const environment = {
  production: true,
  youtubeKey: "yoursYoutubeKey",
  vimeoAccessToken: 'yoursVimeoAccessToken',
};
```

```shell
/environment/environment.ts
export const environment = {
  production: false,
  youtubeKey: "yoursYoutubeKey",
  vimeoAccessToken: 'yoursVimeoAccessToken',
};
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
