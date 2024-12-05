from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.


from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer, ChatterBotCorpusTrainer

bot = ChatBot('chatbot', read_only=False,
              logic_adapters=[
                  {
                      'import_path': 'chatterbot.logic.BestMatch',
                      #'default_response': 'Sorry, I dont Know what that means',  # Adicionei a vírgula aqui
                      #'maximum_similarity_threshold': 0.95
                  }
              ])



list_to_train = [

"hi",
"hi, there",
"what's your name?",
"I am a chatbot for food",
"What's your favorite food?",
"I like everthing"

]

chatterbotCorpusTrainer = ChatterBotCorpusTrainer(bot)


#list_trainer = ListTrainer(bot)
#list_trainer.train(list_to_train)
chatterbotCorpusTrainer.train('chatterbot.corpus.portuguese')




def index(request):
    return render(request,'blog/index.html')

def specific(request):
    return HttpResponse("list1")

def getResponse(request):
    userMessage = request.GET.get('userMessage')
    chatResponse = str(bot.get_response(userMessage))
    return HttpResponse(chatResponse)