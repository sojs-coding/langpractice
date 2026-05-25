from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Import your separated AI logic
from .langchain import run_standard_chat
from .langgraph import run_agent_graph

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatPayload(BaseModel):
    message: str

@app.post("/api/chat/langchain")
async def chat_langchain(payload: ChatPayload):
    # main.py just passes the message to chains.py and returns the result
    answer = run_standard_chat(payload.message)
    return {"response": answer}

@app.post("/api/chat/langgraph")
async def chat_langgraph(payload: ChatPayload):
    answer = run_agent_graph(payload.message)
    return {"response": answer}