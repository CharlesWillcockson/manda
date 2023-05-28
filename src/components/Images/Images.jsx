import './Images.css';

function Images() {
    return (
        <div className="row mx-2 mt-5">
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/firepit1.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/firepit2.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/firepit3.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/pool1.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/pool2.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card img-card">
                    <img src="/Images/walkway.jpeg" className='card-img' />
                    <div className="card-body"></div>
                </div>
            </div>
        </div>
    )
}

export default Images;