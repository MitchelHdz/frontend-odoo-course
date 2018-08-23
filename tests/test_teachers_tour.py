# -*- coding: utf-8 -*-
import odoo.tests


@odoo.tests.common.at_install(False)
@odoo.tests.common.post_install(True)
class TestUiTeachers(odoo.tests.HttpCase):

    def test_01-admin_teachers_tour(self):

        self.phantom_js(
            '/',
            'odoo.__DEBUG__.services["web_tour.tour"].run("tour_show_biographies")',  # noqa
            'odoo.__DEBUG__.services["web_tour.tour"].tours.tour_show_biographies.ready',  # noqa
            login='admin')
