import React from 'react'
import '../../css/cards/CoursePreview.css'

const CoursePreview = ({number, course, backgroundImage}) => {
    return (
        <div
            className="CoursePreview"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(96, 0, 222, 0.6) 30%, rgba(96, 0, 222, 0)) , url(${backgroundImage})`,
            }}
        >
            <h1>{number}</h1>
            <h2>{course}</h2>
        </div>
    );
}

export default CoursePreview
