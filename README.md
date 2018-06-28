# React tasks

> Project for learning React.

## Build setup 
```bash
# install dependencies
npm install

# run project in development mode with webpack devserver
npm run dev

# build for production
npm run prod
```


## My todos for this project
- Fix
  - [x] Movie props for MovieGrid in MoviePage
  - [x] Sass @import directive is not working in prod mode with SSR
  - [ ] Server works, but if page is loading with some url except '/', all styles dying. Same with page reloading
- Styles
  - [x] Style for 404 page
- Tests
  - [x] Snapshot testing
  - [x] Coverage > 80%
  - [x] Functional testing with enzyme and jest
  - [x] Actions & reducers covered with unit tests (~60% coverage)
  - [x] e2e test
- Redux
  - [x] Offline data storage & storage restoration
- SSR
  - [x] Provide initial state from server with redux
  - [x] Server handles query params to compute initial state
  - [x] Route masking
  - [x] Code splitting
- Useful libraries
  - [x] ESLint with Airbnb config 
  - [ ] Storybook
  - [x] Flow instead of PropTypes
  - [x] CSS Modules
  - [ ] Immutable.js