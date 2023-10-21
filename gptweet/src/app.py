from flask import Flask, jsonify
import sys
from utilities import util
from utilities import main


app = Flask(__name__)

@app.route('/run-util', methods=['POST'])
def run_util():
    result = util.some_function()  # Call the function you want to run from util.py
    return jsonify({"result": result})

@app.route('/run-main', methods=['POST'])
def run_main():
    import utilities.main  # This will execute all the top-level code in main.py
    return jsonify({"result": "main.py executed successfully"})


if __name__ == '__main__':
    app.run(port=5000)
