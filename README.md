# Just me!

A minimal and fancy theme for [Hugo](http://gohugo.io/) to create Personal Pages with no blog or extra content, just awesome rotating backgrounds and your social profiles to allow people contact you. A demo site is deployed here: https://jota-ele-ene.github.io/just-me-starter.

![Just me! screenshot](/images/screenshot.png)

## Features

- Just a homepage with rotating fullscreen backgrounds
- Configure it including your social profiles
- Manage both backgrounds and social profiles like any other content in Hugo to avoid hard-coding in config-files
- Support for Google Analytics
- Contact form (in progress)

## Getting started

The easiest way to get started is to [import this theme in Forestry CMS](https://app.forestry.io/quick-start?repo=jota-ele-ene/just-me-starter&engine=hugo&version=0.81.0&branch=main) in a single click

<a href="https://app.forestry.io/quick-start?repo=jota-ele-ene/just-me-starter&engine=hugo&version=0.81.0">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

Once the import is complete, you can start to customize your site editing front matter for backgrounds, profiles and home page. They are accesible from the **Forestry** sidebar. If you prefer import it from the command line, go to your Hugo project root folder and run:

```bash
git submodule add https://github.com/jota-ele-ene/just-me.git themes/just-me
```

If you already had a site running, change the `theme` variable in your `config.toml` to `just-me`. Besides common variables like `baseURL`, `title`, `languageCode` and `theme`, add two new variables in the `params` section identifying you and a link where anyone can find info about you. These params will be shown in your homepage footer. They should appear in your file like this:

```
[params]
  author = "John Doe"
  author_link = "#"
```

You can also add the `ga_tracking_id` param and set your Google Analytics tag.

**Just me!** theme only renders the home page. So, you should also include the `disableKinds` variable to specify which type of pages Hugo should not render. Unless you extend the theme in your site and override with your own templates, keep these values for `disableKinds`:

```
disableKinds = ["taxonomy", "term", "RSS", "sitemap"]
```

If you don't have a `config.toml` file in your site yet, take a look inside the [`exampleSite`](https://github.com/jota-ele-ene/just-me/tree/master/exampleSite) folder of this theme. You'll find the config file [`config.toml`](https://github.com/jota-ele-ene/just-me/blob/master/exampleSite/config.toml) there. The folder also contais the minimum files required to set up your site and have it up & running. Besides the [`config.toml`](https://github.com/jota-ele-ene/just-me/blob/master/exampleSite/config.toml) you will find some contents in the `content` folder. Copy the `_index.md` file and the folders `backgrounds` and `profiles` to your site own `content` folder.

Don't forget to remove the first lines in `config.toml`. The variable `themesDir` only is needed for running the example site.

Finally, run:

```
hugo server -D
```

You' get your server up & running locally.

## Configuring the Home Page

The site's home and only page can be configured by editing the `content/_index.md` file front-matter and content. The theme will display the `title` param highlighted in the middle and the page and the content itself as a kind of subtitle. Edit them to fit your needs.

```md
---
title: "Hello World!"
date: 2022-01-12T19:29:03+01:00
draft: false
---

Yes! You reach my personal page. Welcome here. I'm **John doe**.
Find me at [Linkedin](#), read some of my thoughts in [my blog](#) or visit my photos at [Flickr](#).
```

### Configuring Social Profiles

Beyond the claim and the text, the homepage also includes some social icons linked to your social profiles. You can manage them like any other content managed in **Hugo**. Review the folder `content\profiles` in the [`exampleSite`](https://github.com/jota-ele-ene/just-me/tree/master/exampleSite) if you didn't copy it during installation. It contains some common examples of markdown files to configure the social icons.

Consider that:

1. Each markdown file determine a social profile. For instance, the file `twitter.md` allows you to define your Twitter account.

2. You can also create additional social icons by going to the root of your project and typing:

    ```
    hugo new profiles/new-profile.md
    ```

    Where `new-profile.md` is the name of the markdown file for managing the new icon. This will execute the theme's `profiles` archetype to create a new markdown file with the following frontmatter:

    ```md
    # Default profile frontmatter:
    # The title of your profile. Default value is generated from the filename
    title: "Profile for {{ replace .Name "-" " " | title }}"
    # The date the post was created
    date: {{ .Date }}
    # The URL for accesing your profile
    href: #
    # The estandard draft variable in Hugo
    draft: false
    # The name for displaying the icon from Font Awesome icon set
    profile: new-profile
    # The customized image for being displayed for this profile
    image: ""
    ```

3. There are two types of icons. Most common ones are those where an icon exists in the [Font Awesome icon set](https://fontawesome.com/). If you can find the icon for your new profile there, fill in the `profile` variable in the front-matter. For example, if you want to add your Github profile, an icon exists for **Github**. To use the Github icon everywhere, your HTML must include this code:

    ```
    <i class="fab fa-github"></i>
    ```

    To use it in your home page rendered with **Just-me!**, set `profile: github` in the front-matter, removing the `fa-` prefix.

    If you can't find an icon in Font Awesome, you can provide your own image. Review the `content\profiles\blog.md` markdown file to see an example.

4. Only the markdown files where front-matter param `draft` is set to `false` are shown in the homepage.

### Favicon

To update favicon of the site, override the ones in `static/icons/` folder with your own. You can also review the template `partials\head\icons.html` to undertand how they are included in your pages.

### Backgrounds

Just like Social icons, you can manage your homepage backgrounds by editing the existing markdown files in `content\backgrounds` or creating new ones by executing:

```
hugo new backgrounds/new-image.md
```

Review the examples to see the params included in the front-matter. The most important one are the `imageURL` and `imagesize` variables. The theme will use it to set the `image-background` style property for the background. On loading, the theme will build the page including only those backgrounds with the param `draft` set to `false`. Additionally, the scripts will process the `size` param to use only those images that match with the window current orientation (landscape or portrait). After any `resize` event, orientation is re-evaluated.

The rest of the data in the front-matter params will be used to attribute image credits. You can acces them by clicking in the `i` icon on the right-bottom corner of the page.

## Roadmap

Visit the [To-do column](https://github.com/users/jota-ele-ene/projects/2) in the basic kanban-style board open to manage this repo roadmap.

## Suggestions, bugs and whatever

All feedback is welcome! Head over to the [issue tracker](https://github.com/jota-ele-ene/just-me/issues).

## License

This repo is licensed under the **MIT** license. Check the [LICENSE file](https://github.com/jota-ele-ene/just-me/blob/main/LICENSE) for details.

Thanks to the authors of following resources, among others, used for developing this code:

- [Font Awesome](https://fontawesome.com/), a popular icon set that I use to display the social profiles
- [Codex](https://github.com/jakewies/hugo-theme-codex/) and [Anenke](https://github.com/theNewDynamic/gohugo-theme-ananke) Hugo themes, that I use as examples of building a theme
- [Unsplash](https://unsplash.com), the internet’s source of freely-usable images where I have taken the sample backgrounds from

## Author

José Luis Núñez [https://joseluisnuñez.es](https://joseluisnuñez.es)

if you find this repo useful, enjoy it and please consider buying me a coffee ☕️.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U7U27W8VV)

Thanks! ❤️
