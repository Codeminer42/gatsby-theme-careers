# Contributing to gatsby-theme-careers

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Setting Up the Project Locally

This project makes use of Yarn workspaces. To install its dependencies you will need [yarn](https://yarnpkg.com/en/), so go get it if you don't have it yet.

1.  [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone
    your fork:

    ```sh
    # Clone your fork
    git clone https://github.com/<your-username>/gatsby-theme-careers.git

    # Navigate to the newly cloned directory
    cd gatsby-theme-careers
    ```

1.  Your environment needs to be running `node` version >= 12.9.0 and `yarn` version >= 1.19.1.

1.  From the root of the project: `yarn` to install all dependencies.

    - make sure you have latest `yarn` version.

1.  Create your Contentful api keys and fill the `.env` file:

    ```sh
    cp packages/example/{.env.example,.env}
    ```

1.  From the root of the project: `yarn workspace example start` to run the example site.
    This will also run all the migrations to generate your Contentful content type.

1.  Fill some data in you Contentful space and go check it at [http://localhost:8000](http://localhost:8000).

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/iagodahlem/gatsby-theme-careers.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if somebody else is already working on it.
