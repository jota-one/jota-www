+++
title = "About us"
description = "We don't really like to talk about ourselves, but we'll try... "
weight = 4
+++

{% block(centerV=true) %}
## Who <small class="block opacity-50">are we?</small>
We are 2 seasoned web software developers from Switzerland.

We've been working for 20 years in many different companies
(bank, insurance, media, education, health, government).

And we don't like talking about ourselves so we'll stop there for this part...
:flushed:

---

<div
  style="height:100%;padding:2.5rem 0;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:center;">
  <j-author img="/img/author/jorinho.jpg" big=true name="Joriñho" url="/about-us/jorinho"></j-author>
  <j-author img="/img/author/tadai.jpg" big=true name="Tadaï" url="/about-us/tadai"></j-author>
</div>

{% end %}

{% block() %}
## What <small class="block opacity-50">do we do?</small>
We build web products (as you've probably read on the [homepage](/))
and we'll tell you [how](#how) and [why](#why) in the next sections...

Stay tuned 🥁

Ah, did we already tell you we hate talking about ourselves?
Well, that's the case, really.

---
## How <small class="block opacity-50">do we do that?</small>
We usually sit in front of the computer and type on the keyboard... obviously...
{% end %}


{% block() %}
## Why <small class="block opacity-50">do we do all this?</small>
Considering the importance of that question and the brevity of the previous
parts, we thought writing a little AI to ask us relevant questions
would be a nice way to extract some of our deeper hidden thoughts.

Because we hate talking about ourselves (not sure we told you about it already
:thinking:...)
{% end %}

{{ chat(isFull=true, id="about-us-ai") }}
