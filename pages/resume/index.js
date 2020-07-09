import React, { useRef, useState } from "react";
import BaseLayout from '@/layouts/BaseLayout';
import dynamic from 'next/dynamic';
import Editable from "@/components/shared/Editable";

const Pdf=dynamic(import ('react-to-pdf'),{ssr:false});
const isWindow = typeof window !== "undefined";
const ref = React.createRef();

export default function Resume() {   
    const inputRef = useRef();
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [objective, setObjective] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("");
    const [skill, setSkill] = useState("");
    const [schoolYear, setSchoolYear] = useState("");
    const [course, setCourse] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolPlace, setSchoolPlace] = useState("");
    const [workYear, setWorkYear] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [workName, setWorkName] = useState("");
    const [workPlace, setWorkPlace] = useState("");

    return (
        <BaseLayout>
        {
            isWindow &&
            <div className="mx-auto" style={{width: "795px"}}>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>

                    <div className="card pointer-none text-center">
                        <div className="card-header">
                            <div className="row">
                                <img src="/crystel.png" className="img-responsive col-md-3 rounded-circle" alt="" />
                                <div className="col-md-9">
                                    <h2 className="card-title">
                                        <Editable
                                            text={name}
                                            placeholder="Your Name"
                                            childRef={inputRef}
                                            type="input"
                                        >
                                            <input
                                            ref={inputRef}
                                            type="text"
                                            name="name"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            />
                                        </Editable>
                                    </h2>
                                    <a href="#" className="btn btn-dark">
                                        <Editable
                                            text={job}
                                            placeholder="Your Job"
                                            childRef={inputRef}
                                            type="input"
                                        >
                                            <input
                                            ref={inputRef}
                                            type="text"
                                            name="job"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                            placeholder="Your Job"
                                            value={job}
                                            onChange={e => setJob(e.target.value)}
                                            />
                                        </Editable>
                                    </a>
                                    <p className="card-text mt-2">
                                        <Editable
                                            text={objective}
                                            placeholder="Your Objective"
                                            childRef={inputRef}
                                            type="input"
                                        >
                                            <input
                                            ref={inputRef}
                                            type="text"
                                            name="objective"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                            placeholder="Your Objective"
                                            value={objective}
                                            onChange={e => setObjective(e.target.value)}
                                            />
                                        </Editable>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pointer-none">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card pointer-none">
                                        <div className="card-body pointer-none">
                                            <div className="row">
                                                <div className="section-title col-md-9 mx-auto border-bottom mb-2">
                                                    <h4>
                                                        <i className="fa fa-address-card mr-2" aria-hidden="true"></i>
                                                        Contact
                                                    </h4>
                                                </div>
                                                <address className="col-md-12">
                                                    <strong>Address</strong><br/>
                                                    <Editable
                                                        text={address}
                                                        placeholder="Your Address"
                                                        childRef={inputRef}
                                                        type="input"
                                                    >
                                                        <input
                                                        ref={inputRef}
                                                        type="text"
                                                        name="address"
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                        placeholder="Your Address"
                                                        value={address}
                                                        onChange={e => setAddress(e.target.value)}
                                                        />
                                                    </Editable>
                                                </address>
                                                <address className="col-md-12">
                                                    <strong>Mobile Number</strong><br/>
                                                    <Editable
                                                        text={number}
                                                        placeholder="Your Number"
                                                        childRef={inputRef}
                                                        type="input"
                                                    >
                                                        <input
                                                        ref={inputRef}
                                                        type="text"
                                                        name="number"
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                        placeholder="Your Number"
                                                        value={number}
                                                        onChange={e => setNumber(e.target.value)}
                                                        />
                                                    </Editable>
                                                </address>
                                                <address className="col-md-12">
                                                    <strong>Email</strong><br/>
                                                    <a href="#">
                                                    <Editable
                                                        text={email}
                                                        placeholder="Your Email"
                                                        childRef={inputRef}
                                                        type="input"
                                                    >
                                                        <input
                                                        ref={inputRef}
                                                        type="text"
                                                        name="email"
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                        placeholder="Your Email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        />
                                                    </Editable>
                                                    </a>
                                                </address>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="section-title col-md-9 mx-auto border-bottom mb-2">
                                                    <h4>Interest</h4>
                                                </div>
                                                <div className="content-item col-md-12">
                                                    <h5>
                                                    <Editable
                                                        text={interest}
                                                        placeholder="Your Interests"
                                                        childRef={inputRef}
                                                        type="input"
                                                    >
                                                        <input
                                                        ref={inputRef}
                                                        name="interest"
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                        placeholder="Your Interests"
                                                        value={interest}
                                                        onChange={e => setInterest(e.target.value)}
                                                        />
                                                    </Editable>
                                                    </h5>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="section-title col-md-9 mx-auto border-bottom mb-2">
                                                        <h4>Skills</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="progress-wrapper">
                                                        <div className="progress-item">
                                                            <span className="progress-title">
                                                            <Editable
                                                                text={skill}
                                                                placeholder="Your Skill"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="skill"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Your Skill"
                                                                value={skill}
                                                                onChange={e => setSkill(e.target.value)}
                                                                />
                                                            </Editable>
                                                            </span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"><span className="progress-percent"> 62%</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card pointer-none">
                                        <div className="card-body pointer-none">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="section-title col-md-9 mx-auto border-bottom mb-2">
                                                        <h4>Education</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="content-item">
                                                        <small>
                                                            <Editable
                                                                text={schoolYear}
                                                                placeholder="Year Started - Year Ended"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="schoolYear"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Year Started - Year Ended"
                                                                value={schoolYear}
                                                                onChange={e => setSchoolYear(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </small>
                                                        <h5>
                                                            <Editable
                                                                text={course}
                                                                placeholder="Your Course"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="course"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Your Course"
                                                                value={course}
                                                                onChange={e => setCourse(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </h5>
                                                        <h6>
                                                            <Editable
                                                                text={schoolName}
                                                                placeholder="Your School"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="schoolName"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Your School"
                                                                value={schoolName}
                                                                onChange={e => setSchoolName(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </h6>
                                                        <p>
                                                            <Editable
                                                                text={schoolPlace}
                                                                placeholder="School's Location"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="schoolPlace"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="School's Location"
                                                                value={schoolPlace}
                                                                onChange={e => setSchoolPlace(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-md-12">
                                                    <div className="section-title col-md-9 mx-auto border-bottom mb-2">
                                                        <h4>Work Experience</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="content-item">
                                                        <small>
                                                            <Editable
                                                                text={workYear}
                                                                placeholder="Year Started - Year Ended"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="workYear"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Year Started - Year Ended"
                                                                value={workYear}
                                                                onChange={e => setWorkYear(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </small>
                                                        <h5>
                                                            <Editable
                                                                text={jobTitle}
                                                                placeholder="Your Job Title"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="jobTitle"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Your Job Title"
                                                                value={jobTitle}
                                                                onChange={e => setJobTitle(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </h5>
                                                        <h6>
                                                        <Editable
                                                                text={workName}
                                                                placeholder="Your Company"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="workName"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Your Company"
                                                                value={workName}
                                                                onChange={e => setWorkName(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </h6>
                                                        <p>
                                                            <Editable
                                                                text={workPlace}
                                                                placeholder="Company's Location"
                                                                childRef={inputRef}
                                                                type="input"
                                                            >
                                                                <input
                                                                ref={inputRef}
                                                                type="text"
                                                                name="workPlace"
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                                                placeholder="Company's Location"
                                                                value={workPlace}
                                                                onChange={e => setWorkPlace(e.target.value)}
                                                                />
                                                            </Editable>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            (c) Crystel Gangoso
                        </div>
                    </div>

                </div>
            </div>
        }
        </BaseLayout>
      );
}
