# repo-bot

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![ISC License][license-shield]][license-url]

> A GitHub App built with [Probot](https://github.com/probot/probot)

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t repo-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> repo-bot
```

## License

This repo is licensed under an ISC license. A copy of the license is also provided.

---

[contributors-shield]: https://img.shields.io/github/contributors/jordandarlington-org/repo-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/jordandarlington-org
[forks-shield]: https://img.shields.io/github/forks/jordandarlington-org/repo-bot.svg?style=for-the-badge
[forks-url]: https://github.com/jordandarlington-org/repo-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/jordandarlington-org/repo-bot.svg?style=for-the-badge
[stars-url]: https://github.com/jordandarlington-org/repo-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/jordandarlington-org/repo-bot.svg?style=for-the-badge
[issues-url]: https://github.com/jordandarlington-org/repo-bot/issues
[license-shield]: https://img.shields.io/github/license/jordandarlington-org/repo-bot.svg?style=for-the-badge
[license-url]: https://github.com/jordandarlington-org/repo-bot/blob/main/LICENSE
