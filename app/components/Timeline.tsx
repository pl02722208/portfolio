'use client';

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaReact} from "react-icons/fa";

import experiencesJson from "@/content/work-experience.json"

export default function Timeline() {
  return (
    <VerticalTimeline>
      {experiencesJson.map((experience, index) => (
        <VerticalTimelineElement
          key={`${experience.title}-${experience.date}`}
          contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
          date={experience.date}
          iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<FaReact/>}
        >
          <h3 className="font-bold">{experience.title}</h3>
          <h4 className="font-bold">{experience.subTitle}</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}