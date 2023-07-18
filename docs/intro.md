---
sidebar_position: 1
---
# Introduction

This project was undertaken during an internship at Octo Technology and aims to answer the following question:

"Does the recent release of the Cloudflare Workers runtime as open source enable its utilization in a Hybrid Cloud or 
Sovereign Cloud environment?"

## What is "Cloudflare Workers"?

Cloudflare is an American company renowned for its powerful Content Delivery Network (CDN). They have developed a runtime
that allows code execution on their CDN network, with the primary objective of reducing latency by running code servers 
in close proximity to users. This approach enables Edge Computing, connecting clients to the nearest decentralized server.

The Cloudflare Workers runtime was specifically designed for serverless computing. It supports the execution of JavaScript
and WebAssembly code, which can be compiled from various languages such as Rust, Python, Go, and Dart. Consequently, 
finding developers proficient in creating Cloudflare Workers is a straightforward task.

This documentation will guide you through the process of deploying the entire architecture, the necessary tools required
for code deployment, and provide some "hello world" tutorials for your initial Octo Workers examples.
