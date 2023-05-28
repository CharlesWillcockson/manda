function Quote() {
    return (
        <div>
            <div className="h1 mt-5 d-flex justify-content-center">Request a Quote</div>
            <div className="d-flex justify-content-center">
            <div className="card w-50 mt-5 mb-5 quote-card">
                <div className="card-title h3 m-4">
                    Enter your information to get a quote from us
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row m-5">  
                            <div className="col-6 mb-4">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" />
                            </div>
                            <div className="col-6 mb-4">
                                <label htmlFor="email">Email address</label>
                                <input type="text" id="email" className="form-control" />
                            </div>
                            <div className="col-6 mb-4">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" id="phone" className="form-control" />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="name">Describe the work you need done</label>
                                <textarea className="form-control" rows="8" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-primary me-5">Submit for quote</button>
                        </div>
                    </form>
                    <div className="h4 mt-5 quote-info">We will receive your information through an email and reply in a timely manner.  Thank you for considering us for your project.</div>
                </div>
            </div> 
            </div> 
        </div>
    )
}

export default Quote;