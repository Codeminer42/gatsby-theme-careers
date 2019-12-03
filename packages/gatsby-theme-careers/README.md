<h1 align="center">gatsby-theme-careers 👷</h1>
<p>
  <a href="https://www.npmjs.com/package/gatsby-theme-careers" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/gatsby-theme-careers.svg">
  </a>
  <a href="https://iagodahlem.mit-license.org/" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A Gatsby theme that generates a simple job listing site using Contentful as data source.

### 🏠 [Homepage](https://gatsby-theme-careers.iagodahlem.com/)

## 🚀 Install

If you are using this theme, you should also have installed `gatsby` and its peer dependencies, `react` and `react-dom`.

```sh
yarn add gatsby-theme-careers
```

## ⚙️ Config

Add `gatsby-theme-careers` and its options as a plugin to your `gatsby-config.js` file.

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-careers',
      options: {
        spaceId: '',
        accessToken: '',
        managementToken: '',
        environmentId: '',
        mailTo: 'become@jobs.com',
        googleAnalyticsOptions: {...}
      },
    },
  ],
}
```

| Option Name              | Type     | Description                                                | Required |
| :----------------------- | :------- | :--------------------------------------------------------- | :------- |
| `basePath`               | `string` | The base path where your site will live. (e.g. `/careers`) | `false`  |
| `title`                  | `string` | The main title used in the header                          | `false`  |
| `spaceId`                | `string` | Your Contentful space ID                                   | `true`   |
| `accessToken`            | `string` | Your Contentful content delivery API access token          | `true`   |
| `managementToken`        | `string` | Your Contentful personal access                            | `true`   |
| `environmentId`          | `string` | Your Contentful environment ID. (e.g. `master`)            | `true`   |
| `mailTo`                 | `string` | The e-mail address for people apply                        | `true`   |
| `googleAnalyticsOptions` | `object` | Your Google Analytics options                              | `false`  |

Create your Contentful space, generate all the needed api keys and fill them in.

## 🔥 Running

That's it. You can now run your Gatsby site. This will also run all the migrations to create your content type.

```sh
gatsby develop
```

Now go create some data in your Contentful space.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/iagodahlem/gatsby-theme-careers/issues) if you want to contribute.<br />
[Check the contributing guide](./CONTRIBUTING.md).<br />

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

[MIT License](https://iagodahlem.mit-license.org/) © 2019 [Iago Dahlem](https://iagodahlem.com).
