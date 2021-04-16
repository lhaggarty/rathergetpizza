import React from 'react';
import '../../styles/floating-labels.css';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import { ABOUT_TITLE, ABOUT_TEXT, CONTACT_FORM } from '../../store/constants/ContactConstants';

class Contact extends React.Component {
	render() {
		return (
			<div className="about page vh-75">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-sm-10 col-md-10 py-4">
							<h4>{ABOUT_TITLE}</h4>
							<p>{ABOUT_TEXT}</p>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-sm-10 col-md-6 py-4">
							<ContactUsForm
								action={CONTACT_FORM.action}
								fields={CONTACT_FORM.fields}
								buttonClassName={'btn btn-info'}
								messages={CONTACT_FORM.messages}
								className="form"
								fieldParentClassName={'form-label-group'}
								fieldClassName={'form-control'}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
