export default function Contact () {
    return (
        <section className="contact-section">
            <div className="section-header">
                <h3>Get in Touch</h3>
                <p>Got a project idea or just feel like saying hi? I'd love to hear from you—let’s create something amazing together!</p>
            </div>

            <div className="contact-grid">
                <div className="info-card">
                    <h3>Contact Info</h3>

                    <div className="contact-item">
                        <p>Email</p>
                        <a>carlosbavon46@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <p>Phone</p>
                        <a>+254 (799) 657-824</a>
                    </div>

                    <div className="contact-item">
                        <p>Location</p>
                        <a>Nairobi, KENYA</a>
                    </div>

                    <div className="social-link">
                        <p>Reach Out To Me</p>
                        <a href="https://github.com/CarlosBavon" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/bavon-carlos-868775367/" target="_blank">LinkedIn</a>
                        <a href="https://x.com/heisbav" target="_blank">Twitter</a>
                    </div>
                </div>

                <div className="info-card">
                    <div className="info-card-content">
                        <h3>Send Message</h3>
                        <form id="contactForm">
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Name" required className="form-control"></input>
                            </div>

                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email" required className="form-control"></input>
                            </div>

                            <div className="form-group">
                                <input type="text" id="subject" name="subject" placeholder="Subject" required className="form-control"></input>
                            </div>

                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Your Message" required className="form-control"></textarea>
                            </div>

                            <button type="submit" id="submitBtn" className="message-btn">Send Message</button>

                            <div className="success-message" id="successMessage">
                                Message sent successfully! I'll get back to you later.
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}