from django.shortcuts import render, render_to_response, HttpResponseRedirect
from students.models import Career, Turn, AssignTurn
from django import forms
import datetime

def form(request):
	turn = Turn.objects.exclude(pk__in=AssignTurn.objects.all()).order_by('date', 'time')[0]
	return render(request, 'Main/form.html', {'careers': Career.objects.all(), 'turn': turn})

# def find(request): 
#     return render(request, 'find.html') 
 
def turns(request):
	avalaible_turns = Turn.objects.exclude(pk__in=AssignTurn.objects.all()).order_by('date', 'time')
	return render(request, 'Main/turns.html', {'turns': avalaible_turns})


def save_turn(request):	
	return HttpResponseRedirect('/home/')

def buscar(request): 
	if request.method == 'POST': 
		#return HttpResponse('post')
		search = name(request.POST)
		if search.is_valid():
			cd = search.cleaned_data
			q = cd['q']
			st = Student.objects.filter(first_name__icontains = q)
			return render(request, 'results.html',  {'students': st, 'query': q})
		else:
			return HttpResponse('post fail')
	if 'q' in request.GET and request.GET['q']:
		q = request.GET['q']
		st = Student.objects.filter(first_name__icontains = q)
		return render(request, 'results.html',  {'students': st, 'query': q})
	else: 
		return render(request, 'find.html', {'error': True}) 

def confirmation(request):
	if request.method == 'POST': 
		data = Form(request.POST)
		if data.is_valid():
			return HttpResponse(
				data.sex[int(data.cleaned_data['colorSexo']) - 1][1] + " " +
				data.color[int(data.cleaned_data['colorRadio']) - 1][1] + " " +
				data.ocupation[int(data.cleaned_data['ocupacionRadio']) - 1][1] + " " +
				data.vinculo[int(data.cleaned_data['vinculaRadio']) - 1][1] + " " +
				data.sector[int(data.cleaned_data['sectorRadio']) - 1][1])
		else:
			return render(request, 'test.html', {'form': data}) 

