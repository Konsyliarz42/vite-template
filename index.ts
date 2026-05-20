import app from "@/app";

// Get root elements
const html = document.querySelector("html");
const head = document.querySelector("head");
const body = document.querySelector("body");
if (!html || !head || !body) throw new Error("index.html has invalid structure");

// Prepare `title` element
const title = document.querySelector("title") || document.createElement("title");
if (!title.parentNode) head.append(title);

// Set main attributes
title.text = "App";
html.lang = "en";
html.dir = "ltr";

// Render app
body.append(app);
