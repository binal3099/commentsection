import React, { useEffect, useState } from 'react'

const getData = () => {
    let data1 = JSON.parse(localStorage.getItem("data"));

    if (data1 != null) {
        return data1;
    }
    return [];
    //    console.log(data);
}

const getDelete = () => {
    let data1 = JSON.parse(localStorage.getItem("useDelete"));

    if (data1 != null) {
        return data1;
    }
    console.log("data1");
    return [];
}

// const sessionData = () =>{
//     let data1 = (sessionStorage.getItem("data"));
//     // console.log("session get", data1);
//     if(data1 !=  null){
//         return JSON.parse(data1);
//     }
//     return[];
// }
function CommentSection() {

    const [inputList, setinputList] = useState({
        fname: '',
        lname: '',
        cname: '',
        email: '',
        phn: ''
    });

    const [viewData, setviewData] = useState(getData());
    const [updateData, setUpdateData] = useState(false);
    const [upIndex, setupIndex] = useState(null);
    const [userDelete, setuserDelete] = useState(getDelete());
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

        if (updateData) {
            console.log("updateData >>>", upIndex);
            let newupdate = [...viewData];
            newupdate[upIndex] = inputList;

            setUpdateData(false)

            setviewData(newupdate);
            console.log("newupdate >>", newupdate);
        }
        else {
            let uid = Math.floor(Math.random() * 100)

            let name = ({ id: uid, ...inputList })
            console.log("uid", name);
            // console.log("name",name);
            // console.log("viewData",viewData);
            setviewData([...viewData, name]);
        }

        setinputList({
            fname: '',
            lname: '',
            cname: '',
            email: '',
            phn: ''
        });
    }

    const handleUpdate = (id, index) => {
        // console.log("id >>>",id);
        let myData = getData();
        // console.log("myData",myData);
        let newData = myData.filter((d) => {
            // console.log("d",d);
            return d.id == id;
        });
        console.log("newData >>>", newData);

        setinputList(newData[0]);
        setUpdateData(true);
        setupIndex(index);
    }

    const handleDelete = (id) => {
        let myData = getData();

        // console.log("mayData", myData);


        // let newDelete = myData.filter((d)=>{
        //     return d.id != id;
        // });
        // console.log("newDelete >>>",newDelete);
        // setviewData(newDelete);

        let newDelete = myData.filter((d) => {
            if (d.id == id) {
                setuserDelete([...userDelete, d])
            }
            else {
                return d.id != id;
            }
        });
        console.log("newDelete >>>", newDelete);
        setviewData(newDelete);
    }

    // localStorage main data
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(viewData))
        // console.log("data");
    }, [viewData]);

    // useEffect(()=>{
    //     sessionStorage.setItem("data",JSON.stringify(viewData));
    //     console.log("use effect");
    // },[viewData]);

    // delete data useeffect
    useEffect(() => {
        localStorage.setItem("useDelete", JSON.stringify(userDelete))
        console.log("use effect 2");
    }, [userDelete])

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
                        <div className="col-12 mb-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="ui d-flex">
                            {
                                viewData.length >= 1 ?
                                    viewData.map((d, index) => {
                                        // console.log(val);
                                        return (
                                            <>
                                                <div aria-live="polite" aria-atomic="true" className=" align-items-center">
                                                    <div className="toast me-4" role="alert" aria-live="assertive" aria-atomic="true">
                                                        <div className="toast-header">
                                                            <strong className="me-auto">
                                                                {
                                                                    d.fname + " " + d.lname
                                                                }
                                                            </strong>
                                                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                        </div>
                                                        <div className="toast-body">
                                                            <h4>
                                                                {
                                                                    "Email : " + d.email
                                                                }
                                                            </h4>
                                                            <h4>
                                                                {
                                                                    "Phone : " + d.phn
                                                                }
                                                            </h4>
                                                            <h4>
                                                                {
                                                                    "Course : " + d.cname
                                                                }
                                                            </h4>
                                                        </div>
                                                        <div className='btn1'>
                                                            <button className='btn btn-primary btn' onClick={(e) => handleUpdate(d.id, index)}>
                                                                Update
                                                            </button>
                                                            <button className='btn btn-danger' onClick={(e) => handleDelete(d.id)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentSection;