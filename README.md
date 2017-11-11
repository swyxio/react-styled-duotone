# React Mixblend Duotone
_a small starter for building a component library with [styled-components](https://github.com/styled-components/styled-components) 💅_

## Overview
This component lib uses:

 [CSS mix-blend mode](https://css-tricks.com/almanac/properties/m/mix-blend-mode/)
 [styled-components](https://github.com/styled-components/styled-components),
 [polished](https://github.com/styled-components/polished), 
 [styled-components-modifiers](https://github.com/Decisiv/styled-components-modifiers) 💅


## Further reading

- <https://css-tricks.com/almanac/properties/m/mix-blend-mode/> Demoed [here](https://codepen.io/kirkegaard/pen/KzEbWG) and [here](https://codepen.io/meowwwls/pen/zoRjdK)
- <http://webdesignerwall.com/tutorials/create-spotify-colorizer-effects-css-blend-modes>
- also check out: <https://github.com/nagelflorian/react-duotone> and <https://lukyvj.github.io/colofilter.css/>
- or [SVG filters](https://css-tricks.com/color-filters-can-turn-your-gray-skies-blue/) demoed [here](https://codepen.io/AmeliaBR/pen/PqNNOz) and [here](https://codepen.io/AmeliaBR/pen/WvwwME) and [here](https://codepen.io/AmeliaBR/pen/oXxWpr)

## Up & Running
To install dependencies with Yarn, run:
```sh
$ yarn
```

or to install with npm, run:

```sh
$ npm install
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Publishing
If you already have an account with npm, you can simply run:
```
$ npm login
$ npm publish
```

If you don't have an account with npm:

_**NOTE:** Your email address is public_
```
$ npm set init.author.name "Your Name"
$ npm set init.author.email "you@example.com"
$ npm set init.author.url "http://yourblog.com"
$ npm adduser
$ npm publish
```

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/component-library-starter/blob/master/.github/CONTRIBUTING.md).
<https://hackernoon.com/building-a-react-component-library-part-2-46fd4f77bb5c>

## License
[MIT](https://github.com/alanbsmith/component-library-starter/blob/master/LICENSE)
