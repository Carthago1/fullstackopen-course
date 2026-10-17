import Part from './Part'

const Course = ({ course }) => {
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)

    return (
        <div>
            <h2>{course.name}</h2>

            {course.parts.map((part) => (
                <Part
                    key={part.id}
                    part={part}
                />
            ))}

            <h4>{'total of'} {total} {'exercises'}</h4>
        </div>
    )
}

export default Course
