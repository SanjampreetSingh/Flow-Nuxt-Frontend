<template>
  <div id="content" class="container">
    <section class="section">
      <!-- <div class="columns">
        <div class="column">
          <div class="tabs is-centered">
            <ul id="category">
              <li
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ 'is-active': activeTab === index }"
                @click="categoryChange(tab.id)"
              >
                <a>
                  <span>{{ tab.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
      <div class="columns">
        <div
          id="req-col"
          ref="imagecanvas_container"
          class="column is-8 has-background-dark has-text-centered is-paddingless"
        >
          <div class="column is-paddingless">
            <section>
              <div class="tabs container">
                <ul id="nav-list">
                  <li
                    v-for="(tab, index) in categories"
                    :key="index"
                    :class="{ active: isThumbCategoryActive(tab.id) }"
                    @click="changeCategory(tab.id)"
                  >
                    <a>{{ tab.name }}</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div>
            <canvas
              id="image-view"
              ref="imagecanvas"
              :width="width"
              :height="height"
            >
            </canvas>
          </div>
          <section>
            <div class="tabs container">
              <ul id="img-list">
                <li
                  v-for="image in media"
                  :key="image.id"
                  :class="{ active: isThumbImageActive(image.url) }"
                  @click="changePic(image.url)"
                >
                  <img :src="image.url" :alt="image.category" />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div id="res-col" class="column is-4 has-background-grey-lighter">
          <vue-json-pretty :path="'res'" :data="inference"></vue-json-pretty>
          <!-- <button v-if="appId">Activate Model</button> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VueJsonPretty from 'vue-json-pretty'
export default {
  layout: 'public',
  components: {
    VueJsonPretty
  },
  data() {
    return {
      activeTab: 0,
      tabs: [],
      categories: [],
      width: '400',
      height: '400',
      media: [],
      navFixed: false,
      activeImage: {
        img: '',
        url: ''
      },
      activeCategory: {
        id: ''
      },
      inference: {
        number: '0',
        result: 'Click on image or api'
      }
    }
  },
  computed: {
    canvas() {
      return this.$refs.imagecanvas
    },
    context() {
      return this.canvas.getContext('2d')
    }
  },
  async asyncData({ $axios }) {
    const tabResult = await $axios.$get('/ready/api-category')
    const mediaResult = await $axios.$get('/ready/api-media')
    return {
      tabs: tabResult.data.readyApisCategory,
      media: mediaResult.data.readyApisMedia
    }
  },
  created() {
    this.categoryChange(this.tabs[0].id)
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    async categoryChange(categoryid = null) {
      this.activeCategory.id = categoryid
      const apiResult = await this.$axios.$get('/ready/api/', {
        params: {
          category: categoryid
        }
      })
      this.categories = apiResult.data.readyApis
    },
    changePic(url) {
      this.activeImage.url = url
      this.context.clearRect(0, 0, this.width, this.height)
      this.loadImage(this.activeImage.url)
      this.requestModel()
    },
    isThumbImageActive(thumbItem) {
      return this.activeImage.url === thumbItem
    },
    changeCategory(id) {
      this.activeCategory.id = id
      this.requestModel()
    },
    isThumbCategoryActive(thumbItem) {
      return this.activeCategory.id === thumbItem
    },
    handleResize() {
      // Calculate new canvas size based on window
      this.height = this.$refs.imagecanvas_container.clientHeight * 0.8
      this.width = this.$refs.imagecanvas_container.clientWidth * 0.8
      this.$nextTick(() => {
        this.loadImage(this.activeImage.img)
      })
    },
    loadImage(img) {
      const imageObj = new Image()
      const vm = this
      const fitImageOn = function(canvas, imageObj) {
        const imageAspectRatio = imageObj.width / imageObj.height
        const canvasAspectRatio = vm.width / vm.height
        let renderableHeight, renderableWidth, xStart, yStart

        // If image's aspect ratio is less than canvas's we fit on height
        // and place the image centrally along width
        if (imageAspectRatio < canvasAspectRatio) {
          renderableHeight = vm.height
          renderableWidth =
            imageObj.width * (renderableHeight / imageObj.height)
          xStart = (vm.width - renderableWidth) / 2
          yStart = 0
        }

        // If image's aspect ratio is greater than canvas's we fit on width
        // and place the image centrally along height
        else if (imageAspectRatio > canvasAspectRatio) {
          renderableWidth = vm.width
          renderableHeight =
            imageObj.height * (renderableWidth / imageObj.width)
          xStart = 0
          yStart = (vm.height - renderableHeight) / 2
        }

        // Happy path - keep aspect ratio
        else {
          renderableHeight = vm.height
          renderableWidth = vm.width
          xStart = 0
          yStart = 0
        }
        vm.context.drawImage(
          imageObj,
          xStart,
          yStart,
          renderableWidth,
          renderableHeight
        )
      }

      imageObj.onload = function() {
        fitImageOn(this.canvas, imageObj)
      }

      imageObj.src = this.activeImage.url
    },
    async requestModel() {
      this.inference.result = 'Loading...'
      await this.$axios
        .$post('/ready/demo/', {
          api_id: this.activeCategory.id,
          data: this.activeImage.url
        })
        .then((response) => {
          this.inference.result = response.data.demoData.body
          const lengthofResponse = Object.keys(response.data.demoData.body)
            .length
          this.inference.number = `${lengthofResponse} faces found`
          // this.faceDetectionBoxes(response.data.demoData.body)
        })
    },
    faceDetectionBoxes(boxes) {
      const lengthofResponse = Object.keys(boxes).length
      console.log(lengthofResponse)
      console.log(boxes[Object.keys(boxes)[0]])
      this.drawRect(boxes[Object.keys(boxes)[0]])
    },
    drawRect(box) {
      const x1 = box[0]
      const y1 = box[1]
      const height = box[2] - box[0]
      const width = box[3] - box[1]
      console.log(x1 + '' + y1 + '' + height + '' + width)
      const vm = this
      vm.context.beginPath()
      vm.context.lineWidth = `10`
      vm.context.rect(x1, y1, height, width)
      vm.context.stroke()
    }
  }
}
</script>
<style scoped>
#content {
  margin-top: 50px;
}
#category a {
  padding: 5px 10px;
  color: #949292;
  font-weight: 500;
  margin-right: 20px;
  margin-bottom: 20px;
  border-bottom-width: 0;
}
#category li.is-active a {
  background: #000;
  color: #fff;
  border-bottom-width: 0;
}
#nav-list {
  padding: 5px 0;
}
#nav-list li a {
  font-size: 12px;
  text-transform: uppercase;
  border-bottom-width: 0;
  color: #a0a0a0;
}
#nav-list .active a {
  color: #fff;
}
#req-col {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
#res-col {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
#img-list img {
  width: 50px;
  height: 50px;
  opacity: 0.5;
}
#img-list .active img {
  opacity: 1;
  border: 3px solid #e6e6e6;
}
#res-col {
  height: 510px;
  overflow: auto;
}
@media screen and (max-width: 768px) {
  #req-col {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
  }
  #res-col {
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 300px;
  }
}
</style>
