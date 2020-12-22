const BottomNav = () => {
    return (
        <div className="navigation fixed-bottom d-flex justify-content-around align-items-center">
            <button className="btn bg-transparent">
                <i className="fas fa-user"></i>
            </button>
            <button className="btn bg-transparent">
                <i className="fas fa-comment"></i>
            </button>
            <button className="btn bg-transparent">
                <i className="fas fa-cog"></i>
            </button>
        </div>
    );
}

export default BottomNav;