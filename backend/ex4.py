# avaliador de notas

# variáveis:
# nome do aluno
# nota 1
# nota 2 
# nota 3

# tirar a média da nota
# avaliar nota
# mostrar o boletim do aluno

nome = input('Qual o nome do aluno: ')
nota1 = float(input('Qual a primeira nota: '))
nota2 = float(input('Qual a segunda nota: '))
nota3 = float(input('Qual a terceira nota: '))

media = (nota1 + nota2 + nota3) / 3
aval = ''

if media == 10:
    aval = 'Excelente'

elif 7 <= media <= 10:
    aval = 'Muito bom'

elif (media >= 5) and (media <= 7):
    aval = 'Regular'

else: 
    aval = 'Ruim'

print('\n'*3)
print('--------------------------------------------')
print(f'Nome do Aluno: {nome}')
print(f'Primeira nota: {nota1}')
print(f'Segunda nota: {nota2}')
print(f'Terceira nota: {nota3}\n')
print(f'Média: {media}')
print(f'Avaliação: {aval}')
print('--------------------------------------------')