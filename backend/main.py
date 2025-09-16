from typing import Union
from typing import Annotated
from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

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
    if name not in kullanicilar:
        raise HTTPException(status_code=400, detail="Kullanıcı mevcut değil")
    if kullanicilar[name] == password:
        return "kullanici mevcut"
    else:
        raise HTTPException(status_code=400, detail="Şifre hatalı")

@app.get("/files")
def files():
    return ["1.txt","2.txt","3.txt","4.txt"]

@app.post("/uploadfile")
def login(dosya: Annotated[str, UploadFile]):
    print(dosya)
    return {}
    
kullanicilar = {"asd":"123"}
@app.post("/register/")
def login(name: Annotated[str, Form()], password: Annotated[str, Form()]):
    if name in kullanicilar:
        raise HTTPException(status_code=400, detail="Kullanıcı zaten mevcut")
    kullanicilar[name] = password
    return 
