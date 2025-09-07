#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).parse();
console.log("CLI create-site OK. Args:", argv);
