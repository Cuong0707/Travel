import ActionButtons from "../ActionButtons";

const NotificationStep = (props) => {

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };

    return (
        <div className="row d-flex ms-2 me-2">
            <div className="thank-you-message">Cảm ơn bạn đã đăng ký trở thành đối tác của chúng tôi. Chúng tôi sẽ
                liên hệ đến bạn sớm nhất có thể
            </div>
            <div className="d-flex justify-content-end mb-2 mt-3">
                <ActionButtons {...props} lastStep={handleLastStep} />
            </div>
        </div>
    );
};

export default NotificationStep