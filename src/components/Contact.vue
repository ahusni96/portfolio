<template>
  <v-container>
    <v-row dense>
      <v-col md="auto" align-self="center">
        <v-avatar size="100">
          <img src="../assets/default-avatar.jpg" alt="avatar">
        </v-avatar>
      </v-col>
      <v-col>
        <v-card-title>Muhammad Amirulhusni<br>Mohd Radzi</v-card-title>
        <v-card-subtitle>
          <b>Software Engineering Graduate</b>
        </v-card-subtitle>
      </v-col>
      <v-col align="right">
        <v-card-subtitle>
          {{ contact.email }} <v-icon>mdi-email</v-icon><br>
          {{ contact.phone }} <v-icon>mdi-phone</v-icon><br>
          {{ contact.web }} <v-icon>mdi-web</v-icon>
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-timeline dense align-top>
      <v-timeline-item>
        <v-card>
          <v-card-title>About Me</v-card-title>

          <v-card-text>{{ profile.aboutMe }}</v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item>
        <v-card>
          <v-card-title>Educations</v-card-title>
          
          <v-simple-table v-for="item in education" :key="item">
            <v-body>
              <tr>
                <td style="width: 250px">
                  <v-card-text>
                    <b>{{ item.place }}</b><br>
                    <i>{{ item.period }}</i>
                  </v-card-text>
                </td>
                <td>
                  <v-card-text>
                    <b>{{ item.course }}</b> ({{item.result}})<br>
                    {{ item.description }}
                  </v-card-text>
                </td>
              </tr>
            </v-body>
          </v-simple-table>
        </v-card>
      </v-timeline-item>

      <v-timeline-item>
        <v-card>
          <v-card-title>Experiences</v-card-title>

          <v-simple-table v-for="item in experience" :key="item">
            <v-body>
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
            </v-body>
          </v-simple-table>
        </v-card>
      </v-timeline-item>

      <v-timeline-item>
        <v-card>
          <v-card-title>Abilities</v-card-title>

          <v-card-title>Skills</v-card-title>
          <v-row>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.skills" :key="item">
                  <tr v-if="item.id % 2 === 1">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating dense readonly length="5" :value="item.rating"></v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.skills" :key="item">
                  <tr v-if="item.id % 2 === 0">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating dense readonly length="5" :value="item.rating"></v-rating>
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
                <tbody v-for="item in abilities.languages" :key="item">
                  <tr v-if="item.id % 2 === 1">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating dense readonly length="5" :value="item.rating"></v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col>
              <v-simple-table>
                <tbody v-for="item in abilities.languages" :key="item">
                  <tr v-if="item.id % 2 === 0">
                    <td style="width: 250px">{{ item.what }}</td>
                    <td class="text-center">
                      <v-rating dense readonly length="5" :value="item.rating"></v-rating>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>

        </v-card>
      </v-timeline-item>

      <v-timeline-item>
        <v-card>
          <v-card-title>Projects</v-card-title>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  module.exports = {
    data: () => ({
      value: 25,
      rating: 5,

      profile: {
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis lacus, auctor et sapien sit amet, tincidunt lacinia quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent blandit justo sit amet lacinia fermentum. Proin sit amet ex turpis. Cras sed ante quis ex vulputate convallis quis a nibh. Vivamus convallis mauris quis ullamcorper faucibus. Sed ex dui, scelerisque eu fermentum in, ornare et sapien. Donec ultrices rutrum orci. Mauris viverra eros et turpis interdum, at tempus odio molestie."
      },

      contact: {
        email: "ahusni96@gmail.com",
        phone: "+60149740203",
        web: "testing.com",
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
          position: "Intern Programmer",
          place: "Harkat Teknologi Sdn Bhd",
          period: "Sep 2019 - Feb 2020",
          description: "Lorem ipsum",
        }
      ],

      abilities: {
        skills: [
          {
            id: 1,
            what: "Python",
            rating: 5
          },
          {
            id: 2,
            what: "Javascript",
            rating: 4
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
            what: "Japanese (Beginner)",
            rating: 1
          }
        ]
      },
    }),
  }
</script>