# Angular-Elements-in-Angular-Shell

[![Greenkeeper badge](https://badges.greenkeeper.io/xmlking/angular-elements-in-angular-shell.svg)](https://greenkeeper.io/)

Showcase how to build `Web Components` using `Angular Elements`, and <br>
use multiple pre-build Angular `Web Components` in `Angular Shell` App.    
 
### Build
```bash
# build script used by `ngx-build-plus` via `configHook` in `angular.json` (one time only)
npm run tsc -- -p tools/tsconfig.tools.json
# build micro-apps before building webapp
ng build chat-app --prod
# build shell webapp
ng build webapp --prod
 ```

### Run
> run sever with prod build
```bash
npm run server
```


### Test

Open http://localhost:4200/dashboard 
