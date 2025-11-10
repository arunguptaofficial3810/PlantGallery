'use client'
import React, { useState } from 'react'
import style from './style.module.scss'

type ModalProps = {
    isRegister?: boolean
    onClose?: () => void
}

const Modal = ({isRegister = false, onClose}: ModalProps) => {
    const [isVisible, setIsVisible] = useState(true)
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        cpassword: '',
    })

    const handleChange = (value: string, type: string) => {
        if(type === "email"){
            setFormValue(prev => ({...prev, email: value}))
        } else if(type === "password"){
            setFormValue(prev => ({...prev, password: value}))
        } else {
            setFormValue(prev => ({...prev, cpassword: value}))
        }
    }

    const handleClose = () => {
        setIsVisible(false)
        onClose?.()
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isRegister && formValue.password !== formValue.cpassword) {
            alert('Passwords do not match')
            return
        }
        handleClose()
    }

  return isVisible && (
    <div className={style.modalWrapper}>
        <form onSubmit={handleSubmit} className={style.modal}>
            <button className={style.closeButton} type="button" onClick={handleClose} aria-label="Close modal">×</button>
            <div className={style.formGroup}>
            <label className={style.label}>Email</label>
            <input className={style.input} placeholder='enter your mail id' type='email' value={formValue.email} onChange={(e)=>handleChange(e.target.value,'email')} required />
            </div>
            <div className={style.formGroup}>
            <label className={style.label}>Password</label>
            <input className={style.input} placeholder='enter your password' type='password' value={formValue.password} onChange={(e)=>handleChange(e.target.value,'password')} required />
            </div>
            {isRegister && <div className={style.formGroup}>
            <label className={style.label}>Confirm Password</label>
            <input className={style.input} placeholder='enter your password' type='password' value={formValue.cpassword} onChange={(e)=>handleChange(e.target.value,'cpassword')} required />
            </div>}
            <button className={style.submitButton} type="submit">{isRegister ? 'Register' : 'Login'}</button>
            <div className={style.other}>
                <span>Register</span>
                <span>Forgot Password</span>
            </div>
        </form>
    </div>
  )
}

export default Modal