import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
import { MdDescription, MdMosque, MdPinDrop, MdLockClock } from 'react-icons/md'
import PartnerStep from './Step/PartnerStep'
import ServiceStep from './Step/ServiceStep'
import CompanyStep from './Step/CompanyStep'
import NotificationStep from './Step/NotificationStep'

const Sample = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [formState, setFormState] = useState({
        partner: {},
        company: {},
        service: []
    })

    const handleFormSateChange = (key, value) => {
        setFormState((prev) => {
            return { ...prev, [key]: value }
        })
    }
    const nextStep = () => {
        setActiveStep((prev) => prev + 1)
    }

    const handleSubmit = () => {
        console.log(formState)
    }

    return (
        <>
            <div className='stepper pyro my-3'>
                <div className='before'></div>
                <div className='after'></div>
                <div className='homeStepper'>
                    <h1 className='text-center fs-3 fw-bold text-uppercase text-white bouncing-text'>
                        Trở thành đối tác của chúng tôi
                    </h1>

                    <div className='mt-5 m-auto card w-75'>
                        <Stepper className='fs-4' activeStep={activeStep}>
                            <Step
                                onClick={() => {
                                    setActiveStep(0)
                                }}
                                label='Thông Tin Đối Tác'
                                children={<MdDescription />}
                            />
                            <Step
                                onClick={() => {
                                    setActiveStep(1)
                                }}
                                label='Thông Tin Doanh Nghiệp'
                                children={<MdPinDrop />}
                            />
                            <Step
                                onClick={() => {
                                    setActiveStep(2)
                                }}
                                label='Thông Tin Các Dịch Vụ'
                                children={<MdMosque />}
                            />
                            <Step label='Kết Thúc' children={<MdLockClock />} />
                        </Stepper>
                        {activeStep === 0 && <PartnerStep handleChange={handleFormSateChange} onNextStep={nextStep} />}
                        {activeStep === 1 && <CompanyStep handleChange={handleFormSateChange} onNextStep={nextStep} />}
                        {activeStep === 2 && (
                            <ServiceStep handleChange={handleFormSateChange} onSubmit={handleSubmit} />
                        )}
                        {activeStep === 3 && (
                            <NotificationStep handleChange={handleFormSateChange} onNextStep={nextStep} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sample
