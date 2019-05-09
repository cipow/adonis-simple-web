'use strict'

const Helpers = use('Helpers')
const fs = Helpers.promisify(require('fs'))

const DeleteImage = exports = module.exports = {}

DeleteImage.delete = async (fileName) => {
  await fs.unlink(Helpers.publicPath(`image/avatars/${fileName}`))
}
