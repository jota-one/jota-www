+++
title = "Libraries"
description = "Useful tools we built along the way"
weight = 3
+++

{% product(id="hateoas-parser") %}
#### Javascript HATEOAS parser

You *must* use [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) if you're building
a RESTful API; at least that's our opinion...

And because HATEOAS is tricky to implement despite its greatness,
we've built this client-side vanilla JavaScript library that you can integrate
in your (Vue.js, React, Svelte, ...) frontend app!

It won its spurs in production on many of our projects!
{% end %}

{% product(id="http-client") %}
#### Axios-based Javascript HTTP client with HATEOAS support

This library is basically a wrapper around [Axios](https://axios-http.com/)
with some sugars (request caching, browser `GET` cache killer at the Promise
level) and is particularly well suited to HATEOAS backend APIs thanks to the
integration of the [hateoas-parser](#hateoas-parser) library.
{% end %}

{% product(id="vue-cli-plugin-aem-clientlib") %}
#### Build a Vue app as an AEM (crx) package

Configurable `vue-cli` plugin to ease the deployment of a
*[Vue.js](https://vuejs.org/)* app in
*[Adobe Experience Manager (AEM)](https://business.adobe.com/products/experience-manager/adobe-experience-manager.html)* CMS.
{% end %}

{% product(id="i36n") %}
#### Translation manager twice simpler ~~and twice better~~ than [vue i18n](https://vue-i18n.intlify.dev/) :muscle:

Vue 2 and 3 compatible library for managing translations with a single (killer)
feature:

*:tada: Switch between translation values and keys in the browser :champagne:*

![i36n in action!](/img/product/i36n.gif)

Especially useful for content editors indeed...
{% end %}
