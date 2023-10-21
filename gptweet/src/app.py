from flask import Flask, jsonify
import sys
sys.path.append('./src/utilities')
import util
from flask_cors import CORS


app = Flask(__name__)

@app.route('/run-util', methods=['POST'])
def run_util():
    result = util.some_function()  # Call the function you want to run from util.py
    return jsonify({"result": result})
    CORS(app)
if __name__ == '__main__':
    app.run(port=5000)
