import React from 'react'
import { BsGithub } from "react-icons/bs"
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'

const SocialLinks = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
                <ul>
                    <li className='flex justify-between px-4 w-40 h-15 items-center
                     bg-slate-500 py-3 ml-[-100px] hover:ml-[-5px] duration-300 text-white
                     rounded-tr-md'>
                        <a href='https://github.com/abhishek24dogra' target='_blank' rel="noreferrer">GitHub</a><BsGithub size={25}/>
                    </li>

                    <li className='flex justify-between px-4 w-40 h-15 items-center
                     bg-slate-500 py-3 ml-[-100px] hover:ml-[-5px] duration-300 text-white
                     my-0.5'>
                        <a href='mailto:foo@gmail.com' target='_blank' rel="noreferrer">Email</a><AiOutlineMail size={25}/>
                    </li>

                    <li className='flex justify-between px-4 w-40 h-15 items-center
                     bg-slate-500 py-3 ml-[-100px] hover:ml-[-5px] duration-300 text-white
                     rounded-br'>
                        <a href='./Abhishek Dogra Resume2022.docx' download={true}>Resume</a><HiOutlineDocumentText size={25}/>
                    </li>
                </ul>
            
        </div>
    )
}

export default SocialLinks