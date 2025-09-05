import uvicorn
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


def get_template_path(filename: str):
    """Возвращает абсолютный путь к файлу шаблона"""
    return os.path.join(os.path.dirname(__file__), "..", "templates", filename)


@app.get("/")
async def root():
    return FileResponse(get_template_path("index.html"))


@app.get('/project1')
async def get_project1():
    return FileResponse(get_template_path("project1.html"))


@app.get('/project2')
async def get_project2():
    return FileResponse(get_template_path("project2.html"))


if __name__ == "__main__":
    try:
        uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
    except OSError as e:
        if e.errno == 10048:
            print("Порт 8000 занят. Попробуйте:")
            print("1. Другой порт: uvicorn main:app --port 8001")
            print("2. Закройте другие серверы")
