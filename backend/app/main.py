from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import crud

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/items")
def read_items():
    return crud.get_items()
