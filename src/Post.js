import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Status from './Status'
import './Post.css'
export default function Post(props) {


    let history = useHistory();
    const [listPost, setListPost] = useState([])
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [content, setContent] = useState('')
    const [listJob, setListJob] = useState([])
    const [job, setJob] = useState('')
    const submit = () => {
        let obj = {
            name,
            img,
            content,
            listJob
        }
        setName('')
        setImg('')
        setContent('')
        setListJob([])
        let newList = listPost
        newList.push(obj)
        props.addList(obj);
        console.log(listPost);
        setListPost([...newList])
        console.log(obj);
    }

    const goBack = () => {
        history.push('/status')
    }

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeImg = (event) => {
        setImg(event.target.value)
    }
    const changeContent = (event) => {
        setContent(event.target.value)
    }

    

    const addJob = () => {
        let objJob = (job)
        setJob('')
        let newListJob = listJob
        if (job) {
            if (job !== 'Chọn nghề nghiệp') {
                newListJob.push(objJob)
                setListJob([...listJob])
            }
            console.log(listJob)
        }
    }
    const changeJob = (event) => {
        setJob(event.target.value)
    }

    const renderJob = (item, index) => {
        return <li className='f' key={index}>
            {item}
        </li>
    }

    return (
        <div className='head'>
            <div className='a'>ĐĂNG BÀI MỚI</div>
            <br />
            <input className='b' type='text' value={name} onChange={changeName} placeholder='Người đăng bài' />
            <input className='b' type='text' value={img} onChange={changeImg} placeholder='Link ảnh' />
            <img className='c' src={img} width='300' height='200'></img>
            <input className='b d' type='text' value={content} onChange={changeContent} placeholder='Nội dung' />
            <select className='b e' name={job} onChange={changeJob} onClick={addJob} placeholder='Chọn nghề nghiệp'>
                <option>Chọn nghề nghiệp</option>
                <option>Giáo viên</option>
                <option>Kỹ sư xây dựng</option>
                <option>IT</option>
                <option>Lập trình viên</option>
                <option>Thợ sửa ống nước</option>
                <option>Công an</option>
                <option>Bộ đội</option>
                <option>Chủ tịch</option>
                <option>Trà xanh</option>
            </select>
            <ul className='f'>
                {listJob.map(renderJob)}
            </ul>
            <button className='b' onClick={submit}  >Đăng bài</button>
            <button className='b' onClick={goBack}>Trở về</button>
        </div>
    )
}
