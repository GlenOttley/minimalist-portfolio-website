from flask import Flask, request
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app)

app.config['MAIL_SERVER'] ='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'glenottley@gmail.com'
app.config['MAIL_PASSWORD'] = 'jprcuadwfxnvazmc'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route('/submit', methods=['POST'])
def submit():
	data = request.get_json()

	msg = Message(
		'Contact form submission', 
		sender=data['data']['email'], 
		recipients=['glenottley@gmail.com'])

	msg.body = f"""Email: {data['data']['email']} \n Name: {data['data']['name']} \n Message: {data['data']['message']}"""
	
	mail.send(msg)
	return 'success', 201


if __name__ == '__main__':
	app.run(debug=True)