'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async me ({ auth, response }) {

    return response.json({
      status: 'success',
      data: auth.current.user
    })
  }

  async signup ({ request, auth, response }) {
    const userData = request.only([
      'name',
      'username',
      'email',
      'password'
    ])

    try {
      const user = await User.create(userData);
      const token = await auth.generate(user);

      return response.json({
        status: 'success',
        data: {
          user,
          token
        }
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem creating the user, please try again later.',
      })
    }
  }

  async login ({ request, auth, response }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      return response.json({
        status: 'success',
        data: { token }
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'Invalid email/password'
      })
    }
  }

  async updateProfile ({ request, auth, response }) {
    try {
        // get currently authenticated user
        const user = auth.current.user

        // update with new data entered
        user.name = request.input('name')
        user.username = request.input('username')
        user.email = request.input('email')
        user.location = request.input('location')
        user.bio = request.input('bio')
        user.website_url = request.input('website_url')

        await user.save()

        return response.json({
            status: 'success',
            message: 'Profile updated!',
            data: user
        })
    } catch (error) {
        return response.status(400).json({
            status: 'error',
            message: 'There was a problem updating profile, please try again later.'
        })
    }
  }

module.exports = UserController
