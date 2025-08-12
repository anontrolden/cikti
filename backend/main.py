from typing import Union
from typing import Annotated
from fastapi import FastAPI, Form

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/login/")
def login(name: Annotated[str, Form()], password: Annotated[str, Form()]):
    if name == "asd" and password == "123":
        return {"name": name}
    else:
        return {"hata": "şifre yanlış"}

