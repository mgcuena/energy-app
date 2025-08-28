from fastapi import FastAPI
from app import crud

app = FastAPI()

@app.get("/items")
def read_items():
    return crud.get_items()
