# -*- coding: utf-8 -*-
{
    'name': "Academy BnF",

    'summary': """Manage trainigns:""",

    'description': """
        Open academy module for managing trainings:
        - training courses
        - training sessions
        - attendees registration
    """,

    'author': "Ceviche 2.00",
    'website': "http://www.benandfrank.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Test',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['website_sale'],

    # always loaded
    'data': [
        'data/website_academy_data.xml',
        'views/assets.xml',
        'views/templates.xml',
        'views/views.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
