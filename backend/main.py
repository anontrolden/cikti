from typing import Union
from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/login/")
def login(name: Annotated[str, Form()], password: Annotated[str, Form()]):
    print(kullanicilar)
    if name not in kullanicilar:
        return "hata kullanici mevcut değil"
    if kullanicilar[name] == password:
        return "kullanici nevcut"
    else:
        return "sıfre hatali"

@app.get("/files")
def files():
    return ["1.txt","2.txt","3.txt","4.txt"]
    
kullanicilar = {"asd":"123"}
@app.post("/register/")
def login(name: Annotated[str, Form()], password: Annotated[str, Form()]):
    if name in kullanicilar:
        return "hata kullanici mevcut"
    kullanicilar[name] = password
    return {"kullanicilar": kullanicilar}