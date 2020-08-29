<template>
  <v-container>
    <v-simple-table v-for="semester in university" :key="semester.id">
      <thead>
        <tr>
          <th>
            Semester {{ semester.semester }} Session {{ semester.session }}
          </th>
        </tr>
        <tr>
          <th>Code</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Points</th>
          <th>Credit Hours</th>
          <th>Status</th>
        </tr>
      </thead>
      <thead v-for="course in semester.courses" :key="course.code">
        <tr>
          <td>{{ course.code }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.grade }}</td>
          <td>{{ course.points }}</td>
          <td>{{ course.credit }}</td>
          <td>{{ course.status }}</td>
        </tr>
      </thead>
    </v-simple-table>
  </v-container>
</template>

<script>
  module.exports = {
    data: () => ({
      university: 
      [
        {
          id: 1,
          semester: "1",
          session: "2015/2016",
          courses: 
          [
            {
              code: "BCC1032",
              name: "Application Development Workshop",
              grade: "B+",
              points: "3.33",
              credit: "2",
              status: "Pass"
            },
            {
              code: "BCC1031",
              name: "Application Development Workshop",
              grade: "B+",
              points: "3.33",
              credit: "2",
              status: "Pass"
            }
          ]
        },
        {
          id: 2,
          semester: "2",
          session: "2015/2016",
          courses: 
          [
            {
              code: "BCC1033",
              name: "Application Development Workshop",
              grade: "B+",
              points: "3.33",
              credit: "2",
              status: "Pass"
            }
          ]
        }
      ]
    })
  }
</script>