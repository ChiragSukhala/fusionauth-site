---
layout: article
title: Webapp native login to backend
subtitle: Using sessions
description: An explanation of webapp login using a native login form that submits to the application backend and uses server-side sessions
image: articles/login-types-share-image.jpg
---

{% capture intro %}
{% include_relative _native-intro.md %}
{% endcapture %}
{{ intro | markdownify }}

## Diagram

**Legend**

```text
() --> indicate request/response bodies
{} --> indicate request parameters
[] --> indicate cookies
```

{% plantuml _diagrams/logins/webapp/native-login-form-to-application-backend-sessions.plantuml %}

## Explanation

{% capture steps %}
{% include_relative _native-login-store.md %}
{% include_relative _create-session.md %}
{% include_relative _shopping-cart-session-redirect.md %}
{% include_relative _shopping-cart-session-load.md %}
{% include_relative _shopping-cart-session-relogin.md %}
{% include_relative _native-login-forums.md %}
{% include_relative _create-session.md %}
{% include_relative _forums-session-redirect.md %}
{% include_relative _forums-session-load.md %}
{% include_relative _stolen-session-id.md %}
{% endcapture %}
{{ steps | markdownify }}

## Security considerations

This workflow is one of the more secure methods of authenticating users. One downside is that the application backend receives passwords from the browser. While this isn't an issue if TLS is used and the passwords are not stored by the application backend, developers that do not want to be part of the password chain of responsibility should consider other workflows.

## APIs used

Here are the FusionAuth APIs used in this example:

* [/api/login](/docs/v1/tech/apis/login#authenticate-a-user)

[_View All Types_](/articles/logins/types-of-logins-authentication-workflows)
