from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
        name="Seu Nome",
        role="Desenvolvedor Python",
        location="Brasil",
        stats={
            "experience": 3,
            "projects": 20,
            "clients": 15
        }
    )

if __name__ == '__main__':
    app.run(debug=True)