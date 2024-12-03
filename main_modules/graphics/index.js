"use strict"

import terminalImage from "terminal-image"

export const printImg = async img => {console.log(await terminalImage.file(img, {width: 50}))}

import terminalLink from "terminal-link"
import chalk from "chalk"

export const printLink = link => {console.log(chalk.blue(`La nostra repo di GitHub: ${terminalLink(link, link)}`))}