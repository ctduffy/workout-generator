from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def root():
    return 'Welcome to the Flask API!'

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/do_something', methods=['POST'])
def do_something():
    # Perform your desired action here
    result = {'message': 'Action performed on the server'}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
