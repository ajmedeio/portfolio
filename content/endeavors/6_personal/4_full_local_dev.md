---
title: Full Local Dev?
tags: personal, testing
timeline_date: 2025-01-18
publish: true
---

Containers for everything? Services, databases, lambdas, queues. Or, do we want to mock from inside the code? I think if we mock at the external service layer, we might find more reusability.

Is this a live dependency test though?

Does this make the tests run slower? Probably...

The dependency isn't really live though if we replace it with a completely different piece of software

I guess the remote service is reached via dev exchange so we just substitute the dev exchange interaction with a dev exchange container - that would ensure we can reuse the container.

We'll use localstack to launch containers for queues. We'll use postgres containers for snowflake and RDS.

Let's start a project that attempts to do all this in golang to match what we have at work.
