from langchain_openai import ChatOpenAI

# Configure the connection to LocalAI
gemma_client = ChatOpenAI(
    # Points to your local WSL LocalAI container
    base_url="http://localhost:8080", 
    
    # This must perfectly match the filename/ID of your Gemma model inside your ./models folder
    model="gemma-4-E4B-it-Q4_K_M.gguf", 
    
    # LangChain requires a placeholder string even if LocalAI doesn't use API keys
    api_key="not-needed", 
    temperature=0.7,
    max_retries=3
)