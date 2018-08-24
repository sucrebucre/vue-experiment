
<template>
  <div>

      <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-brand href="#">LastMinuteAdvisor</b-navbar-brand>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown text="Destinations" right>
              <b-dropdown-item href="amsterdam.html">Amsterdam</b-dropdown-item>
              <b-dropdown-item href="barcelona.html">Barcelona</b-dropdown-item>
              <b-dropdown-item href="paris.html">Paris</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-navbar-nav>
              <b-nav-item href="#">About</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item href="#">Contact</b-nav-item>
            </b-navbar-nav>


          </b-navbar-nav>


      </b-navbar>



      <!-- navbar-1.vue -->

      <b-container>
        <b-row>
          <b-col>

            <b-jumbotron
                         bg-variant="light"
                         border-variant="light"
                         header="Where do you want to go?"
                         lead="Pick a destination and see if it's, based on temperature, a smart moment to travel"
            >
            <div class="search_container">
              <input
                class="search_input"
                @keyup.enter="requestData"
                placeholder="Type in a city"
                type="search" name="search"
                v-model="package"
              >
              <button class="search_button" @click="requestData">Get information</button>
            </div>
            </b-jumbotron>



            <div class="error-message" v-if="showError">
             {{ errorMessage }}
            </div>
            <hr>
            <h1 class="title" v-if="loaded">{{ packageName }}</h1>
            <h1 v-for="info in weatherDescription">{{ info.description }}</h1>
            <h1 v-if="loaded">{{ weatherTemperature_min }}°C - {{ weatherTemperature_max }}°C</h1>

            <div class="chart_container" v-if="loaded">
              <div>
                Occupancy Rate
                <hr>
              </div>
              <div class="Chart_content">
                <line-chart v-if="loaded" :chart-data="temperatures" :chart-labels="labels"></line-chart>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>



      <b-container>
        <b-row>
          <b-col>
            <div>
              <b-card title="Amsterdam"
                      img-src="http://sugarbelly.nl/dev/bssa/images/amsterdam600x300.jpg"
                      img-alt="amsterdam"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mr-auto">
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <b-button href="amsterdam.html" variant="primary">More info</b-button>
              </b-card>
            </div>
          </b-col>

          <b-col>
            <div>
              <b-card title="Barcelona"
                      img-src="http://sugarbelly.nl/dev/bssa/images/barcelona600x300.jpg"
                      img-alt="barcelona"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mx-auto">
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <b-button variant="primary" v-on:click="requestData('barcelona')" >More info</b-button>
              </b-card>
            </div>
          </b-col>

          <b-col>
            <div>
              <b-card title="Paris"
                      img-src="http://sugarbelly.nl/dev/bssa/images/paris600x300.jpg"
                      img-alt="paris"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="ml-auto">
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <b-button href="paris.html" variant="primary">More info</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <p><br><br></p>
        </b-row>

      </b-container>

      <b-footer>
        <b-navbar toggleable="md" type="dark" variant="info">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item>Copyright © LastMinuteAdvisor 2018</b-nav-item>

            </b-navbar-nav>

        </b-navbar>
      </b-footer>

    </div>

</template>

<!-- `http://api.openweathermap.org/data/2.5/weather?q=${this.package}&appid=6a79173875d96b145263cba1e408b1dd` -->

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'

  Vue.use(BootstrapVue);

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import axios from 'axios'
  import LineChart from '@/components/LineChart'
  export default {
    components: {
      LineChart
    },
    props: {},
    data () {
      return {
        package: null,
        packageName: '',
        period: 'last-month',
        loaded: false,
        temperatures: [],
        labels: [],
        showError: false,
        errorMessage: 'Invalid input'
      }
    },
    mounted () {
      if (this.$route.params.package) {
        this.package = this.$route.params.package
        this.requestData()
      }
    },
    methods: {
      resetState () {
        this.loaded = false
        this.showError = false
      },
      requestData () {

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.package}&units=metric&appid=6a79173875d96b145263cba1e408b1dd`)
        .then(response => {
          console.log(response.data)
          this.weatherDescription = response.data.weather
          this.weatherTemperature_min = response.data.main.temp_min
          this.weatherTemperature_max = response.data.main.temp_max
        })

        if (this.package === null || this.package === '' || this.package === 'undefined') {
          this.showError = true
          return
        }
        this.resetState()
        axios.get(`https://my.api.mockaroo.com/temperature-schema.json?key=e86885f0`)
          .then(response => {

            // let array_dummy_data = []
            //
            // for (i=0; i<10; i++) {
            //   array_dummy_data.push(Math.floor(Math.random() * 20) + 15)
            // }
            //
            // this.temperatures = array_dummy_data

            this.temperatures = [(Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15), (Math.floor(Math.random() * 20) + 15)]
            this.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            this.packageName = response.data.package
            this.setURL()
            this.loaded = true
          })

          .catch(err => {
            this.errorMessage = err.response.data.error
            this.showError = true
          })
      },
      setURL () {
        // Removed "#/" just before ""/${this.package}
        history.pushState({ info: `npm-stats ${this.package}` }, this.package, `/${this.package}`)
      }
    }
  }
</script>
