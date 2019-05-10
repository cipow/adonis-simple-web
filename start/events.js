'use strict'

const Event = use('Event')

Event.on('image-delete', 'DeleteImage.delete')
Event.on('email::activation', 'EmailSender.activation')
