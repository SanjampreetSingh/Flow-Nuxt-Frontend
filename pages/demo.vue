<template>
  <section id="content" class="section">
    <div class="container">
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
              :width="canvasValues.width"
              :height="canvasValues.height"
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
                  @click="changePic(image.url, image.id)"
                >
                  <img :src="image.url" :alt="image.category" />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div id="res-col" class="column is-4 has-background-grey-lighter">
          <pre>{{ inference }}</pre>
          <!-- <vue-json-pretty :path="'res'" :data="inference"></vue-json-pretty> -->
          <!-- <button v-if="appId">Activate Model</button> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import VueJsonPretty from 'vue-json-pretty'
export default {
  layout: 'subPagesLayout',
  components: {
    // VueJsonPretty
  },
  data() {
    return {
      activeTab: 0,
      tabs: [],
      categories: [],
      media: [],
      navFixed: false,
      canvasValues: {
        width: '400',
        height: '400',
        xStart: '',
        yStart: '',
        xFactor: '',
        yFactor: ''
      },
      activeImage: {
        img: '',
        url: '',
        id: ''
      },
      activeCategory: {
        id: ''
      },
      inference: {
        length: 0,
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
    changePic(url, id) {
      this.activeImage.url = url
      this.activeImage.id = id
      this.context.clearRect(
        0,
        0,
        this.canvasValues.width,
        this.canvasValues.height
      )
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
      this.canvasValues.height =
        this.$refs.imagecanvas_container.clientHeight * 0.8
      this.canvasValues.width =
        this.$refs.imagecanvas_container.clientWidth * 0.8
      this.$nextTick(() => {
        this.loadImage(this.activeImage.img)
      })
    },
    loadImage(img) {
      const imageObj = new Image()
      const vm = this
      const fitImageOn = function(canvas, imageObj) {
        const imageAspectRatio = imageObj.width / imageObj.height
        const canvasAspectRatio = vm.canvasValues.width / vm.canvasValues.height
        let renderableHeight, renderableWidth, xStart, yStart

        // If image's aspect ratio is less than canvas's we fit on height
        // and place the image centrally along width
        if (imageAspectRatio < canvasAspectRatio) {
          renderableHeight = vm.canvasValues.height
          renderableWidth =
            imageObj.width * (renderableHeight / imageObj.height)
          xStart = (vm.canvasValues.width - renderableWidth) / 2
          yStart = 0
        }

        // If image's aspect ratio is greater than canvas's we fit on width
        // and place the image centrally along height
        else if (imageAspectRatio > canvasAspectRatio) {
          renderableWidth = vm.canvasValues.width
          renderableHeight =
            imageObj.height * (renderableWidth / imageObj.width)
          xStart = 0
          yStart = (vm.canvasValues.height - renderableHeight) / 2
        }

        // Happy path - keep aspect ratio
        else {
          renderableHeight = vm.canvasValues.height
          renderableWidth = vm.canvasValues.width
          xStart = 0
          yStart = 0
        }
        // Save (xstart, ystart)
        vm.canvasValues.xStart = xStart
        vm.canvasValues.yStart = yStart

        // Save width and height change factor
        vm.canvasValues.xFactor = renderableWidth
        // renderableWidth / imageObj.width
        vm.canvasValues.yFactor = renderableHeight
        // renderableHeight / imageObj.height
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
      this.inference.length = 0
      await this.$axios
        .$post('/ready/demo/', {
          api_id: this.activeCategory.id,
          data: this.activeImage.url
        })
        .then((response) => {
          this.inference.result = response.data.demoData.body
          // eslint-disable-next-line
          const lengthofResponse = Object.keys(response.data.demoData.body)
            .length
          this.inference.length = lengthofResponse
          this.faceDetectionBoxes(response.data.demoData.body)
        })
    },
    faceDetectionBoxes(boxes) {
      // loop over each face
      const lengthofResponse = Object.keys(boxes).length
      for (let i = 0; i < lengthofResponse; i++) this.drawRect(boxes[i])
    },
    drawRect(box) {
      // new coordinates according to rendered image on canvas
      // const x1 = box[0] * this.canvasValues.xFactor
      // const x2 = box[2] * this.canvasValues.xFactor
      // const y1 = box[1] * this.canvasValues.yFactor
      // const y2 = box[3] * this.canvasValues.yFactor
      // const width = x2 - x1
      // const height = y2 - y1
      const left = box.left * this.canvasValues.xFactor
      const top = box.top * this.canvasValues.yFactor
      const width = box.width * this.canvasValues.xFactor
      const height = box.height * this.canvasValues.yFactor
      const vm = this
      // Save canvas initial stage
      vm.context.save()
      vm.context.beginPath()
      // Change canvas origin
      vm.context.translate(vm.canvasValues.xStart, vm.canvasValues.yStart)
      // Draw Rectangle
      vm.context.lineWidth = `3`
      vm.context.strokeStyle = '#f6e15a'
      // vm.context.strokeRect(top, left, width, height)
      // Reset canvas to previous stage
      vm.context.restore()
    }
  }
}
</script>
<style scoped>
#content {
  margin-top: 70px;
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
  margin-left: 5px;
  border-radius: 10px;
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
