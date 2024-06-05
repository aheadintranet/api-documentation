---
title: Accepted values for field types
description: What kind of values can be sent through ahead's import API?
---

Most field types are string-based and hence accept any string. Some of those types will be used in a different way in ahead’s UI.

* **Email**: will be rendered as link with “mailto:” prefix
* **Phone**: will be rendered as link with “tel:” prefix
* **Link**: will be rendered as link
* **MultiLang**: Supports chosing the best language for the user looking at a user profile in ahead.
* **Date**: The date is shown in the user's chosen culture.

:::caution
When using a field of type **Date**, the date input must be formatted like the date part of the ISO86*1 formatting, namely yyyy-MM-dd, e.g. 2023-12-24 for Christmas Eve in 2023.
:::

The schema’s `isList`-property for field definitions is currently constrained to the field types **String**, **MultiLang** and **File**.