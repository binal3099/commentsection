import React, { useEffect, useState } from 'react'

// const getData = () =>{
//     let data1 = JSON.parse(localStorage.getItem("data"));

//     if(data1 != null){
//         return data1;
//     }
//     return [];
// //    console.log(data);
// }

// const sessionData = () =>{
//     let data1 = (sessionStorage.getItem("data"));
//     // console.log("session get", data1);
//     if(data1 !=  null){
//         return JSON.parse(data1);
//     }
//     return[];
// }

function FormSection() {

    const [inputList, setinputList] = useState({
        fname: '',
        lname: '',
        cname: '',
        email: '',
        phn: ''
    });

    const [viewData, setviewData] = useState([]);
    // console.log("data",data);


    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value })
        // console.log("name",name);
    }
    const hndleSubmit = (e) => {
        e.preventDefault();
        // console.log("click");

        let name = inputList
        // console.log("name",name);
        setviewData([...viewData, name]);

        setinputList({
            fname: '',
            lname: '',
            cname: '',
            email: '',
            phn: ''
        });
    }


    // useEffect(()=>{
    //     sessionStorage.setItem("data",JSON.stringify(viewData));
    //     console.log("use effect");
    // },[viewData]);

    // useEffect(()=>{
    //     localStorage.setItem("data", JSON.stringify(viewData))
    //     // console.log("data");
    // },[viewData]);

    return (
        <>
            <div className='bg'>
                <div className='container'>
                    <h1>
                        Comment Section
                    </h1>
                    <form className="row g-3" onSubmit={hndleSubmit}>
                        <div className='col-md-6'>
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name='fname' value={inputList.fname} onChange={handlechange} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lname' value={inputList.lname} onChange={handlechange} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={inputList.email} onChange={handlechange} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Mobile No.</label>
                            <input type="text" className="form-control" name='phn' value={inputList.phn} onChange={handlechange} />
                        </div>
                        <div className="comment col-md-6">
                            <label className="form-label">course</label>
                            <textarea className="form-control" name='cname' value={inputList.cname} onChange={handlechange}></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <div className="row">
                        {/* {
                        viewData.length >= 1 ?
                            viewData.map((d) => {
                                console.log(val);
                                return (
                                    <>
                                        
                                    </>
                                )
                            })
                        : ""
                    } */}
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No.</th>
                                    <th scope="col">Course</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>985743943</td>
                                    <td>React Js</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSection;