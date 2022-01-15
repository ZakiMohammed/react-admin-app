import { useEffect } from 'react'

const Modal = ({ title, message, showModal, setShowModal }) => {

    useEffect(() => {
        if (showModal) {
            document.querySelector('html').classList.add('is-clipped')        
        } else {
            document.querySelector('html').classList.remove('is-clipped')
        }
    }, [showModal])

    const closeModal = () => setShowModal(false)

    return (
        <div className={'modal ' + (showModal ? 'is-active' : '') }>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h4 className='has-text-primary'>{title}</h4>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
    )
}

export default Modal
