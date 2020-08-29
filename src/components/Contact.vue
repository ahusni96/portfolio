<template>
  <v-container>
    <div>
      <v-col>
        <v-card v-if="!isMobile">
          <v-row>
            <v-col align="left">
              <v-card-title>Muhammad Amirulhusni<br>Mohd Radzi</v-card-title>
              <v-card-subtitle>
                <b>Junior Programmer</b>
              </v-card-subtitle>
            </v-col>
            <v-col align="center" align-self="center" md="auto">
              <v-avatar size="100">
                <img src="../assets/default-avatar.jpg" alt="avatar">
              </v-avatar>
            </v-col>
            <v-col align="right">
              <v-card-subtitle>
                {{ contact.email }} <v-icon>mdi-email</v-icon><br>
                {{ contact.phone }} <v-icon>mdi-phone</v-icon><br>
                {{ contact.location }} <v-icon>mdi-map-marker</v-icon><br>
                {{ contact.web }} <v-icon>mdi-web</v-icon>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
          
        <v-card v-if="isMobile">
          <v-row>
            <v-col align="center" align-self="center" md="auto">
              <v-avatar size="100">
                <img src="../assets/default-avatar.jpg" alt="avatar">
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-card-subtitle>
                <p style="font-size: 18px">Muhammad Amirulhusni Mohd Radzi</p>
                <b>Junior Programmer</b>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="right">
              <v-card-subtitle>
                {{ contact.email }} <v-icon>mdi-email</v-icon><br>
                {{ contact.phone }} <v-icon>mdi-phone</v-icon><br>
                {{ contact.location }} <v-icon>mdi-map-marker</v-icon><br>
                {{ contact.web }} <v-icon>mdi-web</v-icon>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </div>
    
    <div>
      <v-col>
        <v-card>
          <v-card-title>About Me</v-card-title>

          <v-card-text>{{ profile.aboutMe }}</v-card-text>
        </v-card>
      </v-col>
      
      <v-col>
        <v-card>
          <v-card-title>Educations</v-card-title>
          
          <v-simple-table v-for="item in education" :key="item.id">
            <tbody>
              <tr>
                <td style="width: 250px">
                  <v-card-text>
                    <b>{{ item.place }}</b><br>
                    <i>{{ item.period }}</i>
                  </v-card-text>
                </td>
                <td>
                  <v-card-text>
                    <b>{{ item.course }}</b> ({{ item.result }})<br>
                    {{ item.description }}
                  </v-card-text>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Experiences</v-card-title>

          <v-simple-table v-for="item in experience" :key="item.id">
            <tbody>
              <tr>
                <td style="width: 250px">
                  <v-card-text>
                    <b>{{ item.place }}</b><br>
                    <i>{{ item.period }}</i>
                  </v-card-text>
                </td>
                <td>
                  <v-card-text>
                    <b>{{ item.position }}</b><br>
                    {{ item.description }}
                  </v-card-text>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Abilities</v-card-title>

          <v-card-title>Skills</v-card-title>
          <v-row>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.skills" :key="item.id">
                  <tr v-if="item.id % 2 === 1">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating 
                        :half-increment="halfIncrement"
                        :full-icon="rFull"
                        :half-icon="rHalf"
                        :empty-icon="rEmpty" 
                        dense 
                        readonly 
                        length="5" 
                        :value="item.rating">
                      </v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.skills" :key="item.id">
                  <tr v-if="item.id % 2 === 0">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating 
                        :half-increment="halfIncrement"
                        :full-icon="rFull"
                        :half-icon="rHalf"
                        :empty-icon="rEmpty" 
                        dense 
                        readonly 
                        length="5" 
                        :value="item.rating">
                      </v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>

          <v-card-title>Languages</v-card-title>
          <v-row>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.languages" :key="item.id">
                  <tr v-if="item.id % 2 === 1">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating 
                        :half-increment="halfIncrement"
                        :full-icon="rFull"
                        :half-icon="rHalf"
                        :empty-icon="rEmpty" 
                        dense 
                        readonly 
                        length="5" 
                        :value="item.rating">
                      </v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.languages" :key="item.id">
                  <tr v-if="item.id % 2 === 0">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating 
                        :half-increment="halfIncrement"
                        :full-icon="rFull"
                        :half-icon="rHalf"
                        :empty-icon="rEmpty" 
                        dense 
                        readonly 
                        length="5" 
                        :value="item.rating">
                      </v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>

        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Projects</v-card-title>
        </v-card>
      </v-col>
    </div>

    <v-col>
      <v-btn @click="debug">
        Debug Button
      </v-btn>
    </v-col>

    <v-overlay :value="overlay">
      <v-row>
        <v-col align="right">
          <v-button icon @click="overlay = false">
            <v-icon>mdi-close</v-icon>
          </v-button>
        </v-col>
      </v-row>
      <coursework></coursework>
    </v-overlay>
    

  </v-container>
</template>

<script>
  import Coursework from "../components/Coursework.vue"
  import Test from "../controller/test.js"

  export default {
    components: {
      'coursework': Coursework,
    },
    data: () => ({
      value: 25,
      rating: 3.5,
      overlay: false,
      test: Test,
      isMobile: false,
      xs: false,
      halfIncrement: true,
      rFull: "mdi-star",
      rHalf: "mdi-star-half-full",
      rEmpty: "mdi-star-outline",

      profile: {
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis lacus, auctor et sapien sit amet, tincidunt lacinia quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent blandit justo sit amet lacinia fermentum. Proin sit amet ex turpis. Cras sed ante quis ex vulputate convallis quis a nibh. Vivamus convallis mauris quis ullamcorper faucibus. Sed ex dui, scelerisque eu fermentum in, ornare et sapien. Donec ultrices rutrum orci. Mauris viverra eros et turpis interdum, at tempus odio molestie."
      },

      contact: {
        email: "ahusni96@gmail.com",
        phone: "+60149740203",
        web: "testing.com",
        location: "Bukit Mertajam, Penang"
      },

      education: [
        {
          id: 1,
          place: "Universiti Malaysia Pahang",
          course: "Bachelor in Computer Science (Software Engineering) with Honours",
          period: "Aug 2015 - Feb 2020",
          result: "CGPA: 2.95",
          description: "Lorem ipsum"
        },
        {
          id: 2,
          place: "Kolej Matrikulasi Selangor",
          course: "Computer Science",
          period: "Jun 2014 - May 2015",
          result: "CGPA: 2.99",
          description: "Lorem ipsum"
        },
        {
          id: 3,
          place: "SMK Tinggi Bukit Mertajam (SMKTBM)",
          course: "Computer Science",
          period: "2009 - 2013",
          result: "SPM: 5A 4B",
          description: "Lorem ipsum"
        }
      ],

      experience: [
        {
          id: 1,
          position: "Lab 4.0",
          place: "Universiti Malaysia Pahang",
          period: "Feb 2020 - March 2020",
          description: "Lorem ipsum",
        },
        {
          id: 2,
          position: "Intern Programmer",
          place: "Harkat Teknologi Sdn Bhd",
          period: "Sep 2019 - Feb 2020",
          description: "Lorem ipsum",
        },
        {
          id: 3,
          position: "Final Year Project",
          place: "Universiti Malaysia Pahang",
          period: "Sep 2018 - Aug 2019",
          description: "Lorem ipsum",
        }
      ],

      abilities: {
        skills: [
          {
            id: 1,
            what: "Python",
            rating: 4
          },
          {
            id: 2,
            what: "Javascript",
            rating: 4
          },
          {
            id: 3,
            what: "HTML(5)",
            rating: 4
          },
          {
            id: 5,
            what: "PHP",
            rating: 4
          },          
          {
            id: 6,
            what: "MySQL",
            rating: 4
          },
          {
            id: 7,
            what: "Node.js",
            rating: 4
          },
          {
            id: 8,
            what: "Vue.js",
            rating: 4
          },
          {
            id: 9,
            what: "NativeScript",
            rating: 4
          },
          {
            id: 4,
            what: "CSS(3)",
            rating: 3.5
          },
          {
            id: 10,
            what: "Android Studio",
            rating: 3
          },
          {
            id: 11,
            what: "C/C++",
            rating: 3
          },
          {
            id: 12,
            what: "C#",
            rating: 3
          },
          {
            id: 13,
            what: "Java",
            rating: 3
          },
          {
            id: 14,
            what: "Google Firebase",
            rating: 3
          },
        ],
        languages: [
          {
            id: 1,
            what: "Malay (Native)",
            rating: 5
          },
          {
            id: 2,
            what: "English (Fluent)",
            rating: 5
          },
          {
            id: 3,
            what: "Japanese (Super Beginner)",
            rating: 1
          }
        ]
      },
    }),
    mounted() {
      let bp = this.$vuetify.breakpoint
      this.checkMobile(bp)
    },
    methods: {
      debug() {
        let arrlen = this.abilities.skills.length

        console.log(arrlen)
      },
      checkMobile(bp) {
        this.isMobile = bp.mobile
      },
    },
  }
</script>