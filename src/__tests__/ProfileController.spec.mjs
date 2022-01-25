import { ProfileController } from "../controllers/ProfileController.mjs"

let profileController

describe('ProfileController', () => {
  beforeAll(() => {
    profileController = new ProfileController()
  })

  test('should be defined', () => {
    expect(profileController).toBeDefined()
  })

})