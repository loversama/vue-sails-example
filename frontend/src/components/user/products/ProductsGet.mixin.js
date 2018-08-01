export default {
  data: () => ({
    id: ''
  }),

  created () {
    this.$store.dispatch('getProductsByUser', this.user)
  },

  computed: {
    fields: {
      get () {
        return {
          title: {
            label: this.t('productsget.mixin.field.first')
          },

          description: {
            label: this.t('productsget.mixin.field.second')
          },

          price: {
            label: this.t('productsget.mixin.field.third')
          },

          actions: {
            label: this.t('productsget.mixin.field.fourth')
          }
        }
      }
    },

    products: {
      get () {
        return this.$store.state.Products.products
      }
    },

    user: {
      get () {
        return this.$store.state.User.user
      }
    },

    isPatchProductVisible: {
      get () {
        return this.$store.state.Product.product.meta.isPatchProductVisible
      },

      set (isPatchProductVisible) {
        this.$store.commit('SET_IS_PATCH_PRODUCT_VISIBLE', isPatchProductVisible)
      }
    }
  }
}
