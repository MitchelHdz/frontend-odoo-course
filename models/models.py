from odoo import api, fields, models


class Teachers(models.Model):
    _name = 'academy.teachers'

    name = fields.Char()
    biography = fields.Html()
    color = fields.Char()
    birth_date = fields.Date()
