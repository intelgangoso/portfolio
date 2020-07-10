import React, { useRef, useState } from "react";
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import dynamic from 'next/dynamic';
import Editable from '@/components/shared/Editable';
import ImageUploading from 'react-images-uploading';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Pdf=dynamic(import ('react-to-pdf'),{ssr:false});
const isWindow = typeof window !== "undefined";
const ref = React.createRef();

const Resume = withAuth(() => {
    const inputRef = useRef();
    const textareaRef= useRef();
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [objective, setObjective] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const [interest1, setInterest1] = useState("");
    const [interest2, setInterest2] = useState("");
    const [interest3, setInterest3] = useState("");
    const [interest4, setInterest4] = useState("");
    const [interest5, setInterest5] = useState("");

    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [skill4, setSkill4] = useState("");
    const [skill5, setSkill5] = useState("");

    const [schoolYear1, setSchoolYear1] = useState("");
    const [schoolYear2, setSchoolYear2] = useState("");
    const [schoolYear3, setSchoolYear3] = useState("");
    const [course1, setCourse1] = useState("");
    const [course2, setCourse2] = useState("");
    const [course3, setCourse3] = useState("");
    const [schoolName1, setSchoolName1] = useState("");
    const [schoolName2, setSchoolName2] = useState("");
    const [schoolName3, setSchoolName3] = useState("");
    const [schoolPlace1, setSchoolPlace1] = useState("");
    const [schoolPlace2, setSchoolPlace2] = useState("");
    const [schoolPlace3, setSchoolPlace3] = useState("");

    const [workYear1, setWorkYear1] = useState("");
    const [workYear2, setWorkYear2] = useState("");
    const [workYear3, setWorkYear3] = useState("");
    const [jobTitle1, setJobTitle1] = useState("");
    const [jobTitle2, setJobTitle2] = useState("");
    const [jobTitle3, setJobTitle3] = useState("");
    const [companyName1, setCompanyName1] = useState("");
    const [companyName2, setCompanyName2] = useState("");
    const [companyName3, setCompanyName3] = useState("");
    const [workDescription1, setWorkDescription1] = useState("");
    const [workDescription2, setWorkDescription2] = useState("");
    const [workDescription3, setWorkDescription3] = useState("");

    const [referenceName1, setReferenceName1] = useState("");
    const [referenceName2, setReferenceName2] = useState("");
    const [referenceName3, setReferenceName3] = useState("");
    const [referenceJobTitle1, setReferenceJobTitle1] = useState("");
    const [referenceJobTitle2, setReferenceJobTitle2] = useState("");
    const [referenceJobTitle3, setReferenceJobTitle3] = useState("");
    const [referenceNumber1, setReferenceNumber1] = useState("");
    const [referenceNumber2, setReferenceNumber2] = useState("");
    const [referenceNumber3, setReferenceNumber3] = useState("");
    const [referenceEmail1, setReferenceEmail1] = useState("");
    const [referenceEmail2, setReferenceEmail2] = useState("");
    const [referenceEmail3, setReferenceEmail3] = useState("");

    const [progressBar1, setProgressBar1] = useState("");
    const [progressBar2, setProgressBar2] = useState("");
    const [progressBar3, setProgressBar3] = useState("");
    const [progressBar4, setProgressBar4] = useState("");
    const [progressBar5, setProgressBar5] = useState("");    

    const onChange = imageList => {
        // data for submit
        console.log(imageList);
    };

    return (
        <BaseLayout page="Resume">
            {
            isWindow &&
            <>
                <div className="mx-auto my-5 resume-page" style={{width: "795px"}}>
                    <Pdf targetRef={ref} filename="resume.pdf">
                        {({ toPdf }) => 
                            <div className="my-5 text-center">
                                <h2>
                                    Create your resume in just a few minutes
                                </h2>
                                <br />
                                <h6>
                                    Just click on the text you want to change and then click 'Generate' if you're finished to create your PDF file.
                                </h6>
                                <button className="btn btn-success mt-3" onClick={toPdf}>
                                    Generate
                                </button>
                            </div>
                        }
                    </Pdf>
                    <div ref={ref}>
                        <div className="card bg-none text-center rounded-0">
                            <div className="card-header bg-dark rounded-0">
                                <div className="row">
                                    <ImageUploading onChange={onChange}>
                                        {({ imageList, onImageUpload }) => (
                                            // write your building UI
                                            <div className="upload__image-wrapper m-auto col-md-4"> 
                                                {
                                                    imageList.map(image => ( 
                                                        <img key={image.key} onClick={onImageUpload} className="img-responsive rounded-circle border border-secondary" src={image.dataURL} alt="" width="100" />     
                                                    ))
                                                }
                                                {
                                                    !imageList.length && 
                                                    <img onClick={onImageUpload} className="img-responsive bg-light rounded-circle border border-secondary" src="/user.png" alt="" width="100" />
                                                }
                                            </div>
                                        )}
                                    </ImageUploading>
                                    <div className="col-md-8 d-inline-block m-auto">
                                        <h2 className="card-title text-light">
                                            <Editable
                                                text={name} 
                                                placeholder="Name"
                                                childRef={inputRef}
                                                type="input">
                                                    <input
                                                        ref={inputRef}
                                                        type="text"
                                                        name="name"
                                                        className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                        placeholder="Name"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}/>
                                            </Editable>
                                        </h2>
                                        <a href="#" className="btn btn-outline-light bg-none">
                                            <Editable
                                                text={job} 
                                                placeholder="Job"
                                                childRef={inputRef}
                                                type="input">
                                                    <input
                                                        ref={inputRef}
                                                        type="text"
                                                        name="job"
                                                        className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                        placeholder="Job"
                                                        value={job}
                                                        onChange={e => setJob(e.target.value)}/>
                                            </Editable>
                                        </a>
                                        <div className="card-text text-light mt-2">
                                            <Editable
                                                text={objective} 
                                                placeholder="Objective"
                                                childRef={textareaRef} type="textarea">
                                                    <textarea 
                                                        ref={textareaRef}
                                                        type="text"
                                                        name="objective"
                                                        className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                        placeholder="Objective"
                                                        value={objective}
                                                        rows="5"
                                                        onChange={e => setObjective(e.target.value)}/>
                                            </Editable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bg-none">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card bg-none">
                                            <div className="card-body bg-none details">
                                                <div className="row">
                                                    <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2">
                                                        <h4> <i className="fa fa-address-card mr-2" aria-hidden="true"></i> Contact     </h4>
                                                    </div>
                                                    <address className="col-md-12">
                                                        <strong className="pointer-default">Address</strong><br/>     
                                                        <Editable
                                                            text={address} 
                                                            placeholder="Address"
                                                            childRef={inputRef}
                                                            type="input">
                                                                <input
                                                                    ref={inputRef}
                                                                    type="text"
                                                                    name="address"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Address" 
                                                                    value={address} 
                                                                    onChange={e => setAddress(e.target.value)}/>
                                                        </Editable>
                                                    </address>
                                                    <address className="col-md-12">
                                                        <strong className="pointer-default">Mobile Number</strong><br/>     
                                                        <Editable
                                                            text={number} 
                                                            placeholder="Number"
                                                            childRef={inputRef}
                                                            type="input">
                                                                <input
                                                                    ref={inputRef}
                                                                    type="text"
                                                                    name="number"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Number"
                                                                    value={number}
                                                                    onChange={e => setNumber(e.target.value)}/>
                                                        </Editable>
                                                    </address>
                                                    <address className="col-md-12">
                                                        <strong className="pointer-default">Email</strong><br/>     
                                                        <a href="#">
                                                            <Editable
                                                                text={email} 
                                                                placeholder="Email"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    type="text"
                                                                    name="email"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Email"
                                                                    value={email}
                                                                    onChange={e => setEmail(e.target.value)}/>
                                                            </Editable>
                                                        </a>
                                                    </address>
                                                </div>
                                                <div className="row">
                                                    <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2 mt-3">
                                                        <h4> <i className="fa fa-heart mr-2" aria-hidden="true"></i> Interest     </h4>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <h6>
                                                            <Editable
                                                                text={interest1} 
                                                                placeholder="Interests"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    name="interest1"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Interests"
                                                                    value={interest1}
                                                                    onChange={e => setInterest1(e.target.value)}/>
                                                            </Editable>
                                                        </h6>
                                                        <h6>
                                                            <Editable
                                                                text={interest2} 
                                                                placeholder="Interests"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    name="interest2"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Interests"
                                                                    value={interest2}
                                                                    onChange={e => setInterest2(e.target.value)}/>
                                                            </Editable>
                                                        </h6>
                                                        <h6>
                                                            <Editable
                                                                text={interest3} 
                                                                placeholder="Interests"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    name="interest3"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Interests"
                                                                    value={interest3}
                                                                    onChange={e => setInterest3(e.target.value)}/>
                                                            </Editable>
                                                        </h6>
                                                        <h6>
                                                            <Editable
                                                                text={interest4} 
                                                                placeholder="Interests"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    name="interest4"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Interests"
                                                                    value={interest4}
                                                                    onChange={e => setInterest4(e.target.value)}/>
                                                            </Editable>
                                                        </h6>
                                                        <h6>
                                                            <Editable
                                                                text={interest5} 
                                                                placeholder="Interests"
                                                                childRef={inputRef}
                                                                type="input">
                                                                    <input
                                                                    ref={inputRef}
                                                                    name="interest5"
                                                                    className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                    placeholder="Interests"
                                                                    value={interest5}
                                                                    onChange={e => setInterest5(e.target.value)}/>
                                                            </Editable>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2 mt-3">
                                                        <h4> <i className="fa fa-cogs mr-2" aria-hidden="true"></i> Skills     </h4>
                                                    </div>
                                                    <div className="col-md-12 mt-2">
                                                        <div className="progress-wrapper">
                                                            <div className="progress-item">
                                                                <span className="progress-title">
                                                                    <Editable
                                                                        text={skill1} 
                                                                        placeholder="Skill"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="skill1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Skill"
                                                                                value={skill1}
                                                                                onChange={e => setSkill1(e.target.value)}/>
                                                                    </Editable>
                                                                </span>
                                                                <div className="position-relative">
                                                                    <Editable
                                                                        text={`${progressBar1 > 0 ? progressBar1 : '0'}%`}
                                                                        placeholder="0%"
                                                                        childRef={inputRef}
                                                                        type="input"
                                                                        className="position-absolute col-md-12 text-dark small">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="progressBar1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="0%"
                                                                                value={progressBar1}
                                                                                onChange={e => setProgressBar1(e.target.value)}/>
                                                                    </Editable>
                                                                    <ProgressBar className="mt-1" now={progressBar1} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-2">
                                                        <div className="progress-wrapper">
                                                            <div className="progress-item">
                                                                <span className="progress-title">
                                                                    <Editable
                                                                        text={skill2} 
                                                                        placeholder="Skill"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="skill2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Skill"
                                                                                value={skill2}
                                                                                onChange={e => setSkill2(e.target.value)}/>
                                                                    </Editable>
                                                                </span>
                                                                <div className="position-relative">
                                                                    <Editable
                                                                        text={`${progressBar2 > 0 ? progressBar2 : '0'}%`}
                                                                        placeholder="0%"
                                                                        childRef={inputRef}
                                                                        type="input"
                                                                        className="position-absolute col-md-12 text-dark small">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="progressBar2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="0%"
                                                                                value={progressBar2}
                                                                                onChange={e => setProgressBar2(e.target.value)}/>
                                                                    </Editable>
                                                                    <ProgressBar className="mt-1" now={progressBar2} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-2">
                                                        <div className="progress-wrapper">
                                                            <div className="progress-item">
                                                                <span className="progress-title">
                                                                    <Editable
                                                                        text={skill3} 
                                                                        placeholder="Skill"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="skill3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Skill"
                                                                                value={skill3}
                                                                                onChange={e => setSkill3(e.target.value)}/>
                                                                    </Editable>
                                                                </span>
                                                                <div className="position-relative">
                                                                    <Editable
                                                                        text={`${progressBar3 > 0 ? progressBar3 : '0'}%`}
                                                                        placeholder="0%"
                                                                        childRef={inputRef}
                                                                        type="input"
                                                                        className="position-absolute col-md-12 text-dark small">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="progressBar3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="0%"
                                                                                value={progressBar3}
                                                                                onChange={e => setProgressBar3(e.target.value)}/>
                                                                    </Editable>
                                                                    <ProgressBar className="mt-1" now={progressBar3} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-2">
                                                        <div className="progress-wrapper">
                                                            <div className="progress-item">
                                                                <span className="progress-title">
                                                                    <Editable
                                                                        text={skill4} 
                                                                        placeholder="Skill"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="skill4"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Skill"
                                                                                value={skill4}
                                                                                onChange={e => setSkill4(e.target.value)}/>
                                                                    </Editable>
                                                                </span>
                                                                <div className="position-relative">
                                                                    <Editable
                                                                        text={`${progressBar4 > 0 ? progressBar4 : '0'}%`}
                                                                        placeholder="0%"
                                                                        childRef={inputRef}
                                                                        type="input"
                                                                        className="position-absolute col-md-12 text-dark small">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="progressBar4"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="0%"
                                                                                value={progressBar4}
                                                                                onChange={e => setProgressBar4(e.target.value)}/>
                                                                    </Editable>
                                                                    <ProgressBar className="mt-1" now={progressBar4} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-2">
                                                        <div className="progress-wrapper">
                                                            <div className="progress-item">
                                                                <span className="progress-title">
                                                                    <Editable
                                                                        text={skill5} 
                                                                        placeholder="Skill"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="skill5"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Skill"
                                                                                value={skill5}
                                                                                onChange={e => setSkill5(e.target.value)}/>
                                                                    </Editable>
                                                                </span>
                                                                <div className="position-relative">
                                                                    <Editable
                                                                        text={`${progressBar5 > 0 ? progressBar5 : '0'}%`}
                                                                        placeholder="0%"
                                                                        childRef={inputRef}
                                                                        type="input"
                                                                        className="position-absolute col-md-12 text-dark small">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="progressBar5"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="0%"
                                                                                value={progressBar5}
                                                                                onChange={e => setProgressBar5(e.target.value)}/>
                                                                    </Editable>
                                                                    <ProgressBar className="mt-1" now={progressBar5} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card bg-none">
                                            <div className="card-body bg-none details">
                                                <div className="row mb-5">
                                                    <div className="col-md-12">
                                                        <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2">
                                                            <h4> <i className="fa fa-graduation-cap mr-2" aria-hidden="true"></i> Education </h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="col-md-4">
                                                            <small>
                                                                <Editable
                                                                    text={schoolYear1} 
                                                                    placeholder="Year Started - Year Ended"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolYear1"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Year Started - Year Ended"
                                                                            value={schoolYear1}
                                                                            onChange={e => setSchoolYear1(e.target.value)}/>
                                                                </Editable>
                                                            </small>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6>
                                                                <Editable
                                                                    text={course1} 
                                                                    placeholder="Course"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="course1"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Course"
                                                                            value={course1} 
                                                                            onChange={e => setCourse1(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <h6>
                                                                <Editable
                                                                    text={schoolName1} 
                                                                    placeholder="School"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolName1"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School"
                                                                            value={schoolName1}
                                                                            onChange={e => setSchoolName1(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <div>
                                                                <Editable
                                                                    text={schoolPlace1} 
                                                                    placeholder="School's Location"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolPlace1"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School's Location"
                                                                            value={schoolPlace1}
                                                                            onChange={e => setSchoolPlace1(e.target.value)}/>
                                                                </Editable>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="col-md-4">
                                                            <small>
                                                                <Editable
                                                                    text={schoolYear2} 
                                                                    placeholder="Year Started - Year Ended"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolYear2"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Year Started - Year Ended"
                                                                            value={schoolYear2}
                                                                            onChange={e => setSchoolYear2(e.target.value)}/>
                                                                </Editable>
                                                            </small>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6>
                                                                <Editable
                                                                    text={course2} 
                                                                    placeholder="Course"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="course2"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Course"
                                                                            value={course2} 
                                                                            onChange={e => setCourse2(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <h6>
                                                                <Editable
                                                                    text={schoolName2} 
                                                                    placeholder="School"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolName2"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School"
                                                                            value={schoolName2}
                                                                            onChange={e => setSchoolName2(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <div>
                                                                <Editable
                                                                    text={schoolPlace2} 
                                                                    placeholder="School's Location"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolPlace2"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School's Location"
                                                                            value={schoolPlace2}
                                                                            onChange={e => setSchoolPlace2(e.target.value)}/>
                                                                </Editable>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="col-md-4">
                                                            <small>
                                                                <Editable
                                                                    text={schoolYear3} 
                                                                    placeholder="Year Started - Year Ended"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolYear3"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Year Started - Year Ended"
                                                                            value={schoolYear3}
                                                                            onChange={e => setSchoolYear3(e.target.value)}/>
                                                                </Editable>
                                                            </small>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6>
                                                                <Editable
                                                                    text={course3} 
                                                                    placeholder="Course"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="course3"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="Course"
                                                                            value={course3} 
                                                                            onChange={e => setCourse3(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <h6>
                                                                <Editable
                                                                    text={schoolName3} 
                                                                    placeholder="School"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolName3"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School"
                                                                            value={schoolName3}
                                                                            onChange={e => setSchoolName3(e.target.value)}/>
                                                                </Editable>
                                                            </h6>
                                                            <div>
                                                                <Editable
                                                                    text={schoolPlace3} 
                                                                    placeholder="School's Location"
                                                                    childRef={inputRef}
                                                                    type="input">
                                                                        <input
                                                                            ref={inputRef}
                                                                            type="text"
                                                                            name="schoolPlace3"
                                                                            className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                            placeholder="School's Location"
                                                                            value={schoolPlace3}
                                                                            onChange={e => setSchoolPlace3(e.target.value)}/>
                                                                </Editable>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-5">
                                                    <div className="col-md-12">
                                                        <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2">
                                                            <h4> <i className="fa fa-briefcase mr-2" aria-hidden="true"></i> Work Experience </h4>
                                                        </div>
                                                    </div>
                                                    <div className="row col-md-12 mt-2">
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <h6>
                                                                    <Editable
                                                                        text={jobTitle1} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="jobTitle1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={jobTitle1}
                                                                                onChange={e => setJobTitle1(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <h6>
                                                                    <Editable
                                                                        text={companyName1} 
                                                                        placeholder="Company"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="companyName1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Company"
                                                                                value={companyName1}
                                                                                onChange={e => setCompanyName1(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <small>
                                                                    <Editable
                                                                        text={workYear1} 
                                                                        placeholder="Year Started - Year Ended"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workYear1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Year Started - Year Ended"
                                                                                value={workYear1}
                                                                                onChange={e => setWorkYear1(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div>
                                                                    <Editable
                                                                        text={workDescription1} 
                                                                        placeholder="Job Description"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workDescription1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Description"
                                                                                value={workDescription1}
                                                                                onChange={e => setWorkDescription1(e.target.value)}/>
                                                                    </Editable>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-md-12 mt-2">
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <h6>
                                                                    <Editable
                                                                        text={jobTitle2} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="jobTitle2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={jobTitle2}
                                                                                onChange={e => setJobTitle2(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <h6>
                                                                    <Editable
                                                                        text={companyName2} 
                                                                        placeholder="Company"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="companyName2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Company"
                                                                                value={companyName2}
                                                                                onChange={e => setCompanyName2(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <small>
                                                                    <Editable
                                                                        text={workYear2} 
                                                                        placeholder="Year Started - Year Ended"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workYear2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Year Started - Year Ended"
                                                                                value={workYear2}
                                                                                onChange={e => setWorkYear2(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div>
                                                                    <Editable
                                                                        text={workDescription2} 
                                                                        placeholder="Job Description"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workDescription2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Description"
                                                                                value={workDescription2}
                                                                                onChange={e => setWorkDescription2(e.target.value)}/>
                                                                    </Editable>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-md-12 mt-2">
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <h6>
                                                                    <Editable
                                                                        text={jobTitle3} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="jobTitle3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={jobTitle3}
                                                                                onChange={e => setJobTitle3(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <h6>
                                                                    <Editable
                                                                        text={companyName3} 
                                                                        placeholder="Company"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="companyName3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Company"
                                                                                value={companyName3}
                                                                                onChange={e => setCompanyName3(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="content-item row col-md-12 px-0 mx-0 text-left">
                                                            <div className="col-md-4">
                                                                <small>
                                                                    <Editable
                                                                        text={workYear3} 
                                                                        placeholder="Year Started - Year Ended"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workYear3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Year Started - Year Ended"
                                                                                value={workYear3}
                                                                                onChange={e => setWorkYear3(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div>
                                                                    <Editable
                                                                        text={workDescription3} 
                                                                        placeholder="Job Description"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="workDescription3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Description"
                                                                                value={workDescription3}
                                                                                onChange={e => setWorkDescription3(e.target.value)}/>
                                                                    </Editable>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="section-title pointer-default col-md-11 mx-auto border-bottom mb-2">
                                                            <h4> <i className="fa fa-user mr-2" aria-hidden="true"></i> Reference </h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceName1} 
                                                                        placeholder="Name"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceName1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Name"
                                                                                value={referenceName1}
                                                                                onChange={e => setReferenceName1(e.target.value)}/>
                                                                </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceNumber1} 
                                                                        placeholder="Contact Number"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceNumber1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Contact Number"
                                                                                value={referenceNumber1}
                                                                                onChange={e => setReferenceNumber1(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceJobTitle1} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceJobTitle1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={referenceJobTitle1}
                                                                                onChange={e => setReferenceJobTitle1(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceEmail1} 
                                                                        placeholder="Email Address"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceEmail1"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Email Address"
                                                                                value={referenceEmail1}
                                                                                onChange={e => setReferenceEmail1(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceName2} 
                                                                        placeholder="Name"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceName2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Name"
                                                                                value={referenceName2}
                                                                                onChange={e => setReferenceName2(e.target.value)}/>
                                                                </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceNumber2} 
                                                                        placeholder="Contact Number"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceNumber2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Contact Number"
                                                                                value={referenceNumber2}
                                                                                onChange={e => setReferenceNumber2(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceJobTitle2} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceJobTitle2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={referenceJobTitle2}
                                                                                onChange={e => setReferenceJobTitle2(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceEmail2} 
                                                                        placeholder="Email Address"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceEmail2"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Email Address"
                                                                                value={referenceEmail2}
                                                                                onChange={e => setReferenceEmail2(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-item row col-md-12 px-0 mx-0 text-left mt-2">
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceName3} 
                                                                        placeholder="Name"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceName3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Name"
                                                                                value={referenceName3}
                                                                                onChange={e => setReferenceName3(e.target.value)}/>
                                                                </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceNumber3} 
                                                                        placeholder="Contact Number"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceNumber3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Contact Number"
                                                                                value={referenceNumber3}
                                                                                onChange={e => setReferenceNumber3(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="row col-md-12">
                                                            <div className="col-md-7">
                                                                <h6>
                                                                    <Editable
                                                                        text={referenceJobTitle3} 
                                                                        placeholder="Job Title"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceJobTitle3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Job Title"
                                                                                value={referenceJobTitle3}
                                                                                onChange={e => setReferenceJobTitle3(e.target.value)}/>
                                                                    </Editable>
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <small>
                                                                    <Editable
                                                                        text={referenceEmail3} 
                                                                        placeholder="Email Address"
                                                                        childRef={inputRef}
                                                                        type="input">
                                                                            <input
                                                                                ref={inputRef}
                                                                                type="text"
                                                                                name="referenceEmail3"
                                                                                className="col-md-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                                                                                placeholder="Email Address"
                                                                                value={referenceEmail3}
                                                                                onChange={e => setReferenceEmail3(e.target.value)}/>
                                                                    </Editable>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-dark text-muted small">
                                <i className="fa fa-copyright mr-2" aria-hidden="true"></i>
                                Crystel Gangoso
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </BaseLayout>
    );
}, ['guest','admin']);

export default withApollo(Resume);