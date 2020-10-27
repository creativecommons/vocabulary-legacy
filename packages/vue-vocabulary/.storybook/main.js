module.exports = {
  stories: [
    './meta/*.stories.*',
    '../src/**/*.stories.*'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',

    'storybook-dark-mode/register'

    '@storybook/addon-a11y'

  ]
}
