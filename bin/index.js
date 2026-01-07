#!/usr/bin/env node

const args = process.argv.slice(2);

switch (args[0].toLowerCase()) {
    case "add":
        console.log("Add");
        break;
    case "update":
        console.log("Update");
        break;
    case "delete":
        console.log("Delete");
        break;
    case "list":
        console.log("List");
        break;
    case "summary":
        console.log("Summary");
        break;
    default:
        console.error(`Invalid command: ${args[0]}. Please try again.`);
        break;
}