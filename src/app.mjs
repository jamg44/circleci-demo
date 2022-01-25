// @ts-check

import express from "express"
import { ProfileController } from "./controllers/ProfileController.mjs"
import { pathFromRoot } from "./lib/utils.mjs";

const profileController = new ProfileController()

/**
 * @type {express.Application}
 */
export const app = express()

app.use(express.static( pathFromRoot('public') ))

/**
 * Routes
 */
app.get('/profile', profileController.index)
