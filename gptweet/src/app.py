from flask import Flask, jsonify
import sys
from utilities import util


app = Flask(__name__)

@app.route('/run-util', methods=['POST'])
def run_util():
    result = util.some_function()  # Call the function you want to run from util.py
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(port=5000)
