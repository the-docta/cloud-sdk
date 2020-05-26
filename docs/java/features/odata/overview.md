---
id: overview
title: OData with the Cloud SDK for Java
hide_title: false
hide_table_of_contents: false
sidebar_label: Overview
description: This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services. 
keywords:
- sap
- cloud
- sdk
- odata
- java
- VDM
- generate
---

## What is OData?

[OData](https://www.odata.org/) is an open standard for building and consuming RESTful APIs. It defines a query language to send and retrieve data via HTTP and to perform operations on data.

There are two widely used versions of the protocol: OData v2 and OData v4. The latter comes with more and improved functionality. Full details on the standards are to be found in the [documentation](https://www.odata.org/documentation/).

## What does the Cloud SDK offer?

The Cloud SDK supports consumption of OData services through the following features:

- An OData client that is capable of building and executing OData requests
- The concept of a Virtual Data Model (VDM) that allows for building requests in a type-aware and thus type-safe manner
- Pre-generated VMDs for S/4HANA OData services
- A generator (available as CLI and Maven Plugin) that is capable of generating VDMs from service definitions

The SDK supports both OData v2 and OData v4 protocols. However, parts of the v4 implementation are still in beta and not all features are supported yet.