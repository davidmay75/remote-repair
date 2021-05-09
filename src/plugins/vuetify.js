import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.green, // #E53935
            secondary: colors.grey.lighten1, // #FFCDD2
            accent: colors.purple.base, // #3F51B5
          },
        },
      },
});
