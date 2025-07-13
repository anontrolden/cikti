run:
	cd backend && fastapi run main.py 
	cd frontend && npm run dev -- --host 0.0.0.0
	

install:
	cd backend && pip install -r requirements.txt --break-system-packages
	. "$$HOME/.nvm/nvm.sh" && nvm install 22
	. "$$HOME/.nvm/nvm.sh" && cd frontend && npm install