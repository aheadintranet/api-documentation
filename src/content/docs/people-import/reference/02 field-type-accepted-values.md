---
title: Accepted values for field types
description: What kind of values can be sent through ahead's import API?
---

## General
Most field types are string-based and hence accept any string. Some of those types will be used in a different way in ahead’s UI.

* **Email**: will be rendered as link with “mailto:” prefix
* **Phone**: will be rendered as link with “tel:” prefix
* **Link**: will be rendered as link
* **MultiLang**: Supports chosing the best language for the user looking at a user profile in ahead.
* **Date**: The date is shown in the user's chosen culture.
* **PersonIdentifier**: The values need to be either the [**“userPrincipalName”** or **“employeeId”**](../05-person-json-object/) of enabled users in your Microsoft Entra.

:::caution
When using a field of type **Date**, the date input must be formatted like the date part of the ISO86*1 formatting, namely yyyy-MM-dd, e.g. 2023-12-24 for Christmas Eve in 2023.
:::

The schema’s `isList`-property for field definitions is currently constrained to the field types **String**, **MultiLang**, **File** and **PersonIdentifier**.

## Org chart

Currently, the only supported use case for a field of type **PersonIdentifier** is using it as source for rendering the org chart. For each user you can import a list of their subordinates into a list field of this type. Then, the user profile will contain an org chart based on your imported data.

```json
[
    {
        "userPrincipalName": "CEO@company.com",
        "staffMembers": ["CFO@company.com", "CIO@company.com", ...]
    },
    {
        "userPrincipalName": "CFO@company.com",
        "staffMembers": ["treasurer@company.com", "taxmanager@company.com", ...]
    },
    ...
]
```