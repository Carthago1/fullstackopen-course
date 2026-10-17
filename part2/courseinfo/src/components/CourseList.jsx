import Course from './Course'

const CourseList = ({ courses }) => (
    <div>
        <h1>{'Web development curriculum'}</h1>

        {courses.map((course) => (
            <Course
                key={course.id}
                course={course}
            />
        ))}
    </div>
)

export default CourseList
